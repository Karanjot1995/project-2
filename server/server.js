import path from 'path'
import fs from 'fs'
import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { StaticRouter, Switch, Route } from 'react-router-dom';
import reducer from '../src/components/reducers/reducer'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
// import { BrowserRouter } from 'react-router-dom';
import App from '../src/App'



const PORT = 8081


const router = express.Router()

const app = express();


// app.use(express.urlencoded());
// app.use('/images', express.static(__dirname + "/assets/images"))


const serverRenderer = (req, res, next) => {
  console.log(req.url)
  const context = {};

  const store = createStore(reducer)


 


  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (typeof window === 'undefined') {
      global.window = {}
    }

    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <React.StrictMode>
            <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
              <App />
            </Provider>
            </StaticRouter>
          </React.StrictMode>
        )}</div>`
      )
    )
  })
}

// Serve built files with static files middleware


app.get('/', serverRenderer)


app.use(express.static(path.resolve(__dirname, '..', 'build')))

// console.log(path.resolve(__dirname, './assets/images'))

// app.get("/api", (req,res)=>console.log('hi'));


// app.get('/api', async function(req,res){
//   console.log("hi")
// })

// console.log(__dirname, path.resolve('./'))

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
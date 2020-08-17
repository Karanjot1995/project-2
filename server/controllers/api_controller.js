import axios from 'axios'
module.exports.apiController =  function(req , res){
  let response = axios.get('https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories')
  .then(response=>console.log(response.data))
  // let data =  response.json()
  console.log(response)
  res.send(response)
}
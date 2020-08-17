export const NAVDATA = "NAVDATA"
export const FORMDATA = 'FORMDATA'


export function navdata(data) {
  return {
    type: NAVDATA,
    payload: data
  }
}

export function formdata(data) {
  return {
    type: FORMDATA,
    payload: data
  }
}

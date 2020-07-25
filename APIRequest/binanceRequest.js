const config = require('./config')



const baseEndPoint = config.baseEndPoint
const service = config.service
const request = config.request



function doRequestString() {
    let queryString = '?';
    for(const property in request) {
        queryString += `${property}=${request[property]}&`
    }
    queryString = queryString.slice(0, -1)
    return `${baseEndPoint}${service}${queryString}`
}



module.exports = doRequestString
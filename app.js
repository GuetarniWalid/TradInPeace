const axios = require('axios')
const request = require('./APIRequest/binanceRequest')()
const server = require('express')()
const cors = require('cors')


//Middleware
server.use(cors())




server.get('/', (req, res) => {
    axios.get(request)
    .then(response => res.send(response.data))
    .catch(error => console.log(error))
})



server.listen(5500)




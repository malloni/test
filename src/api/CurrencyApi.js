import Axios from 'axios'
const baseURL = 'https://economia.awesomeapi.com.br/'
const timeout = 10000

const http = Axios.create({ baseURL, timeout })

export const GetBRLToUSD = () => http.request({
    method: 'get',
    url: 'all/USD-BRL'
})

const config = {
    baseEndPoint: 'https://api.binance.com',
    service: '/api/v3/klines',
    request: {
        symbol: 'LTCBTC',
        interval: '1h',
        limit: 3
    }
}

module.exports = config;
// const fetch = require('node-fetch')

const getPeople = (fetch) => {
    const URL = 'https://swapi.dev/api/people'
    return fetch(URL)
        .then(res => res.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        }).catch(err => err)
}

const isCity = (city, db) => {
    return db.includes(city)
}

module.exports = {getPeople, isCity}
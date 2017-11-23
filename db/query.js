const db = require('./connection')

getAllCompanies = () => {
    return db('users')
}

postUser = body => {
    return db('users').insert({
        firstname: body.firstname,
        lastname: body.lastname,
        company: body.company,
        description: body.description
    })
}

module.exports = {
    getAllCompanies,
    postUser
}
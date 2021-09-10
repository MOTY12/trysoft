const Sequelize = require('sequelize')
const db = require('../config/database')

const Question = db.define('question', {
    description: {
        type: Sequelize.STRING
    },
    answer: [{
        text: {
            type: Sequelize.STRING
        },
        isCorrect: {
            type: Sequelize.BOOLEAN
        }
    }]
})


Question.sync().then(() => {
    console.log('table created')
})

module.exports = Question;
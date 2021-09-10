const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Question = require('../model/question')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


router.post('/questionCOPY', async(req, res) => {
    try {
        const { description } = req.body
            // const { alternatives } = req.body

        const { cat } = req.body

        const question = await Question.create({
            description,
            cat
            // alternatives
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

router.get('/questionCOPY', async(req, res) => {
    try {
        // const questions = await Question.findAll()
        Question.findAll().then((questions) => {
            return res.status(200).send(questions)
        }).catch((err) => {
            return res.send(err)
        })
    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})


router.get('/questions/:id', async(req, res) => {
    try {
        const idS = req.params.id

        const question = await Question.findOne({
            where: { id: idS }
        })
        if (!question) {
            return res.status(404).json({})
        } else {
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})



module.exports = router
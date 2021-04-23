const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

const JWT_SECRET = config.get('jwtSecret')

// '/api/auth/register'
router.post(
    '/register', 
    [
        check('email', 'incorrect email').isEmail(),
        check('password', 'need more than 6 symbols').isLength({min: 6})
    ],
    async (req, res) => {
        console.log(req.body)
        try{
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'incorrect data'
                })
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if(candidate){
                return res.status(400).json({message: 'this user is already exist'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({email, password: hashedPassword})

            await user.save()

            res.status(201).json({message: 'user is created'})
        } catch(e){
            res.status(500).json({message: 'something goes wrong'})
        }
    }
)


// '/api/auth/login'
router.post(
    '/login', 
    [
        check('email', 'enter correct email').normalizeEmail().isEmail(),
        check('password', 'enter password').exists()
    ],
    async (req, res) => {
        try{
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'incorrect data on start'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({email})

            if(!user){
                return res.status(400).json({message: 'user is not find'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                return res.status(400).json({message: 'incorrect password'})
            }

            const token = jwt.sign(
                { userId: user.id },
                JWT_SECRET,
                { expiresIn: '1h' }
            )

            res.json({
                token,
                userId: user.id
            })
            
        } catch(e){
            res.status(500).json({message: 'something goes wrong'})
        }
    }
)

module.exports = router
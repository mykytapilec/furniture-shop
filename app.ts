import express, { json, Application } from 'express'
import config from 'config'
import mongoose from 'mongoose'
import auth_routes from './routes/auth.routes'


const app: Application = express()

app.use(json())

// app.use(json({extended: true}))
app.use('/api/auth', auth_routes)
// app.use('/api/link', link_routes)


const PORT: number = config.get('port') || 5000
const MONGO_URI: string = config.get('mongoUri')

const start = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {console.log(`app has been started on port ${PORT} ... `)})
    } catch(e){
        console.log('server error', e.message)
        process.exit(1)
    }
}


  start()

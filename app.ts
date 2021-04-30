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



// const options = {
// 	"method": "GET",
// 	"hostname": "getrit-furniture-store.p.rapidapi.comhttps",
// 	"port": null,
// 	"path": "//getrit.com/API/Token?Token=Demo",
// 	"headers": {
// 		"x-rapidapi-key": "11ad070107mshc4533af604c2b7dp18d7b2jsn0094eb1c94e2",
// 		"x-rapidapi-host": "getrit-furniture-store.p.rapidapi.com",
// 		"useQueryString": true
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on("data", function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on("end", function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();


  start()

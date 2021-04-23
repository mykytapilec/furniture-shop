const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const http = require("https");

const auth_routes = require('./routes/auth.routes')
const link_routes = require('./routes/link.routes')

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', auth_routes)
app.use('/api/link', link_routes)

const PORT = config.get('port') || 5000
const MONGO_URI = config.get('mongoUri')

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

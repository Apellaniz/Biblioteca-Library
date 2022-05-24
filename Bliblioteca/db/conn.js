const { MongoClient } = require('mongodb')
const uri = "mongodb://localhost:27017/dbRH"
const client = new MongoClient(uri)

async function run() {
    try{
        await client.connect()
        console.log("Conectando ao banco mongoDB")
    }catch(err) {
        console.log(err)
    }
}
run()

module.exports = client
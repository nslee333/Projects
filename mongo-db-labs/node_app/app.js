const {MongoClient} = require('mongodb');
const {uri} = require('./uri.js'); 

const client = new MongoClient(uri);

const main = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        const dbs = await client.db().admin().listDatabases();
        console.table(dbs.databases);        
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

main()
    .catch((err) => console.log(err))
    .finally(() => client.close());
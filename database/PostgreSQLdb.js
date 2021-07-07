const { Pool } = require('pg');

const PG_URI = 'postgres://mzgcsxyr:lAAqxrRi2qFbhCaL9RIHylOETVW1G31j@kashin.db.elephantsql.com/mzgcsxyr';


const pool = new Pool({
    connectionString: PG_URI
});












    module.exports ={
        query: (text, params, callback)=> {
            console.log('QUERY QUERY QUERY', text);
            return pool.query(text, params, callback);
        }
    };

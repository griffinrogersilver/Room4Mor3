const { Pool } = require('pg');

const PG_URI = 'postgres://uxatxjex:1WiX_YkxJGp2luvEGfSQ4CmgjKYiwDvA@kashin.db.elephantsql.com/uxatxjex';


const pool = new Pool({
    connectionString: PG_URI
});



    module.exports ={
        query: (text, params, callback)=> {
            console.log('QUERY QUERY QUERY', text);
            return pool.query(text, params, callback);
        }
    };

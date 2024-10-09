import { pool } from '../config/database.js'

const getList = async (req, res) => {

    try{
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
        res.status(200).json(results.rows);

    } catch(error){
        res.status(409).json( { error: error.message } );
    }

} 

const getConcertById = async (req, res) => {
    try {
        const selectQuery = `SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn FROM gifts WHERE id == $1`;
        const giftId = req.params.concertId;
        const result = await pool.query(selectQuery, [concertId]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default {
    getList,
    getConcertById
}
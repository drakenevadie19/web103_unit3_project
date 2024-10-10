import { useParams } from 'react-router-dom';
import { pool } from '../config/database.js'

const getList = async (req, res) => {

    try{
        const results = await pool.query('SELECT DISTINCT hallname FROM concerts ORDER BY id ASC')
        res.status(200).json(results.rows);

    } catch(error){
        res.status(409).json( { error: error.message } );
    }

} 

const getConcertById = async (req, res) => {
    const { params } = useParams();
    console.log(params);
    try {
        const selectQuery = `SELECT hallname, concertName, bandName, dayOfOperation, image_url, description FROM concerts WHERE id = $1`; // fixed "="
        const concertId = req.params.concertId;
        const result = await pool.query(selectQuery, [concertId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Concert not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};


const getConcertEvents = async (req, res) => {
    try {
        // Assuming you want all concert events across all halls
        const selectQuery = `SELECT hallName, concertName, bandName, dayOfOperation, image_url, description, url FROM concerts`;
        const results = await pool.query(selectQuery);
        console.log(results);
        res.status(200).json(results.rows); // Return all concert events
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getList,
    getConcertById,
    getConcertEvents
}
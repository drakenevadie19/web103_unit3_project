import { pool } from './database.js'
import './dotenv.js'
import musicHouseData from '../data/concerts.js'

const createConcertsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS concerts;

        CREATE TABLE IF NOT EXISTS concerts (
            "id" SERIAL PRIMARY KEY,
            "hallName" VARCHAR(255) NOT NULL,
            "concertName" VARCHAR(255) NOT NULL,
            "bandName" VARCHAR(255) NOT NULL,
            "dayOfOperation" VARCHAR(255) NOT NULL,
            "image_url" TEXT NOT NULL,
            "description" VARCHAR(255) NOT NULL,
            "url" TEXT NOT NULL
        )
    `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 concerts table created successfully')
    } catch (err) {
        console.error('⚠️ error creating concerts table', err)
    }
}

const seedConcertsTable = async () => {
    await createConcertsTable()

    musicHouseData.forEach((concert) => {
        const insertQuery = {
            text: 'INSERT INTO concerts ("hallName", "concertName", "bandName", "dayOfOperation", "image_url", "description", "url") VALUES ($1, $2, $3, $4, $5, $6, $7)',
            values: [
                concert.hallName,
                concert.concertName,
                concert.bandName,
                concert.dayOfOperation,
                concert.image_url,
                concert.description,
                concert.url
            ]
        }

        pool.query(insertQuery, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting concert', err)
                return
            }

            console.log(`✅ ${concert.concertName} by ${concert.bandName} added successfully`)
        })
    })
}

seedConcertsTable()

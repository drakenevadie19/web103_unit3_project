import express from "express";
// import giftData from "../data/gifts.js";
import ConcertsController from '../controllers/list.js';

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).send(GiftsController.getGifts());
// });
router.get('/', ConcertsController.getList)

// router.get('/:concertId', ConcertsController.getConcertById);

router.get('/events', ConcertsController.getConcertEvents);

export default router;
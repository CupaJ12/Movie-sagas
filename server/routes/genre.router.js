const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
	// query to get all genres

	let queryText = `SELECT "genres"."name" FROM "movies"
	JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id"
	JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
	WHERE "movies"."id" = ${req.params.id};`;
	pool
		.query(queryText)
		.then((response) => {
			// console.log('response.rows:', response.rows);
			res.send(response.rows);
		})
		.catch((error) => {
			console.log('error in genre.router GET request', error);
			res.sendStatus(500);
		});

	// first attempt below

	// let queryText = `SELECT "genres", "name", "movies"."title" FROM "movies"
	//   JOIN "movies_genres" ON "movies_genres"."movies_id" = "movies"."id"
	//   JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
	//   WHERE "movies"."title" = '${req.params.id}';`;
	// 	pool
	// 		.query(queryText)
	// 		.then((res) => {
	// 			console.log(res.rows);
	// 			res.send(res.rows);
	// 		})
	// 		.catch((err) => {
	// 			console.log('Error completing SELECT genres query', err);
	// 			res.sendStatus(500);
	// 		});
});

module.exports = router;

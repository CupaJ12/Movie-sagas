const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
	// Add query to get all genres
  console.log('in genre router, get all genres');
  
  
  // this query is a lil fucked
	// let queryText = `SELECT "genres", "name", "movies"."title" FROM "movies"
  // JOIN "movies_genres" ON "movies_genres"."movies_id" = "movies"."id"
  // JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  // WHERE "movies"."title" = '${req.params.id}';`;
	// pool
	// 	.query(queryText)
	// 	.then((res) => {
	// 		console.log(res.rows);
	// 		res.send(res.rows);
	// 	})
	// 	.catch((err) => {
	// 		console.log('Error completing SELECT genres query', err);
	// 		res.sendStatus(500);
	// 	});
});

module.exports = router;

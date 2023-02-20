import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {
	// declaring all necessary consts
	const dispatch = useDispatch();
	const movieId = useSelector((store) => store.movieId);
	const history = useHistory();
	const genres = useSelector((store) => store.genres);

	// console.log('genres', genres);
	// console.log('in details', movieId);

	return (
		// back to main list button, using the info passed in from movieId reducer to call in the details of the relevant movie. mapping through genres using the genre reducer
		<main>
			<button onClick={() => history.push('/')}>Back to List</button>
			<h1>Movie Details</h1>
			<section className='Details'>
				<div key={movieId.id}>
					<h2>{movieId.title}</h2>
					<img src={movieId.poster} alt={movieId.title} />
					<p>{movieId.description}</p>
					<h3>
						Genres:
						{genres.map((genre) => {
							return <li key={genre.name}>{genre.name}</li>;
						})}
					</h3>
				</div>
			</section>
		</main>
	);
}

export default Details;

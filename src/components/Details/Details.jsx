import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {
	const dispatch = useDispatch();
	const movieId = useSelector((store) => store.movieId);
	const history = useHistory();

	console.log('in details', movieId);

	return (
		<main>
			<h1>Movie Details</h1>
			<section className='Details'>
				<div key={movieId.id}>
					<h2>{movieId.title}</h2>
					<img src={movieId.poster} alt={movieId.title} />
                    <p>{movieId.description}</p>

				</div>
			</section>
		</main>
	);
}

export default Details;

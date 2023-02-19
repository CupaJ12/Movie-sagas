import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';
function MovieList() {
	const dispatch = useDispatch();
	const movies = useSelector((store) => store.movies);
	const movieId = useSelector((store) => store.movieId);
	const history = useHistory();

	useEffect(() => {
		dispatch({ type: 'FETCH_MOVIES' });
	}, []);
	// handle click function to collect the ID of the movie clicked and send it to the details page using the movieId reducer
	const handleClick = (movie) => {
		console.log('in handleClick', movie);
		dispatch({ type: 'SET_MOVIE_ID', payload: movie });
		history.push('/details');
		dispatch({ type: 'FETCH_GENRES', payload: movie.id });
		// history.push(`/details/${movie.id}`)
		// this would allow page refresh
		//redux method is easier
	};

	return (
		<main>
			<h1>MovieList</h1>
			<section className='movies'>
				{movies.map((movie) => {
					return (
						<div
							className='individual-movie'
							key={movie.id}
							onClick={() => handleClick(movie)}
						>
							<h3>{movie.title}</h3>
							<img src={movie.poster} alt={movie.title} className='poster' />
						</div>
					);
				})}
			</section>
		</main>
	);
}

export default MovieList;

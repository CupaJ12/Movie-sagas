import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {
	const dispatch = useDispatch();
	const movieId = useSelector((store) => store.movieId);
	const history = useHistory();
	const genres = useSelector((store) => store.genres);

	console.log("genres",genres)
	console.log('in details', movieId);

	return (
		<main>
			<button onClick={() => history.push('/')}>Back to List</button>
			<h1>Movie Details</h1>
			<section className='Details'>
				<div>
					<h2>{movieId.title}</h2>
					<img src={movieId.poster} alt={movieId.title} />
                    <p>{movieId.description}</p>
					<h3>
						Genres:
						{genres.map((genre) => {
							return (<li 
							key={genre.id}>
								{genre.name}
							</li>);

						})
						}
					</h3>
				</div>
			</section>
		</main>
	);
}

export default Details;

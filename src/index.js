import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenresPerMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

//write a saga to get all genres from the DB for the specific movie selected
// the below is untested, make sure to test it


function* fetchAllGenresPerMovie(action) {
    try{
        let id = action.payload;
        const genres = yield axios.get(`/api/genre/${id}`);
        console.log('get genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });
    } catch {
        console.log('fetchTheGenres error');
    }
}

// function* fetchAllGenresPerMovie(action) {
   
//     try {
//         // console.log('in fetchAllGenresPerMovie', action.payload)
//         // console.log('in fetchAllGenresPerMovie', req.params.id)
//         const genres = yield axios.get(`/api/genre/${action.payload}`  );

//         console.log('get all genres:', genres.data);
//         yield put({ type: 'SET_GENRES', payload: genres.data });
//     } catch {
//         console.log('get all genres error');
//     }
// }

// {params: {id: action.payload}});
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
//reducer to store the ID of one specific movie gathered from the users click
const movieId = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE_ID':
            return action.payload;
        default:
            return state;
    }
}




// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieId
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

import * as ActionTypes from './ActionTypes';

export const addCard = (card) => ({
    type: ActionTypes.ADD_CARD,
    payload: card
});

export const postCard = (msg, selected)=> (dispatch) => {
    const newCard = {
        exp: msg,
        selected: selected
    };
    fetch('http://localhost:3001/cards', {
        method: 'POST',
        body: JSON.stringify(newCard),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addCard(response)))
    .catch(error => {console.log('Post comments ', error.message); alert('Your comment could not be posted\nError '+ error.message);})
}
export const fetchCards = () => (dispatch) => {
    return fetch('http://localhost:3001/cards')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(cards => dispatch(addCards(cards)))
    .catch(error => dispatch(cardsFailed(error.message)));
}

export const cardsFailed = (errmess) => ({
    type: ActionTypes.CARDS_FAILED,
    payload: errmess
});

export const addCards = (cards) => ({
    type: ActionTypes.GET_CARDS,
    payload: cards
});

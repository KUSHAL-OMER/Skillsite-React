import * as ActionTypes from './ActionTypes';

export const addCard = (card) => ({
    type: ActionTypes.ADD_CARD,
    payload: card
});

export const postCard = (msg, selected, name, email, image ) => ( dispatch ) => {
    const newCard = {
        exp: msg,
        selected: selected,
        name: name,
        email: email,
        photo: image.name
    };
    fetch('http://localhost:9000/cards', {
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
    .catch(error => {console.log('Post comments ', error.message); alert('Your card could not be posted\nError '+ error.message);});
    const formdata = new FormData();
    formdata.append('photo', image);
    fetch('http://localhost:9000/uploads' , {
        method: 'POST',
        body: formdata,
    })
    .then((res) => {
        if(res.ok) {
            return res;
        }
        else {
            var error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.response = res;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }).then(response => response.json())
    .catch(error => {console.log('Post image ', error.message); alert('Your image could not be posted\nError '+ error.message);});
};
export const fetchCards = () => (dispatch) => {
    return fetch('http://localhost:9000/cards')
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
};

export const cardsFailed = (errmess) => ({
    type: ActionTypes.CARDS_FAILED,
    payload: errmess
});

export const addCards = (cards) => ({
    type: ActionTypes.GET_CARDS,
    payload: cards
});

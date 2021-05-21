import * as ActionTypes from './ActionTypes';

export const ProfCard = (state = {
    errMess: null,
    cards: []
}, action) => {
    switch(action.type)
    {
        case ActionTypes.GET_CARDS:
            return {...state, errMess: null, cards: action.payload};
        case ActionTypes.ADD_CARD:
            var card = action.payload;
            return {...state, cards: state.cards.concat(card)};
            case ActionTypes.CARDS_FAILED:
            return {...state, errMess: action.payload, cards: []};
        default:
            return state;
    }
};
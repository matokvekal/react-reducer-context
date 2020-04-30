var uuid = require('uuid');
const uuidv1 = require('uuid/dist/v1');

export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid.v1()
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}
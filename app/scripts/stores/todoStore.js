import { createStore, combineReducers } from 'redux'
import assign from 'object-assign'

const todos = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    id: ( state.length + 1 ),
                    completed: false
                }
            ]
        break;
        case 'TOGGLE_TODO':
            return state.map( todo =>
                todo.id === action.id ?
                assign({}, todo, { completed: !todo.completed }) :
                todo
            )
        break;
        default:
            return state;
    }
}

const visibilityFilter = ( state = 'SHOW_ALL', action ) => {
    return state;
}

const reducers = combineReducers({
    todos,
    visibilityFilter
})

var todoStore = createStore(reducers);

export default todoStore

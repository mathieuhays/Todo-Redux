import React from 'react'
import store from '../stores/todoStore'

export default class ToDoControls extends React.Component {

    render() {

        return (
            <div>
                <input ref={(node) => {
                        this.input = node
                    }} />
                <button onClick={ () => { this.onAddToDo() } }>Add Todo</button>
            </div>
        )
    }

    onAddToDo() {
        store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value
        });

        this.input.value = ''
    }
}

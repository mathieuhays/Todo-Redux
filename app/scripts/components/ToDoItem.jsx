import React from 'react'
import store from '../stores/todoStore'

export default class ToDoItem extends React.Component {

    render() {

        const itemStyle = {
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }

        return (
            <li style={ itemStyle } onClick={() => { this.toggleItem() }}>
                { this.props.todo.text }
            </li>
        )
    }

    toggleItem() {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id: this.props.todo.id
        })
    }
}

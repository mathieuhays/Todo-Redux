import React from 'react'
import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component {

    constructor(props, context) {
        super(props, context)

    }

    render() {

        var todos = this.props.todos || []

        return (
            <ul>
                { todos.map( todo =>
                    <ToDoItem key={ todo.id } todo={ todo } />
                 ) }
            </ul>
        )
    }
}

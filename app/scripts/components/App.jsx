import React from 'react'

import ToDoList from './ToDoList'
import ToDoControls from './ToDoControls'
import store from '../stores/todoStore'

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            console.log( 'store updated', store.getState() )
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {

        return (
            <div>
                <h1>Todo Redux</h1>
                <ToDoControls />
                <ToDoList {...this.state} />
            </div>
        )
    }
}

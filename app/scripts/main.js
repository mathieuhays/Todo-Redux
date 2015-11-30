import { render } from 'react-dom'
import { Component } from 'react'

class App extends Component {

    render() {
        return (
            <div>
                Todo Redux
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
)

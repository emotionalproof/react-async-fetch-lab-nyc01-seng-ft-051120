import React, { Component } from 'react'

class App extends Component {
    state = {
        astros: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            let people = data.people
            this.setState({
                astros: people
            })
            })
    }

    render() {
        console.log(this.state.astros)
        const astronauts = this.state.astros.map((astro, index) =>  {
            return <h1 key={index}>{astro.name}</h1>
        })

        return (
            <div>
                {astronauts}
            </div>
        )
    }
}

export default App
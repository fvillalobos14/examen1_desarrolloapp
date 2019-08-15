import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Weather from './Weather'

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomeTitle: 'Bienvenido',
            appTitle: 'Weather App',
            month: 'May',
            day: '20'
        };

        this.switchTitles = this.switchTitles.bind(this)
        this.setMay20 = this.setMay20.bind(this)
        this.setMay21 = this.setMay21.bind(this)
        this.setMay22 = this.setMay22.bind(this)
        this.setMay23 = this.setMay23.bind(this)
    }

    switchTitles() {
        this.setState({ welcomeTitle: 'Weather App', appTitle: 'Bienvenido' });
    }

    setMay20() {
        this.setState({ month: 'May', day: '20' })
    }

    setMay21() {
        this.setState({ month: 'May', day: '21' })
    }

    setMay22() {
        this.setState({ month: 'May', day: '22' })
    }

    setMay23() {
        this.setState({ month: 'May', day: '23' })
    }

    render() {
        return (
            <div>
                <h1>{this.state.welcomeTitle}</h1>
                <h1>{this.state.appTitle}</h1>
                <Button variant="contained" color="primary" onClick={this.switchTitles}>Intercalar</Button>
                <hr />
                <div>
                    <Button variant="contained" color="secondary" onClick={this.setMay20}>Weather for May 20</Button>
                    <Button variant="contained" color="primary" onClick={this.setMay21}>Weather for May 21</Button>
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={this.setMay22}>Weather for May 22</Button>
                    <Button variant="contained" color="primary" onClick={this.setMay23}>Weather for May 23</Button>
                </div>
                <hr />
                <div>
                    <Weather weatherMonth={this.state.month} weatherDay={this.state.day} />
                </div>
            </div>
        )
    }
}

export default Home

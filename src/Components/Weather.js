import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'

export class Weather extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            weatherItems: [
                { month: 'May', day: '20', max: '38', min: '18' },
                { month: 'May', day: '21', max: '30', min: '20' },
                { month: 'May', day: '22', max: '33', min: '17' },
                { month: 'May', day: '23', max: '31', min: '19' }
            ]
        };

        this.showMaxMin = this.showMaxMin.bind(this)
    }

    showMaxMin(item)
    {

    }

    //need to work on this part; haven't placed proper variables, but at least binding
    render() {
        return (
            <div>
                <Card>
                    <h2>{this.state.weatherItems.find(w => w.day === this.props.weatherDay).max}</h2> 
                </Card>
                <br/>
                <Card>
                    <h2>{this.state.weatherItems.find(w => w.day === this.props.weatherDay).min}</h2>
                </Card>
            </div>
        )
    }
}

Weather.propTypes = {
    weatherMonth: PropTypes.string,
    weatherDay: PropTypes.string
}

Weather.defaultProps = {
    weatherMonth: 'May',
    weatherDay: '20'
}

export default Weather

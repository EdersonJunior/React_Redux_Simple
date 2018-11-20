import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBand } from '../actions'

class Bands extends Component {

    render() {
        if (!this.props.bands) {
            return (
                <div>
                    No bands avaiable
                </div>
            )
        }

        return (                  
            <div>
                <ul>
                    {this.listBands()}
                </ul>
            </div>
        )        
    }

    listBands() {
        return this.props.bands.map( (band) => {
            return (
                <li
                    key={band.name}
                    onClick={ () => {this.props.selectBand(band)} }
                >
                    {band.name}
                </li>
            )
        })
    }
}

function mapStateToProps(state) {
    return { bands: state.bands }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { selectBand: selectBand }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Bands)
import React, { Component } from 'react'
import { connect } from 'react-redux'

class FavoriteBand extends Component {
    render() {
        if (!this.props.favoriteBand) {
            return (
                <div>
                    <h1>
                        What's your Favorite Rock'n Roll Band?
                    </h1>
                </div>
            )
        }

        return (
            <h1>
                {this.props.favoriteBand.name}
            </h1>
        )
    }
}

function mapStateToProps(state) {
    return {favoriteBand: state.favoriteBand}
}

export default connect(mapStateToProps)(FavoriteBand)
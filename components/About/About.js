import React, { Component } from 'react'
import {
    SafeAreaView,
    Text
} from 'react-native'
import { connect } from 'react-redux'

class About extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text>About Page</Text>
                <Text>{this.props.default}</Text>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state=>({
    default: state.firstReducer
})

export default connect(mapStateToProps, {})(About)
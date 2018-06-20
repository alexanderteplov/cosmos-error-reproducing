import React from 'react'
import PropTypes from 'prop-types';
import {DEBUG} from "../../constants";

class Errors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
        this.renderCounter = 0;
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (DEBUG) {
            this.renderCounter++
            console.log(`%c ${this.props.name} was updated (${this.renderCounter}) `, "color: blue; background-color: #7ac1ff; font-weight: 900")
            if (!this.state.hasError) {
                return this.props.children
            }
        }
        return null
    }
}

Errors.propTypes = {
    name: PropTypes.string.isRequired
}

export default Errors
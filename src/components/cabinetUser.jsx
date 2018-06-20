import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import '../css/index.css';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { URL } from '../constants/'
import { Errors } from "./auxiliary"


const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    leftPanel: {
        backgroundColor: green[0],
        flexBasis: 200,
    },
    rightContainer: {
        flexDirection: 'column',
        display: 'flex',
        flexGrow: 1,
    },
    top: {
        flexBasis: 36,
    },
    header: {
        backgroundColor: green[100],
        flexBasis: 100,
    },
    body: {
        backgroundColor: green[200],
        flexGrow: 1,
    },
    test: {
        color: 'red',
    }
};

class CabinetUser extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
        isMobile: PropTypes.bool.isRequired,
    }

    render () {
        const { classes, isMobile, handlerLogout } = this.props;
        return (
            <Errors name={this.constructor.name}>
                <div className={classes.root}>
                    { !isMobile && <div className={classes.leftPanel}></div> }
                    <div className={classes.rightContainer}>
                        { isMobile && <div className={classes.top}></div> }
                        <div className={classes.header}>
                            <button onClick={handlerLogout} id="testid">Logout</button>
                        </div>
                        <div className={classes.body}>
                        </div>
                    </div>
                </div>
            </Errors>
        )
    }
}

const mapStateToProps = (store) => ({
    isMobile: store.isMobile
})

const mapDispatchToProps = (dispatch, props) => ({
    handlerLogout() {
        props.history.push(URL.LOGIN)
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CabinetUser)));
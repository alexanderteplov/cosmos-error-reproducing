import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from '../store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CabinetUser from './cabinetUser'
import { DEBUG, ACTIONS, MAX_MOBILE_HORIZONTAL_RESOLUTION } from '../constants'
import { Errors } from "./auxiliary"

if (DEBUG) {
    const {whyDidYouUpdate} = require('why-did-you-update');
    whyDidYouUpdate(React);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        // Check user rights
        this.setIsMobile()
    }

    componentDidMount() {
        window.addEventListener('resize', this.setIsMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => {});
    }

    setIsMobile() {
        const isMobile = (window.innerWidth < MAX_MOBILE_HORIZONTAL_RESOLUTION) ? true : false;
        const prev = store.getState().isMobile;
        if (isMobile !== prev) {
            store.dispatch({ type: ACTIONS.IS_MOBILE, isMobile: isMobile });
        }
    }

    render () {
        return (
            <Errors name={this.constructor.name}>
                <CssBaseline />
                <Provider store={store}>
                    <BrowserRouter forceRefresh={true}>
                        <Switch>
                            <Route path="/" component={CabinetUser} />
                            <Route path="/login" component={CabinetUser} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </Errors>
        )
    }
}

export default App;
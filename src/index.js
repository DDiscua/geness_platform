import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from './config/configureStore';
import moment from 'moment';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'react-block-ui/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.css';
import 'antd/dist/antd.css';

import './theme/theme.css';
import './index.css';
import './assets/css/custom.css';

import Login from "./pages/Login/Login";

moment.locale('en', {
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    }
})

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <App>
                    </App>
                </Switch>
            </Router >
        </div>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

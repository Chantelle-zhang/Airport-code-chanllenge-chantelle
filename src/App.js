import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import {
    isLoading,
    airports,
    airport,
    showModal,
} from "./store/reducer";

import HomePage from "./component/HomePage";


const middleware = [thunk];


let reducer = combineReducers({
    isLoading,
    airports,
    airport,
    showModal
});

let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)));


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Container className="text-center">
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                        </Switch>
                    </Container>
                </BrowserRouter>
            </Provider>
        );
    }
}


export default App;

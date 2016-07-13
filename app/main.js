import React, {Component} from "react";
import {AppState} from "react-native";
import codePush from "react-native-code-push";
import {Provider} from "react-redux";

import {postAnalytics} from "./actions/analytics";
import asteroid from "./lib/asteroid";
import {syncStoreAndAsteroid} from "./lib/asteroid-redux";
import scene from "./lib/scene";
import store from "./lib/store";

export default class Main extends Component {

    componentDidMount () {
        AppState.addEventListener("change", this.handleAppStateChange);
        syncStoreAndAsteroid(store, asteroid);
        codePush.sync();
    }

    componentWillUnmount () {
        AppState.removeEventListener("change", this.handleAppStateChange);
    }

    handleAppStateChange () {
        store.dispatch(postAnalytics(asteroid.userId, store.getState()));
    }

    render () {
        return (
            <Provider store={store}>
                {scene}
            </Provider>
        );
    }

}

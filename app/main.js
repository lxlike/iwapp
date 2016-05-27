import React, {Component} from "react";
import {Provider} from "react-redux";
import codePush from "react-native-code-push";

import scene from "./lib/scene";
import store from "./lib/store";
import asteroid from "./lib/asteroid";
import {syncStoreAndAsteroid} from "./lib/asteroid-redux";

export default class Main extends Component {

    componentDidMount () {
        syncStoreAndAsteroid(store, asteroid);
        codePush.sync();
    }

    render () {
        return (
            <Provider store={store}>
                {scene}
            </Provider>
        );
    }

}

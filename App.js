import React,{ Component } from 'react'
import { Provider } from "react-redux";
import { store } from "./store";
import Home from './screen/Home'

export {store};

export default class Root extends Component {
  render() {
    return(
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}
import AppNavigator from "./navigator";
import { Provider } from "react-redux";
import React from "react";
// import store from './store'

const App = () => {
  return (
    // <Provider store={store}>
      <AppNavigator />
    // </Provider>
  );
};

export default App;

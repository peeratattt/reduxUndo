/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import {TodoPage} from './pages'

const App = () => {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
};

export default App;

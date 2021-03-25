import * as React from 'react';
import {Provider} from 'react-redux';
import store from '../redux';

import RootContainer from './root';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;

import React from 'react';
import Appstack from './src/Navigation/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/config/ReduxStore';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
                <Appstack/>
        </PersistGate>
        </Provider>
    </React.Fragment>
  )
}

export default App;


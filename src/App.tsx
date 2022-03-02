import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './routes/Template';
import '../src/common/interceptor';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/Store';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Template />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

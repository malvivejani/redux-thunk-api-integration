import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './routes/Template';
import '../src/common/interceptor';
import { Provider } from 'react-redux';
import store from './redux/store/Store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Template />
      </div>
    </Provider>
  );
}

export default App;

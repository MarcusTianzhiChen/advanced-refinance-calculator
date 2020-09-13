import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;

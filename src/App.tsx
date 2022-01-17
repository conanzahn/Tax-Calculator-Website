import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss';
import Demo from './pages/Calculate';
import Result from './pages/Result';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
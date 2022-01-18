import React, {Suspense} from 'react';
import { Route, HashRouter, Routes  } from 'react-router-dom';
import './style.scss';
import Home from './pages/Calculate';
import Result from './pages/Result';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="result" element={<Result />}></Route>
          </Routes>
        </HashRouter >
    </Provider> 
  );
};

export default App;


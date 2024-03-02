import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { Provider } from 'react-redux';
import App from './App';
import AutoScreen from './components/autoScreen';

// css引入
import 'normalize.css';
import './assets/css/index.less';

import store from './store';

// 绑定全局配置

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <AutoScreen Elem={App} />
      </StyleSheetManager>
    </BrowserRouter>
  </Provider>
);
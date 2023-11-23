import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import App from './App';
import AutoScreen from './components/autoScreen';
import 'normalize.css';
import './assets/css/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading...">
    <HashRouter>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <AutoScreen Elem={App} />
      </StyleSheetManager>
    </HashRouter>
  </Suspense>
);
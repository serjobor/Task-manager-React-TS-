// import React from 'react';
// import ReactDOM from 'react-dom/client';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { ThemeProvider } from 'styled-components';
// import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import App from './components/App'
// import TaskDetails from './components/TaskDetails'
// import TaskItem from './components/TaskItem'
// import TaskList from './components/TaskList'

import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeProvider theme={LIGHT_THEME}> */}
      {/* <DropdownProvider> */}
        {/* <FontsVTBGroup /> */}
          <App />
      {/* </DropdownProvider> */}
    {/* </ThemeProvider> */}
  </StrictMode>,
)

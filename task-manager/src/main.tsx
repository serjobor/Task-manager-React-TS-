import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
// import { ThemeProvider } from 'styled-components';
// import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';

import './styles/index.css'
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeProvider theme={LIGHT_THEME}> */}
      {/* <DropdownProvider> */}
        {/* <FontsVTBGroup /> */}
          <Provider store={store}>
            <App />
          </Provider>
      {/* </DropdownProvider> */}
    {/* </ThemeProvider> */}
  </StrictMode>,
)

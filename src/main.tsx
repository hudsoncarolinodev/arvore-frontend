import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyle} from './style.ts'
import { ThemeProvider } from 'styled-components';
import theme from './theme'
import {SearchResultsProvider} from './context/SearchResultsContext'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <SearchResultsProvider>
        <App />
      </SearchResultsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

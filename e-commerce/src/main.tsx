import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/productcontext.tsx';
import {FilterContextProvider} from './context/filterContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <AppProvider>
      <FilterContextProvider>
    <App />
    </FilterContextProvider>
    </AppProvider>
  </StrictMode>
)

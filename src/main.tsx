import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClientProvider} from "react-query";
import {QueryClient} from "react-query";

const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}> {/* Используем QueryClientProvider и передаем в него QueryClient */}
        <App />
      </QueryClientProvider>
  </React.StrictMode>,
)

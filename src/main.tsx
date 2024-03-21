import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./api/api.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}> {/* Используем QueryClientProvider и передаем в него QueryClient */}
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from "antd";
import es_ES from "antd/lib/locale/es_ES";
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={es_ES}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)

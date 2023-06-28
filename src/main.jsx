import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import zhCN from 'antd/locale/zh_CN'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { StoresContext, stores } from './core/stores'
import './styles/tailwind.less'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <StoresContext.Provider value={stores}>
      <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyleProvider>
    </StoresContext.Provider>
  </ConfigProvider>
)

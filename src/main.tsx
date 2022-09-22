import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import {GlobalStyle} from 'src/theme'
import {store} from 'src/store'
import {App} from 'src/app'

import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
)

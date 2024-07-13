
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvader } from './context/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvader>
    <App />
  </FiltersProvader>,
)

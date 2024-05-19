import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { UseMemoPractica } from './06-useMemo/UseMemoPractica'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseMemoPractica />
  </React.StrictMode>
)

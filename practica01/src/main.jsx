import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <FirstApp title="Dev" subTitle="123" />
        <CounterApp value={5} />

    </React.StrictMode>
);
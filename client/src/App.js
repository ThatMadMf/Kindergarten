import React from 'react';
import './App.css';
import {RouterView} from "./views/RouterView";
import 'antd/dist/antd.css';

function App() {
    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "background.jpg"})`,
                backgroundSize: 'cover',
                overflow: 'hidden',
                height: "100%"
            }}
        >
            <RouterView/>
        </div>
    );
}

export default App;

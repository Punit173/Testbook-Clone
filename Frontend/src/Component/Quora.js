import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import "./Css/Quora.css";

export default function Quora() {
    return (
    <div className="QuoraApp">
        <div className="Quora">
            <Header/>
            <div className="quora_contents">
                <div className="quora_content">
                <Sidebar />
                <Feed />
                <Widget />
                </div>
            </div>
        </div>
    </div>
    )
}

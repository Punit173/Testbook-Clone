import React from 'react'

export default function Widget() {
    return (
        <div className='widget'>
            <div className="widget_header">
                <h5>Spaces to follow</h5>
            </div>
            <div className="widget_contents">
                <img src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg" alt="" />
                <div className="widget_content">
                    <div className="widget_ContentTitle">
                    <h5>
                    Mobile App Programmer
                    </h5>
                    <p>The Best Mobile App Development Company</p>
                    </div>
                </div>
            </div>
            <div className="widget_contents">
                <img src="https://cdn5.vectorstock.com/i/1000x1000/68/04/quote-sign-icon-quotation-mark-symbol-vector-3756804.jpg" alt="" />
                <div className="widget_content">
                    <div className="widget_ContentTitle">
                    <h5>
                    Quota Of Quotes
                    </h5>
                    <p>Daily dosage of unforgattable lines from...</p>
                    </div>
                </div>
            </div>
            <div className="widget_contents">
                <img src="https://cdn.britannica.com/87/2087-004-264616BB/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg" alt="" />
                <div className="widget_content">
                    <div className="widget_ContentTitle">
                    <h5>
                    Art & Artist
                    </h5>
                    <p>A Space Related To Creating Preacticing an...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

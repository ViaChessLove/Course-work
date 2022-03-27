import React from 'react';


export default function Content(props) {

    return (
            <div className = "pageContent" >
                    <div className = "contentView" >
                        <span className = "pageText" id = "connectYW" >
                            {props.green} 
                        </span> 
                        <span className = "walletIcon" >
                            <img src = "/static/images/metamask-fox.png"
                            alt = ""
                            id = "logoPic" />
                        </span> 
                    </div>
            </div>
    )
}
Content.defaultProps = {}

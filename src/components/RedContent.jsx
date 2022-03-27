import React from 'react';


export default function RedContent(props) {

    return (
                        

                    <div className = "contentView" >
                        <span className = "warnText" id = "mintNFT" >
                        
                        <div><a href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" rel="noopener" target = "_blank">{props.link}</a></div>
                            <div>
                                {props.red}
                            </div> 
                            <div>
                                {props.red2}
                            </div>
                        </span> 
                        <span>
                            <img src = "/static/images/Exlamation.png"
                            alt = ""
                            id = "warnPic" />
                        </span>

                    </div>

           
    )
}
RedContent.defaultProps = {}

import React, {useState} from 'react';
import RedContent from './RedContent';
import {Cost} from './mainnetCost';
import {Contract} from './mainnetContract';
import {Abi} from './mainnetAbi';


export default function Mint(props) {
        const [count, setCount] = useState(1);
        const [mint, setMint] = useState("MINT");
        const [warning, setWarning] = useState("Press mint to release token");
        const[link, setLink] = useState("");
        
        function inc(){
                let val = count + 1;
                if (val < 3){
                        console.log("now count equals ",val);
                        
                        setCount(val);
                } else {
                        console.log("threshold has admited");

                        alert("You can mint no more than 2");
                }
        }
            
        function dec(){
                let val = count - 1;
                if (val > 0){
                        console.log("now count equals",val);
                        
                        setCount(val);
                } else {
                        console.log("threshold has admited");
                        
                        alert("Number of NFT could me positive");
                }
        }
        

        async function mintNFT(){
                if (props.connection){    
                        var web3 = new window.Web3(window.Web3.givenProvider);
                        window.contract = await new web3.eth.Contract(Abi.mAbi, Contract.mContract);
                        const transactionParams = {
                                to: Contract.mContract,
                                from: (await  window.ethereum.request({ method: 'eth_requestAccounts'}))[0],
                                value: window.bigInt(Cost.mCost).multiply(window.bigInt(count.toString())).toString(16),
                        }
                        try{
                                await window.ethereum.request({
                                        method: "eth_sendTransaction",
                                        params: [transactionParams],
                                })
                                console.log("Success");
                                setMint("Success");
                        } catch (err){
                                console.log(err.message);
                        }
                } else {
                        setLink("CONNECT METAMASK");
                        setWarning("")
                }
                /*some code*/
        }


        return (
                <div>
                <RedContent link={link} red={warning} red2="No more than 2 tokens permitted"/>
                <div className="countView">
                        <span className="countElement" onClick={inc}>
                                +
                        </span>
                        <span className="countElement" onClick={dec}>
                                -
                        </span>
                        <span className="countElement" id="count">{count}</span>
                </div>
                
                <button onClick={mintNFT} className="connectButton">
                        <div className="text">
                                {mint}
                        </div>
                </button>
                </div>

        );
}

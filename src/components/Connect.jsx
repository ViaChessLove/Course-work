import React from 'react';
import {useState} from 'react';
import Content from './Content';

export default function Connect() {
    checkConnection();
    const [button, setButton] = useState("CONNECT WALLET");
    const [valueGreen, setValue] = useState("Connect your wallet");
    
    
    

    async function checkConnection(){
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
        if (getAccount(accounts) !== false){
            console.log('has account');
            toMetamask();
        }
    }

    
    

    async function getAccount(result){
        if (Array.isArray(result) && result.length > 0) {
            const acc = result[0];
            return acc;
          } else {
            return false;
        }
    }

    async function getShortAcc(account){
        let line = "";
        for (let i = 0; i<4; i++){
            line += account[i];
        }
        line += "...";
        for (let i = account.length-4; i<account.length; i++){
            line += account[i];
        }
        return line;
    }

    async function toMetamask(){
        try{
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
            if (getAccount(accounts) === false){
                console.log("Request already sent error");
                setValue("Request already sent, so open Metamask wallet.");
                let picture = document.getElementById('logoPic').style;
                picture.display = 'none';
            } else {
                const account = accounts[0];
                let short = (await getShortAcc(account)).toString();
                let string = "Connected - " + short;
                setButton(string);
                setValue(short);
                let picture = document.getElementById('logoPic').style;
                picture.display = 'none';
            }
        } catch(error){
            console.log(error.message);
            setValue("Request already sent, so open Metamask wallet.");
            let picture = document.getElementById('logoPic').style;
            picture.display = 'none';
        }
    }

    async function connectWallet(){
        if (typeof window.ethereum !== 'undefined') {
            console.log('User has connected to website!');
            toMetamask();
        } else {
            console.log("MetaMask is not installed0");
            setValue("Please, Install Metamask");
            let picture = document.getElementById('logoPic').style;
            picture.display = 'none';
        }
    }
    
    
    return (
        <div>
            <button onClick={connectWallet} className = "connectButton" >

                <div className = "text" >
                    {button}
                    
                </div>

            </button>

            <Content green={valueGreen}/>

        </div>
    
    );
}

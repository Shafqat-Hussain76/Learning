import { React, useState, useEffect } from 'react';
import { ethers } from 'ethers';

import MintingERC20 from "../../artifacts/contracts/mintERC20.sol/MintingERC20.json";
const cont_add = '0x509BE06E3a1Ec266fABb028ad417a5fEeA3c76B5'; // goerli




const Home = () => {
    const wa = async ()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setContProvider(provider);
        const signer = provider.getSigner();
        setContSigner(signer);
        const getAddresses = await provider.send("eth_requestAccounts", []);
        setAdr(getAddresses[0]);
        const getbal = await provider.getBalance(getAddresses[0]);
        const balinEth = ethers.utils.formatEther(getbal);
        setBal(balinEth);    
        
    }
    const Minting = async()=>{
        const contracts = new ethers.Contract(cont_add, MintingERC20.abi, contSigner);
        const tx = await contracts.minting(amount);
        await tx.wait();
    }
    const tbal = async ()=>{
        const contractp = new ethers.Contract(cont_add, MintingERC20.abi, contProvider); 
        const tokenBa = await contractp.balanceOf(adrsToken);
        setTokenBal(tokenBa.toString());

    }

    const [adr, setAdr] = useState('');
    const [bal, setBal] = useState(0);
    const [amount, setAmount] = useState(0);
    const [contProvider, setContProvider] = useState("");
    const [contSigner, setContSigner] = useState("");
    const [tokenBal, setTokenBal] = useState(0);
    const [adrsToken, setAdrsToken] = useState(0);
   
  
    //useEffect(()=>wa,[bal,adr]);
    return (
        <div>
            <button onClick={wa}>Wallet Connect</button>
            <p>Current Address is {adr}</p>
            <p>The Balance is {bal}</p>
            <p>Token Balance is {tokenBal} </p>
            
            <h1>Enter Tokens to mint</h1> 
            <input value={amount} onChange = {(e)=> setAmount(e.target.value)} />
            <button onClick={Minting}> Click to Mint</button>

            <h1>Enter Address for Token Balances</h1> 
            <input value={adrsToken} onChange = {(e)=> setAdrsToken(e.target.value)} />
            <button onClick={tbal}> Click to Tokens</button>
            
        </div>
    );
};

export default Home;
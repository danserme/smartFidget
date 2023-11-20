import post from './utilities/post';
import io from 'socket.io-client';
import { ethers } from 'ethers';

const buttonState = document.querySelector('.button-state');

async function setCount() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const daiAddress = "0x1476C8cDc336AF2921E773F0D7260FaB3430d337";
    const daiAbi = [
        "function setCount() public",
        "function getCount() public returns (uint256)",
        "event onSetCount(address _address)",
        "event onGetCount(uint256 _count)"
    ];
    const daiContract = new ethers.Contract(daiAddress, daiAbi, signer);
    const tx = await daiContract.setCount();
    console.log(tx)
    const reciept = await provider.waitForTransaction(tx.hash);
    console.log(reciept)
}

const socket = io()
socket.on('connect', () => {
    console.log('We are set up on the client');
})

socket.on('button', (message) => {
    buttonState.innerHTML = message
    if(message == 'press') {
        setCount()
    }
})

// socket.on('potentiometer', (value, raw) => {
//     document.body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`
// })
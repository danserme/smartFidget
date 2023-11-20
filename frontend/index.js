// import { ethers } from "./ethers-5.1.esm.min.js";
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const network = "mumbai";

const provider = new ethers.providers.InfuraProvider(
    network,
    // "6b091255f11042419e1879f36c78f1d7"
    process.env.API_ID
);

const addr = process.env.ADDRESS;
//  const addr = "0x1476C8cDc336AF2921E773F0D7260FaB3430d337";

const daiAbi = [
    "function setCount() public",
    "function getCount() view public returns (uint256)",
    "event onSetCount(address _address)",
    "event onGetCount(uint256 _count)"
];

const daiContract = new ethers.Contract(addr, daiAbi, provider);
daiContract.on("onSetCount", (addr) => {
    console.log(addr);
});
daiContract.on("onGetCount"), (count) => {
    console.log(count);
};
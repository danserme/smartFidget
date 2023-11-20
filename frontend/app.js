import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const network = "maticmum";
const provider = new ethers.providers.InfuraProvider(
    network,
    process.env.API_ID
)


const addr = process.env.ADDRESS;

const daiAbi = [
    "function setCount() public",
    "function getCount() view public returns (uint256)",
    "event onSetCount(address _address)",
    "event onGetCount(uint256 _count)"
];

const daiContract = new ethers.Contract(addr, daiAbi, provider);
// const filter = daiContract.filters.onSetCount()
// const res = await daiContract.queryFilter(filter, -100000)
// console.log(res)
daiContract.once("onSetCount", (addr) => {
    console.log(addr);
});
daiContract.once("onGetCount"), (count) => {
    console.log(count);
};
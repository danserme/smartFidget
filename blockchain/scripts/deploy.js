const hre = require("hardhat");

const vrfCoordinatorV2Address = process.env.VRFaddress;
const subId = process.env.SubId;
const keyHash = process.env.keyHash;
const callbackGasLimit = process.env.gasLimit;

async function main() {

    console.log("Deploying SmartFidget Contract...")

    const SmartFidget = await hre.ethers.getContractFactory("SmartFidget");
    const smartFidget = await SmartFidget.deploy();

    let currentBlock = await hre.ethers.provider.getBlockNumber();
    while (currentBlock + 5 > (await hre.ethers.provider.getBlockNumber())) {}

    const address = await smartFidget.getAddress();
    console.log("SmartFidget deployed to:", address);

  }

  main();

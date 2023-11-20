// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SmartFidget {
    uint256 pressCount;
    address owner;

    event onSetCount(address _address);
    event onGetCount(uint256 _count);

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner can record the press.");
        _;
    }

    function setCount() public onlyOwner {
        pressCount++;
        emit onSetCount(msg.sender);
    }

    function getCount() public returns (uint256) {
        emit onGetCount(pressCount);
        return pressCount;
    }
}
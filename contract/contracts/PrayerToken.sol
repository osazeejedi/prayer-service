// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
// PrayerToken is deployed to 0xa78cAdC5E817ADda8Cad65f9546d80C7b48446F5
// Learn more about the ERC20 implementation 
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/erc20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("PrayerToken", "PRT") {
        _mint(msg.sender, 1000 * 10 ** 18);
    }
}


// SPDX-License-Identifier: UNLICENSED
// TokenVendor is deployed to 0x569f38664815b7f872B28af60699e14b0AA5F231
// 0x26Dd81aD90a423fDc0Cc514b2e2370aec944360d
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenClaim {
    ERC20 public tokenAddress = ERC20(0xa78cAdC5E817ADda8Cad65f9546d80C7b48446F5);
    mapping(address => uint256) public claimedTokens;

    constructor (){
        uint _amount = 1000 ether;
        tokenAddress.approve(address(this), _amount);
    }

    function claim(address user, uint256 amount) public {
        address owner = 0x9ffBe81CFe722E2F696f6F152413635Fcdb85A3c;
        require(amount > 0);
        require(tokenAddress.transferFrom(owner, user, amount));
        claimedTokens[user] +=(amount);
    }

    function getClaimedTokens(address user) public view returns (uint256) {
        return claimedTokens[user];
    }
}
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MintingERC20 is ERC20("Tesing", "test") {

    function minting(uint _amount) external {
        _mint(_msgSender(), _amount * 10 ** decimals());
    }
}


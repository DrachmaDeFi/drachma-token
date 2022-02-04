// contracts/DRACHMA.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DRACHMA is ERC20 {
    constructor() ERC20("Drachma Trade", "DRACHMA") {
        _mint(msg.sender, 100000000e18);
    }
}
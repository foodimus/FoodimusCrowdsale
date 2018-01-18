pragma solidity ^0.4.16;

import './InterestToken.sol';

contract FDMToken is InterestToken {

   string public constant name = 'FDM Token';
   string public constant symbol = 'FDM';
   uint8 public constant decimals = 18;

}

pragma solidity ^0.5.0;

contract MyStringStore {
  string public myString = "Hello, Rizwan!";

  function set(string memory x) public {
    myString = x;
  }
}
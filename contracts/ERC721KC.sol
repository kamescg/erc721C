//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721K } from "@erc721k/core-sol/contracts/ERC721K.sol";
import { ERC721Storage } from "@erc721k/core-sol/contracts/ERC721Storage.sol";
import { ISVGRender } from "./interfaces/ISVGRender.sol";
import { ERC20TWAB } from "./ERC20TWAB.sol";

contract ERC721KC is ERC721K {
  address public ercTwab;

  constructor(
    string memory name,
    string memory symbol,
    address erc721Storage,
    address _ercTwab
  ) ERC721K(name, symbol, erc721Storage) {
    ercTwab = _ercTwab;
  }

  function balanceOf(address owner) public view virtual override returns (uint256) {
    uint64[] memory start = new uint64[](1);
    uint64[] memory end = new uint64[](1);
    start[0] = 0;
    end[0] = uint64(block.timestamp);
    uint256[] memory balances = ERC20TWAB(ercTwab).getAverageBalancesBetween(owner, start, end);
    if (balances[0] > 0) {
      return 1;
    } else {
      return 0;
    }
  }

  function tokenURI(uint256 tokenId) external view returns (string memory) {
    return ISVGRender(ERC721Storage(_erc721Storage).getSvgRender()).render(tokenId);
  }

  function _tokenData(uint256 tokenId)
    internal
    view
    virtual
    override
    returns (bytes memory, bytes memory)
  {
    bytes memory imageData = bytes(abi.encode("0x0"));
    bytes memory traitsData = bytes(abi.encode("0x0"));
    return (imageData, traitsData);
  }
}

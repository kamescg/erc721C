import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract, ContractFactory } from 'ethers';
import { ethers } from 'hardhat';

const { getSigners, utils } = ethers;
const { parseEther: toWei } = utils;

describe('ERC721KC', () => {
  let wallet0: SignerWithAddress;
  let wallet1: SignerWithAddress;
  let wallet2: SignerWithAddress;
  let ERC721KC: Contract;
  let ERC721KCFactory: ContractFactory;

  before(async () => {
    [wallet0, wallet1, wallet2] = await getSigners();
    ERC721KCFactory = await ethers.getContractFactory('ERC721KC');
  });

  beforeEach(async () => {
    ERC721KC = await ERC721KCFactory.deploy('Collectable', 'NFT');
  });

  describe('mint(address to, uint256 amount)', () => {
    it('should SUCCEED to mint NFT #1', async () => {
   
    });
  });
});

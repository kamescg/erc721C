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
  let ERC20TWAB: Contract;
  let ERC20TWABFactory: ContractFactory;

  before(async () => {
    [wallet0, wallet1, wallet2] = await getSigners();
    ERC20TWABFactory = await ethers.getContractFactory('ERC20TWAB');
    ERC721KCFactory = await ethers.getContractFactory('ERC721KC');
  });

  beforeEach(async () => {
    ERC20TWAB = await ERC20TWABFactory.deploy('Token', 'TOK');
    ERC721KC = await ERC721KCFactory.deploy('Counterfactual', 'NFT', wallet0.address, ERC20TWAB.address);
  });

  describe('mint(address to, uint256 amount)', () => {
    it('should SUCCEED to mint NFT #1', async () => {});
  });
});

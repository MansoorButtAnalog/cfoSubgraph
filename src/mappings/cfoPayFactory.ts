import { cfoPayContract, cfoPayFactory, Token } from "../../generated/schema";
import { cfoPayCreated } from "../../generated/templates/cfoPay/cfoPayFactory";
import {ERC20} from "../../generated/cfoPayFactory/ERC20"
import {cfoPay} from "../../generated/templates"

export function oncfoPayCreated(event: cfoPayCreated): void {
  
  const factoryAddress = event.address;
  const tokenAddress = event.params.token;
  const cfoPayAddress = event.params.cfoPay;
  const block = event.block.number;
  const timestamp = event.block.timestamp;

  // Load Factory
  let factory = cfoPayFactory.load(factoryAddress.toHexString());

  // Create new Factory entity with info if null
  if (factory === null) {
    factory = new cfoPayFactory(factoryAddress.toHexString());
    factory.address = factoryAddress;
    factory.createdTimestamp = timestamp;
    factory.createdBlock = block;
  }

  // Create and fill new Token entity
  const erc20 = ERC20.bind(tokenAddress);
  let token = new Token(tokenAddress.toHexString());
  token.address = tokenAddress;
  token.symbol = (erc20.try_symbol()).value;
  token.name = (erc20.try_name()).value;
  token.decimals = (erc20.try_decimals()).value;
  token.createdTimestamp = timestamp;
  token.createdBlock = block;

  // Create new contract entity and fill with info
  let contract = new cfoPayContract(cfoPayAddress.toHexString());
  contract.address = cfoPayAddress;
  contract.factory = factory.id;
  contract.token = token.id;
  contract.createdTimestamp = timestamp;
  contract.createdBlock = block;

  // Map contract to Token
  token.contract = contract.id;

  // Start tracking the cfopay contract
  cfoPay.create(cfoPayAddress);

  // Add 1 to contracts counted by factory
  factory.count += 1;

  //Savooooor
  factory.save();
  token.save();
  contract.save();

}
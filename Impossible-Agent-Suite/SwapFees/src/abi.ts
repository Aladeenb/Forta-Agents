import { Interface } from "@ethersproject/abi";

const FACTORY: Interface = new Interface([
  "function allPairsLength() view returns (uint256)",
  "function allPairs(uint256 index) view returns (address)",
  "function getPair(address token0, address token1) view returns (address pair)",
  "event PairCreated(address indexed token0, address indexed token1, address pair, uint256)",
]);

const PAIR: Interface = new Interface([
  "function token0() view returns (address token)",
  "function token1() view returns (address token)",
  "event UpdatedTradeFees(uint256 _oldFee, uint256 _newFee)",
  "event UpdatedWithdrawalFeeRatio(uint256 _oldWithdrawalFee, uint256 _newWithdrawalFee)",
]);

export default {
  FACTORY,
  PAIR,
};

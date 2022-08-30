import { Network } from "forta-agent";
import {
  ARBITRUM_MONITORED_ADDRESSES,
  ARBITRUM_SPOKEPOOL,
  GOERLI_POC_MONITORED_ADDRESSES,
  GOERLI_POC_SPOKEPOOL_ADDRESS,
  MAINNET_MONITORED_ADDRESSES,
  MAINNET_SPOKEPOOL,
  OPTIMISM_MONITORED_ADDRESSES,
  OPTIMISM_SPOKEPOOL,
  POLYGON_MONITORED_ADDRESSES,
  POLYGON_SPOKEPOOL,
} from "./utils";

export interface NetworkDataInterface {
  spokePoolAddr: string;
  monitoredList: string[];
}

export const NM_DATA: Record<number, NetworkDataInterface> = {
  [Network.MAINNET]: {
    spokePoolAddr: MAINNET_SPOKEPOOL,
    monitoredList: MAINNET_MONITORED_ADDRESSES,
  },
  [Network.ARBITRUM]: {
    spokePoolAddr: ARBITRUM_SPOKEPOOL,
    monitoredList: ARBITRUM_MONITORED_ADDRESSES,
  },
  [Network.POLYGON]: {
    spokePoolAddr: POLYGON_SPOKEPOOL,
    monitoredList: POLYGON_MONITORED_ADDRESSES,
  },
  [Network.OPTIMISM]: {
    spokePoolAddr: OPTIMISM_SPOKEPOOL,
    monitoredList: OPTIMISM_MONITORED_ADDRESSES,
  },
  [Network.GOERLI]: {
    spokePoolAddr: GOERLI_POC_SPOKEPOOL_ADDRESS,
    monitoredList: GOERLI_POC_MONITORED_ADDRESSES, //PoC
  },
};

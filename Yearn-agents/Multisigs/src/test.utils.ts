import { Finding, FindingSeverity, FindingType } from "forta-agent";

const createOwnerAddedFindingGenerator = (ens: string, owner: string): Finding => 
  Finding.fromObject({
    name: "Yearn multisig wallet event detected",
    description: "New owner added",
    severity: FindingSeverity.Medium,
    type: FindingType.Info,
    protocol: "Yearn",
    alertId: "YEARN-1-1",
    metadata: {
      Multisig: ens,
      NewOwner: owner,
    },
  });

const createOwnerRemovedFindingGenerator = (ens: string, owner: string): Finding => 
  Finding.fromObject({
    name: "Yearn multisig wallet event detected",
    description: "New owner removed",
    severity: FindingSeverity.Medium,
    type: FindingType.Info,
    protocol: "Yearn",
    alertId: "YEARN-1-2",
    metadata: {
      Multisig: ens,
      OldOwner: owner,
    },
  });

const createExecutionSuccessFindingGenerator = (ens: string, hash: string, payment: string): Finding => 
  Finding.fromObject({
    name: "Year multisig wallet interaction detected",
    description: "Transaction executed succesfully",
    severity: FindingSeverity.Medium,
    type: FindingType.Info,
    protocol: "Yearn",
    alertId: "YEARN-1-3",
    metadata: {
      Multisig: ens,
      TxHash: hash,
      Payment: payment, 
    },
  });

const createExecutionFailureFindingGenerator = (ens: string, hash: string, payment: string): Finding => 
  Finding.fromObject({
    name: "Year multisig wallet interaction detected",
    description: "Transaction failed",
    severity: FindingSeverity.Medium,
    type: FindingType.Info,
    protocol: "Yearn",
    alertId: "YEARN-1-4",
    metadata: {
      Multisig: ens,
      TxHash: hash,
      Payment: payment, 
    },
  });

const createERC20TransferFindingGenerator = (ens: string, to: string, addr: string, value: BigInt): Finding => 
  Finding.fromObject({
    name: "Yearn multisig transfer detected",
    description: "ERC20 transfer",
    severity: FindingSeverity.Medium,
    type: FindingType.Info,
    protocol: "Yearn",
    alertId: "YEARN-1-5",
    metadata: {
      From: ens,
      To: to,
      Value: value.toString(),
      TokenAddress: addr,
    },
  });

const createETHTransferFindingGenerator = (ens: string, to: string, value: string): Finding => 
  Finding.fromObject({
    name: "Yearn multisig transfer detected",
    description: "ETH transfer",
    severity: FindingSeverity.Medium,
    type: FindingType.Info,
    protocol: "Yearn",
    alertId: "YEARN-1-6",
    metadata: {
      From: ens,
      To: to,
      Value: value,
    },
  });

export default {
  createOwnerAddedFindingGenerator,
  createOwnerRemovedFindingGenerator,
  createExecutionSuccessFindingGenerator,
  createExecutionFailureFindingGenerator,
  createERC20TransferFindingGenerator,
  createETHTransferFindingGenerator,
};

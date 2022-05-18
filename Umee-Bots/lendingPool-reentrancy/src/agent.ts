import { Finding, HandleTransaction, TransactionEvent } from "forta-agent";

import utils from "./utils";

export const handleTransaction =
  (
    contractAddress: string,
    reenterancyFunctionsSignatures: string[]
  ): HandleTransaction =>
  async (txEvent: TransactionEvent) => {
    const findings: Finding[] = [];
    const { traces } = txEvent;
    for (let i = 0; i < traces.length; i++) {
      const trace = traces[i];
      const depth = trace.traceAddress.length;

      if (trace.action.to === contractAddress) {
        let j;

        for (j = i + 1; j < traces.length; j++) {
          if (traces[j].traceAddress.length === depth) {
            i = j;
            break; // subtree ended
          }
          if (traces[j].action.to === contractAddress) {
            reenterancyFunctionsSignatures.map((functionSignature) => {
              const result = utils.FUNCTIONS_INTERFACE.decodeFunctionData(
                functionSignature,
                txEvent.transaction.data
              );
              if (result.length > 0) {
                findings.push(
                  utils.createFinding(
                    functionSignature.split(" ")[0]
                  )
                );
              }
            });
          }
        }
      }
    }
    return findings;
  };

export default {
  handleTransaction: handleTransaction(
    utils.LENDING_POOL_ADDRESS,
    utils.REENTERANCY_FUNCTIONS_SIGNATURES
  ),
};

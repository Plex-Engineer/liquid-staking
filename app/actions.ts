import { fromWei, secondsToDays } from "./utils";

const baseURL = "https://liquidstaking.plexnode.wtf/canto/liquidstaking";

export const runtime = "edge";

type Chunk_Status =
  | "CHUNK_STATUS_UNSPECIFIED"
  | "CHUNK_STATUS_UNSPECIFIED"
  | "CHUNK_STATUS_PAIRING"
  | "CHUNK_STATUS_PAIRED"
  | "CHUNK_STATUS_UNPAIRING"
  | "CHUNK_STATUS_UNPAIRING_FOR_UNSTAKING";

type Insurance_Status =
  | "INSURANCE_STATUS_UNSPECIFIED"
  | "INSURANCE_STATUS_PAIRING"
  | "INSURANCE_STATUS_PAIRED"
  | "INSURANCE_STATUS_UNPAIRING"
  | "INSURANCE_STATUS_UNPAIRING_FOR_WITHDRAWAL"
  | "INSURANCE_STATUS_UNPAIRED";

async function getChunkSize() {
  "use server";
  const url = `${baseURL}/v1/chunk_size`;
  try {
    const response = await fetch(url);
    const json: {
      chunk_size: {
        denom: string;
        amount: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getChunks() {
  "use server";
  const url = `${baseURL}/v1/chunks`;
  try {
    const response = await fetch(url);
    const json: {
      chunks: [
        {
          chunk: {
            id: string;
            paired_insurance_id: string;
            unpairing_insurance_id: string;
            status: Chunk_Status;
          };
          derived_address: string;
        }
      ];
      pagination: {
        next_key: string;
        total: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getChunksUnpairingForUnstakingChunkInfos() {
  "use server";
  const url = `${baseURL}/v1/unpairing_for_unstaking_chunk_infos?queued=true`;
  try {
    const response = await fetch(url);
    const json: {
      unpairing_for_unstaking_chunk_infos: [
        {
          chunk_id: string;
          delegator_address: string;
          escrowed_lstokens: {
            denom: string;
            amount: string;
          };
        }
      ];
      pagination: {
        next_key: string;
        total: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getChunk(id: string) {
  "use server";
  const url = `${baseURL}/v1/chunks/${id}`;
  try {
    const response = await fetch(url);
    const json: {
      chunk: {
        id: string;
        paired_insurance_id: string;
        unpairing_insurance_id: string;
        status: "CHUNK_STATUS_UNSPECIFIED";
      };
      derived_address: string;
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getChunkUnpairingForUnstakingChunkInfo(id: string) {
  "use server";
  const url = `${baseURL}/v1/chunks/${id}/unpairing_for_unstaking_chunk_infos`;
  try {
    const response = await fetch(url);
    const json: {
      unpairing_for_unstaking_chunk_info: {
        chunk_id: string;
        delegator_address: string;
        escrowed_lstokens: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getEpoch() {
  "use server";
  const url = `${baseURL}/v1/epoch`;
  try {
    const response = await fetch(url);
    const json: {
      epoch: {
        current_number: string;
        start_time: Date;
        duration: string;
        start_height: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getInsurances() {
  "use server";
  const url = `${baseURL}/v1/insurances`;
  try {
    const response = await fetch(url);
    const json: {
      insurances: [
        {
          insurance: {
            id: string;
            validator_address: string;
            provider_address: string;
            fee_rate: string;
            chunk_id: string;
            status: Insurance_Status;
          };
          derived_address: string;
          fee_pool_address: string;
        }
      ];
      pagination: {
        next_key: string;
        total: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getInsurancesWithdrawInsuranceRequests() {
  "use server";
  const url = `${baseURL}/v1/withdraw_insurance_requests`;
  try {
    const response = await fetch(url);
    const json: {
      withdraw_insurance_requests: [
        {
          insurance_id: string;
        }
      ];
      pagination: {
        next_key: string;
        total: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getInsurance(id: string) {
  "use server";
  const url = `${baseURL}/v1/insurances/${id}`;
  try {
    const response = await fetch(url);
    const json: {
      insurance: {
        id: string;
        validator_address: string;
        provider_address: string;
        fee_rate: string;
        chunk_id: string;
        status: Insurance_Status;
      };
      derived_address: string;
      fee_pool_address: string;
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getStates() {
  "use server";
  const url = `${baseURL}/v1/states`;
  try {
    const response = await fetch(url);
    const json: {
      net_amount_state: {
        mint_rate: string;
        ls_tokens_total_supply: string;
        net_amount: string;
        total_liquid_tokens: string;
        reward_module_acc_balance: string;
        fee_rate: string;
        utilization_ratio: string;
        remaining_chunk_slots: string;
        num_paired_chunks: string;
        chunk_size: string;
        discount_rate: string;
        total_del_shares: string;
        total_remaining_rewards: string;
        total_chunks_balance: string;
        total_unbonding_chunks_balance: string;
        total_insurance_tokens: string;
        total_paired_insurance_tokens: string;
        total_unpairing_insurance_tokens: string;
        total_remaining_insurance_commissions: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getAccumulatedCommission(fee_pool_address: string) {
  "use server";
  const url = `https://liquidstaking.plexnode.wtf/cosmos/bank/v1beta1/balances/${fee_pool_address}/by_denom?denom=acanto`;
  try {
    const response = await fetch(url);
    const json: {
      balance: {
        denom: string;
        amount: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getInsuranceAmount(derived_address: string) {
  "use server";
  const url = `https://liquidstaking.plexnode.wtf/cosmos/bank/v1beta1/balances/${derived_address}/by_denom?denom=acanto`;
  try {
    const response = await fetch(url);
    const json: {
      balance: {
        denom: string;
        amount: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

// async function getUnpairingForUnstakingChunkInfos() {
//   "use server";
//   const url = `${baseURL}/v1/unpairing_for_unstaking_chunk_infos?queued=true`;
//   try {
//     const response = await fetch(url);
//     const json: {
//       unpairing_for_unstaking_chunk_infos: [
//         {
//           chunk_id: string;
//           delegator_address: string;
//           escrowed_lstokens: string;
//         }
//       ];
//       pagination: {
//         next_key: string;
//         total: string;
//       };
//     } = await response.json();
//     return json;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getWithdrawInsuranceRequests() {
//   "use server";
//   const url = `${baseURL}/v1/withdraw_insurance_requests`;
//   try {
//     const response = await fetch(url);
//     const json: {
//       withdraw_insurance_requests: [
//         {
//           insurance_id: string;
//         }
//       ];
//       pagination: {
//         next_key: string;
//         total: string;
//       };
//     } = await response.json();
//     return json;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function fetchAllData() {
  "use server";

  const epoch = await getEpoch();
  const insurances = await getInsurances();

  const states = await getStates();

  //check if data is null
  if (states == null) throw new Error("states is null");
  if (epoch?.epoch == null) throw new Error("epoch is null");

  //******** Dashboard elements start here ********
  const totalSupplyOfLSCanto = fromWei(
    states?.net_amount_state.ls_tokens_total_supply
  );
  const insuranceCoverage = fromWei(
    (
      Number(states?.net_amount_state.num_paired_chunks) *
      Number(states?.net_amount_state.chunk_size)
    ).toString()
  );

  const insuranceCollateral = fromWei(
    states?.net_amount_state.total_paired_insurance_tokens
  );
  const accumulatedCommission = fromWei(
    states?.net_amount_state.reward_module_acc_balance
  );
  const mintRate = Number(states?.net_amount_state.mint_rate).toFixed(2);
  const remainingChunkSlots = states?.net_amount_state.remaining_chunk_slots;
  const remainingTimeToNextEpoch = secondsToDays(epoch?.epoch.duration);
  const UnbondingChunksAmount = fromWei(
    states?.net_amount_state.total_unbonding_chunks_balance
  );
  const unpairingInsuranceAmount = fromWei(
    states?.net_amount_state.total_unpairing_insurance_tokens
  );

  //******** Dashboard elements end here ********

  const Insurances_Active = insurances?.insurances.filter(
    (insurance) => insurance.insurance.status === "INSURANCE_STATUS_PAIRED"
  );
  const Insurances_Candidates = insurances?.insurances.filter(
    (insurance) => insurance.insurance.status === "INSURANCE_STATUS_PAIRING"
  );

  const withdraw_insurance_requests = (
    await getInsurancesWithdrawInsuranceRequests()
  )?.withdraw_insurance_requests.map((insurance) => {
    try {
      return {
        id: insurance.insurance_id,
        requestor: insurances?.insurances.find(
          (ins) => ins.insurance.id === insurance.insurance_id
        )?.insurance.provider_address,
      };
    } catch (error) {
      console.log(error);
    }
  });

  const liquid_unstake_requests = (
    await getChunksUnpairingForUnstakingChunkInfos()
  )?.unpairing_for_unstaking_chunk_infos.map((chunk) => {
    try {
      return {
        id: chunk.chunk_id,
        requestor: chunk.delegator_address,
      };
    } catch (error) {
      console.log(error);
    }
  });

  const insurancesActive = Insurances_Active?.map(async (insurance) => {
    try {
      const insuranceAmount = await getInsuranceAmount(
        insurance.derived_address
      );
      const accumulatedCommission = await getAccumulatedCommission(
        insurance.fee_pool_address
      );
      if (accumulatedCommission == null)
        throw new Error("accumulatedCommission is null");

      if (insuranceAmount == null) throw new Error("insuranceAmount is null");

      return {
        id: insurance.insurance.id,
        provider: insurance.insurance.provider_address,
        validator: insurance.insurance.validator_address,
        fee_rates: Number(insurance.insurance.fee_rate).toFixed(2),
        accumulated_commission: fromWei(accumulatedCommission.balance.amount),
        insurance_amount: fromWei(insuranceAmount.balance.amount),
      };
    } catch (error) {
      console.log(error);
    }
  });

  const insurancesCandidate = Insurances_Candidates?.map(async (insurance) => {
    try {
      const insuranceAmount = await getInsuranceAmount(
        insurance.derived_address
      );
      const accumulatedCommission = await getAccumulatedCommission(
        insurance.fee_pool_address
      );
      if (accumulatedCommission == null)
        throw new Error("accumulatedCommission is null");

      if (insuranceAmount == null) throw new Error("insuranceAmount is null");

      return {
        id: insurance.insurance.id,
        provider: insurance.insurance.provider_address,
        validator: insurance.insurance.validator_address,
        fee_rates: Number(insurance.insurance.fee_rate).toFixed(2),
        accumulated_commission: fromWei(accumulatedCommission.balance.amount),
        insurance_amount: fromWei(insuranceAmount.balance.amount),
      };
    } catch (error) {
      console.log(error);
    }
  });
  if (insurancesActive == null) throw new Error("insurancesActive is null");
  if (insurancesCandidate == null)
    throw new Error("insurancesCandidate is null");

  return {
    total_supply_of_ls_canto: totalSupplyOfLSCanto,
    insurance_coverage: insuranceCoverage,
    insurance_collateral: insuranceCollateral,
    accumulated_commission: accumulatedCommission,
    mint_rate: mintRate,
    remaining_chunk_slots: remainingChunkSlots,
    remaining_time_to_next_epoch: remainingTimeToNextEpoch,
    unbonding_chunks_amount: UnbondingChunksAmount,
    unpairing_insurance_amount: unpairingInsuranceAmount,
    insurances_active: await Promise.all(insurancesActive),
    insurances_candidate: await Promise.all(insurancesCandidate),
    withdraw_insurance_requests: withdraw_insurance_requests,
    liquid_unstake_requests: liquid_unstake_requests,
  };
}

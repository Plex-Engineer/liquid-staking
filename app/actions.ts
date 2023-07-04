"use server";

const baseURL = "https://liquidstaking.plexnode.wtf/canto/liquidstaking";

async function getChunkSize() {
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

type Chunk_Status =
  | "CHUNK_STATUS_UNSPECIFIED"
  | "CHUNK_STATUS_UNSPECIFIED"
  | "CHUNK_STATUS_PAIRING"
  | "CHUNK_STATUS_PAIRED"
  | "CHUNK_STATUS_UNPAIRING"
  | "CHUNK_STATUS_UNPAIRING_FOR_UNSTAKING";

async function getChunks() {
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
  const url = `${baseURL}/v1/chunks/unpairing_for_unstaking_chunk_infos`;
  try {
    const response = await fetch(url);
    const json: {
      unpairing_for_unstaking_chunk_infos: [
        {
          chunk_id: string;
          delegator_address: string;
          escrowed_lstokens: string;
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

type Insurance_Status =
  | "INSURANCE_STATUS_UNSPECIFIED"
  | "INSURANCE_STATUS_PAIRING"
  | "INSURANCE_STATUS_PAIRED"
  | "INSURANCE_STATUS_UNPAIRING"
  | "INSURANCE_STATUS_UNPAIRING_FOR_WITHDRAWAL"
  | "INSURANCE_STATUS_UNPAIRED";

async function getInsurances() {
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
  const url = `${baseURL}/v1/insurances/withdraw_insurance_requests`;
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

async function getInsuranceWithdrawInsuranceRequest(id: string) {
  const url = `${baseURL}/v1/insurances/${id}/withdraw_insurance_requests`;
  try {
    const response = await fetch(url);
    const json: {
      withdraw_insurance_request: {
        insurance_id: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
async function getMinimumCollateral() {
  const url = `${baseURL}/v1/minimum_collateral`;
  try {
    const response = await fetch(url);
    const json: {
      minimum_collateral: {
        denom: string;
        amount: string;
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getParams() {
  const url = `${baseURL}/v1/params`;
  try {
    const response = await fetch(url);
    const json: {
      params: {
        dynamic_fee_rate: {
          r0: string;
          u_soft_cap: string;
          u_hard_cap: string;
          u_optimal: string;
          slope1: string;
          slope2: string;
          max_fee_rate: string;
        };
      };
    } = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getStates() {
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
export async function testMessage() {
  console.log("Hello World");
}

//a function to testAll the functions
export async function testAll() {
  const chunkSize = await getChunkSize();
  const chunks = await getChunks();
  const chunksUnpairingForUnstakingChunkInfos =
    await getChunksUnpairingForUnstakingChunkInfos();
  const chunk = await getChunk("string");
  const chunkUnpairingForUnstakingChunkInfo =
    await getChunkUnpairingForUnstakingChunkInfo("string");
  const epoch = await getEpoch();
  const insurances = await getInsurances();
  const insurancesWithdrawInsuranceRequests =
    await getInsurancesWithdrawInsuranceRequests();
  const insurance = await getInsurance("string");
  const insuranceWithdrawInsuranceRequest =
    await getInsuranceWithdrawInsuranceRequest("string");
  const minimumCollateral = await getMinimumCollateral();
  const params = await getParams();
  const states = await getStates();

  console.log(
    chunkSize,
    chunks,
    chunksUnpairingForUnstakingChunkInfos,
    chunk,
    chunkUnpairingForUnstakingChunkInfo,
    epoch,
    insurances,
    insurancesWithdrawInsuranceRequests,
    insurance,
    insuranceWithdrawInsuranceRequest,
    minimumCollateral,
    params,
    states
  );
}

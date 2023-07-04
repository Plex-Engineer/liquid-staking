"use server";

const baseURL = "https://liquidstaking.plexnode.wtf/canto/liquidstaking";

async function getChunkSize() {
  const url = `${baseURL}/v1/chunk_size`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getChunks() {
  const url = `${baseURL}/v1/chunks`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getChunksUnpairingForUnstakingChunkInfos() {
  const url = `${baseURL}/v1/chunks/unpairing_for_unstaking_chunk_infos`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getChunk(id: string) {
  const url = `${baseURL}/v1/chunks/${id}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getChunkUnpairingForUnstakingChunkInfo(id: string) {
  const url = `${baseURL}/v1/chunks/${id}/unpairing_for_unstaking_chunk_infos`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getEpoch() {
  const url = `${baseURL}/v1/epoch`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getInsurances() {
  const url = `${baseURL}/v1/insurances`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getInsurancesWithdrawInsuranceRequests() {
  const url = `${baseURL}/v1/insurances/withdraw_insurance_requests`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getInsurance(id: string) {
  const url = `${baseURL}/v1/insurances/${id}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getInsuranceWithdrawInsuranceRequest(id: string) {
  const url = `${baseURL}/v1/insurances/${id}/withdraw_insurance_requests`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
async function getMinimumCollateral() {
  const url = `${baseURL}/v1/minimum_collateral`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getParams() {
  const url = `${baseURL}/v1/params`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getStates() {
  const url = `${baseURL}/v1/states`;
  try {
    const response = await fetch(url);
    const json = await response.json();
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

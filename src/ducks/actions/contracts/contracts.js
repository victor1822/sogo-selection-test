export const LOAD_CONTRACTS_STATE = 'LOAD_CONTRACTS_STATE'
export const ADD_NEW_CONTRACT_ACTION = 'ADD_NEW_CONTRACT_ACTION'

export const loadContractsAction = (contractsArray) => ({
  type: LOAD_CONTRACTS_STATE,
  payload: contractsArray
})

export const addNewContractAction = (contractsArray) => ({
  type: ADD_NEW_CONTRACT_ACTION,
  payload: contractsArray
})

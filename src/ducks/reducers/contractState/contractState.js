import clientSideCookies from 'js-cookie'
import { LOAD_CONTRACTS_STATE, ADD_NEW_CONTRACT_ACTION } from '../../actions/contracts/contracts'
import createReducer from '../../../helpers/createReducer/createReducer'

const initialState = {
  contracts: []
}

export const contractState = createReducer(initialState, {
  [LOAD_CONTRACTS_STATE]: (state, action) => ({
    ...state,
    contracts: action.payload
  }),
  [ADD_NEW_CONTRACT_ACTION]: (state, action) => {
    clientSideCookies.set('@sogo-test/savedContracts', JSON.stringify({ savedContracts: action.payload }))
    return ({
      ...state,
      contracts: action.payload
    })
  }
})

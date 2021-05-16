import clientSideCookies from 'js-cookie'
import { LOAD_CONTRACTS_STATE, ADD_NEW_CONTRACT_ACTION } from '../../actions/contracts/contracts'
import createReducer from '../../../helpers/createReducer/createReducer'

const initialState = {
  contracts: [
    {
      id: 1,
      employee: {
        name: 'Victor Sales Dantas',
        cpf: '055.674.843-24',
        email: 'victsales@gmail.com',
        address: {
          cep: '58037-325',
          address: 'Rua Dr. Ivanildo Guedes Pessoa',
          number: '81',
          complement: 'Apto 802',
          neighbourhood: 'Jardim Oceania',
          city: 'João Pessoa',
          state: 'Paraíba'
        }
      },
      number: '5832342424242.323-23',
      creation_date: new Date(),
      valid_thru: new Date(2021, 4, 17)
    },
    {
      id: 2,
      employee: {
        name: 'Samara Medeiros de almeida',
        cpf: '055.674.843-24',
        email: 'leticia@gmail.com',
        address: {
          cep: '58037-325',
          address: 'Rua Dr. Ivanildo Guedes Pessoa',
          number: '81',
          complement: 'Apto 802',
          neighbourhood: 'Jardim Oceania',
          city: 'João Pessoa',
          state: 'Paraíba'
        }
      },
      number: '5832342424242.323-24',
      creation_date: new Date(),
      valid_thru: new Date(2021, 4, 16)
    },
    {
      id: 3,
      employee: {
        name: 'Lúcia Medeiros de almeida',
        cpf: '055.674.843-24',
        email: 'leticia@gmail.com',
        address: {
          cep: '58037-325',
          address: 'Rua Dr. Ivanildo Guedes Pessoa',
          number: '81',
          complement: 'Apto 802',
          neighbourhood: 'Jardim Oceania',
          city: 'João Pessoa',
          state: 'Paraíba'
        }
      },
      number: '5832342424242.323-24',
      creation_date: new Date(),
      valid_thru: new Date(2021, 4, 16)
    },
    {
      id: 4,
      employee: {
        name: 'Marta Medeiros de almeida',
        cpf: '055.674.843-24',
        email: 'leticia@gmail.com',
        address: {
          cep: '58037-325',
          address: 'Rua Dr. Ivanildo Guedes Pessoa',
          number: '81',
          complement: 'Apto 802',
          neighbourhood: 'Jardim Oceania',
          city: 'João Pessoa',
          state: 'Paraíba'
        }
      },
      number: '5832342424242.323-24',
      creation_date: new Date(2020, 5, 1),
      valid_thru: new Date(2020, 5, 10)
    }
  ]
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

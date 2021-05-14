import createReducer from './createReducer'

describe('ReducerHelper', () => {
  it('should return the initial state', () => {
    const defaultState = {}
    const reducer = createReducer(defaultState, {
      MOCK_ACTION: (defaultState.test = 'test'),
    })

    expect(reducer(defaultState, '')).toEqual(defaultState)
  })

  it('should return the result current handler', () => {
    const InitialState = {
      name: '',
    }
    const reducer = createReducer(InitialState, {
      MOCK_ACTION: (InitialState.name = 'john'),
    })

    expect(reducer(InitialState, 'MOCK_ACTION')).toEqual({ name: 'john' })
  })
})

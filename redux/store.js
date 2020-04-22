import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/indexReducer'

const middleware = []

export const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
export default store

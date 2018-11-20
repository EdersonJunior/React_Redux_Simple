import { combineReducers } from 'redux'
import FavoriteBandReducer from './reducer_favoriteBand'
import BandsReducer from './reducer_bands'

const rootReducer = combineReducers({
    favoriteBand: FavoriteBandReducer,
    bands: BandsReducer
})

export default rootReducer
import counterReducer from "./counterReducer.js"
import userReducer from "./userReducer.js"
import { combineReducers} from "redux"

const rootReducer = combineReducers({
    counterReducer,
    userReducer
})

export default rootReducer
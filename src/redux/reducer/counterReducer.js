
// reducer(state, action)
// eslint-disable-next-line import/no-anonymous-default-export
// export default (state = {count: 0},action) => {
//     switch (action.type){
//         case "INCREMENT":
//             return { count: state.count + 1}
//         case "DECREMENT":
//             return { count: state.count - 1}
//         default:
//             return state
//     }
// }
const counterReducer = (state = {count: 0},action) => {
    switch (action.type){
        case "INCREMENT":
            return { count: state.count + 1}
        case "DECREMENT":
            return { count: state.count - 1}
        default:
            return state
    }
}
export default counterReducer
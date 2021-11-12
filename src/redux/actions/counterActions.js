// action = {
//     type: "action name",
//     payload: "info to do the action (as function parameters"
// }
const increment = () => {
    return {
        type: "INCREMENT"
    }
}

const decrement = () => ({
    type: "DECREMENT"
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    increment,
    decrement
}
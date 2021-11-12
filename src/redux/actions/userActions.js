
const logIn = (userObj) => ({
    type: "LOGIN",
    payload: userObj
})

const logOut = () => ({
    type: "LOGOUT"
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logIn,
    logOut
}
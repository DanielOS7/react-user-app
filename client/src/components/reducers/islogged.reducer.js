let loggedIn = false

const loggedReducer = (state = loggedIn, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state
        default:
            return false

    }

}

export default loggedReducer;
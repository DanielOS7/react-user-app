const api = 'http://localhost:2700/api/v1/user';

export default class UserService {

    createUsers = (_body) => {

        return fetch(`${api}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_body)
        })
    }

}





const api = 'http://localhost:2700';

export default class UserService {

    createUsers = (_body) => {

        return fetch(`${api}/addUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_body)
        })
    }

}





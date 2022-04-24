const UserService = require('../services/UserService');

class UserView {
    static createUser(payload) {
        // check if there is something in payload
        if(!payload) return { error: 'payload no existe' } 

        // check if payload's props are not null
        if(payload.id === null | payload.username === null | payload.name === null) return { error: 'necesitan tener un valor válido' }

        // check if payload's props are not undefined
        if(payload.id === undefined | payload.username === undefined | payload.name === undefined) return { error: 'necesitan tener un valor válido' }

        return UserService.create(payload.id, payload.username, payload.name);
    }
}

module.exports = UserView;
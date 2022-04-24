const UserService = require('./../../app/services/UserService');

describe('Tests for UserService', () => {
    test('1) Create a new user using the UserService', () => {
        const user = UserService.create(1, 'enrique-mendoza', 'Enrique');

        expect(user.id).toBe(1);
        expect(user.username).toBe('enrique-mendoza');
        expect(user.name).toBe('Enrique');
        expect(user.bio).not.toBeUndefined();
    });

    test('2) Get all user data in a list', () => {
        const user = UserService.create(1, 'enrique-mendoza', 'Enrique');
        const userInfoInList = UserService.getInfo(user);

        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe('enrique-mendoza');
        expect(userInfoInList[2]).toBe('Enrique');
        expect(userInfoInList[3]).toBe('No Bio');
    });

    test('3) Update username', () => {
        const user = UserService.create(1, 'enrique-mendoza', 'Enrique');
        UserService.updateUsername(user, 'pepe');

        expect(user.username).toBe('pepe');
    });

    test('4) Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(1, 'enrique-mendoza', 'Enrique');
        const user2 = UserService.create(2, 'juan-perez', 'Juan');
        const user3 = UserService.create(3, 'daniel-sanchez', 'Daniel');
        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames).toContain('enrique-mendoza');
        expect(usernames).toContain('juan-perez');
        expect(usernames).toContain('daniel-sanchez');
    });
});
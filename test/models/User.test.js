const User = require('./../../app/models/User');

describe('Unit Tests for User class', () => {
    test('Create an User object', () => {
        const user = new User(1, 'enrique-mendoza', 'Enrique', 'Bio');

        expect(user.id).toBe(1);
        expect(user.username).toBe('enrique-mendoza');
        expect(user.name).toBe('Enrique');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const user = new User(1, 'enrique-mendoza', 'Enrique', 'Bio');

        expect(user.getUsername).toBe('enrique-mendoza');
        expect(user.getBio).toBe('Bio');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test('Add setters', () => {
        const user = new User(1, 'enrique-mendoza', 'Enrique', 'Bio');

        user.setUsername = 'Pedro';
        expect(user.username).toBe('Pedro');

        user.setBio = 'New Bio';
        expect(user.getBio).toBe('New Bio');
    });
});
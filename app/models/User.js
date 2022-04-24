class User {
    constructor(
        id = '',
        username = '',
        name = '',
        bio = '',
        dateCreated = new Date(),
        lastUpdated = new Date(),
    ) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }

    get getUsername() {
        return this.username;
    }

    get getBio() {
        return this.bio;
    }

    get getDateCreated() {
        return this.dateCreated;
    }

    get getLastUpdated() {
        return this.lastUpdated;
    }

    set setUsername(username) {
        this.username = username;
    }

    set setBio(bio) {
        this.bio = bio;
    }
}

module.exports = User;
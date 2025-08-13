export default class Character {
    constructor(name, type, health = 100, attack = 10) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.attack = attack;
    }
}
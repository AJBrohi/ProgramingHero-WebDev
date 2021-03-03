"use strict";
const messi = {
    name: 'Messi',
    club: 'Barcelona',
    salary: 5000000,
    wife: 'Messir Bou',
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'Madrid',
    salary: 5000000,
    isPlaying: true
};
function getBonus(player) {
    return player.salary * 0.1;
}

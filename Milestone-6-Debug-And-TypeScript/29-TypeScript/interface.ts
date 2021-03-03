interface Player{
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messi: Player = {
    name: 'Messi',
    club: 'Barcelona',
    salary: 5000000,
    wife: 'Messir Bou',
    isPlaying: true
}

const ronaldo: Player = {
    name: 'Ronaldo',
    club: 'Madrid',
    salary: 5000000,
    isPlaying: true
}

function getBonus(player: Player){
    return player.salary * 0.1;
}
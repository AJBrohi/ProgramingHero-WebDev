const numbers: number[] = [2,3,4,5,6];
numbers.push(22);

const friends: string[] = ['AJ','Brohi'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if(friend.length > megaName.length){
        megaName = friend;
    }
}

console.log('Friend with the largest name:', megaName);
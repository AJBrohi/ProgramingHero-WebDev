function doSomething() {
    fetch("http://www.boredapi.com/api/activity/")
        .then(res => res.json())
        .then(data => {
            document.getElementById('activity').innerText = data.activity;
        })
}

doSomething();
setInterval(() => {
    doSomething();
    userAPI();
}, 4000);

function userAPI(){
    fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(data =>{
        const user = data.results[0];
        const name = user.name;
        const userName = `${name.title} ${name.first} ${name.last}`;
        document.getElementById('username').innerText = userName;
    })
}

userAPI();
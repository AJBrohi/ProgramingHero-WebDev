fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUser(json))
// catch(error => console.log(error))

function displayUser(users) {
    const userNames = users.map(user => user.username)
    const ul = document.getElementById('users-container');

    for (let i = 0; i < userNames.length; i++) {
        const user = userNames[i];
        const li = document.createElement('li');
        li.innerText = user;
        ul.appendChild(li);
    }
}

document.getElementById('submit').addEventListener('click', function () {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const postInfo = { title: title, body: body };
    nowPostToServer(postInfo);
})

function nowPostToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => displayData(data));
        // .catch(error => alert('Data cant be sent'));
}

function displayData(datas) {
    const show = document.getElementById('show-data');
    show.innerText = datas.title +" " + datas.body;
}


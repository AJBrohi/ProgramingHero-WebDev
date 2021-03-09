import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';



// main part
function App() {
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'Acrobat Reader', price: '$6.99' }
  ]

  const friends = ['Brohi', 'AJ', 'AJBrohi', 'AJIB', 'Bro', 'Hi'];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello World</h2>
        <Person ></Person>
        <Person2 name="AJBrohi (Through props)"></Person2>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <ul>
          {
            friends.map(friend => <Friend name={friend}></Friend>)
          }
        </ul>

        <Counter></Counter>

        <Users></Users>

      </header>
    </div>
  );
}

function Person() {
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: AJBrohi</h1>
      <p>Shera Manush</p>
    </div>
  )
}

function Person2(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <p>Shera Manush</p>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '450px',
    float: 'left'
  }

  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h2>Name: {name}</h2>
      <h1>Price: {price}</h1>
      <button>Buy Now</button>
    </div>
  )
}


function Friend(props) {
  const friendsStyle = {
    backgroundColor: 'lightblue'
  }
  return (
    <div style={friendsStyle}>
      <li>{props.name}</li>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  // const handleIncrease = () => setCount(count+1);

  return (
    <div>
      <h2>Use State</h2>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const userNamesStyle = { border: '2px solid white' }
  return (
    <div>
      <h3>API</h3>
      <h4>Dynamic Users: {users.length}</h4>
      {
        users.map(user => <p style={userNamesStyle}>{user.name}</p>)
      }
    </div>
  )
}

export default App;

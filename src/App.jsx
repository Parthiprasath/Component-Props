
import './App.css'
import UserProfile from "./Components/PlayerProfile";

function App() {
  const players = [
    { name: 'Dhoni', age: 43, Role: 'WK-Batsmen' },
    { name: 'Rohit', age: 37, Role: 'Batsmen' },
    { name: 'Kholi', age: 35, Role: 'Batsmen' },
  ];

  return (
    <div className="container">
    <h1>Players Profile</h1>
    {players.map((player, index) => (
      <UserProfile key={index} {...player} />
    ))}
  </div>
  )
}

export default App

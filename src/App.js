
import Axios from './Components/Axios';
import './App.css';

import Counter from './Features/Counter/Counter';

function App() {
  const Prizes = [{ Rank:1, Amount: 300 }, { Rank:2, Amount: 500 }, {Rank:3, Amount: 400 }]
  const sumArr = Prizes.reduce((a, b) => a + b.Amount,0)
  
  console.log(sumArr)

  
  return (
    <div className="App">
  <Counter/>
 <Axios/>
    </div>
  );
}

export default App;

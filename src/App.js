

import './App.css';
import {AddPost} from './Features/AddPost';
import Post from './Features/Posts/Post';


function App() {
  const Prizes = [{ Rank:1, Amount: 300 }, { Rank:2, Amount: 500 }, {Rank:3, Amount: 400 }]
  const sumArr = Prizes.reduce((a, b) => a + b.Amount,0)
  
  console.log(sumArr)

  
  return (
    <div className="App">
        <AddPost/>
  <Post/>

    </div>
  );
}

export default App;

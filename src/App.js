import './App.css';
/* oppg. 10 */
import { useState } from 'react';

//components
import MyComponent from './components/MyComponent';
import MyTitle from './components/Title';
import Wrapper from './components/Wrapper';
import Food from './components/Food';

function App() {
  /* Oppg. 6 og 7 */
  const food = ['Pizza', 'Hamburger', 'Coke'];
  /* Oppg. 8 */
  function button() {
    console.log('Clicked');
  }
  /* Oppg. 9 */
  function handleInput(event) {
    const value = event.target.value;
    setText(value);
  }

  /* Oppg. 10 */
  const [text, setText] = useState('');

  return (
    <div className="container">
      {/* <MyComponent/> */}

      {/* oppg. 1 og 2 */}
      <div>
        <MyComponent title="it Works" />
      </div>
      {/* <div>
        <Title title = "Test"/>
      </div> */}

      {/* Oppg. 2 */}
      <MyTitle />

      {/* oppg. 4 */}
      {
        <Wrapper>
          <MyTitle title="test" />
        </Wrapper>
      }

      {/* Oppg.6 */}
      {/*      <>
        <ul>
            {food.map(function(foodList, index){
              return <li key= {index}>{foodList}</li>
            })}
          </ul>    
      </> }

      {/* oppg. 7 */}

      <>
        <Food
          food={food.map(function (foodList, index) {
            return <li key={index}>{foodList}</li>;
          })}
        />
      </>

      {/* Oppg.8 */}
      <button onClick={button}>Button</button>

      {/* Oppg. 9 og 10*/}
      <>
        <p>Datautskrift</p>
        {text}
        <form>
          <label for="text"></label>
          <input
            type="text"
            placeholder="Add text..."
            onChange={handleInput}
            value={text}
          ></input>
        </form>
      </>
    </div>
  );
}

export default App;

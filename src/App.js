import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';
import ArticlesList from './components/ArticlesList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <ThemeContextProvider>
        <h1>Counter {counter}</h1> 
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {isLogged ? <h3>Valuabel Information I shouldn't see</h3>: ''}
        <ArticlesList />
        <ThemeToggle/>
       </ThemeContextProvider>
    </div>
  );
}

export default App;

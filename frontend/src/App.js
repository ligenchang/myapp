// frontend/src/App.js
import React from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import Items from './components/items'

function App() {
  return (
    <div>
      <h1>My Node.js App</h1>
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;

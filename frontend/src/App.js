import './App.css';
import ItemComponent from './components/ItemComponent';
import AddItemComponent from './components/AddItemComponent';
import { useEffect, useState } from 'react';

function App() {
  /*const listItems = [
    { 
      title: 'item1', 
      id: 1,
      subject: 'maths',
      comment: 'Hello this is a generic comment about this item',
      completed: false
    }, 
    { 
      title: 'item2', 
      id: 2,
      subject: 'chemistry',
      comment: 'Hello this is a generic comment about this item',
      completed: false
    }, 
    { 
      title: 'item3', 
      id: 3,
      subject: 'physics',
      comment: 'Hello this is a generic comment about this item',
      completed: false
    }, 
    { 
      title: 'item4', 
      id: 4,
      subject: 'art and design',
      comment: 'Hello this is a generic comment about this item',
      completed: false 
    },
    {
      title: 'item5',
      id: 5,
      subject: 'CDT',
      comment: 'Hello this is a generic comment about this item',
      completed: false
    }
  ]*/

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [])

  if(loading) {
    return <p>Items are loading...</p>
  }

  return (
    <div className="App">

      <div className='itemList'>
        <ul>
          {
            items.map((e) => {
              return <ItemComponent key={e._id} item={e} />
            })
          }
        </ul>
      </div>
      <div className='addItem'>
        <AddItemComponent />      
      </div>
    </div>
  );
}

export default App;

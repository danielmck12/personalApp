import './App.css';

import AddItemComponent from './components/AddItems/AddItemComponent';

import CompletedItems from './components/Lists/CompletedItems/CompletedItems';
import InProgressItems from './components/Lists/InProgressItems/InProgressItem';
import UnCompletedItems from './components/Lists/UnCompletedItems/UnCompletedItems';

import axios from 'axios';
import { useState, useEffect } from 'react';

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

  const getList = async () => { 
    try {
      const { data } = await axios.get('http://localhost:3000/items')
      console.log(data)
      setItems(data);
      setLoading(false);
      return;
    } catch (e) {
      return console.log(e);
    }
  }

  useEffect(() => {
    console.log('here')
    getList()

    
  }, [loading])
  
  /*if(loading) {
    return <LoadingScreen />
  }*/

  return (
    <div className="outerApp">
      <div className="App">
        <div className='itemList unCompleted'>
          <UnCompletedItems items={items} setLoading={setLoading} loading={loading} />
        </div>
        <div className="itemList inProgress">
          <InProgressItems items={items} setLoading={setLoading} loading={loading}/>
        </div>
        <div className="itemList completed">
          <CompletedItems items={items} setLoading={setLoading} loading={loading}/>
        </div>
        
      </div>
      <div className='addItem'>
        <AddItemComponent setLoading={() => setLoading(true)} />
      </div>
    </div>
    
    
  );
}

export default App;

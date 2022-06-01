import './App.css';

import AddItemComponent from './components/AddItems/AddItemComponent';

import ItemList from './components/Lists/ItemList';

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
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false)
  }, [loading])
  
  /*if(loading) {
    return <LoadingScreen />
  }*/

  return (
    <div className="outerApp">
      <div className="App">
        <div className='itemList unCompleted'>
          <ItemList progress={1} setLoading={setLoading} loading={loading} />
        </div>
        <div className="itemList inProgress">
          <ItemList progress={2} setLoading={setLoading} loading={loading}/>
        </div>
        <div className="itemList completed">
          <ItemList progress={3} setLoading={setLoading} loading={loading}/>
        </div>
        
      </div>
      <div className='addItem'>
        <AddItemComponent setLoading={() => setLoading(true)} />
      </div>
    </div>
    
    
  );
}

export default App;

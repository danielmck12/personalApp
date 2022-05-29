import ItemComponent from "../../ItemComponent/ItemComponent";

function InProgressItems(props) {
   const listItems = [
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
   ]
   
   return (
      <div>
         <h2><strong>In Progress Tasks</strong></h2>
         <ul>
            {listItems.map((e) => {
               return <ItemComponent setLoading={() => props.setLoading(true)} progress={2} key={e._id} item={e} />
            })}
         </ul>
      </div>
   )
}

export default InProgressItems;
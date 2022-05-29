import ItemComponent from "../../ItemComponent/ItemComponent";

function UnCompletedItems(props) {
   return (
      <div>
         <h2><strong>Un Completed Tasks</strong></h2>
         <ul>
            {
               props.items.map((e) => {
                  return <ItemComponent progress={1} setLoading={() => props.setLoading(true)} key={e._id} item={e} />
               })
            }
         </ul>
      </div>
   )
}

export default UnCompletedItems;
import React, {useState} from 'react'
import Tasklist from './tasklist';

function App() {
const [items, setItems] = useState("");
const[itemList, setItemList]=useState([]);

const itemEvent =(event)=>{
  setItems(event.target.value)
}
const addItems=()=>{
  setItemList((oldtask)=>{
    return [...oldtask,items]
  });

};
const deleteItems=(id)=>{
  console.log('deleted')
  setItemList((oldtask)=>{
    return oldtask.filter((taskname,index)=>{
      return index !== id;
    })
  }
)}

return (
    <div className='main-div'>
      <div className='container-div'>
        <br />
        <h1 style={{color:"48a7b1"}}>Todo List</h1> 
        <br />
        <input className='inp' type="text" placeholder='Things to get done...' onChange={itemEvent}  />
        <button onClick={addItems}  >+</button>
        <ol  >
  
        { itemList.map((items,list)=>{
            return <>
              <Tasklist 
              data={items} 
              key={list}
              id={list} 
              onSelect={deleteItems} /></>
              
          })
}
        </ol>
      </div>
    </div>
  )
}
export default App

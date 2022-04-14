import { useState } from 'react';
import './App.css';

function App() {
  const[priceField, setPriceField]=useState("")
  const[nameField, setNameField]= useState("");
  const[checkField,setCheckField]=useState("");
  const[advertisments, setadvertisments]=useState([
    {
      price:100,
      name:"Продам машину",
      active: true

    },
    {
      price:503,
      name:"Продам дом",
      active: false
    }
  ])


const handleChangePrice =(e)=>{
  setPriceField(e.target.value);
}
const handleChangeName =(e)=>{
  setNameField(e.target.value);
}
const handleChangeCheck =(e)=>{
  setCheckField(!checkField);
}
const handleAdd =()=>{
  const newAds={
    price: priceField,
    name: nameField,
    active: checkField
  }
  setadvertisments([...advertisments, newAds]);
  setNameField('');
  setPriceField('');
  setCheckField('');

}
const deleteTodo=(i)=>{
  const filtered=advertisments.filter((todo, index)=>{
    if(index===i){
      return false;
    }
    return true;
  });
  setadvertisments(filtered);
  
}
const changeActive =(i)=>{
  const newTodos = advertisments.map((item , index)=>{
    
    if(i===index){
      return{
        ...item,
        active:!item.active
      }
    }
    return item
    
  });
  setadvertisments(newTodos);
  
}


  return (
    <div className="container w-50">
      <div>
        <input  placeholder='цена' type='text' value={priceField} onChange={handleChangePrice}></input>
        <input placeholder='название' type='text' value={nameField} onChange={handleChangeName}></input>
        <input type='checkbox' checked={checkField} onChange={handleChangeCheck}></input>
        <button onClick={handleAdd}>Добавить</button>
      </div>
      <div>
        <ul className="list-group">
{advertisments.map((item, index) =>{
return(
  <li className={`list-group-item d-flex justify-content-between ${item.active? 'shadow':''}`} >
<div>
  {item.price}
</div>
<div>
  {item.name}
</div>
<button class="btn btn-outline-danger" onClick ={()=>changeActive(index)}>
  {item.active? "активно":"скрыто"}
</button>
<div>
  <button onClick={()=> deleteTodo(index)}type="button" className="btn btn-outline-danger">×</button>
</div>
  </li>
)
})}
        </ul>
      </div>
    </div>
  );
}

export default App;


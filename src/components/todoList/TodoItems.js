import React from 'react';
import './TodoItems.css'
const TodoItems = (props) =>{
    const {items , deleteItem} = props ;
    let length = items.length ; 
    
    const ListItems = length ? (items.map(item =>{
        return(
            <div className="main" key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick = {()=> deleteItem(item.id)}>&times;</span>
            </div>
        )
    })):(
        <p>There is No Items</p>
    )
    return(
        <div className="ListItems">
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>

            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems ;
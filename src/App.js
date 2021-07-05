import React, {Component} from 'react'; 
import TodoItems from './components/todoList/TodoItems';
import AddItem from './components/add/AddItems';
class App extends Component{
  state = {
    items : [
      {id:1 , name : "Mohamed" , age :21},
      {id:2 , name :"omar" , age : 21},
      {id:3 , name :"Khaled" , age : 45}
      
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items ; 
    let i = items.findIndex(item =>item.id === id);
    items.splice(i,1);
    this.setState({items : items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items ;
    items.push(item);
    this.setState({items});
  }
  render(){
  return (
    <div className = "container">
    <div className="App">
        <h1 className="title">Todo List App</h1>
      <TodoItems items = {this.state.items} deleteItem = {this.deleteItem}/>
      <AddItem addItem = {this.addItem}/>
    </div>
    </div>
  );
  }
}

export default App;

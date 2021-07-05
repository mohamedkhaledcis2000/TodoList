import React , {Component} from 'react' ; 
import './AddItems.css';
class AddItem extends Component{
    state = {
        name : '' , 
        age : ''
    }

    handleChange = (e)=> {
        this.setState({
        [e.target.id]: e.target.value 
    })
}

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addItem(this.state);
        this.setState({name : '' , age : ''});
        
    }
    render(){
                return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder = "Enter Name" id="name" value ={this.state.name} onChange = {this.handleChange}/>
                    <input type="number" placeholder = "Enter Age" id="age" value = {this.state.age} onChange = {this.handleChange}/>
                    <input type="submit" value = "Add"/>

                </form>
            </div>
        );
    }
}

export default AddItem ;
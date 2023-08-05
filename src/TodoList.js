import { Component } from "react";
import note from "./note.png";

export class TodoList extends Component {
    constructor() {
        super()
        this.state= {
            userInput: "",
            todoList: []
        }
    }
    onChangeEvent(e) {
        this.setState({userInput: e})
    }
    addItem(input) {
        if (input === '') {
            alert ("Please enter in item")
        } 
        else{
        let list = this.state.todoList;
        list.push(input)
        this.setState({todoList: list, userInput: '' })
        }
    }
    deleteItem() {
        let listArray = this.state.todoList;
        listArray =[]; 
        this.setState({todoList: listArray})
    }
    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="what are your plans?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.todoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}c>
                        <img src={note} width="20px" alt="note"/>
                        {item}</li>
                ))}
            </ul>
            <div className="container">
                <button onClick={() =>this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }

}
import './App.css';
import image from './to-do.jpg';
import { TodoList } from './TodoList';



function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>To-do List</h1>
      </div>
    <div className="container">
      <img src={image} width="200 px" alt='to-do'/>
    </div>
    <TodoList/>
    </div>
  );
}

export default App;

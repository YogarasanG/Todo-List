import "./App.css";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2>Todo List</h2>          
        </div>
        <div className="TodoComponent">
          <TodoList />
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;

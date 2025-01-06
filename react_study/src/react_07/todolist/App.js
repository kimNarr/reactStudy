import React, {useEffect, useState} from 'react'
import Header from './Header'
import TodoList from './TodoList';
import Footer from './Footer';

function App() {
    const [todos, setToDos] = useState([]);
    const [filter, setFilter] = useState('All');

    //컴포넌트가 처음 렌더링 될 때만 실행
    useEffect(()=>{
        const save = JSON.parse(localStorage.getItem('todos')) || [];
        setToDos(save)
        console.log("save : " + save)
    }, [])

    // todo상태가 변경될 때 로컬스토리지에 저장
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const filterTodo = todos.filter((todo)=>{
        if(filter === 'active') return !todo.complete
        if(filter === 'complete') return todo.complete
        return true;
    })

    const addTodo = (content) => {
        const newTodo = {
            id : Date.now(), // id 를 추가한 시간으로
            content, // content 를 빈값으로 두어 inputValue의 값을 content가 받음
            complete : false,
        };
        setToDos([...todos, newTodo]);
    }

    const toggleTodo = (id) => {
        setToDos(todos.map(todo =>
            todo.id === id ? {...todo, complete : !todo.complete} : todo
        ));
    }

    const deleteTodo = (id) => {
        setToDos(todos.filter(todo=> todo.id !== id))
    }
    
    const clear = ()=> {
        setToDos(todos.filter(todo => !todo.complete))
    }
  return (
    <div>
      <h1>Todo List</h1>
      <Header addTodo={addTodo}/>
      <TodoList todos={filterTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <Footer filter={filter} setFilter={setFilter} clear={clear} />
    </div>
  )
}

export default App

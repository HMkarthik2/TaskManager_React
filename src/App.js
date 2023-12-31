import React, {useState} from 'react';
import './styles/App.css';
import Taskform from './pages/TaskForm';
import Button from './pages/Button';
import TaskList from './pages/TaskList';
function App () {
  const [allTasks, setAllTasks] = useState ([]);
  const [completedTasks, setCompletedTasks] = useState ([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState (false);

     return (
    <div className="App">
      <h1>Task Manager</h1>

      <div className="Task-wrapper">

       <Taskform allTasks={allTasks} setAllTasks={setAllTasks} setCompletedTasks={setCompletedTasks}/>
       <Button completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} isCompletedScreen={isCompletedScreen} setIsCompletedScreen={setIsCompletedScreen} />
      <TaskList setAllTasks ={setAllTasks} allTasks={allTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} isCompletedScreen={isCompletedScreen} setIsCompletedScreen/>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import useTaskState from './useTaskState';
import './styles.css';

const App = () => {
  const { tasks, addTask, deleteTask } = useTaskState([]);

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            {
              tasks.length === 1 ? (
                <h1 className="card-title">Task list: { tasks.length } item</h1>
              ) : ( <h1 className="card-title"> Task list:  { tasks.length } items</h1> )
            }

          <TaskForm
            saveTask={ taskText => {
              addTask(taskText);
            }}
          />

          <TaskList tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
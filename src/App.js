import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask   from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState(
    [
        {       
            id:1,
            text: 'Doctor Appointment',
            reminder: true,
            day: 'Tuesday',
        },
    
        {   
            id:2,
            text: 'Su chifita',
            reminder: true,
            day: 'Friday',
        },

        {   
          id:3,
          text: 'School',
          reminder: false,
          day: 'Monday',
      }
    ]); // state is immutable, u must use setTasks([... tasks, {}]) <- to add a new object
    //we want array's here so that they can be used in all of the possible containers (global)

    // DELETE TASK 
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const changeShow = () => {
      console.log('hello')
      setShowAddTask(!showAddTask);
      console.log(showAddTask);

    }

    //TOGGLE Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => 
                task.id === id ? 
                { ...task, reminder: !task.reminder} : task)
      )
  }
  //ADD TASK
  const addTask = (task) => {
    const id =  Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task} //creates new task object
    setTasks([...tasks, newTask])

  }

  return (
    <div className='container'>

      <Header onClicker={changeShow} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0  ? 
              (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle={toggleReminder}/>) : 
              (<h1>No tasks to show</h1>)}
    </div>
  )
}

export default App;

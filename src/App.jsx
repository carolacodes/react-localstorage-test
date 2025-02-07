import { useEffect, useState } from "react"
import { Container } from "./components/Container"
import TaskCreator from "./components/TaskCreator"
import { TaskTable } from "./components/TaskTable"
import { VisibilityControl } from "./components/VisibilityControl"

function App() {
    const [tasksItems, setTasksItems] = useState([])

    const [showCompleted, setShowCompleted] = useState(false)

    function createNewTask(taskName) {
      if(!tasksItems.find(task => task.name === taskName)) {
        setTasksItems([...tasksItems, {name: taskName, done: false}])
      }
    }

    const toggleTask = (task) =>{
      setTasksItems(tasksItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t))
      )
    }

    useEffect(() => {
      let data = localStorage.getItem('tasks')
      if(data) {
        setTasksItems(JSON.parse(data))
      }
    },[])

    const cleanTask = () => {
      setTasksItems(tasksItems.filter(t => !t.done))
      setShowCompleted(false)
    }

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasksItems))
    },[tasksItems])

    return (
      <div className="bg-dark text-white vh-100">
            <Container>
              <TaskCreator createNewTask={createNewTask}></TaskCreator>
                <TaskTable tasks={tasksItems} toggleTask={toggleTask}></TaskTable>

                <VisibilityControl
                isChecked={showCompleted}
                setShowCompleted={(checked) => setShowCompleted(checked)}
                cleanTask={cleanTask}
                >
                </VisibilityControl>

                {
                  showCompleted && (
                    <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}></TaskTable>
                  )
                }
            </Container>
      </div>
    )
}
export default App

//react imports 
import { useState } from 'react';

//library imports
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

//custom components
import CustomForm from "./components/CustomForm";
import SincereTask from './components/SincereTask';

function getSuccessMessage(){
  const messages = [  "Successful as hell.",
  "Oh baby, you made it.",
  "Smooooothe bruh. It works!",
  "YOU DID IT!!",
  "*Gandalf Voice* YOU SHALL PASS!",
  "You're on fire!",
  "That brain tho",
  "Pure genius"]

  return messages[Math.floor(Math.random() * messages.length)]
}

function App() {
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false);
  }

  const handleInput = (input) => {
    setTask(input.target.value);
  }

  const handleCompleteAction = async (e) => {
    e.target.setAttribute('disabled',true);
    setTask(getSuccessMessage())
    await jsConfetti.addConfetti()
    e.target.removeAttribute('disabled');
    setTask("")
    setIsCompleted(true)
  }

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100  to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && <CustomForm 
        task={task} 
        handleInput={handleInput} 
        handleSubmit={handleSubmit}/>}
        {!isCompleted && <SincereTask
        task={task} handleCompleteAction={handleCompleteAction}/>
        }
      </div>
    </main>
  )
}

export default App

import './App.css';
import Formulario from './components/Formulario';
import Tareas from './components/Tareas';
import { useState } from 'react';

const App = () => {

  const [tarea, setTarea] = useState("")

  const [lista, setlista] = useState([])

  function handleSubmit (e) {
    e.preventDefault()

    if (tarea === ""){
      alert("Ingresar una tarea a realizar!")
      return
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
    }

    const temporal = [...lista, nuevaTarea]
    setlista(temporal)

    setTarea("")

    console.log(lista)
  }

  function handleChange(e) {
    setTarea(e.target.value)
    console.log(tarea)
  }

  function borrar(id) {
    const temporal = lista.filter(element => element.id !== id)
    setlista(temporal)
  }

  return (
      <>
        <div className='tittle'>
          <h1>ToDo List</h1>
          <span>Created by </span>
          <a href='https://github.com/FernandoCalligo'>Fernando Calligo</a>
        </div>
        <div className='contPrincipal'>
          <div className='formCont'>
            <Formulario handleSubmit={handleSubmit} handleChange={handleChange} tarea={tarea} ></Formulario>
          </div>
          <div className='listCont'>
            {
              lista.map(tarea => (
                <Tareas
                key={tarea.id}
                id={tarea.id}
                tarea={tarea}
                borrar={borrar}
                />
              ))
            }
          </div>
        </div>
      </>
  );
}

export default App;

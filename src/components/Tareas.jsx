import React, {useState} from 'react'

export default function Tareas(props) {
    const {tarea, borrar} = props

    const [completada, setcompletada] = useState(false)
    
    return (
    <>
        <div className="contenedorTarea" id={tarea.id}>
            <span className={completada ? "completada" : "incompleta"} onClick={() => setcompletada(!completada)}>{tarea.tarea}</span>

            <button className='btnBorrar' onClick={() => borrar(tarea.id)}>X</button>
        </div>
    </>
  )
}

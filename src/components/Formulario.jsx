import React from 'react'

const Formulario = (props) => {

    const {handleSubmit,  handleChange, tarea} = props

    return (
        <>
         <form onSubmit={handleSubmit}>
            <input className='inpForm' type="text" placeholder='Task' value={tarea} onChange={handleChange} />
         </form>
        </>
    )
}

export default Formulario
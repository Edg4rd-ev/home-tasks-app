import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Card } from './components/Card'
import { motion } from 'framer-motion'

const tasks = [
  {
    row_number: 2,
    col_1: 'Dertos',
    day: {
      Seg: { id: 1, name: 'Seg', taskOf: '' },
      Ter: { id: 2, name: 'Ter', taskOf: 'lixo' },
      Qua: { id: 3, name: 'Qua', taskOf: 'prato' },
      Qui: { id: 4, name: 'Qui', taskOf: 'casa' },
      Sex: { id: 5, name: 'Sex', taskOf: 'prato' },
      Sab: { id: 6, name: 'Sab', taskOf: 'banheiro' },
      Dom: { id: 7, name: 'Dom', taskOf: '' }
    }
  },
  {
    row_number: 3,
    col_1: 'Souza079',
    day: {
      Seg: { id: 8, name: 'Seg', taskOf: 'banheiro' },
      Ter: { id: 9, name: 'Ter', taskOf: 'prato' },
      Qua: { id: 10, name: 'Qua', taskOf: 'casa' },
      Qui: { id: 11, name: 'Qui', taskOf: 'prato' },
      Sex: { id: 12, name: 'Sex', taskOf: '' },
      Sab: { id: 13, name: 'Sab', taskOf: '' },
      Dom: { id: 14, name: 'Dom', taskOf: 'lixo' }
    }
  },
  {
    row_number: 4,
    col_1: 'Tonny',
    day: {
      Seg: { id: 15, name: 'Seg', taskOf: 'casa' },
      Ter: { id: 16, name: 'Ter', taskOf: 'casa' },
      Qua: { id: 17, name: 'Qua', taskOf: '' },
      Qui: { id: 18, name: 'Qui', taskOf: 'lixo' },
      Sex: { id: 19, name: 'Sex', taskOf: '' },
      Sab: { id: 20, name: 'Sab', taskOf: 'casa' },
      Dom: { id: 21, name: 'Dom', taskOf: 'prato' }
    }
  },
  {
    row_number: 5,
    col_1: 'Sadgar',
    day: {
      Seg: { id: 22, name: 'Seg', taskOf: 'prato' },
      Ter: { id: 23, name: 'Ter', taskOf: '' },
      Qua: { id: 24, name: 'Qua', taskOf: '' },
      Qui: { id: 25, name: 'Qui', taskOf: 'banheiro' },
      Sex: { id: 26, name: 'Sex', taskOf: 'casa' },
      Sab: { id: 27, name: 'Sab', taskOf: 'prato' },
      Dom: { id: 28, name: 'Dom', taskOf: 'casa' }
    }
  }
]
function App() {
  const corusel = useRef()
  const [width, setWidth] = useState(0)
  const [getValue, setGetValue] = useState(0)

  function getSelectedItem (event){
    setGetValue(event.target.value)
    setWidth(corusel.current?.scrollWidth - corusel.current?.offsetWidth)
  }

  useEffect(() => {
    setWidth(corusel.current?.scrollWidth - corusel.current?.offsetWidth)
  },[getValue])

  return (
    <div className='App'>
      <select id='homeFriends' onChange={getSelectedItem}>
          <option value="DEFAULT" selected disabled>Selecione uma opção</option>
          <option value='2'> Dertos </option>
          <option value='3'> Souza079 </option>
          <option value='4'> Tonny </option>
          <option value='5'> Sadgar </option>
      </select>
      <motion.div 
        ref={corusel} 
        className='carousel' 
        whileTap={{cursor: "grabbing"}}>
        <motion.div className='inner' 
        drag='x' 
        dragConstraints={{right: 0, left: -width}}>
          {tasks.filter(task => task.row_number == getValue).map(task => {
              return (
                <>
                  <motion.div key={task.day.Seg.id} className='item'>
                    <Card name={task.col_1} day={task.day.Seg.name} task={task.day.Seg.taskOf == ''? 'Ta de boa hoje!':task.day.Seg.taskOf}/>
                  </motion.div>
                  <motion.div key={task.day.Ter.id} className='item'>
                    <Card name={task.col_1} day={task.day.Ter.name} task={task.day.Ter.taskOf == ''? 'Ta de boa hoje!':task.day.Ter.taskOf}/>
                  </motion.div>
                  <motion.div key={task.day.Qua.id} className='item'>
                    <Card name={task.col_1} day={task.day.Qua.name} task={task.day.Qua.taskOf == ''? 'Ta de boa hoje!':task.day.Qua.taskOf}/>
                  </motion.div>
                  <motion.div key={task.day.Qui.id} className='item'>
                    <Card name={task.col_1} day={task.day.Qui.name} task={task.day.Qui.taskOf == ''? 'Ta de boa hoje!':task.day.Qui.taskOf}/>
                  </motion.div>
                  <motion.div key={task.day.Sex.id} className='item'>
                    <Card name={task.col_1} day={task.day.Sex.name} task={task.day.Sex.taskOf == ''? 'Ta de boa hoje!':task.day.Sex.taskOf}/>
                  </motion.div>
                  <motion.div key={task.day.Sab.id} className='item'>
                    <Card name={task.col_1} day={task.day.Sab.name} task={task.day.Sab.taskOf == ''? 'Ta de boa hoje!':task.day.Sab.taskOf}/>
                  </motion.div>
                  <motion.div key={task.day.Dom.id} className='item'>
                    <Card name={task.col_1} day={task.day.Dom.name} task={task.day.Dom.taskOf == ''? 'Ta de boa hoje!':task.day.Dom.taskOf}/>
                  </motion.div>
                </>
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App

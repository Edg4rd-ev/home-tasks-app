import './Card.css'

export function Card(props) {
  return (
    <div className="cardTasks">
      <p>{props.day}</p>
      <div className='imgl'>  
        {props.task === 'banheiro' ? <img width="60" height="60" src="https://img.icons8.com/external-sketchy-juicy-fish/60/external-bathroom-hygiene-sketchy-sketchy-juicy-fish.png" alt="external-bathroom-hygiene-sketchy-sketchy-juicy-fish"/> 
        : props.task === 'prato' ? <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-dishes-cleaning-flaticons-lineal-color-flat-icons-2.png" alt="external-dishes-cleaning-flaticons-lineal-color-flat-icons-2"/>
        : props.task === 'lixo' ? <img width="100" height="100" src="https://img.icons8.com/bubbles/100/trash.png" alt="trash"/>
        : props.task === 'casa' ? <img width="100" height="100" src="https://img.icons8.com/bubbles/100/broom.png" alt="broom"/>
        : <img width="100" height="100" src="https://img.icons8.com/bubbles/100/hang-10.png" alt="hang-10"/>}
      </div>
      <p>{props.task}</p>
    </div>
  )
}

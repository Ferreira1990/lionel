import React from 'react'
import '../Sectionb/Sectionb.css'

const Sectionb = () => {
  return (
    <div className='Fathersectionb'>
        <h2>¿Como lo logramos?</h2>
        <div className='Sectionbinfo'>
            <div className='infosectionbbox'><h4>1</h4>
            <p>Análisis de tu marca y su posición actual en el mercado versus tu competencia.</p>
            </div>

            <div className='infosectionbbox'><h4>2</h4>
            <p>Nivelamos tus metas respecto de tu situación actual para entregarte un #RoadMap concreto y real de trabajo en distintas plataformas.</p>
            </div>

            <div className='infosectionbbox'> <h4>3</h4>
            <p>Analizamos a tus clientes y sus necesidades para detectar nuevas oportunidades y clientes potenciales.</p>
            </div>

            <div className='infosectionbbox'><h4>4</h4>
            <p>Nuestro trabajo en equipo nos entregará métricas que serán analizadas constantemente para mejorar las estrategias y alcanzar los resultados que tu marca necesita.</p>
            </div>

        </div>
        <div className='Boxbuttonsectionb'> <a href="https://api.whatsapp.com/send?phone=56985480872&text=Hola%20"><button>Cónocenos</button></a> </div>
    </div>
  )
}

export default Sectionb
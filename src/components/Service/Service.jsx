import React from 'react'
import '../Service/Service.css'

const Service = () => {
  return (
    <div className='Fatherservice'>
        <h2>Nuestros Servicios</h2>
        <div className='Boxservice'>

            <div className='Firstboxservice'>

            <div className='Boxsocialmedia'>
                <h4>Social Media</h4>
                <p>Marketing digital y posicionamiento de marca en RRSS</p>                                
                </div>

                <div className='BoxAudio'>
                    <h4>Contenido Audiovisual Digital</h4>
                    <p>La voz de tu marca en reels, carruseles y posts de alto impacto en diseño y creatividad.
                    </p>
                                    
                </div>

                <div className='Boxpaidmedia'>
                    <h4>Paid Media</h4>
                    <p>Empuja tu contenido orgánico con campañas patrocinadas.
                        (Meta Business Manager, TikTokADS, Google ADS.)
                    </p>
                                    
                </div>

            


            </div>

            <div className='Secondboxservice'>
                <div className='BoxBranded'>
                    <h4>BRANDED CONTENT</h4>
                    <p>Transformamos tu marca en contenido creativo que aporte valor a tu audiencia y clientes.</p>
                </div>

                <div className='BoxContentMarketing'>
                    <h4>CONTENT MARKETING</h4>
                    <p>Conectamos con tu audiencia y clientes
                        a través de contenido de valor informativo y utilidad
                        aportándole un valor diferenciador de tu competencia.</p>

                </div>

                <div className='Boxweb'>
                    <h4>Web Developers</h4>
                    <p>El sitio Web que tu marca necesita y merece!
                        (Landing-Page, E-Commerce, Aplicaciones etc)
                    </p>
                
                </div>
            </div>




        

        </div>

    </div>
  )
}

export default Service
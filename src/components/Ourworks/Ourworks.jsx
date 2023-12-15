import React from 'react'
import '../Ourworks/Ourworks.css'

import WA from '../../assets/wa.jpg'
import WB from '../../assets/wb.jpg'    
import WC from '../../assets/wc.jpg'
import WD from '../../assets/wd.jpg'
import WEE from '../../assets/we.jpg'
import WF from '../../assets/wf.jpg'

const Ourworks = () => {
  return (
    <>
    <div id='TRABAJOS' className='Fatherboxworks'>
        <div className='Boxtitleworks'><h1>Nuestros Trabajos</h1></div>

        <div className='Cardworks'>

            <div className='boxworkonea'>
            <a href="https://www.tiktok.com/@feriadepostulacion/video/7306939269505961222" target="_blank" rel="noopener noreferrer"><img src={WA} alt="Proyecto 1"/></a>
            </div>

            <div className='boxworkoneb'>
            <a href="https://www.instagram.com/p/C0UfZtoJg-K/" target="_blank" rel="noopener noreferrer"><img src={WB} alt="Proyecto 2"/></a>
            </div>

            <div className='boxworkonec'>
            <a href="https://www.instagram.com/p/CzoTKWPu_c4/" target="_blank" rel="noopener noreferrer"><img src={WC} alt="Proyecto 3"/></a>
            </div>

            </div>

            <div className='Cardworkstwo'>

            <div className='boxworkoned'>
            <a href="https://www.instagram.com/p/Cz_vl_ztSeD/" target="_blank" rel="noopener noreferrer"><img src={WD} alt="Proyecto 4"/></a>
            </div>

            <div className='boxworkonee'>
            <a href="https://www.instagram.com/p/CzrBrsysf31/?img_index=1" target="_blank" rel="noopener noreferrer"><img src={WEE} alt="Proyecto 1"/></a>
            </div>

            

            <div className='boxworkonef'>
            <a href="https://ferreira1990.github.io/camilacuevas/" target="_blank" rel="noopener noreferrer"><img src={WF} alt="Proyecto 1"/></a>
            </div>

            </div>

      

            
       

  
        
    </div>
    </>
   
  )
}

export default Ourworks
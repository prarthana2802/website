import {AnimateSharedLayout, motion} from 'framer-motion'
import './Card.css'
import React, { useState } from 'react';



function Card(props) {

const [open,setOpen]=useState(false)

return <AnimateSharedLayout>

{ open ?

<motion.div onClick={()=>setOpen(false)} className='expanded-card' layoutId="ex-card-id" > 

<motion.div className="card-wrapper">

<motion.img class="expanded-img" src={props.image}></motion.img>
<motion.h3 className='expanded-card-h' layoutId="ex-card-id-h">{props.title}</motion.h3>

<p>{props.detailedDesc} </p>
</motion.div>

</motion.div>

:
 

<motion.div onClick={()=>setOpen(true)} className="normal-card" layoutId="ex-card-id" >
    <motion.div className="card-wrapper">
    <motion.img class="normal-img" src={props.image}></motion.img>
<motion.h1 layoutId="ex-card-id-h">{props.title}</motion.h1>
<p>{props.desc} <b>Read More</b></p>
    </motion.div>


</motion.div>
}
</AnimateSharedLayout>
}
export default Card;
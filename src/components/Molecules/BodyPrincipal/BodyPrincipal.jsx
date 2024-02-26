import React from 'react'
import style from "./BodyPrincipal.module.css"
import img from "../../../assets/imgs/Roboto.png"
function BodyPrincipal() {
    return (
        <>
        <div className={style.divContainer}>
            <div className={style.divIzquierdo}>
               <h1 >Marc Audio | Video | Iluminacion</h1> 
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi non fugit voluptas rem voluptate autem dicta at culpa ullam voluptatum. Quam illo iste animi officiis ea unde consequatur hic. Mollitia.</p>
               <button>Contacto</button>

            </div>
            <div className={style.divDerecho}>
            <img src={img} alt="" className={style.roboto}/>
            </div>
        </div>

        </>

    )
}

export default BodyPrincipal
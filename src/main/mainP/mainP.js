import React from "react"
import  {Services}  from "../../services/services";
import classes from "./mainP.module.css"

function Main () {
    const services = [
        'Aktan', 'Top', 'Beautifule'
    ]
    return(

        <div>
            <h1 className={classes.h1}>dz2</h1>
            <div className = {classes.m}>  
            <div className= {classes.all}>
                <div className={classes.one}>
                    <h2 className={classes.h2}>First</h2>
                    <div className={classes.two}>
                     <p className={classes.p}>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.</p>
                    </div>
                    <Services services = {services}/>
                </div>
                <div className={classes.one}>
                   <h2 className={classes.h2}>First</h2>
                   <div className={classes.two}>
                     <p className={classes.p}>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.</p>
                   </div>
                   <Services services = {services}/>

                </div>
                <div className={classes.one}>
                   <h2 className={classes.h2}>First</h2>
                   <div className={classes.two}>
                     <p className={classes.p}>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.</p>
                   </div>
                   <Services services = {services}/>

                </div>
            </div>
          </div>
        </div>
    );
}
export default Main
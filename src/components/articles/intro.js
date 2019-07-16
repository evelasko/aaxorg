import React from 'react';
import pic01 from '../../images/pic01.jpg';

const Intro = () => (
    <React.Fragment>
        <h2 className="major">Nuestros Centros</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <ul>
            <li><a>Cátedra UNESCO Iberoamericana de Danza</a></li>
            <li><a href="https://isdaa.es/">Instituto Universitario Alicia Alonso</a></li>
            <li><a href="https://eciencia.urjc.es/handle/123456789/329">Fondo de Documentación</a></li>
            <li><a href="https://isdaa.es/index.php/iti-espana.html">Centro ITI Spain (International Theatre Institute UNESCO)</a></li>
            <li><a>Ballet de Cámara de Madrid</a></li>
            <li><a>Teatro de Cámara de Madrid</a></li>
        </ul>
    </React.Fragment>
)

export default Intro
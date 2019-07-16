import React from 'react';
import pic03 from '../../images/pic03.jpg';

const Work = () => (
    <React.Fragment>
        <h2 className="major">Actividades y Eventos</h2>
        <span className="image main"><img src={pic03} alt="" /></span>
        <p>La Fundación Alicia Alonso presenta una serie de eventos a lo largo del año entre los que se encuentran las representaciones artísticas del Instituto Universitario de la Danza Alicia Alonso, el Ballet de Cámara de Madrid y la compañia Teatro de Cámara de Madrid. Además de ello presenta clases majistrales y cursos especializados en diversos campos de las artes escénicas y del espectáculo.</p>
        <p><strong>Próximamente:</strong></p>
        <ul>
            <li><a href="https://congreso.alicialonso.org">Congreso Mundial de Investigación y Artes del Espectáculo</a></li>
        </ul>
    </React.Fragment>
)

export default Work
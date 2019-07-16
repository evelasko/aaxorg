import React from 'react';
import pic03 from '../../images/pic03.jpg';

const Work = () => (
    <React.Fragment>
        <h2 className="major">Actividades y Eventos</h2>
        <span className="image main"><img src={pic03} alt="" /></span>
        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
        <ul>
            <li><a href="https://congreso.alicialonso.org">Congreso Mundial de Investigación y Artes del Espectáculo</a></li>
        </ul>
    </React.Fragment>
)

export default Work
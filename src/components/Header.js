import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../images/logo.svg';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={Logo} style={{width:'100%', height: '100%', marginTop:'6px', marginRight:'10px'}} />
        </div>
        <div className="content">
            <div className="inner" style={{whiteSpace:'pre-wrap'}}>
                <h1><span style={{fontWeight:'100'}}>Fundación</span>
                 {`
Alicia Alonso`}</h1>
                <p>25 años al servicio de las artes escénicas y del espectáculo</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Centros</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>actividad</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Acerca</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contacto</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../images/logo.svg';

const HeaderSimple = (props) => (
    <header id="header">
        <div className="logo" style={{marginTop: '0px'}}>
            <img src={Logo} style={{width:'100%', height: '100%', marginTop:'0px', marginRight:'10px'}} />
        </div>
        <div className="content" >
            <div className="inner" style={{whiteSpace:'pre-wrap'}}>
                <h1><span style={{fontWeight:'800'}}>Cuenta Confirmada</span></h1>
                <p className="runningtext">Su cuenta @alicialonso.org ya esta confirmada y activa. Le invitamos a desubrir la actividad y los servicios de nuestros centros en los siguientes vínculos, así como gestionar sus propios recursos y actividades dentro de la organización.</p>
            </div>
        </div>
        <nav style={{marginTop:'50px'}}>
            <ul>
                <li><a href="javascript:;" >Instituto</a></li>
                <li><a href="javascript:;" >Repositorio</a></li>
                <li><a href="javascript:;" >Ballet de Cámara</a></li>
                <li><a href="javascript:;" >Teatro de Cámara</a></li>
                <li><a href="" >ITI Spain</a></li>
            </ul>
        </nav>
    </header>
)


export default HeaderSimple

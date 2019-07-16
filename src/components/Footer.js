import PropTypes from 'prop-types';
import React from 'react';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Alicia Alonso Foundation [CIF:G81731705] Camino del molino SN, 28943 fuenlabrada, Madrid. Spain</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

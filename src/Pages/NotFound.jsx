import React from 'react';
import PropTypes from 'prop-types';
import Header  from '../Component/Header/Header';
const NotFound = props => {
    return (
        <div>
          <Header/>
           <div><h2>Page Not Found</h2></div>
        </div>
    );
};

NotFound.propTypes = {
    
};

export default NotFound;
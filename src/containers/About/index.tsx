import React, { Fragment } from 'react';
import Header from '../../components/Header';


const AboutPage: React.FC<any> = ({history}) => {

    const {state} = history.location;
    if (state && state.reloadPage) {
        window.location.reload();
      }

    return(
        <Fragment>
            <Header/>
            <h1>About Page</h1>
        </Fragment>
    );
};

export default AboutPage;
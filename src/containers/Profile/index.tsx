import React, { Fragment } from 'react';
import {PageWrap} from './styles';
import Header from '../../components/Header';
import {Box} from '@chakra-ui/react';

const ProfilePage: React.FC<any> = ({history}) => {

    const {state} = history.location;
    if (state && state.reloadPage) {
        window.location.reload();
      }

    return (
        <Fragment>
            <PageWrap>
            <Box w="100%" h="100vh">
            <Header/>
               <h1>Profile Page</h1>
            </Box>
            </PageWrap>
        </Fragment>
    )

}

export default ProfilePage;
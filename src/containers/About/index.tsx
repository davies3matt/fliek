import React, { Fragment } from 'react';
import {Box, Text} from '@chakra-ui/react';
import Header from '../../components/Header';
import Images from '../../themes/Images';
import styled from 'styled-components';

const {backgroundMid} = Images;

const PageWrap = styled.div`
  background-image: url(${backgroundMid});
  background-size: cover;
  background-position: center;
  display: flex;
`;


const AboutPage: React.FC<any> = ({history}) => {

    const {state} = history.location;
    if (state && state.reloadPage) {
        window.location.reload();
      }

    return(
        <Fragment>
            <PageWrap>
            <Box w="100%" h="100vh">
                <Header/>
                <Box p={4} color="black">
                <Text>About Page</Text>

                </Box>
            </Box>
            </PageWrap>
        </Fragment>
    );
};

export default AboutPage;
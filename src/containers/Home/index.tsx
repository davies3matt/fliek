import React, { Fragment } from 'react';
import Header from '../../components/Header';
import {Box, Center, Text, Image} from '@chakra-ui/react';
import Images from '../../themes/Images';
import styled from 'styled-components';

const {background} = Images;

const PageWrap = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
`;

const HomePage: React.FunctionComponent<any> = ({ history}) => {

  const { state } = history.location;
  if (state && state.reloadPage) {
    window.location.reload();
  }
  return (
    <Fragment>
      <PageWrap>
      <Box w="100%" h="100vh">
        <Header/>
        <Box p={4} color="black">
          <Text>Home Page</Text>

        </Box>
      </Box>
      </PageWrap>
    </Fragment>
  )
}

export default HomePage;
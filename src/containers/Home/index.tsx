import React, { Fragment } from 'react';
import Header from '../../components/Header';
import {Box, Center} from '@chakra-ui/react';

const HomePage: React.FunctionComponent<any> = ({ history}) => {

  const { state } = history.location;
  if (state && state.reloadPage) {
    window.location.reload();
  }
  return (
    <Fragment>
      <Header/>
      <Box bg="teal" w="100%" h="100vh"  p={4} color="white">
        <Center>
         <h1>Home Page</h1>
        </Center>
      </Box>
    </Fragment>
  )
}

export default HomePage;
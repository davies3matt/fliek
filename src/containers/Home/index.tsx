import React, { Fragment } from 'react';
import Header from '../../components/Header';
import {Box, Center, Grid, GridItem, Button} from '@chakra-ui/react';
import Images from '../../themes/Images';
import styled from 'styled-components';
import theme from '../../themes/theme';

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
        <Center paddingTop="40px">
          <Box w="80%">
            <Grid
            h="400px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
            >
           <GridItem 
           colSpan={2} 
           bg="papayawhip" 
           borderStyle="double" 
           borderRadius={10} 
           border="12px solid tomato" 
           boxShadow="0 0 2px 2px purple"
           >
            <Button
            transition="all .2s ease-in-out"
            _hover={{
              transition: "all .2s ease-in-out",
              transform: "scale(1.2)"
            }}
            >Click Me!</Button>
           </GridItem>
           <GridItem 
           colSpan={2} 
           bg="papayawhip" 
           borderStyle="double" 
           borderRadius={10} 
           border="12px solid tomato" 
           boxShadow="0 0 2px 2px purple"
           transition="all .2s ease-in-out"
           _hover={{
             transition: "all .2s ease-in-out",
             transform: "scale(1.05)"
           }}
           >

           </GridItem>
           <GridItem 
           colSpan={4} 
           bg="papayawhip" 
           borderStyle="double" 
           borderRadius={10} 
           border="12px solid tomato" 
           boxShadow="0 0 2px 2px purple"
           transition="all .2s ease-in-out"
           _hover={{
             transition: "all .2s ease-in-out",
             transform: "scale(1.05)"
           }}
           >

           </GridItem>
           </Grid>
          </Box>
        </Center>
      </Box>
      </PageWrap>
    </Fragment>
  )
}

export default HomePage;
import React, {Fragment} from 'react';
import {Box, Image, Grid, GridItem, Heading, Text, Center, Tooltip, Button, SimpleGrid, Divider} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild, faPencilAlt, faPlay, faCannabis, faCocktail, faStar, faHandSparkles } from '@fortawesome/free-solid-svg-icons'

const Listing: React.FC<any> = ({movie}) => {
    return(
        <Fragment>
            <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
            w="50%"
            padding="10px"
            >
            <GridItem rowSpan={2} colSpan={1} >
                    <Image 
                    src={`http://localhost:1337${movie.poster[0].url}`}
                    borderRadius={10} 
                    boxShadow="0 0 2px 2px purple"
                    />
                    <Center paddingTop="10px">
                        {movie.genres && movie.genres.map(((genre:string) => (
                            genre === 'children' ?
                            <Box paddingRight="10px">
                             <Tooltip hasArrow label="Children">
                                <Box>
                               <FontAwesomeIcon color="white" size="3x" icon={faChild}/>
                               </Box>
                             </Tooltip>          
                            </Box>
                            : genre === 'animation' ?
                            <Box paddingRight="10px">
                                <Tooltip hasArrow label="Animation">
                                    <Box>
                                    <FontAwesomeIcon color="white" size="3x" icon={faPencilAlt}/>
                                    </Box>
                               </Tooltip>
                            </Box>
                            : null
                        )))}
                    </Center>
            </GridItem>
            <GridItem paddingLeft="10px" rowSpan={2} colSpan={2} >
                <Heading
                textShadow="2px 2px purple"
                color="white"
                >{movie.name}</Heading>
                <Text
                color="white"
                fontWeight="bold"
                paddingTop="8px"
                >
                    {movie.description}
                </Text>
                <Box w="100%" padding="20px">
                    <Divider variant="dashed" />
                    <SimpleGrid columns={4} spacing={8} padding="20px">
                        <Tooltip hasArrow label="Overall Rating">
                            <Box textAlign="center">
                                <FontAwesomeIcon icon={faStar} size="3x" style={{textShadow: "0 0 3px #000"}} color="gold"/>
                                <Text fontWeight="bold">65%</Text>
                            </Box>
                        </Tooltip>
                        <Tooltip hasArrow label="Clean Rating">
                        <Box textAlign="center">
                            <FontAwesomeIcon icon={faHandSparkles} size="3x" style={{textShadow: "0 0 3px #000"}}/>
                            <Text fontWeight="bold">80%</Text>
                        </Box>
                        </Tooltip>
                        <Tooltip hasArrow label="High Rating">
                        <Box textAlign="center">
                            <FontAwesomeIcon icon={faCannabis} size="3x" style={{textShadow: "0 0 3px #000"}} color="limegreen"/>
                            <Text fontWeight="bold">60%</Text>
                        </Box>
                        </Tooltip>
                        <Tooltip hasArrow label="Drunk Rating">
                        <Box textAlign="center">
                            <FontAwesomeIcon icon={faCocktail} size="3x" style={{textShadow: "0 0 3px #000"}}/>
                            <Text fontWeight="bold">55%</Text>
                        </Box>
                        </Tooltip>
                    </SimpleGrid>
                    <Divider variant="dashed"/>
                </Box>
                <Center>
                    <Box w="80%">
                        <Button size="lg">Watch Trailer</Button>
                        <Button float="right" colorScheme="purple" size="lg" isDisabled={movie.podcast? false : true}>
                            <Box paddingRight="5px">
                        <FontAwesomeIcon icon={faPlay} color="white"/>
                        </Box>
                            Play Podcast 
                        </Button>
                    </Box>
                </Center>
            </GridItem>
            </Grid>
        </Fragment>
    );
};

export default Listing;
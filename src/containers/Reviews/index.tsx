import React, { Fragment, useEffect, useState } from 'react';
import {Box, Grid, GridItem, Center, Text} from '@chakra-ui/react';
import Header from '../../components/Header';
import Images from '../../themes/Images';
import styled from 'styled-components';
import Listing from '../../components/Listing';
import {GET_MOVIES} from '../../graphql/queries';
import {useQuery,gql} from '@apollo/client';

const {backgroundAlt} = Images;

const PageWrap = styled.div`
  background-image: url(${backgroundAlt});
  background-size: cover;
  background-position: center;
  display: flex;
`;

type Movie = {
    id: number,
    name: string,
    description: string,
    poster: Array<Array<string>>
}

const ReviewPage: React.FC<any> = ({history}) => {

    const [movieList, setMovieList] = useState<Array<Movie>>([]);
    const { loading, error, data } = useQuery(GET_MOVIES);

    useEffect(() => {
        setMovieList(data && data.movies);
        console.log(data && data.movies);
    },[data]);

    const {state} = history.location;
    if (state && state.reloadPage) {
        window.location.reload();
      }
    
    if (loading) return <Text>'Loading...'</Text>
    if (error) return <Text>`Error! ${error.message}`</Text>

    return(
        <Fragment>
            <PageWrap>
            <Box w="100%">
                <Header/>
                <Center flexDirection="column">
                    {movieList && movieList.map(movie => (
                        <Fragment>
                            <Listing
                                key={movie.id}
                                movie={movie}
                            ></Listing>
                            <br style={{padding: "20px"}}/>
                        </Fragment>
                    ))}
                </Center>
            </Box>
            </PageWrap>
        </Fragment>
    );
};

export default ReviewPage;
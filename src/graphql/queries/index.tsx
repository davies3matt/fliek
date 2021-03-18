import gql from 'graphql-tag';

export const GET_MOVIES = gql`
        query GetMovies{
        movies {
            name
            id
            description
            poster {
                url
            }
        }
    }
`;

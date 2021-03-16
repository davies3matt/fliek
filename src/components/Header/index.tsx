import React, { Fragment } from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Box, Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text} from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons';

type HeaderProps = RouteComponentProps;

const Header:React.FC<HeaderProps> = props => {
    const {history, location} = props;
    return (
        <Fragment>
        <Box bg="tomato" w="100%" p={4} color="white">
            <Center>
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon w={6} h={6} color="white"/>}>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => {history.push('/')}}>
                        <Text fontSize="4xl" textShadow="1px 1px purple" fontWeight="bold" color="teal">Home</Text>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/#">
                        <Text fontSize="4xl" textShadow="1px 1px purple" fontWeight="bold" color="teal">Reviews</Text>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink onClick={() => {history.push('/about')}}>
                      <Text fontSize="4xl" textShadow="1px 1px purple" fontWeight="bold" color="teal">About</Text>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            </Center>
        </Box>
        </Fragment>
    );
} 

export default withRouter(Header);
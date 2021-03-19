import React,{useState} from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Center,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
    Button,
    Link,
    Tooltip,
    SimpleGrid
  } from "@chakra-ui/react"
import {EmailIcon, LockIcon, ViewIcon, ViewOffIcon, ArrowBackIcon} from '@chakra-ui/icons';
import {faCat} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const  LoginPage: React.FC<any> = ({history}) => {

    const [show,setShow] = useState(false);
    const [ollie, setOllie] = useState(true);
    const handleCat = () => setOllie(!ollie);
    const handleShow = () => setShow(!show);

  const { state } = history.location;
  if (state && state.reloadPage) {
    window.location.reload();
  }

  return(
    <Box w="100%" h="100vh" bg="purple">
        <Center h="100%">
            <Box w="30%" bg="#EDF2F7" padding="30px" borderRadius="10px" boxShadow="2px 2px gray" textAlign="center">
                <Text  fontSize="7xl" textShadow="2px 2px purple" fontWeight="bold" color="#FF6138">Fliek</Text>
                <SimpleGrid columns={2} w="100%" h="100%">
                    <ArrowBackIcon cursor="pointer" onClick={() => history.goBack()} fontSize={75}/>
                        <Box justifyContent="center">
                            <FontAwesomeIcon icon={faCat} cursor="pointer" onClick={handleCat} size="4x" style={{float: 'right'}} color={ollie ? "#FF6138" : 'black'} />
                        </Box>
                </SimpleGrid>
                <FormControl>
                <Text textAlign="center" marginTop="30px" marginBottom="30px" fontSize="35px">Login</Text>
                    <FormLabel fontWeight="bold">
                         Email Address
                    </FormLabel>
                    <InputGroup>
                        <InputLeftElement children={<EmailIcon color="gray.300" fontSize={23}/>}/>
                        <Input type="email" placeholder="Enter your email address"/>
                    </InputGroup>
                </FormControl>
                <FormControl fontWeight="bold" paddingTop="20px">
                   <FormLabel fontWeight="bold">
                         Password
                    </FormLabel>
                    <InputGroup>
                        <InputLeftElement children={<LockIcon color="gray.300" fontSize={23}/>}/>
                        <Input type={show? "text" : "password"} placeholder="Enter your password"/>
                        <InputRightElement onClick={handleShow} children={!show? <ViewOffIcon fontSize={23} color="gray.300"/> : <ViewIcon fontSize={23} color="gray.300"/>} />
                    </InputGroup>
                    <Button
                    bg="blue"
                    color="white"
                    size="lg"
                    marginTop="35px"
                    w="100%"
                    >
                        Login
                    </Button>
                    <Box marginTop="20px" w="100%" textAlign="right">
                        <Link fontWeight="normal" color="blue">Forgot Password</Link>
                    </Box>
                </FormControl>
            </Box>
        </Center>
    </Box>
  );
};

export default LoginPage;
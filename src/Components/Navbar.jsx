import React from 'react'
import { Flex, Spacer, Box, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input, 
  Text,
  Radio, 
  RadioGroup,
  HStack
} from '@chakra-ui/react'

const Navbar = () => {
  const {toggletheme, isLight} = useContext(ThemeContext);
  return (
    <div style={{height: "100vh"}}>
        <Flex w="90%" m="auto" h="79px" bg="green.200" rounded="10px" p="0px 25px" align="center"> 
            <Box fontSize="2xl" as="b">MOVIE APP</Box>
            <Spacer/>
            <Box>
              <Flex gap="15px">
                <Button bg="green.500">SignUp</Button>
                <Button bg="green.500">LogIn</Button>
                <Button bg="green.500" onClick={toggletheme}>{isLight?"Dark": "Light"}</Button>
              </Flex>
            </Box>
        </Flex>

       <Box mt="40px">
         <Text fontSize="2xl" as="b">LOGIN DETAILS</Text>
            <FormControl w="40%" m="auto">
                <FormLabel htmlFor='email' mt="40px">Email address</FormLabel>
                <Input id='email' type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel htmlFor='email'>Password</FormLabel>
                <Input id='email' type='password' />
                <RadioGroup defaultValue='Itachi'>
                <FormLabel htmlFor='gender' mt="20px">Gender</FormLabel>
                  <HStack spacing='24px'>
                    <Radio value='Male'>Male</Radio>
                    <Radio value='Female'>Female</Radio>
                  </HStack>
                </RadioGroup>
                <Button
                  mt={4}
                  colorScheme='teal'
                  type='submit'
                >
                  Submit
          </Button>
              </FormControl>
       </Box>
    </div>
  )
}

export default Navbar;
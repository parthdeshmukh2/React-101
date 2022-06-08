import React from 'react'
//import { Button, Navdiv } from '../Style/Navbar.styled'
import { Stack, HStack, VStack , Box} from '@chakra-ui/react'


const Navbar = () => {
  return (
    // <Navdiv>
    //    <div><Button>Theme</Button></div>
    //   <div> <Button>Login</Button></div>
    //   <div> <Button>Theme</Button></div>

    // </Navdiv>
    <HStack spacing='24px' bg="black">
  <Box w='80px' h='40px' bg='yellow.200'>
    Theme
  </Box>
  <Box w='80px' h='40px' bg='tomato'>
    Login
  </Box>
  
</HStack>
  )
}

export default Navbar

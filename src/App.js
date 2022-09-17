import './App.css';
import { Avatar, Wrap, Image } from '@chakra-ui/react';
import go from './Untitled.jpg';
import { Grid, GridItem, Flex, Spacer, Box, Text, Center, Heading, IconButton, Link, Button, FormControl, Input, Textarea} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function LinkedIn() {
  return <Icon as={AiFillLinkedin} />
}

function Github() {
  return <Icon as={AiFillGithub} />
}


function App() {
  return (

      <Box>
        <Flex color='gray' h='50px' align='center' bg='#0c0d0d' w='100%' pos='fixed' >
          <Box ml='25px'>
            <Text>About</Text>
          </Box>
          <Box ml='25px'>
            <Text>Twitter</Text>
          </Box>
          <Box ml='25px'>
            <Text>LinkedIn</Text>
          </Box>
        </Flex>

        <Flex w='100%' wrap='wrap' pt='50px'>
          <Box w='100%' h='300px' bg='black'>
            <Flex w='100%' h='100%' justify='center' align='center'>
              <Image
                    borderRadius='full'
                    boxSize='250px'
                    src= {go}
                    alt='Tobías De La Cruz'
              />
            </Flex>
          </Box>
          <Box w='100%' h='fit-content' bg='#0c0d0d' color='gray' pb='10px'>
            <Heading as='h1' size='lg' noOfLines={1} ml='25%' mt='20px'>Hi there!</Heading>
             <Text w='50%' ml='25%'>My name is Tobías. I'm a Mexican technology generalist, with recent experience as a Project Manager, remote Software Development teams and community building activities 🧑‍💻
             I work as PM at Umvel. Highlights of my career include Aeroméxico, Global Hitss, Optimen... 🚀</Text>
          </Box>
          <Box w='100%' h='fit-content' bg='black' color='gray' pb='10px'>
          <FormControl>
            <Flex direction='column' align='center'>
              <Center >
                <Text mt='12px' mb='20px' fontSize='4xl'>Contact me</Text>
              </Center>
              <Input w='80%' mb='20px' placeholder='Name' />
              <Input w='80%' mb='20px' type='email' placeholder='Email' />
              <Input w='80%' mb='20px' placeholder='Subject' />
              <Textarea w='80%' placeholder='Message' h='89%' />
                <Button
                mt={4}
                color='black'
                variant='solid'
                type='submit'
              >
                  Submit
              </Button>
              <Box pt='10px' w='40%'>
                <Flex>
                  <Link href='https://www.linkedin.com/in/tob%C3%ADas/'>
                    <IconButton
                      variant='outline'
                      colorScheme='white'
                      aria-label='Call Sage'
                      fontSize='20px'
                      icon={<LinkedIn/>}
                    />
                  </Link>
                  <Spacer/>
                  <Link href='https://github.com/juantobiasdl7'>
                    <IconButton
                      variant='outline'
                      colorScheme='white'
                      aria-label='Call Sage'
                      fontSize='20px'
                      href=''
                      icon={<Github/>}
                    />
                  </Link>
                </Flex>
              </Box>
              </Flex>
            </FormControl>

          </Box>
          <Box w='100%' h='50px' bg='#0c0d0d' color='gray'>
            <Center >
              <Text mt='12px' fontSize='sm'>Copyright © 2022, Tobías De La Cruz.  </Text>
            </Center>
          </Box>
        </Flex>    
      </Box>
    
  )
}

export default App;

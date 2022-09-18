import './App.css';
import { useMediaQuery } from 'react-responsive';
import go from './Untitled.jpg';
import { HStack, Image, Flex, Spacer, Box, Text, Center, Heading, IconButton, Link, Button, FormControl, Input, Textarea} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useState } from 'react';


function LinkedIn() {
  return <Icon as={AiFillLinkedin} />
}

function Github() {
  return <Icon as={AiFillGithub} />
}


function App() {

  const isNotDesktop = useMediaQuery({ query: '(max-Width: 800px)' });
  const isDesktop = useMediaQuery({ query: '(min-Width: 801px)' });

  return (

      <Box >

        <Flex color='gray' h='50px' align='center' bg='#0c0d0d' w='100%' pos='fixed' zIndex='1'>
          <Link ml='25px'>About</Link>
          <Link ml='25px' href='https://www.linkedin.com/in/tob%C3%ADas/'>LinkedIn</Link>
          <Link ml='25px' href='https://github.com/juantobiasdl7'>Github</Link>
        </Flex>

        <Flex w='100%' wrap='wrap' pt='100px' bg='black'>
          <Box w='100%' h='300px' pb='50px'>
            <Flex w='100%' h='100%' justify='center' align='center' direction='column'>
              <Image
                    borderRadius='full'
                    boxSize='250px'
                    src= {go}
                    alt='Tobías De La Cruz'
              />
              <Box pt='20px' w={['30%', null, '15%']}>
                <Flex >
                  <Link href='https://www.linkedin.com/in/tob%C3%ADas/'>
                    <IconButton
                      variant='outline'
                      color='gray'
                      fontSize='20px'
                      icon={<LinkedIn/>}
                    />
                  </Link>
                  <Spacer/>
                  <Link href='https://github.com/juantobiasdl7'>
                    <IconButton
                      variant='outline'
                      color='gray'
                      fontSize='20px'
                      href=''
                      icon={<Github/>}
                    />
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box w='100%' h='fit-content' bg='#0c0d0d' color='gray' pb='40px'>
            <Heading as='h1' size='lg' noOfLines={1} ml={['25%',null,'15%']} mt='20px'>Hi there!</Heading>
             <Text w={['50%',null,'70%']} ml={['25%',null,'15%']}>My name is Tobías. I'm a Mexican technology generalist, with recent experience as a Project Manager, remote Software Development teams and community building activities 🧑‍💻
             I work as PM at Umvel. Highlights of my career include Aeroméxico, Global Hitss, Optimen... 🚀</Text>
          </Box>
          <Box w='100%' h='fit-content' bg='black' color='gray'  >
            <Flex direction='column' align='center'>
                <Center >
                  <Text mt='12px' mb='20px' fontSize='4xl'>Contact me</Text>
                </Center>
            <div>
              <form name="contact" method="post">
                <Flex direction='column' align='center' gap='3' w='100%'>
                  <input type="hidden" name="form-name" value="contact" />

                  <input placeholder="Name" type="text" name="name"/>
                  <input placeholder="Email" type="email" name="email"/>
                  <input placeholder="Subject" type="text" name="subject"/>
                  <textarea placeholder="Message" name="message"></textarea>
                  <button type="submit">Send</button>
                </Flex>
              </form>
            </div>
            </Flex>
          </Box>
          
          {/* { isNotDesktop && <Box w='100%' h='fit-content' bg='black' color='gray'  >
          <FormControl>
            <Flex direction='column' align='center'>
              <Center >
                <Text mt='12px' mb='20px' fontSize='4xl'>Contact me</Text>
              </Center>
              <input type="hidden" name="form-name" value="contact" />
              <Input w={{base:'80%', sm:'80%'}} mb='20px' placeholder='Name' name='name' />
              <Input w='80%' mb='20px' type='email' placeholder='Email' name='email' />
              <Input w='80%' mb='20px' placeholder='Subject' name='subject' />
              <Textarea w='80%' placeholder='Message' h='89%' name='message' />
                <Button
                mt={4}
                color='black'
                variant='solid'
                type='submit'
                mb='50px'
              >
                  Submit
              </Button>
              </Flex>
            </FormControl>
          </Box>
          }

          { isDesktop && 
          <Box w='100%' h='fit-content' bg='black' color='gray' pb='40px' >
          <FormControl>
            <Flex direction='column' align='center'>
              <Box>
                <Center >
                  <Text mt='12px' mb='20px' fontSize='4xl'>Contact me</Text>
                </Center>
              </Box>
              <Box w='80%'>
                <Flex justify='center'>
                  <Box w='40%'>
                    <Flex direction='column' align='center'>
                      <Input w='90%' mb='20px' placeholder='Name' />
                      <Input w='90%' mb='20px' type='email' placeholder='Email' />
                      <Input w='90%' mb='20px' placeholder='Subject' />
                    </Flex>
                  </Box>
                  <Box w='60%'>
                    <Textarea w='100%' placeholder='Message' h='89%' />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Button
                mt={4}
                color='black'
                variant='solid'
                type='submit'
              >
                  Submit
              </Button>
              </Box>
              </Flex>
            </FormControl>
          </Box>
          } */}

          {/* <Box w='100%' h='fit-content' bg='black' color='gray'  >
          <form>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" value="John"/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname" value="Doe"/>
            <input type="submit" value="Submit"/>
          </form>
          </Box> */}
          
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

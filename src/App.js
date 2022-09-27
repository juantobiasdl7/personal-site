import './App.css';
import { useMediaQuery } from 'react-responsive';
import go from './Untitled.jpg';
import { HStack, Image, Flex, Spacer, Box, Text, Center, Heading, IconButton, Link} from '@chakra-ui/react';
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
          <Link ml='25px' href='https://www.linkedin.com/in/tob%C3%ADas/'>LinkedIn</Link>
          <Link ml='25px' href='https://github.com/juantobiasdl7'>Github</Link>
          <Link ml='25px' >Blog</Link>
        </Flex>

        <Flex w='100%' wrap='wrap' pt='120px' bg='black'>
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
            <Heading as='h1' size='lg' noOfLines={1} ml={['15%',null,'15%']} mt='20px' h='60px'>Hi there!</Heading>
             <Text w={['60%',null,'70%']} ml={['15%',null,'15%']} pb='15px'>My name is Tobías. I'm a Mexican Aeronautical Engineer, with recent experience as Project Manager of Software Products for remote Software Development teams. 🧑‍💻</Text>
             <Text w={['60%',null,'70%']} ml={['15%',null,'15%']} pb='15px'>Currently, I work at <Link href='https://umvel.com/' isExternal color='teal.500'>Umvel</Link> as the Project Manager of <Link href='https://www.vivaaerobus.com/' isExternal color='teal.500'>Viva Aerobus official website</Link> and mobile applications for <Link href='https://play.google.com/store/apps/details?id=com.vivaaerobus.app&hl=es&gl=MX' isExternal color='teal.500'>Android</Link> and <Link href='https://apps.apple.com/mx/app/viva-aerobus-vuela/id1563307248' isExternal color='teal.500'>iOS</Link>.</Text>
             <Text w={['60%',null,'70%']} ml={['15%',null,'15%']} pb='15px'>Highlights of my career include <Link href='https://aeromexico.com/' isExternal color='teal.500'>Aeroméxico</Link>, <Link href='https://globalhitss.com/' color='teal.500' isExternal>Global Hitss</Link> & <Link href='https://optimen.com.mx/' isExternal color='teal.500'>Optimen...</Link> 🚀</Text>
          
          </Box>
          {isNotDesktop && <Box w='100%' h='fit-content' bg='black' color='gray'  >
            <Flex direction='column' align='center'>
                <Center >
                  <Text mt='12px' mb='20px' fontSize='4xl'>Contact me</Text>
                </Center>
            <div>
              <form name="contact" method="post" autocomplete="off">
                <Flex direction='column' align='center' gap='3' w='100%' pb='20px'>
                  <input type="hidden" name="form-name" value="contact" />

                  <input placeholder="Name" type="text" name="name" autocomplete="off"/>
                  <input placeholder="Email" type="email" name="email" autocomplete="off"/>
                  <input placeholder="Subject" type="text" name="subject"/>
                  <textarea placeholder="Message" name="message"></textarea>
                  <button type="submit" className='hello'>Send Message</button>
                </Flex>
              </form>
            </div>
            </Flex>
          </Box>}

          {isDesktop && <Box w='100%' h='fit-content' bg='black' color='gray'  >
            <Flex direction='column' align='center' h='350px' justify='center'>
                <Center >
                  <Text mt='12px' mb='20px' fontSize='4xl'>Contact me</Text>
                </Center>
            <div>
              <form name="contact" method="post" autocomplete="off">
                <Flex direction='column' align='center' gap='3' w='100%'>
                  <Box>
                    <Center>
                      <Flex  w='80%'>
                        <Box>
                          <Flex direction='column' align='center' gap='3'>
                            <input type="hidden" name="form-name" value="contact" />
                            <input placeholder="Name" type="text" name="name" autocomplete="off"/>
                            <input placeholder="Email" type="email" name="email" autocomplete="off"/>
                            <input placeholder="Subject" type="text" name="subject"/>
                          </Flex>
                        </Box>
                        <Box>
                          <textarea placeholder="Message" name="message" style={{height: "100%"}}></textarea>
                        </Box>
                      </Flex>
                    </Center>
                  </Box>
                  <Box pt='20px'>
                    <Center>
                      <button type="submit" className='hello'>Send Message</button>
                    </Center>
                  </Box>
                </Flex>
              </form>
            </div>
            </Flex>
          </Box>
          } 
          
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

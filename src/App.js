import logo from './logo.svg';
import './App.css';
import { Avatar, Wrap, Image } from '@chakra-ui/react';
import go from './Untitled.jpg';
import { Grid, GridItem, Flex, Spacer, Box, Text, Center, Heading } from '@chakra-ui/react';


function App() {
  return (
    <Grid
      templateAreas={`"header1 header2 header2"
                      "nav main main"
                      "nav2 main2 main2"
                      "footer footer footer"`}
      gridTemplateRows={'5vh 45vh 45vh 10vh'}
      gridTemplateColumns={'33% 33% 33%'}
      color='gray'
      
      fontWeight='bold'
    >
    <GridItem pl='2' bg='#0c0d0d' area={'header1'}>
      <Flex color='gray' h='100%' align='center'>
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
    </GridItem>
    <GridItem pl='2' bg='#0c0d0d' area={'header2'}>
      <Flex h='100%' align='center' ml='10%'>
            <Heading as='h1' size='lg' noOfLines={1}>Tobías De La Cruz</Heading>
      </Flex>
    </GridItem>
    <GridItem pl='2' bg='#101217' area={'nav'}>
      <Flex justify='center' align='center' h='100%'>
        <Image
            borderRadius='full'
            w='56%'
            h='80%'
            src= {go}
            alt='Dan Abramov'
            
          />
        </Flex>
    </GridItem>
    <GridItem pl='2' bg='#0c0d0d' area={'nav2'}>
      
    </GridItem>
    <GridItem pl='2' bg='#101217' area={'main2'}>
      
    </GridItem>
    <GridItem pl='2' bg='#0c0d0d' area={'main'}>
      <Flex h='100%' direction='column' justify='center' >
        <Heading as='h1' size='lg' noOfLines={1} ml='25%'>Hi there!</Heading>
        <Text w='50%' ml='25%'>My name is Tobías. I'm a Mexican technology generalist, with recent experience as a Project Manager, remote Software Development teams and community building activities 🧑‍💻
          I work as PM at Umvel. Highlights of my career include Aeroméxico, Global Hitss, Optimen... 🚀</Text>
      </Flex>
    </GridItem>
    <GridItem pl='2' bg='#0c0d0d' area={'footer'}>
    Copyright © 2022, Tobías De La Cruz. 
    </GridItem>
  </Grid>
   
  );
}

export default App;

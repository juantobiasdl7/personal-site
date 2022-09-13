import logo from './logo.svg';
import './App.css';
import { Avatar, Wrap, Image } from '@chakra-ui/react';
import go from './Untitled.jpg';
import { Grid, GridItem, Flex, Spacer, Box, Text, Center, Heading } from '@chakra-ui/react';


function App() {
  return (
    <Grid
      templateAreas={`"header1 header2 header3"
                      "nav main main"
                      "footer footer footer"`}
      gridTemplateRows={'6vh 79vh 15vh'}
      gridTemplateColumns={'33% 33% 33%'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
    <GridItem pl='2' bg='#000000' area={'header1'}>
      <Flex color='gray'>
        <Box>
          <Text>Box 3</Text>
        </Box>
        <Box >
          <Text>Box 3</Text>
        </Box>
        <Box>
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </GridItem>
    <GridItem pl='2' bg='#000000' area={'header2'}>
      <Flex  color='white'>
        <Box mt='12px' w='100%' color='gray'>
          <Center>
            <Heading as='h1' size='lg' noOfLines={1}>Tobías De La Cruz</Heading>
          </Center>
        </Box>
      </Flex>
    </GridItem>
    <GridItem pl='2' bg='#0F3460' area={'nav'}>
      <Flex justify='center' align='center' h='100%'>
        <Image
            borderRadius='full'
            boxSize='350px'
            src= {go}
            alt='Dan Abramov'
            
          />
        </Flex>
    </GridItem>
    <GridItem pl='2' bg='#0F3460' area={'main'}>
      Main
    </GridItem>
    <GridItem pl='2' bg='blue.300' area={'footer'}>
      Footer
    </GridItem>
  </Grid>
   
  );
}

export default App;

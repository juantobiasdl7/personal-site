import logo from './logo.svg';
import './App.css';
import { Avatar, Wrap, Image } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import go from './Untitled.jpg';

function App() {
  return (
    <Wrap bg='#161E4A' >
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    
    
      <Image
        borderRadius='full'
        boxSize='350px'
        src= {go}
        alt='Dan Abramov'
      />
    </Wrap>
  );
}

export default App;

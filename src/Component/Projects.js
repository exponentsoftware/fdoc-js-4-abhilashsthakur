
import { Center,Box, Container, Heading, HStack,Stack, Text } from '@chakra-ui/layout'
import React from 'react'

function Projects() {
    return (
        <>
        <Heading marginTop='8vh'><Center>My Projects</Center></Heading>
    
        <HStack margin="8vh"  spacing="28px">
    
        <Container>
        <Text color="tomato" fontSize="24px"><Center>My Project 1</Center></Text>
        <Text textAlign='justify' justifyContent='inherit'>
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
            
        </Text>
        </Container>
    
    
        <Container>
        <Text color="tomato" fontSize="24px"><Center>My Project 2</Center></Text>
        <Text textAlign='justify' justifyContent='inherit'>
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production
        </Text>
    </Container>


    <Container>
    <Text color="tomato" fontSize="24px"><Center>My Project 3</Center></Text>
    <Text textAlign='justify' justifyContent='inherit'>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production
    </Text>
</Container>
</HStack>
</>
    )
}

export default Projects

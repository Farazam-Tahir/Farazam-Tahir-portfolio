import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import vector from '../Images/vectorIG.svg'
import { Link } from 'react-scroll';

const About = () => {
  return (
    <Flex flexWrap='wrap' minHeight='500px' alignItems='center' className='paddinglr' justifyContent='space-between' id='about'  bgColor='rgba(0,0,0,0.8)' py='30px' w='100%'>
      <Box w={['100%','100%','45%','45%']}>
        <Image src={vector} alt="image" w='100%' maxH='248px' />
      </Box>
      <Box w={['100%','100%','45%','45%']} my={['20px','20px','20px']}>
        <Heading mb='8px' fontSize='32px'>About Me</Heading>
        <Text color='#747474'>
        Computer Science graduate from the University of South Asia, with a BSCS degree. I kick-started my career with a 2-month internship at Cedar Financial as a Frontend Intern. Post-graduation, I honed my skills as a Trainee Software Engineer at Seebiz PVT LTD for 6 months, and I currently thrive as an Associate Software Engineer at Geeky Bugs. My expertise includes JavaScript, ReactJS, HTML, CSS, and Chakra UI.</Text>
        <Link to="contact" smooth={true} duration={500}>
        <Button colorScheme='blue' padding='10px 25px' borderRadius='30px' bgColor='#00AAFF' color='#FFF' border={0} mt='40px'>
            Hire Me
        </Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default About;

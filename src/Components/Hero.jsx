import { Box, Flex, Text, Image, Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import HeroImage from '../Images/profilePhoto.png';
import ParticalsBG from './ParticalsBG';
import { Link } from 'react-scroll';

const Hero = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
    <ParticalsBG/>
    <Flex flexWrap='wrap' className='paddinglr' alignItems='center' justifyContent='space-between' w = '100%' minHeight='90vh' bgColor='rgba(0,0,0,0.7)' pt='20px'>
      <Box w={['100%','100%','100%','50%']} className='bio'>
        <Text fontSize='24px' fontWeight='400' letterSpacing='1.8px'>
          Hello, I’m
        </Text>
        <Text fontSize='48px' fontWeight='700' lineHeight='48px' className='myName'>
          Farazam Tahir
        </Text>
        <Text fontSize='24px' fontWeight='400' letterSpacing='1.8px' color='#00AAFF'>
          Associate Software Engineer
        </Text>
        <Link to='about' smooth={true} duration={500}>
        <Button px='32px' py='30px' mt='40px' borderRadius='40px' color='#0A183D'>
          About Me
        </Button>
        </Link>
      </Box>
      <Box w={['100%','100%','100%','50%']}>
        <Image src={HeroImage} alt="My Ig" h='100%' w='100%'/>
      </Box>
    </Flex>
    </>
  )
}

export default Hero;

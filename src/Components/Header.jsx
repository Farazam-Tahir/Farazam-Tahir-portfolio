import React from 'react';
import Twitter from '../Images/mdi_twitter.svg';
import Facebook from '../Images/ri_facebook-fill.svg';
import Linkedin from '../Images/ri_linkedin-fill.svg';
import { Image } from '@chakra-ui/react';
import { HStack, Text } from '@chakra-ui/react'
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <HStack alignItems='center' justifyContent='space-between' w="100%" h = "84px"
     bgColor="#1D1D1D" className='paddinglr'>
      
      <Text color='#00AAFF' fontWeight={800} fontSize={[0,'20px','20px','20px','30px']}> Farazam </Text>

      <HStack className='nav-items' spacing={['30px', '40px', '15px', '10px']}>
        <Link to="main" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
        <Link to="projects" smooth={true} duration={500}>Portfolio</Link>
        {/* <Link to="services" smooth={true} duration={500}>Services</Link> */}
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </HStack>

      <HStack className='social-icons' spacing='20px'>
        <Link className='social-icons'>
          <Image src={Twitter} alt="Twiiter Logo" w={[0,'20px','20px','20px','30px']}/>
        </Link>
        <Link className='social-icons'>
        <Image src={Facebook} alt="Facebook Logo" w={[0,'20px','20px','20px','30px']} />
        </Link>
        <Link className='social-icons'>
        <Image src={Linkedin} alt="Linkedin Logo"  w={[0,'20px','20px','20px', '30px']}/>
        </Link>
      </HStack>
    </HStack>
  )
}

export default Header

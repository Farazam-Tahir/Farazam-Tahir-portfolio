import React from 'react';
import Twitter from '../Images/mdi_twitter.svg';
import Facebook from '../Images/ri_facebook-fill.svg';
import Linkedin from '../Images/ri_linkedin-fill.svg';
import { Image, Img } from '@chakra-ui/react';
import { HStack, Text, Menu, MenuItem, MenuButton, MenuList, IconButton } from '@chakra-ui/react'
import {Link} from 'react-scroll';
import HamburgerIcon from '../Images/hamburgerIcon.svg';

const Header = () => {
  return (
    <HStack alignItems='center' justifyContent='space-between' w="100%" h = "84px"
     bgColor="#1D1D1D" className='paddinglr'>
      
      <Text color='#00AAFF' fontWeight={800} fontSize={['30px','20px','20px','20px','30px']}> Farazam </Text>

      <HStack className='nav-items' spacing={['0', '10px', '10px', '10px']}>
        <Link to="main" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </HStack>

      <HStack className='social-icons' spacing={[0,0,'20px','20px','20px']}>
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

      <Menu isLazy>
        <MenuButton w={['30px','30px',0,0,0]}><Image src={HamburgerIcon} w='30px'/></MenuButton>
        <MenuList bgColor = "black" w='380px'>
          <MenuItem bgColor = "black">
            <Link to="main" smooth={true} duration={500}>Home</Link>
          </MenuItem>
          <MenuItem bgColor = "black">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </MenuItem>
          <MenuItem bgColor = "black">
            <Link to="experience" smooth={true} duration={500}>Experience</Link>
          </MenuItem>
          <MenuItem bgColor = "black">
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </MenuItem>
          <MenuItem bgColor = "black">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  )
}

export default Header

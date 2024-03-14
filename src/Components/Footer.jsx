import React from 'react';
import Vector2 from '../Images/vectorIG2.png'
import { Box, Flex, FormControl, Heading, Input, VStack, Image, Button, Text, HStack } from '@chakra-ui/react';
import Phone from '../Images/phone.svg';
import Email from '../Images/email.svg';
const Footer = () => {
  return (
    <VStack w='100%' h='600px' bgColor='#000' className='paddinglr' justifyContent='center' id='contact'>
      <Heading mb='60px' fontSize='48px' fontWeight={700}>
        Contact Now
      </Heading>
      
      <Flex w='100%' justifyContent='space-between' alignItems='center'>
      <Box w={['100%','100%', '45%','45%','45%']}>
        <FormControl display='flex' flexDirection='column' gap='35px'>
            <Input type='text' placeholder='Full Name' className='input'/>
            <Input type='email'placeholder='E-mail' className='input'/>
            <Input type='text'placeholder='Message' className='input'/>
            <Button bgColor='#FFFFFF' color='#17153D' borderRadius='48px' py='10px' px='20px'>
              Submit
            </Button>
        </FormControl>
      </Box>
      
      <Box w={[0,0,'45%','45%','45%']}>
        <Image src = {Vector2} h='339px' w='100%'/>
      </Box>
      </Flex>

      <Flex justifyContent='space-between' w='100%' className='paddinglr' mt='50px' flexWrap='wrap'>
        <HStack>
          <Image src={Phone} w='20px' />
          <Text fontSize='small'>+923026087991</Text>
        </HStack>
        <HStack>
          <Image src={Email} w='20px' />
          <Text fontSize='small'>frazamtahir28@gmail.com</Text>
        </HStack>
      </Flex>
    </VStack>
  )
}

export default Footer

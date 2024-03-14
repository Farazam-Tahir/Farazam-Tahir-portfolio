import React from 'react';
import Project1 from '../Images/project1.png';
import Project2 from '../Images/plantsProject.PNG';
import Project3 from '../Images/gymProject.PNG';
import { Box, Flex, Image, VStack, Heading, Text, Button } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';



const cardData = [
    {
        ig : Project3,
        heading : 'Fitness Club',
        text : 'As a passionate and skilled web developer, I took on the exciting challenge of creating a dynamic and engaging fitness website.'
    },
    {
      ig : Project2,
      heading : 'Planto',
      text : `Immerse in the beauty of nature! My ReactJS plant selling web project 'Planto' brings greenery to your fingertips effortlessly.`
    },
];

const myShadow = '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)';
  

const Cards = () => {
  
  return (
    <Flex flexWrap='wrap' gap='20px' mt='20px' w='100%' justifyContent='center'>
      {cardData.map((data)=>{
        return(
            <VStack w={['100%', '100%', '80%' , '45%']}  borderRadius='30px' bgColor='black' border='1px solid red' shadow={myShadow}>
                <Image src={data.ig} h={['200px','200px','330px','330px','330px']} w='100%' objectFit='fit' borderTopRadius='30px' className='card-ig'/>

                <Heading color='#fff' mt='30px'>{data.heading}</Heading>
                
                <Text color='#fff' fontSize='10px' mt='10px' px={['40px','40px','50px','55px','78px']} textAlign='justify'>
                  {data.text}
                </Text>
                
                <Button py='25px' my='20px' mb='30px' px='40px' bgColor='#00AAFF' borderRadius='30px' border={0}>
                  Visit Site
                </Button>
            </VStack>
        )
      })}
    </Flex>
  )
}

export default Cards

import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button } from "native-base";

var ad=[
  require('../images/img_book_fashinopolis.png'),
  require('../images/img_book_chanel.png'),
  require('../images/img_book_calligraphy.png'),
  require('../images/img_book_ysl.png'),
  require('../images/img_book_tbos.png'),
  require('../images/img_book_stitchedup.png'),
];
const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    description
  } = route.params;
  return (
    <Center>
      <ScrollView>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={ad[image]}
            alt='albumImage'
          />
        </AspectRatio>
        <Box bg="#fff" padding="2" margin="2">
          <Center>
            <Heading pt={1} fontSize="2xl" color='#6099E4'>Discount Now!</Heading>
            <Heading fontSize="4xl">Price: ${price}</Heading>
          </Center>
          <Button 
            mt="4"
            onPress={() => Linking.openURL(url)}
          >
            Buy Now !
          </Button>   
        </Box>
        <Box bg="#fff" padding="2" margin="2">
            <Text>
              <Text bold>Artist: </Text>
              {artist}
            </Text>
            <Text>            
              <Text bold>Title: </Text>
              {title}
            </Text>
            <Text mt='15' bold>Descriptions:</Text>
            <Text>{'\t'}{description}</Text>
        </Box>
      </ScrollView>      
    </Center>

  );
}

export default DetailScreen;

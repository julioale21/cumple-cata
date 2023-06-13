import React from 'react';

import { 
    Link, 
    Card, 
    CardBody, 
    Image, 
    Heading, 
    Text, 
    Stack 
} from '@chakra-ui/react';

const CityCard = ({text, title, imageURL }) => {
  return (
    <Link>
        <Card maxW="xs" marginBottom={10}>
            <CardBody>
                <Image
                    src={imageURL}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    maxHeight={160}
                    width="100%"
                    objectFit="cover"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                    {text}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    </Link>
  )
}

export  { CityCard }
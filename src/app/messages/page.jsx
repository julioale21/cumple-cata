'use client';

import React, { useEffect, useState } from 'react';

import { MessageService } from '@/services/messageService';
import { 
  Grid,
  Stack, 
  Text 
} from '@chakra-ui/react';
import CardMessage from '@/components/messages/CardMessage';

const Testimonials = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      const fetchMessages = async () => {
        const response = await MessageService.getMessages();
        setMessages(response.data);
      }
      fetchMessages();
    }, [])

    if (messages.length === 0) return <Text>Loading...</Text>
    
    return (
        <Stack 
          flexDirection="row" 
          justifyContent="center" 
          marginTop={50} 
          minHeight="100vh" 
          width="100%"
        >
          <Grid paddingX={5}  templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={[1, 6]}>
            {messages.map((message) => (
              <CardMessage key={message.id} message={message} />
            ))}
          </Grid>
        </Stack>
    )
}

export default Testimonials
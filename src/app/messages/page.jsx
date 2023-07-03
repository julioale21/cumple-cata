"use client";

import React, { useEffect, useState } from "react";

import { MessageService } from "@/services/messageService";
import {
  Button,
  ButtonGroup,
  Grid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import CardMessage from "@/components/messages/CardMessage";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState([]);


  useEffect(() => {
    const fetchMessages = async () => {
      const response = await MessageService.getMessages();
      setMessages(response.data);
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(messages.length / itemsPerPage));
    setItemsToShow(messages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
  }, [messages, currentPage]);

  const handlePreviousPage = (value) => {
    setCurrentPage(Math.max(1, Math.min(value -1, 0)));
  };

  const handleNextPage = (value) => {
    setCurrentPage(Math.max(value, totalPages));
  };

  const handlePageChange = (page) => {
    console.log('page', page);
    setCurrentPage(page);
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      marginTop={50}
      marginBottom={10}
      minHeight="100vh"
      width="100%"
    >
      {messages.length === 0 ? (
        <Stack
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text>Loading...</Text>
        </Stack>
      ) : (
        <Stack>
          <Grid
            paddingX={5}
            templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]}
            gap={[4, 6]}
          >
            {itemsToShow.map((message, index) => (
              <CardMessage key={index} message={message} />
            ))}
          </Grid>
          <Stack w="100" flexDirection="row" justifyContent="flex-end">
            <ButtonGroup mt={10} spacing={2}>
              <Button
                variant='ghost'
                onClick={() => handlePreviousPage(currentPage)}
                isDisabled={currentPage === 1}
              >
                <ArrowBackIcon />
              </Button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  borderRadius="50%"
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  colorScheme={currentPage === index + 1 ? "blue" : "gray"}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                variant='ghost'
                onClick={() => handleNextPage(currentPage)}
                isDisabled={currentPage === totalPages}
              >
                <ArrowForwardIcon />
              </Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default MessagesPage;

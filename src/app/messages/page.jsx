"use client";

import React, { useEffect } from "react";

import { MessageService } from "@/services/messageService";
import { Button, ButtonGroup, Grid, Stack, Text } from "@chakra-ui/react";
import CardMessage from "@/components/messages/CardMessage";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useMessages } from "@/hooks/useMessages";

import Lottie from "lottie-react";
import AirplaneLoadingAnimation from "../../animations/loading-airplane.json";
import BackgroundAnimation from "../../animations/airplane.json";

const MessagesPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    totalPages,
    currentPage,
    minPageIndex,
    maxPageIndex,
    itemsToShow,
    setMessages,
    handlePreviousPage,
    handleNextPage,
    handlePageChange,
  } = useMessages();

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      const response = await MessageService.getMessages();
      setMessages(response.data);
      setIsLoading(false);
    };
    fetchMessages();
  }, []);

  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      marginTop={50}
      marginBottom={10}
      minHeight="100vh"
      width="100%"
    >
      {isLoading ? (
        <Stack
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
        >
          <Stack width={150}>
            <Lottie animationData={AirplaneLoadingAnimation} />
          </Stack>
          <Text>Loading...</Text>
        </Stack>
      ) : (
        <Stack>
          <Stack >
            <Lottie animationData={BackgroundAnimation} />
          </Stack>
          <Grid
            paddingX={5}
            templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]}
            gap={[4, 6]}
          >
            {itemsToShow.map((message, index) => (
              <CardMessage key={index} message={message} />
            ))}
          </Grid>
          {itemsToShow.length > 0 && (
            <Stack w="100" flexDirection="row" justifyContent="flex-end">
              <ButtonGroup mt={10} spacing={2}>
                <Button
                  variant="ghost"
                  onClick={handlePreviousPage}
                  isDisabled={currentPage === 1}
                >
                  <ArrowBackIcon />
                </Button>
                {Array.from({ length: maxPageIndex - minPageIndex + 1 }).map(
                  (_, index) => {
                    const pageIndex = minPageIndex + index;
                    return (
                      <Button
                        borderRadius="50%"
                        key={pageIndex}
                        onClick={() => handlePageChange(pageIndex)}
                        colorScheme={
                          currentPage === pageIndex ? "blue" : "gray"
                        }
                      >
                        {pageIndex}
                      </Button>
                    );
                  }
                )}
                <Button
                  variant="ghost"
                  onClick={handleNextPage}
                  isDisabled={currentPage === totalPages}
                >
                  <ArrowForwardIcon />
                </Button>
              </ButtonGroup>
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default MessagesPage;

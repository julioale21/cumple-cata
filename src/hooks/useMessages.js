import { useEffect, useState } from "react";
import { usePagination } from "./usePagination";

const itemsPerPage = 10;

export const useMessages = () => {
    const [messages, setMessages] = useState([]);
    const [itemsToShow, setItemsToShow] = useState([]);

    const {
        currentPage,
        totalPages,
        setTotalPages,
        minPageIndex,
        maxPageIndex,
        handlePreviousPage,
        handleNextPage,
        handlePageChange,
      } = usePagination({ itemsPerPage: 5 });

      useEffect(() => {
        setTotalPages(Math.ceil(messages.length / itemsPerPage));
        setItemsToShow(
          messages.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )
        );
      }, [messages, currentPage]);

      return {
        totalPages,
        currentPage,
        minPageIndex,
        maxPageIndex,
        itemsToShow,
        setMessages,
        handlePreviousPage,
        handleNextPage,
        handlePageChange,
      }
    

};
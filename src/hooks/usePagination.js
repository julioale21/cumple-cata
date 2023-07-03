import { useState } from "react";

export const usePagination = ({ itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handlePreviousPage = () => {
        setCurrentPage(Math.max(1, currentPage - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
      };
    
    const handlePageChange = (page) => {
        console.log("page", page);
        setCurrentPage(page);
    };

    let minPageIndex = Math.max(1, currentPage - 1);
    let maxPageIndex = Math.min(totalPages, currentPage + 1);
  
    if (maxPageIndex - minPageIndex < 2) {
      if (minPageIndex === 1) {
        maxPageIndex = Math.min(totalPages, currentPage + 2);
      } else if (maxPageIndex === totalPages) {
        minPageIndex = Math.max(1, currentPage - 2);
      }
    }

    return {
        currentPage,
        totalPages, 
        setTotalPages,
        minPageIndex,
        maxPageIndex,
        handlePreviousPage,
        handleNextPage,
        handlePageChange,
    }
}
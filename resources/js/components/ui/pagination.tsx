import * as React from "react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Fungsi untuk menghasilkan nomor halaman yang ditampilkan
  const getPageNumbers = () => {
    const pages = [];

    // Selalu tampilkan halaman pertama
    pages.push(1);

    // Tampilkan 3 nomor halaman di sekitar currentPage
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Jika currentPage dekat dengan awal, geser ke kanan
    if (currentPage <= 3) {
      end = 4;
    }
    // Jika currentPage dekat dengan akhir, geser ke kiri
    else if (currentPage >= totalPages - 2) {
      start = totalPages - 3;
    }

    // Tambahkan ellipsis jika ada jarak antara halaman pertama dan halaman saat ini
    if (start > 2) {
      pages.push("...");
    }

    // Tambahkan halaman di antara start dan end
    for (let i = start; i <= end; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // Tambahkan ellipsis jika ada jarak antara halaman saat ini dan halaman terakhir
    if (end < totalPages - 1) {
      pages.push("...");
    }

    // Selalu tampilkan halaman terakhir
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={cn("flex justify-between items-center mt-4", className)}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium",
          currentPage === 1
            ? "bg-muted text-muted-foreground cursor-not-allowed"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Previous
      </button>

      {/* Numbering (Page Numbers) */}
      <div className="flex gap-2">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-3 py-2 text-sm text-muted-foreground">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => handlePageChange(page as number)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium",
                currentPage === page
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium",
          currentPage === totalPages
            ? "bg-muted text-muted-foreground cursor-not-allowed"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

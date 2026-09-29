import Image from "next/image";
import Link from "next/link";

import chevronLeft from "@/components/images/IconChevronLeft.svg";
import chevronRight from "@/components/images/IconChevronRight.svg";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

const arrowStyles =
  "flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-background";

function pageHref(basePath: string, page: number) {
  return page === 1 ? basePath : `${basePath}?page=${page}`;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const previousPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center">
      <ul className="flex items-center gap-2">
        <li>
          <Link
            href={pageHref(basePath, previousPage)}
            aria-label="Previous page"
            aria-disabled={currentPage === 1}
            className={cn(
              arrowStyles,
              currentPage === 1 && "pointer-events-none opacity-40",
            )}
          >
            <Image
              src={chevronLeft}
              alt=""
              aria-hidden="true"
              className="h-5 w-auto"
            />
          </Link>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <Link
              href={pageHref(basePath, page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full text-label-md transition-colors",
                page === currentPage
                  ? "bg-accent text-foreground"
                  : "text-foreground hover:bg-background",
              )}
            >
              {page}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href={pageHref(basePath, nextPage)}
            aria-label="Next page"
            aria-disabled={currentPage === totalPages}
            className={cn(
              arrowStyles,
              currentPage === totalPages && "pointer-events-none opacity-40",
            )}
          >
            <Image
              src={chevronRight}
              alt=""
              aria-hidden="true"
              className="h-5 w-auto"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

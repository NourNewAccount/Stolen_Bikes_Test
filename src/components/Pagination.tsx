import React from "react";
import { Box, TablePagination, Typography } from "@mui/material";

interface PaginationComponentProps {
  count: number;
  totalCount: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Pagination: React.FC<PaginationComponentProps> = ({
  count,
  totalCount,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '25px 0px' }}>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        labelDisplayedRows={({ from, to }) => (
          <Typography variant="body1" sx={{ color: 'black'}}>
            Showing {from}-{to} of <strong style={{ fontSize: '1rem' }}>{totalCount}</strong>
          </Typography>
        )}
      />
    </Box>
  );
};

export default Pagination;

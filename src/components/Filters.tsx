import React from "react";
import { TextField, IconButton, Stack } from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@material-ui/icons";
import { format } from "date-fns";

interface FilterComponentProps {
  filterText: string;
  startDate: Date | null;
  endDate: Date | null;
  handleFilterTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleStartDateChange: (date: Date | null) => void;
  handleEndDateChange: (date: Date | null) => void;
  handleClearFilters: () => void;
}

const Filters: React.FC<FilterComponentProps> = ({
  filterText,
  startDate,
  endDate,
  handleFilterTextChange,
  handleStartDateChange,
  handleEndDateChange,
  handleClearFilters,
}) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        label="Filter by Title"
        variant="outlined"
        value={filterText}
        onChange={handleFilterTextChange}
        sx={{width: '66%'}}
      />
      <TextField
        label="Start Date"
        type="date"
        variant="outlined"
        value={startDate ? format(startDate, "yyyy-MM-dd") : ""}
        onChange={(e) => handleStartDateChange(new Date(e.target.value))}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          '& input[type="date"]::selection': {
            color: 'red',
            background: 'yellow'
          }
        }}
      />
      <TextField
        label="End Date"
        type="date"
        variant="outlined"
        value={endDate ? format(endDate, "yyyy-MM-dd") : ""}
        onChange={(e) => handleEndDateChange(new Date(e.target.value))}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          '& input[type="date"]::selection': {
            color: 'red',
            background: 'yellow'
          }
        }}
      />
      <IconButton onClick={handleClearFilters}>
        <ClearIcon />
      </IconButton>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Filters;

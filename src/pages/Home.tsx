import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import BikeList from "../components/BikeList";
import ErrorComponent from "../components/ErrorComponent";
import LoadingSpinner from "../components/LoadingSpinner";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import { fetchStolenBikes } from "../services/bikeIndexApi";
import { StolenBike } from "../types/StolenBike";

const Home: React.FC = () => {
  const [bikes, setBikes] = useState<StolenBike[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<StolenBike[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | any | string | null>(null);
  const [filterText, setFilterText] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchStolenBikes({ page: page + 1 }); 
        setBikes(response.bikes);
        setTotalCount(response.totalCount); 
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]); 

  useEffect(() => {
    let filtered = bikes;

    if (filterText.trim() !== "") {
      filtered = filtered.filter((bike) =>
        bike.title.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter(
        (bike) =>
          bike.date &&
          new Date(bike.date) >= startDate &&
          new Date(bike.date) <= endDate
      );
    }

    setFilteredBikes(filtered);
  }, [filterText, bikes, startDate, endDate]);

  const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleClearFilters = () => {
    setFilterText("");
    setStartDate(null);
    setEndDate(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setLoading(true);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: '100hv' }}>
        <LoadingSpinner />
      </Box>
    );
  }

  if (error) {
    return <ErrorComponent message={`Error: ${error.message}`} />;
  }

  return (
    <Container>
      <Box sx={{ paddingTop: "120px", paddingBottom: '20px', minHeight: '100hv' }}>
        <Filters
          filterText={filterText}
          startDate={startDate}
          endDate={endDate}
          handleFilterTextChange={handleFilterTextChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleClearFilters={handleClearFilters}
        />
      </Box>
      {filteredBikes.length === 0 ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="calc(100vh - 350px)"
        >
          <Typography variant="h5">
            No results found. Try adjusting your filters.
          </Typography>
        </Box>
      ) : (
        <>
          <BikeList bikes={filteredBikes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
          <Pagination
            count={filteredBikes.length}
            totalCount={totalCount} 
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Container>
  );
};

export default Home;

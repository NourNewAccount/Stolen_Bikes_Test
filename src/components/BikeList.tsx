import React from 'react';
import { StolenBike } from '../types/StolenBike';
import BikeListItem from './BikeListItem';
import { Box } from '@mui/material';

interface Props {
  bikes: StolenBike[];
}

const BikeList: React.FC<Props> = ({ bikes }) => {
  return (
    <Box py={4}>
      {bikes.map((bike, index) => (
        <BikeListItemWithMargin key={bike.id} bike={bike} isLastItem={index === bikes.length - 1} />
      ))}
    </Box>
  );
};

interface BikeListItemProps {
  bike: StolenBike;
  isLastItem: boolean;
}

const BikeListItemWithMargin: React.FC<BikeListItemProps> = ({ bike, isLastItem }) => {
  const marginBottom = isLastItem ? 0 : 6;

  return (
    <Box sx={{ marginBottom}}>
      <BikeListItem bike={bike} />
    </Box>
  );
};

export default BikeList;

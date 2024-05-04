import React from 'react';
import { StolenBike } from '../types/StolenBike';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface Props {
  bike: StolenBike;
}

const BikeListItem: React.FC<Props> = ({ bike }) => {
  const avatarUrl = process.env.PUBLIC_URL + '/lightIcon.svg';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      alignItems="center"
      marginBottom={2}
      padding={3}
      borderRadius={4}
      boxShadow={5}
      bgcolor="rgba(255, 255, 255, 0.3)"
      style={{ backdropFilter: 'blur(80px)' }}
    >
      <BikeThumbnail bike={bike} avatarUrl={avatarUrl} isMobile={isMobile} />

      <BikeDetails bike={bike} isMobile={isMobile} />
    </Box>
  );
};

interface BikeThumbnailProps {
  bike: StolenBike;
  avatarUrl: string;
  isMobile: boolean;
}

const BikeThumbnail: React.FC<BikeThumbnailProps> = ({ bike, avatarUrl, isMobile }) => {
  return (
    <Box
      marginRight={!isMobile ? 2 : 0}
      marginBottom={!isMobile ? 0 : 2}
      borderRadius={0.5}
      boxShadow={bike.thumb ? 2 : 0}
      overflow="hidden"
      minWidth={250}
      height={250}
    >
      <img
        src={bike.thumb || avatarUrl}
        alt="Bike"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
};

interface BikeDetailsProps {
  bike: StolenBike;
  isMobile: boolean;
}

const BikeDetails: React.FC<BikeDetailsProps> = ({ bike, isMobile }) => {
  return (
    <Box sx={{ marginLeft: !isMobile ? '10px' : 0, marginTop: !isMobile ? 0 : '10px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
        {bike.title}
      </Typography>

      <Typography variant="body1" marginBottom="8px">
        {bike.description}
      </Typography>

      {renderBikeDetail('Date of Theft:', bike.date_stolen)}
      {renderBikeDetail('Date Reported:', bike.date_reported)}
      {renderBikeDetail('Location:', bike.stolen_location)}
    </Box>
  );
};

const renderBikeDetail = (label: string, value?: string) => {
  return (
    <Box marginBottom="8px">
      <Typography variant="body2" sx={{ fontSize: '0.8rem' }} color="textSecondary">
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};

export default BikeListItem;

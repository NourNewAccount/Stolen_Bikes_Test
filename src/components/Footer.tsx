import React from 'react';
import { Box, Typography, Link, ListItemIcon, SvgIcon, useTheme } from '@mui/material';
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import {ABOUT_PARAGRAPH} from "../constants/constants";

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
  title?: string;
  description?: string;
  developer?: string;
  developerLink?: string;
  rightsText?: string;
  dataProvidedBy?: string;
  dataProviderLink?: string;
}

const Footer: React.FC<FooterProps> = ({
  backgroundColor = 'secondary.dark',
  textColor = 'common.white',
  iconColor,
  title = 'Stolen Bikes in Munich',
  description = ABOUT_PARAGRAPH,
  developer = 'Nour Mansour',
  developerLink = 'https://t.me/NourNew',
  rightsText = `© ${new Date().getFullYear()} All rights reserved`,
  dataProvidedBy = 'BikeIndex',
  dataProviderLink = 'https://www.bikeindex.org/',
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: backgroundColor,
        color: textColor,
        py: 3.7,
        textAlign: 'center',
        mt: 5,
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'flex-start' },
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            justifyContent: 'center',
            flex:'0.3',
          }}
        >
          <ListItemIcon>
            <SvgIcon
              sx={{
                color: iconColor || theme.palette.common.white,
                fontSize: { xs: "7rem", sm: "10rem" },
                marginRight: '-12px',
              }}
              component={DirectionsBikeIcon}
            />
          </ListItemIcon>
          <ListItemIcon>
            <SvgIcon
              sx={{
                color: iconColor || theme.palette.common.white,
                fontSize: { xs: "7rem", sm: "10rem" },
                marginLeft: '-12px',
              }}
              component={DirectionsBikeIcon}
            />
          </ListItemIcon>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-start' },
            justifyContent: 'center',
            flex: { xs: 1, sm: 0.7 },
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bolder',
              color: theme.palette.primary.main,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            textAlign="left"
            sx={{
              width: '91%',
              color: textColor,
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: '25px',
              py: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bolder',
                color: textColor,
              }}
            >
              Developed by {' '}
              <Link
                href={developerLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontWeight: 'bolder', color: theme.palette.primary.main }}
              >
                {developer}
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: textColor,
              }}
            >
              {rightsText}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: textColor,
              }}
            >
              Data provided by{' '}
              <Link
                href={dataProviderLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: theme.palette.primary.main }}
              >
                {dataProvidedBy}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

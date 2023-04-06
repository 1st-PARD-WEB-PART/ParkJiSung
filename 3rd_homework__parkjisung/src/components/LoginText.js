import { Box, Typography } from '@mui/material';

export default function LoginText() {
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
           
        }}
        >
            <Typography
            sx={{
                color: '#1877F2',
                fontStyle: 'normal',
                fontFamily: 'RobotoCondensed',
                fontWeight: '900',
                fontSize: '50px',
                lineHeight: '50px',
                letterSpacing: '0.0001rem',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 25%)',
                mb: 2,
            }}
            >
                FaceBook
            </Typography>
            <Box
            sx={{
                width: 'calc(35vw)',
                color: "#1C1E21",
                fontStyle: 'normal',
                fontFamily: 'RobotoCondensed',
                fontWeight: '900',
                fontSize: '30px',
                lineHeight: '30px',
                letterSpacing: '0.0001rem',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 25%)',
            }}
        >
            Connect with friends and the world around you on Facebook.
        </Box>
        </Box>
        
    )
}
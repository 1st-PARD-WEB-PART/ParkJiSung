import { Box, Container } from '@mui/material';

export default function LoginText2() {
    return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        color: "#1C1E21",
                        fontStyle: 'normal',
                        fontFamily: 'Roboto',
                        fontWeight: '800',
                        fontSize: '24px',
                        lineHeight: '38px',
                    }}
                >
                    Create a Page&nbsp;
                </Box>
                <Box
                    sx={{
                        color: "#1C1E21",
                        fontStyle: 'normal',
                        fontFamily: 'RobotoCondensed',
                        fontWeight: '500',
                        fontSize: '20px',
                        lineHeight: '23px',
                    }}
                >
                    for a celebrity, brand or business.
                </Box>
            </Box>
    )
}
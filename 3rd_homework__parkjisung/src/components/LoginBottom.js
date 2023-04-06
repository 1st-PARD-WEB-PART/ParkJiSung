import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function LoginBottom() {
    const languages = [
        '한국어', 'C 언어', 'English (US)', '日本語', 'Deutsch',
        'Português (Brasil)', 'Français (France)',
        'Español', 'Italiano', 'Arabic', 'lkinyarwanda',
    ];
    const etc = [
        'Sign Up', 'Log In', 'Messenger', 'Facebook Lite',
        'Watch', 'People', 'Pages', 'Page Categories',
        'Places', 'Games', 'Locations', 'Marketplace',
        'Facebook Pay', 'Groups', 'Jobs', 'Oculus',
        'Portal', 'Instagram', 'Local', 'Fundraisers',
        'Services', 'Voting Information Center', 'About',
        'Create Ad', 'Create Page', 'Developers',
        'Careers', 'Privacy', 'Cookies', 'Ad Choices',
        'Terms', 'Help', 'Settings'
    ];
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <Box sx={{mt: 3, ml: 12, mb: 3, }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        color: '#8A8D91',
                        fontStyle: 'normal',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '19px',
                        width: 'calc(80vw)',
                        mt: 3,
                        mb: 2,
                    }}
                >
                    {languages.map((language, index) => (
                        <Typography
                            key={index}
                            mr={3}
                            fontSize={14}
                        >
                            {language}
                        </Typography>
                    ))}
                    <AddBoxIcon fontSize="large" color="disabled" />
                </Box>
                <Box sx={{ width: 'calc(80vw)', }}><Divider /></Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        color: '#8A8D91',
                        fontStyle: 'normal',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        lineHeight: '19px',
                        width: 'calc(80vw)',
                        height: 'calc(10vh)',
                        mt: 1.5,
                    }}
                >
                    {etc.map((etc, index) => (
                        <Typography
                            key={index}
                            mr={2}
                            mt={0.5}
                            fontSize={14}
                        >
                            {etc}
                        </Typography>
                    ))}
                </Box>
                <Box
                    sx={{
                        color: '#8A8D91',
                        fontStyle: 'normal',
                        fontFamily: 'Roboto',
                        fontWeight: '900',
                        fontSize: '14px',
                        lineHeight: '19px',
                        mt: 4,
                    }}
                >
                    Meta © 2022
                </Box>
            </Box>
        </Box>
    )
}
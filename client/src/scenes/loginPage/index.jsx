import {
    Box,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import Form from "./Form.jsx";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            <Box
                width="100%"
                background={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    sx={{
                        ["&:hover"]: {
                            cursor: 'pointer'
                        }
                    }}
                >
                    Sociopedia
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? '50%' : '93%'}
                p="2rem"
                m="2rem auto"
                borderRadius='1.5rem'
                background={theme.palette.background.alt}
            >
                <Typography fontWeight='500' variant="h5" sx={{ mb: '1.5rem' }}>
                    Welcome to Sociopedia, my own social media!
                </Typography>
                <Form />
            </Box>
        </Box>
    )
}

export default LoginPage;
import LoginBox from "../components/LoginBox";
import LoginText from "../components/LoginText";
import { Box } from "@mui/material";
import LoginText2 from "../components/LoginText2";
import LoginBottom from "../components/LoginBottom";

//위치 정렬하는 방법 질문 한참걸림

export default function Login() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundSize: "cover",
                backgroundColor: "#F5F5F5",
                gap: 5,
                overflowX: "hidden", // 중요 
            }}
        >

            <Box
                position={"absolute"}
                left="10%"
                top="40%"
            >
                <LoginText />
            </Box>
            <Box
                position={"relative"}
                left="50%"
                mt="10%"
            >
                <LoginBox />
            </Box>
            <Box
                position={"relative"}
                left="51%"
            >
                <LoginText2 />
            </Box>
            <Box
                position={"relative"}
                left="0%"
            >
                <LoginBottom />
            </Box>
        </Box >
    )
}

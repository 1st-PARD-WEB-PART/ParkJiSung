import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import GameIcon from '@mui/icons-material/Gamepad';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Search = styled(Box)(({ theme }) => ({ //styled로 컴포넌트를 만들어서 사용
  position: 'relative', //상대적 위치
  borderRadius: theme.shape.borderRadius, //theme의 모양을 가져옴
  backgroundColor: alpha(theme.palette.common.white, 0.15), //투명도 조절
  '&:hover': { //hover시
    backgroundColor: alpha(theme.palette.common.white, 0.25), //alpha로 투명도 조절 0부터 1까지
  },
  marginRight: theme.spacing(2), //spacing으로 여백 조절
  marginLeft: 1,
  width: 'auto',//auto로 너비 조절
  [theme.breakpoints.up('sm')]: { //sm 이상일때
    marginLeft: theme.spacing(3), //spacing으로 여백 조절
    width: 'auto', //auto로 너비 조절
  },
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Material UI와 styled-components를 이용한 InputBase 스타일링
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // 부모 엘리먼트로부터 상속된 텍스트 색상 사용
  color: 'inherit',
  '& .MuiInputBase-input': {
    // 위, 오른쪽, 아래, 왼쪽 순서의 패딩 값 적용
    padding: theme.spacing(1, 1, 1, 0),
    // 왼쪽 패딩 값 계산
    paddingLeft: `calc(${theme.spacing(6)})`,
    // 너비에 대한 전환 효과 적용
    transition: theme.transitions.create('width'),
    // 너비 값 100% 설정
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // 미디어 쿼리를 사용한 반응형 디자인 설정
      width: '12ch',
      '&:focus': {
        // 포커스가 적용된 경우 너비 값 변경
        width: '20ch',
      },
    },
  },
}));


export default function MyAppBar() {

  const [buttonStates, setButtonStates] = useState({
    home: false,
    people: false,
    game: false,
  });

  const handleClick = (buttonName) => {
    setButtonStates({
      home: buttonName === "home",
      people: buttonName === "people",
      game: buttonName === "game",
    });
  };


  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* flexGrow: 1 = 공간 제약이 없다면 완전 펼쳐진다.*/}
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          <FacebookIcon sx={{ mr: 1 }} />
          Facebook
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
        <Box sx={{ flexGrow: 0.3 }} />
        <IconButton
          size="large"
          color={buttonStates.home ? "disabled" : "inherit"}
          onClick={() => handleClick("home")}
          aria-label="home"
          component={Link} to="/home">
          <HomeIcon />
        </IconButton>
        <IconButton
          size="large"
          color={buttonStates.people ? "disabled" : "inherit"}
          onClick={() => handleClick("people")}
          aria-label="people"
          component={Link} to="/people">
          <PeopleIcon />
        </IconButton>
        <IconButton
          size="large"
          color={buttonStates.game ? "disabled" : "inherit"}
          onClick={() => handleClick("game")}
          aria-label="game"
          component={Link} to="/game">
          <GameIcon />
        </IconButton>
        <Box />
      </Toolbar>
    </AppBar>
  );
}

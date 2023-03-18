import logo from './logo.svg'; //react 로고를 가져오기위해 './logo.svg' 경로에 있는 파일을 'logo'라는 이름으로 가져온다.
import './App.css'; //아래에서 사용될 디자인을 정의한 css파일 import 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img  /* 위에서 'logo'라는 이름으로 가져온 이미지. */ src={logo} className="App-logo" alt="logo" /> 
        <p>
          21700305 박지성 참 되게 살자 
        </p>
        <a //learn react 클릭 시 다음의 링크로 이동.
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; //작성한 페이지를 App이라는 이름의 컴포넌트로 생성. index.js파일에서 App이라는 이름의 컴포넌트로 사용가능.
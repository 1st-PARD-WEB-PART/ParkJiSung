import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profiles';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      /* React에서 path="*"는 정의된 경로 중 현재 URL과 일치하는 경로가 없을 때를 대비한 대체 경로로 사용. 
         사용자가 정의된 경로와 일치하지 않는 URL로 이동하면 path="*" path가 대신 렌더링. 
         이는 사용자 지정 404 페이지를 표시하거나 사용자를 다른 페이지로 리디렉션하는 데 사용.
         이 코드에서는 사용자가 React로 구축된 웹사이트에서 존재하지 않는 URL로 이동하려고 하면, path="*" path를 사용하여 
         기본 브라우저 오류 페이지 대신 사용자 정의 404 오류 페이지를 렌더링.*/
    </Routes>
  );
};

export default App;
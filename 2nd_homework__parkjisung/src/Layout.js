import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 15 }}>
      <Outlet />
      </header>
      <main>
      </main>
    </div>
  );
};

export default Layout;
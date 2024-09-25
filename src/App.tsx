import { Outlet } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

function App() {
  return (
    <main className="flex flex-col h-screen bg-HOME_PATTERN bg-center bg-no-repeat w-screen overflow-x-hidden">
      <Header />

      <div className="flex-auto">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;

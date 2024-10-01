import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import clsx from 'clsx';
import { cn, getCover } from './lib/utils';

function App() {
  const { pathname } = useLocation();

  return (
    <main className={clsx('flex flex-col relative h-screen bg-[#EFDEBE] overflow-x-hidden', {})}>
      <div className="fixed left-0 right-0 bottom-0 pointer-events-none top-0 w-full h-full mix-blend-multiply">
        <img src="/images/texture.png" alt="" className="w-full h-full object-cover opacity-50" />
      </div>
      {pathname === '/' ? (
        <div className="fixed top-0 left-0 right-0 pointer-events-none mix-blend-soft-light bottom-0 opacity-25">
          <img src="/images/home-bg.png" className="w-full h-full object-cover" alt="" />
        </div>
      ) : (
        <div
          className={cn(
            'max-h-[396px] bottom-0 absolute top-0 left-0 right-0',
            getCover(pathname)?.opacity,
            getCover(pathname)?.mode,
          )}>
          <img src={getCover(pathname)?.img} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <Header />

      <div className="flex-auto">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;

import NavBar from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

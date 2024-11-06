import './styles.scss';
import React from 'react';
import Header from './components/common/header';
import Main from './components/common/main';
import Footer from './components/common/footer';
import Home from './components/pages/home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReportPage from './components/pages/report/ReportPage';
import LighthousePage from './components/pages/lighthouse/LighthousePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/report',
    element: <ReportPage/>
  },
  {
    path: '/lighthouse',
    element: <LighthousePage />
  }
]);

function App() {
  return (
    <>
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
      <Footer />
    </>
  )
}

export default App

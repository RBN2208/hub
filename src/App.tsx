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


  // temp to log localStorage space to measure full audit
  function getLocalStorageSize() {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage.getItem(key).length + key.length;
      }
    }
    return total * 2;
  }

  function getRemainingLocalStorage() {
    const maxSize = 5 * 1024 * 1024; // 5 MB
    const used = getLocalStorageSize();
    return maxSize - used;
  }

  console.log(`localstorage space: ${getRemainingLocalStorage() / 1024} KB`);

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

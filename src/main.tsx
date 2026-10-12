import {} from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import Layout from './layout';
import LandingPage from './Pages/main';
import AboutMe from './Pages/about-me';
import MySkills from './Pages/my-skills';
import Contactme from './Pages/contact-me';
import MyExperience from './Pages/my-exp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'about-me', element: <AboutMe /> },
      { path: 'skills', element: <MySkills /> },
      {path: 'experience', element: <MyExperience />},
      { path: 'contact', element: <Contactme /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
);

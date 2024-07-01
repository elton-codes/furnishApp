import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import About from './pages/about'
import Collection from './pages/collection'
import ContactUs from './pages/contact-us'
import Statistics from './pages/landing/components/statistics'
import Testimonial from './pages/landing/components/testimonial'
import Production from './pages/landing/components/production'
import Footer from './pages/landing/components/footer'
import Blog from './pages/landing/components/blog'
import RootLayout from './layouts/rootLayout'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: "about-us",
          element: <About />
        },
        {
          path: "collection",
          element: <Collection />
        },
        {
          path: "contact-us",
          element: <ContactUs />
        },
        {
          path: "statistics",
          element: <Statistics />
        },
        {
          path: "testimonial",
          element: <Testimonial />
        },
        {
          path: "production",
          element: <Production />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "footer",
          element: <Footer />
        }
      ]
     
    },
    {
      path: "login",
      element: <login />
    },
    
  ])
  return <RouterProvider router={router} />
}

export default App

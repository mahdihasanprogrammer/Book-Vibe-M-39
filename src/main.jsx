import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/homePage/HomePage'
import ErrorPage from './pages/errorPage/ErrorPage'
import BookDetails from './pages/bookDetails/BookDetails'
import { ToastContainer } from 'react-toastify'
import BookProvider from './context/BookProvider'
import ListedBooks from './pages/listedBooks/ListedBooks'
import PagesToRead from './pages/pagesToRead/PagesToRead'



const router = createBrowserRouter([

 {
  
  path:'/',
  Component:MainLayout,
    // errorElement: <ErrorPage/>,
  children:[
    {index: true, Component: HomePage },
    {path:'/listedBook', Component:ListedBooks},
    {path: '*',
      element: <ErrorPage/>
     },
    {
      path: '/bookDetails/:id',
      Component: BookDetails,
      loader: ()=> {
        return  fetch('/booksData.json') 
      }
    },
    {path: '/pages', Component: PagesToRead}
   
  ],

 
 },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BookProvider>

      <RouterProvider router={router} />  

   </BookProvider>
   <ToastContainer />

  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainComponent from './Components/MainComponent';
import HomePage from './Pages/HomePage';
import BookDetails from './Components/BookDetails';
import ListedBooks from './Pages/ListedBooks';
import ReadBooks from './Components/ReadBooks/ReadBooks';
import WishList from './Components/WishListBooks/WishList';
import NotFound from './Components/NotFound';
import PagesToRead from './Pages/PagesToRead';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent></MainComponent>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path: '/',
        element:<HomePage></HomePage>,
        loader: () => fetch('books.json')
        
      },
      {
        path:'book/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('books.json')
      },
      {
        path:'pagesToRead',
        element:<PagesToRead></PagesToRead>,
       
      },

      {
        path:'listedBooks',
        element:<ListedBooks></ListedBooks>,
        children:[
          {
             index:true,
            element:<ReadBooks></ReadBooks>
          },

          {
            path:'/listedBooks/wishlist',
            element:<WishList></WishList>
          }
        ]

      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)

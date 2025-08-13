import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import WorkDetails from "./components/Work-Details/Work-Details";
import LifeDetails from "./components/Life-Deatails/Life-Deatails";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";



let query = new QueryClient()
let routes = createBrowserRouter([
  {
    path:"",
    element: <Layout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/About',element:<About/>},
      {path:'/Project',element:<Projects/>},
      {path:'/Contact',element:<Contact/>},
      {path:'/Work-Details',element:<WorkDetails/>},
      {path:'/Life-Details',element:<LifeDetails/>}
    ]
  }
])
function App() {
  return (
    <> 
      
            <QueryClientProvider client={query}>
              
                <RouterProvider router={routes}></RouterProvider>
            </QueryClientProvider>
            
    </>
  );
}

export default App;

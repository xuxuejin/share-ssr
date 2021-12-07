import React from 'react'
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const routes = [
    {
        path: '/',
        children: [
            {   
                exact: true,
                path: '/',
                element: <Home />
            },
            {   
                path: '/detail/:id',
                element: <Detail />
            },
            {   
                path: '/news',
                element: <News />
            },
            {   
                path: '*',
                element: <NotFound />
            }
        ]
        
    }
];

export default routes;
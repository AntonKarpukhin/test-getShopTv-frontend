import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import { NotFound, PromoPage, VideoPage } from "./pages";
import {ApplicationAccepted, ApplicationForm} from './components'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
		children: [
			{
				path: '/',
				element: <VideoPage/>
			},
			{
				path: '/promo',
				element: <PromoPage/>,
				children: [
					{
						path: '/promo',
						element: <ApplicationForm/>
					},
					{
						path: '/promo/:accept',
						element: <ApplicationAccepted/>
					},
				]
			},
		]
	},
	{
		path: '*',
		element: <NotFound/>
	}
]);

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement, );
root.render(
  <React.StrictMode>
	  <RouterProvider router={router} />
  </React.StrictMode>,
);

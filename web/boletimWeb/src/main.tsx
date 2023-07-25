import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./styles/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./page/errorPage";
import { Login } from "./Login";
import { Politica } from "./page/politicaPrivacidade";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		errorElement: <ErrorPage></ErrorPage>,
	},
	{
		path: "/login",
		element: <Login></Login>,
		errorElement: <ErrorPage></ErrorPage>,
	},
	{
		path: "/politicaprivacidade",
		element: <Politica></Politica>,
		errorElement: <ErrorPage></ErrorPage>,
	},
]);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
			<ColorModeScript initialColorMode={"system"}></ColorModeScript>
		</ChakraProvider>
	</React.StrictMode>
);

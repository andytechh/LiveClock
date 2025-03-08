import React from "react";
import Clock from "./components/Clock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
 <>
 <Clock />
 </>
);

export default App;
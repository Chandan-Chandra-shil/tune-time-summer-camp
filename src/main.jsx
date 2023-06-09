import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-[poppins] overflow-hidden">
      <HelmetProvider>
        <Toaster />
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AuthProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>
);

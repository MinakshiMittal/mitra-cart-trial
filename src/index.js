import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ProductProvider } from "./Context/product-context";
import { SortByProvider } from "./Context/sortBy-context";
import { FilterProvider } from "./Context/filter-context";
import { ToastProvider } from "./Context/toast-context";
import { AuthProvider } from "./Context/auth-context";

import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <SortByProvider>
        <FilterProvider>
          <ToastProvider>
            <ProductProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </ProductProvider>
          </ToastProvider>
        </FilterProvider>
      </SortByProvider>
    </Router>
  </StrictMode>,
  rootElement
);

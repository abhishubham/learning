import { QueryClient, QueryClientProvider } from "react-query";
import ProductPage from "./createProducts/ProductPage";
import ProductListPage from "./ProductListing/ProductListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const root = "/";

  return (
    <div className="">
      <div className="border-spacing-5">
        <QueryClientProvider client={new QueryClient()}>
          <BrowserRouter>
            <Routes>
              <Route path={root} element={<Layout />}>
                <Route path="products" element={<ProductPage />} />
                <Route path="productlist" element={<ProductListPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;

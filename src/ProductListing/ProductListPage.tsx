import React from "react";
import { PageHeader } from "../components/PageHeader";
import { PageWrapper } from "../styles/common";
import ProductsListing from "./ProductsListing";

function ProductListPage() {
  return (
    <PageWrapper>
      <PageHeader title={"Products"} />
      <ProductsListing />
    </PageWrapper>
  );
}

export default ProductListPage;
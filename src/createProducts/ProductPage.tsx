import CreateProduct from "./CreateProduct";
import { PageWrapper } from "../styles/common";
import { PageHeader } from "../components/PageHeader";

export default function ProductPage() {
  return (
    <div>
      <PageWrapper>
        <PageHeader title={"Add your Product"} />
        <CreateProduct />
      </PageWrapper>
    </div>
  );
}


import { ProductsGrid } from "@/mainComponents/products/ProductsGrid";
import { Title } from "@/mainComponents/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";

export default function Home() {


  const products = initialData.products


  return (
    <>
      <Title title={"Tienda"} subtitle={"Todos los productos"} classname={"mb-2"} />

      <ProductsGrid products={products} />
    </>
  );
}

import { ProductsGrid } from "@/mainComponents/products/ProductsGrid";
import { Title } from "@/mainComponents/ui/title/Title";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";


const products = initialData.products;


interface Props {
    params: {
        id: Category;
    }
}

export default function ({ params }: Props) {

    const { id } = params

    const productFilerGender = products.filter(products => products.gender === id)

    const genderTitle: Record<Category, string> = {
        'men': 'Hombres',
        'women': 'Mujeres',
        'kid': 'Niños',
        'unisex': 'unisex'
    }

    // if (id === "kids") {
    //     notFound();
    // }

    return (

        <>
            <Title
                title={`Articulos de ${genderTitle[id]}`}
                subtitle={`Nuestra mejor selección para ${genderTitle[id]}`}
                classname={"mb-2  text-blue-600"}
            />

            <ProductsGrid products={productFilerGender} />
        </>
    );

} 
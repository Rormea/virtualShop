import { titleFont } from "@/config/fonts";
import { ProductSliderShowMobile, ProductSliderShowme, QuantitySelector, SizeSelector } from "@/mainComponents";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";




interface Props {
    params: {
        slug: string;
    }
}



export default function ({ params }: Props) {

    const { slug } = params;

    const product = initialData.products.find(product => product.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="m-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

            <div className="col-span-1 md:col-span-2">


                {/* SliceShow */}
                <ProductSliderShowme
                    images={product.images}
                    title={product.title}
                    className="hidden md:block"
                />

                {/* SliceShow Mobile */}
                <ProductSliderShowMobile
                    images={product.images}
                    title={product.title}
                    className="block md:hidden"
                />

            </div>


            {/* Details */}
            <div className="col-span-1 px-5 bg-fuchsia-100">

                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">
                    ${product.price}
                </p>

                {/* slector de tallas */}
                <SizeSelector selecterSize={product.sizes[1]} availableSizes={product.sizes} />


                {/* selctior de cantidad */}
                <QuantitySelector quantity={2} />


                {/* Boton agregar al cartto */}
                <button className="btn-primary my-5 rounded-s-sm">
                    Agregar al Carrito
                </button>

                {/* Descripcion */}
                <h3 className="font-bold text-sm" >Descripción</h3>
                <p className="font-light">
                    {product.description}
                </p>
            </div>
        </div >
    );
} 
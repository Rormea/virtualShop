import { QuantitySelector } from "@/mainComponents";
import { Title } from "@/mainComponents/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];


export default function () {


    // redirect('/empty');

    return (



        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]" >

                <Title title={"Carrito"} subtitle={""} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/* carrito detalle producto */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Agregar más productos</span>
                        <Link href={"/"} className="underline mb-5">
                            Continúa comprando
                        </Link>


                        {/* items */}

                        {
                            productsInCart.map(product => (
                                <div key={product.slug} className="flex mb-5" >
                                    <Image
                                        src={`/products/${product.images[0]}`}
                                        width={120}
                                        height={60}
                                        style={{
                                            width: '100px',
                                            height: '100px'
                                        }}
                                        alt={product.title}
                                        className="mr-5 rounded"
                                    />

                                    <div>
                                        <p>{product.title}</p>
                                        <p>${product.price}</p>
                                        <QuantitySelector quantity={2} />

                                        <button>Remover</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* sumary del carrito */}
                    <div className=" rounded-xl shadow-lg p-7 h-fit" >

                        <h2 className="text-2xl mb-4" >Resumen de Peiddo</h2>

                        <div className="grid grid-cols-2" >

                            <span>No. Productos</span>
                            <span className="text-right" >3 articulos</span>

                            <span>Subtotal</span>
                            <span className="text-right" >$ 100</span>

                            <span>Impuestos (19%)</span>
                            <span className="text-right" >$ 19</span>

                            <span className="mt-8 text-2xl" >Total</span>
                            <span className="mt-8 text-2xl text-right" >$ 100</span>
                        </div>

                        <div>
                            <Link href={"/checkout/address"} className="flex btn-primary mt-5 justify-center rounded-sm">
                                Checkout
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
} 
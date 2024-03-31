import { initialData } from "./seed";
import prisma from '../lib/prisma'

// interface Seed {
//     seed: string;
// }

async function main() {

    // await Promise.all([

    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    // ]);


    // Sembrar categories

    const { categories, products } = initialData;

    const categoriesData = categories.map(catg => ({
        name: catg
    }))

    await prisma.category.createMany({

        data: categoriesData,
    });


    // asociar el nombre de la categoria  con el CategoryId

    const categoriesDB = await prisma.category.findMany();

    // console.log(categoriesDB)
    // [
    //     { id: '317cc768-e561-44d4-8a3e-c26d76a74e8e', name: 'Shirts' },
    //     { id: '3443f917-8a92-49bb-8c8b-5b26cc8de025', name: 'Pants' },
    //     { id: '2fe7c765-12f2-42df-8ffd-b55865d675d2', name: 'Hoodies' },
    //     { id: '1aa3a895-4fbd-48e5-a281-22ad36fcc7f1', name: 'Hats' }
    // ]

    const categorismap = categoriesDB.reduce((map, category) => {

        // por cada linea vamos acumular en un objeto vacio {} donde la key: value será  {category.name: category.id}
        // empezamos con el map de tipo Record<string, string> y se acumula en category uno por uno de categoriesDB
        map[category.name.toLowerCase()] = category.id

        return map
    }, {} as Record<string, string>);

    // console.log(categorismap)
    // {
    //     shirts: 'f0ccc9a0-2b22-4e7a-a98b-31e32d2629fc',
    //         pants: '92be3dc8-424a-43ab-8f45-297acf726d34',
    //             hoodies: '6bf893c3-d52c-443d-8e25-4eaefc5ac3a3',
    //                 hats: '6fca8dd7-9fbb-4d4d-b36e-c0fa33e86ac7'
    // }



    //Insertar tabla con productos

    products.forEach(async (product) => {

        const { type, images, ...rest } = product;

        const seedProductsBD = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categorismap[type]
            }
        });

        //images
        const imagesData = images.map(img => (
            {
                url: img,
                productId: seedProductsBD.id
            }
        ))

        await prisma.productImage.createMany({
            data: imagesData
        });
    });



    console.log('Seed Ejecutado Correctamente')
};






(() => {

    if (process.env.NODE_ENV === 'production') return;

    main();
})();
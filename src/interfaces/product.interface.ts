interface Product {
    //Todo id: String
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    type: Type;
    gender: Category;
}

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type Type = 'shirts' | 'pants' | 'hoodies' | 'hats';
type Category = 'men' | 'women' | 'kid' | 'unisex';
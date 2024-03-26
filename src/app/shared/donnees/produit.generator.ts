import { faker } from "@faker-js/faker";
import { SimpleProduct } from "../interfaces/produit";


export function createProduct(): SimpleProduct {
    const hasPromo = faker.datatype.boolean();
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      image: faker.image.urlLoremFlickr({category: 'shoes'}),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
      promo: hasPromo,
      promoVal: hasPromo ? faker.number.int({ min: 10, max: 60 }) : undefined,
    };
}

export function createProducts(nombreDeProduits: number = 10): SimpleProduct[] {
    return faker.helpers.multiple(createProduct, {
        count: nombreDeProduits
    })
}
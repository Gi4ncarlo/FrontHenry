import React from 'react';
import Card from '../Card/Card';
import { image } from '@heroui/theme';

const Cards = [
  {
    id: 1,
    title: "Saudage Dior",
    price: 99.99,
    image: "https://dior.vtexassets.com/arquivos/ids/1723982/C099600455_100ml_03.jpg?v=638774908683000000"
  },
  {
    id: 2,
    title: "Chanel No. 5",
    price: 123.45,
    image: "https://i0.wp.com/farina.com.bo/wp-content/uploads/2022/01/bvlgari-single-terrae-essence.jpg?fit=595%2C400&ssl=1"
  },
  {
    id: 3,
    title: "Acqua di Gio",
    price: 89.99,
    image: "https://olfactoryambition.com/wp-content/uploads/2023/03/armani-aqua-di-gio-profumo.webp",
  },
];


export default function CardList() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-bold mb-4">Card List</h1>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {Cards.map((card) => (
                <Card 
                    key={card.id} 
                    title={card.title} 
                    price={card.price}
                    image={card.image}
                />
            ))}
        </div>

    </div>
  );
}
import React from 'react';
import Card from '../Card/Card';

const Cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card.",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card.",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card.",
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
                    description={card.description} 
                />
            ))}
        </div>

    </div>
  );
}
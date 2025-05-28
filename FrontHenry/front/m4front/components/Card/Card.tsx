"use client";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import React from "react";

type CardProps = {
  title: string;
  price: number;
  image: string;
};

export default function CardList({ title, price, image}: CardProps) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">${price}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="w-72 h-72 object-cover rounded-xl"
          src={image}
          width={264}
          height={264}
        />
      </CardBody>
    </Card>
  );
}

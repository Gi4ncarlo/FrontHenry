"use client";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <p className="text-lg mb-2">Product ID: {id}</p>
    </div>
  );
}


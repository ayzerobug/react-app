import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 450000 },
  { id: 2, name: "Smartphone", price: 200000 },
  { id: 3, name: "Headphones", price: 25000 },
  { id: 4, name: "Keyboard", price: 18000 },
];

const categories = [
  { id: 1, name: "Electronics", price: 450000 },
  { id: 2, name: "Fashion", price: 25000 },
];
const Items = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3">
      {products.map((product) => (
        <div
          key={`product-${product.id}`}
          className="bg-white p-4 rounded-xl shadow flex justify-between gap-10"
        >
          <span className="font-semibold">{product.name}</span>
          <span className="text-cyan-600 font-bold">
            ₦{product.price.toLocaleString()}
          </span>
        </div>
      ))}

      <div className="flex items-center gap-2">
        {categories.map((category) => (
          <div
            key={`category-${category.id}`}
            className="bg-amber-300 text-amber-600 font-normal text-sm px-4 rounded-full"
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;

import React from 'react';

function Store() {
  const products = [
    {
      id: 1,
      name: "Bambu Lab P1P",
      price: 59900,
      image: "https://f.btwcdn.com/store-34999/product-thumb/11e7bc6c-2bd1-5844-a050-6666ba0ec7d3.jpg",
      description: "Professional 3D printer with CoreXY system and high speed printing",
      category: "Featured"
    },
    {
      id: 2,
      name: "Bambu Lab X1 Carbon",
      price: 89900,
      image: "https://f.btwcdn.com/store-34999/product-thumb/5d847bed-3dde-f6c9-135a-6666bbd6b058.jpg",
      description: "High-end 3D printer with carbon fiber composite frame",
      category: "Featured"
    },
    {
      id: 3,
      name: "Bambu Lab A1 Mini",
      price: 29900,
      image: "https://f.btwcdn.com/store-34999/product-thumb/4ca61bd9-6bc4-2d2d-8aa5-6819e61dbbd2.jpg",
      description: "Compact and affordable 3D printer for beginners",
      category: "New"
    },
  ];

  const categories = ["All", "Featured", "New"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[var(--neutral-12)]">Our Products</h1>
        <p className="text-[var(--neutral-11)] max-w-2xl mx-auto">
          Discover our range of high-quality products designed to meet your needs
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category 
                ? 'bg-[var(--primary-green)] text-white' 
                : 'bg-[var(--neutral-3)] text-[var(--neutral-11)] hover:bg-[var(--neutral-4)]'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div 
            key={product.id}
            className="group bg-[var(--neutral-1)] rounded-lg overflow-hidden border border-[var(--border)] hover:border-[var(--primary-green)] transition-colors"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                onError={e => { e.target.onerror = null; e.target.src = "/logo192.png"; }}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              {product.category === "New" && (
                <div className="absolute top-4 right-4 bg-[var(--primary-green)] text-white px-3 py-1 rounded-full text-sm font-medium">
                  New
                </div>
              )}
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[var(--neutral-12)]">{product.name}</h3>
              <p className="text-[var(--neutral-11)]">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-[var(--neutral-12)]">
                  ฿{product.price.toLocaleString()}
                </p>
                <button className="bg-[var(--primary-green)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-green-hover)] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;


const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "Thia ia a stylish jacket perfect or any occation.",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black",],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    }
  ]
}

function ProductDetails() {
  return (
    <>
      <div className="p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct.images.map((item, index) => (
                <img
                  key={index}
                  src={item.url}
                  alt={item.altText || `Thumbnail ${index}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <img
                  src={selectedProduct.images[0]?.url}
                  alt="Main Product"
                  className="w-full h-auto object-center rounded-lg"
                />
              </div>
            </div>

            {/* Mobile Thumbnails */}
            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
              {selectedProduct.images.map((item, index) => (
                <img
                  key={index}
                  src={item.url}
                  alt={item.altText || `Thumbnail ${index}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
              ))}-
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProduct.name}
              </h1>
              <p className="text-lg text-gray-600 mb-1 line-through">
                {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
              </p>
              <p className="text-xl">
                {selectedProduct.price}
              </p>
              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>

              <div className="mb-4">
                <p className="text-gray-700">Color:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.colors.map((item, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 rounded-full border cursor-pointer"
                      style={{
                        backgroundColor: item.toLocaleLowerCase(),
                        filter: "brightness(0.5)"
                      }}
                    >
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes.map((item) => (
                    <button key={item} className="px-4 py-2 rounded border cursor-pointer">
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">Quantity:</p>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;

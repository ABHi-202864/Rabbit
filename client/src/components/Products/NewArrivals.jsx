import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewArrivals() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStaryX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState();
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRef = useRef(null);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ]
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ]
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ]
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ]
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ]
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ]
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ]
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ]
    },
  ]

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStaryX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  }

  const scroll = (diraction) => {
    const scrollAmount = diraction === "left" ? -600 : 600;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }

  // Update Scroll Button
  const updateScrollButton = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  }

    useEffect(() => {
      const container = scrollRef.current;
      if (container) {
        container.addEventListener("scroll", updateScrollButton);
        updateScrollButton();
      }
    }, []);

    return (
      <>
        <section className="py-16 px-2">
          <div className="container mx-auto text-center mb-10 relative">
            <h2 className="text-3xl font-bold mb-4">
              Explore New Arrivals
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover the latest styles straight of the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
            </p>

            {/* Scroll Buttons */}
            <div className="absolute right-0 bottom-[-30px] flex space-x-2 mr-8">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`p-2 rounded border cursor-pointer ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400"}`}
              >
                <FiChevronLeft className="text-2xl" />
              </button>

              <button
                onClick={() => scroll("right")}
                className={`p-2 rounded border cursor-pointer ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400"}`}
              >
                <FiChevronRight className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          >
            {
              newArrivals.map((product) => (
                <div key={product._id} className="min-w-full sm:min-w-1/2 lg:min-w-[30%] relative">
                  <img
                    draggable="false"
                    src={product.images[0]?.url}
                    alt={product.images[0]?.altText || product.name}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 opacity-50 backdrop-blur-md text-white p-2 rounded-b-lg"
                  >
                    <Link to={`/product/${product._id}`} className="block">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="mt-1">${product.price}</p>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </section >
      </>
    )
  }

  export default NewArrivals;
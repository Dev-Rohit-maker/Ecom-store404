"use client"; // This component is a client component

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
    // Implement search functionality here
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-black p-4">
      <Link href="/" className="text-2xl font-bold text-neon-blue flex items-center">
        <img 
          src="/images/Cart-Logo-Background-PNG-Image.png" // Use the path to your image
          alt="Cart Icon" 
          className="h-8 mr-2" 
        />
        Amazon
      </Link>
      <form onSubmit={handleSearchSubmit} className="flex items-center mx-4 flex-grow">
        <input
          type="text"
          placeholder="What are you looking for..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 rounded-l border border-neon-blue flex-grow h-10" // Adjust height
        />
        <button type="submit" className="bg-neon-blue text-black px-4 py-2 rounded-r hover:bg-neon-blue/80 h-10"> Search
        </button>
      </form>
      <div className="flex gap-6 items-center">
        {["Electronics", "Groceries", "Home Appliances", "Fashion", "Books"].map((category) => (
          <Link
            key={category}
            href={`/category/${category.toLowerCase().replace(" ", "-")}`}
            className="text-neon-blue hover:text-neon-blue/80 transition-colors"
          >
            {category}
          </Link>
        ))}
        <button onClick={toggleModal} className="bg-neon-blue text-black px-4 py-2 rounded hover:bg-neon-blue/80">
          Sales
        </button>
      </div>

      {/* Modal for displaying the image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={toggleModal}>
          <div className="bg-white p-4 rounded w-1/2" onClick={(e) => e.stopPropagation()}>
            <img 
              src="/images/sales.png" // Direct link to the image
              alt="Sales Image"
              className="w-full h-auto" // Full width of the modal
            />
            <div className="flex justify-center mt-4">
              <button onClick={toggleModal} className="bg-red-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 
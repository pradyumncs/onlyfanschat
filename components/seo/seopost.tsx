"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { ClipLoader } from 'react-spinners'; // Import Oval spinner from react-spinners

// Assume this is the structure of your card data
interface CardItem {
 title: string;
 description: string;
 url: string;
 id: number;
}

// Modify your Carduno component to accept props
const Seopost: React.FC<{ cards: CardItem[] }> = ({ cards }) => {
 const router = useRouter();
 const [currentPage, setCurrentPage] = useState<number>(1); // Track current page
 const [cardsPerPage, setCardsPerPage] = useState<number>(200); // Number of cards per page
 const [displayedCards, setDisplayedCards] = useState<CardItem[]>(cards.slice(0, cardsPerPage)); // Show first page of cards

 const handleCardClick = (url: string) => {
  router.push(`/onlyfans-leak/${String(url)}`); // Convert id to string
 };

 const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
 };

 const handlePageChange = (pageNumber: number) => {
  const startIndex = (pageNumber - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  setDisplayedCards(cards.slice(startIndex, endIndex));
  setCurrentPage(pageNumber);
 };

 const getNumberOfPages = (): number => {
  return Math.ceil(cards.length / cardsPerPage);
 };

 useEffect(() => {
  const handleResize = () => {
   // Adjust cardsPerPage based on screen size (optional)
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
 }, [cardsPerPage]);

 return (
  <>
   <style jsx global>{`
    .gradient-border {
     border: solid 2px transparent;
     border-radius: 8px;
     background-image: linear-gradient(white, white), radial-gradient(circle at top left, #33ccff, #ff33cc);
     background-origin: border-box;
     background-clip: content-box, border-box;
    }
    .card-zoom:hover {
     transform: scale(1.05);
     transition: transform 0.5s ease-in-out;
    }
   `}</style>
   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {displayedCards.map((item) => (
     <div key={item.id} onClick={() => handleCardClick(item.url)} className="cursor-pointer">
      <Card className="card-zoom rounded overflow-hidden shadow-lg w-full max-w-full gradient-border card-zoom">
       <CardHeader>
        <CardTitle style={{ fontSize: '16px', fontWeight: 'bold' }}>{truncateText(item.title, 15)}</CardTitle>
        <CardDescription>{truncateText(item.description, 40)}</CardDescription>
       </CardHeader>
      </Card>
     </div>
    ))}
   </div>
   <div className="mt-4 flex-col items-center">
    {Array.from({ length: getNumberOfPages() }, (_, i) => (
     <button
      key={i + 1}
      className={`px-3 py-2 mx-1 rounded-md shadow-sm hover:bg-gray-200 ${currentPage === i + 1 ? 'bg-gray-300 text-white font-bold' : ''}`}
      onClick={() => handlePageChange(i + 1)}
     >
      {i + 1}
     </button>
    ))}
   </div>
  </>
 );
};

export default Seopost;

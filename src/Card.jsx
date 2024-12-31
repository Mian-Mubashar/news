// import React, { useEffect, useState } from "react";
// import Data from "./Deatils/Deatail";

// const Card = ({ addedItems, setAddedItems }) => {
//     const [data, setData] = useState([]);
//     const [showimag, setShowimag] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setShowimag(false);
//             setData(Data);
//         }, 2000);
//     }, []);

    
//     const handleRemove = (indexToRemove) => {
//         const filteredData = data.filter((_, index) => index !== indexToRemove);
//         setData(filteredData);
//     };

//     const handleAdd = (item) => {
//         if (!addedItems.find((addedItem) => addedItem.name === item.name)) {
//             setAddedItems([...addedItems, item]);
//         }
//     };

//     const showCard = () => {
//         setData(Data);
//     };

//     return (
//         <>
//             {showimag ? (
//                 <div className="flex items-center justify-center h-screen">
//                     <img src="./sp.svg" alt="Loading..." />
//                 </div>
//             ) : (
//                 <div className="p-4">
//                     <h1 className="text-2xl font-bold mb-4">Available Cards</h1>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                         {data.map((item, index) => (
//                             <div key={index} className="bg-orange-400 border-2 rounded-lg p-10">
//                                 <img src={item.img} alt="Item" />
//                                 <h3>{index + 1}</h3>
//                                 <h2>Name: {item.name}</h2>
//                                 <p>Price: {item.Price}</p>
//                                 <p>Types: {item.types}</p>
//                                 <button
//                                     onClick={() => handleRemove(index)}
//                                     className="bg-neutral-500 p-1 mt-2 rounded"
//                                 >
//                                     Remove
//                                 </button>
//                                 <button
//                                     onClick={() => handleAdd(item)}
//                                     className="bg-neutral-500 p-1 mt-2 ml-4 rounded"
//                                 >
//                                     Add
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                     {data.length === 0 && (
//                         <p className="text-center text-red-500 font-bold text-xl">
//                             If you want to check the cards again, please click the button. Thank you! 😇
//                         </p>
//                     )}

//                     {data.length !== 0? "": 
//                         <button
//                             className="bg-neutral-500 p-1 mt-2 rounded ml-80"
//                             onClick={() => showCard()}> Show all cards </button> }
//                 </div>
//             )}
//         </>
//     );
// };

// export default Card;

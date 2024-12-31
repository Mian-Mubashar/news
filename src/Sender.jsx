import React, { useContext } from "react";
import { AppContext } from './AppProvider';
import Header from "./Header";
import { CiHeart } from "react-icons/ci";

const Sender = () => {
    const { addedItems, setAddedItems, fetchItems, setFetchItems, name } = useContext(AppContext);

    const handleMoveToFetch = (article, index) => {
        setFetchItems([...fetchItems, article]);

        const updatedItems = addedItems.filter((_, i) => i !== index);
        setAddedItems(updatedItems);
    };

    return (
        <>
            <Header />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Added Cards</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {addedItems.map((article, index) => (
                        <div className="bg-green-400 border-2 rounded-lg p-10">
                            <button
                                onClick={() => handleMoveToFetch(article, index)}
                                className="text-red-500"
                            >
                                <CiHeart />
                            </button>
                            <img
                                src={article.urlToImage || "placeholder.jpg"}
                                alt={article.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h2 className="font-bold text-lg mb-2">{article.source.name}</h2>
                            <h2 className="font-bold text-lg mb-2">{article.title}</h2>
                            <p className="text-sm text-gray-700 mb-2">{article.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sender;

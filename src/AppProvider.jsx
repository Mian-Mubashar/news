import React, { createContext, useState, useReducer } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [addedItems, setAddedItems] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [fetchItems, setFetchItems] = useState([]);


  const reducer = (state) => {
        if (state === "light"   ) {
        document.body.style.backgroundColor = "black";
        return "dark";
      } else {
        document.body.style.backgroundColor = "white";
        return "light";
      }
    
  };

  const [theme, dispatch] = useReducer(reducer, "light");

  return (
    <AppContext.Provider
      value={{
        addedItems,
        setAddedItems,
        showAll,
        setShowAll,
        name,
        setName,
        theme,
        dispatch,
        filteredData,
        setFilteredData,
        fetchItems, 
        setFetchItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

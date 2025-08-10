import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { callAPI } from "../Utils/CallApis";
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI(`data/search.json`).then((SearchResults) => {
      const categoryResults = SearchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter(products => products.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setProducts(results);
      }else{
        setProducts(categoryResults)
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);
  return <div className="min-w-[1200px max-w-[1300px] m-auto " >
    { products && products.map((products,key)=>{
       return (
        <div className="" key={key}>{products.title}</div>
       )
    })

    }
  </div>;
};

export default SearchResults;

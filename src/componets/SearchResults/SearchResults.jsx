import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { callAPI } from "../Utils/CallApis";
import product0 from "../../../public/images/product_0_small.jpg";
import product1 from "../../../public/images/product_1_small.jpg";
import product9 from "../../../public/images/product_9_small.jpg";
import product3 from "../../../public/images/product_3_small.jpg";
import product4 from "../../../public/images/product_4_small.jpg";
import product5 from "../../../public/images/product_5_small.jpg";
import product6 from "../../../public/images/product_6_small.jpg";
import product7 from "../../../public/images/product_7_small.jpg";
import product8 from "../../../public/images/product_8_small.jpg";
import product2 from "../../../public/images/product_2_small.jpg";
import product10 from "../../../public/images/product_10_small.jpg";
import product11 from "../../../public/images/product_11_small.jpg";
import product12 from "../../../public/images/product_13_small.jpg";
import product13 from "../../../public/images/product_12_small.jpg";
import { ProductDetails } from "../Home";
import { GB_CURRENCY } from "../Utils/Constants";

const images = {
  0: product0,
  1: product1,
  2: product2,
  3: product3,
  4: product4,
  5: product5,
  6: product6,
  7: product7,
  8: product8,
  9: product9,
  10: product10,
  11: product11,
  12: product12,
  13: product13,
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [product, setProducts] = useState([]);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI(`data/search.json`).then((SearchResults) => {
      const categoryResults = SearchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((products) =>
          products.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="min-w-[1200px] max-w-[1300px] pt-4 m-auto">
      {product &&
        product.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className="h-[250px]  grid grid-cols-12 rounded mt-1 mb-1">
                <div className="col-span-2 p-4 bg-gray-200">
                  <img
                    className="w-auto"
                    src={images[product.id]}
                    alt={product.title}
                  />
                </div>
                <div className="col-span-10 bg-gray-50 border hover:bg-gray-100 border-gray-100 ">
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {GB_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;

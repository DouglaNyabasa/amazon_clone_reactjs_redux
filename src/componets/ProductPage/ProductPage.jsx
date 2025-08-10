import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callAPI } from "../Utils/CallApis";
import { ProductDetails } from "../Home";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1 className="">Loading Product...</h1>;
  return (
    product && (
      <div className="h-screen bg-amazonClone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-400">
          <div className="grid grid-cols-10 gap-2">
            {/* left */}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="" />
            </div>
            {/* middle */}
            <div className="col-span-5 bg-white divide-y divide-gray-400 p-4 rounded">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="">{product.description}</div>
            </div>
            {/* right */}
            <div className="col-span-2 bg-white rounded p-4">
              <div className="text-xl xl:text-2xl font-semibold">{product.price}</div>
              <div className="">{product.oldPrice}</div>
              <div className="">FREE Returts</div>
              <div className="">FREE Delivery</div>
              <div className="">In Stock</div>
              <div className="">
                Quantity:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;

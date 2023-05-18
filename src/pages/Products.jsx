import React from "react";

import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import ProductsTable from "../components/productsTable";

const Products = () => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: () =>
            newRequest
                .get(`/products`)
                .then((res) => {
                    return res.data;
                })
                .catch((e) => console.log(e)),
    });

    console.log(data);
    return (
        <>
            <div className="w-full my-10 mx-10">
                <h2 className="text-xl font-semibold my-8 text-center">
                    Products
                </h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="">
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                ID
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Code
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Brand
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Total
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Issue Date
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {isLoading
                        ? "loading..."
                        : error
                        ? "Something went wrong..."
                        : data.data.map((product, idx) => (
                              <ProductsTable
                                  refetch={refetch}
                                  idx={idx}
                                  key={product._id}
                                  product={product}
                              />
                          ))}
                </table>
            </div>
        </>
    );
};

export default Products;

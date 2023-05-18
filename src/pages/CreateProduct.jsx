import React from "react";

import { toast } from "react-hot-toast";
import newRequest from "../utils/newRequest";

const CreateProduct = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const code = form.code.value;
        const brand = form.brand.value;
        const total = form.total.value;
        const issueDate = form.issueDate.value;

        const productInfo = {
            code,
            brand,
            total,
            issueDate,
        };

        try {
            await newRequest.post("products/createProduct", productInfo);
            toast.success("Product created successfully...");
            form.reset();
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div className="flex gap-20 mb-6 w-full">
            <div className="flex flex-col w-full items-center">
                <h2 className="text-xl font-semibold my-4 text-center">
                    Add a product
                </h2>
                <form
                    className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/5 h-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="code"
                        >
                            Product Code
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full rounded-sm outline-yellow-300"
                            type="text"
                            id="name"
                            name="code"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="number"
                        >
                            Brand
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
                            type="text"
                            id="email"
                            name="brand"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="Quantity"
                        >
                            Total
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
                            type="number"
                            name="total"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="Quality"
                        >
                            Issue Date
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
                            type="text"
                            name="issueDate"
                        />
                    </div>

                    <div className="text-right">
                        <button className="bg-gray-800 py-2 px-3 text-white rounded-sm hover:bg-gray-900">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;

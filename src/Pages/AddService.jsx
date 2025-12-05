import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const AddService = () => {
     const {user}=use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.productName.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.imageUrl.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email

        }

        // console.log(formData)
        axios.post('http://localhost:3000/services',formData)
          .then(res=> console.log(res))
         
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
            <form onSubmit={handleSubmit}

                className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-4"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Product/Pet</h2>

                {/* Product/Pet Name */}
                <div>
                    <label className="block font-semibold mb-1">Product/Pet Name</label>
                    <input
                        type="text"
                        name="productName"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter product or pet name"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <select
                        name="category"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Care Products">Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="block font-semibold mb-1">Price</label>
                    <input
                        type="text"
                        name="price"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter price (0 if pet)"
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block font-semibold mb-1">Location</label>
                    <input
                        type="text"
                        name="location"

                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter location"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block font-semibold mb-1">Description</label>
                    <textarea
                        name="description"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter description"
                        rows={4}
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-semibold mb-1">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter image URL"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block font-semibold mb-1">Pick-up Date</label>
                    <input
                        type="date"
                        name="date"

                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                    value={user?.email}
                        type="email"
                        name="email"
                        className="w-full p-3 border rounded-lg bg-gray-200 cursor-not-allowed"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 font-semibold text-white rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddService;
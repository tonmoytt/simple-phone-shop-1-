import React from 'react';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useLoaderData, useParams, useOutletContext, Link } from 'react-router-dom';

const DetailsData = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { handleAddToCart, Handlewishcount } = useOutletContext();

    const product = data.find(d => d.id === parseInt(id));
    const { image, name, brand, model, rating, price, about, rom, ram } = product;

    // Dummy related products (you can replace with actual related logic)
    const relatedProducts = data.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div className=''>
            {/* Breadcrumb */}
            <div className='bg-gray-100 py-3 px-6 text-sm text-gray-700'>
                <Link to="/" className='hover:underline'>Home</Link> &gt; <span>{name}</span>
            </div>

            {/* Header Section */}
            <div className='bg-indigo-600 text-white text-center py-20'>
                <h1 className='text-4xl font-bold mb-3'>Product Details</h1>
                <p className='text-sm max-w-2xl mx-auto'>
                    Learn more about the product you're about to purchase!
                </p>
            </div>

            {/* Main Product Info */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-9/12 mx-auto py-10 -mt-24 bg-white rounded-xl shadow-lg px-6'>
                <div className='flex justify-center items-center'>
                    <img src={image} alt={name} className='w-full max-w-sm object-cover rounded-lg' />
                </div>

                <div className='text-start'>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className="text-xl mt-3 text-indigo-600 font-semibold">Price: ${price}</p>
                    <button className='bg-green-100 text-green-700 px-3 py-1 rounded-2xl font-medium text-sm mt-2'>
                        In Stock
                    </button>
                    <p className='mt-4 text-gray-700'>{about}</p>

                    <div className='mt-6'>
                        <h2 className='text-xl font-bold mb-2'>Specifications:</h2>
                        <ul className='list-disc list-inside text-gray-800 font-medium space-y-1'>
                            <li>Model: {model}</li>
                            <li>RAM: {ram}</li>
                            <li>ROM: {rom}</li>
                            <li>Brand: {brand}</li>
                        </ul>
                    </div>

                    <p className='text-lg mt-4 font-bold text-gray-800'>
                        Rating: <span className='font-normal'>{rating} <FaStar className='inline text-yellow-400' /></span>
                    </p>

                    {/* Buttons */}
                    <div className='space-x-4 mt-6 flex'>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className='flex items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-3xl shadow-md transition'
                        >
                            <span>Add to Cart</span>
                            <FaShoppingCart />
                        </button>

                        <button
                            onClick={() => Handlewishcount(product)}
                            className='flex items-center justify-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-3xl shadow transition'
                        >
                            <FaHeart className='text-red-500' />
                        </button>
                    </div>
                </div>
            </div>

            {/* Customer Reviews */}
            <div className='w-11/12 md:w-9/12 mx-auto mt-12 bg-white rounded-xl shadow-lg p-6'>
                <h2 className='text-2xl font-bold mb-4'>Customer Reviews</h2>
                <div className='space-y-4'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between'>
                        <p className='font-medium'>John D.</p>
                        <div className='flex items-center text-yellow-400'>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                        <p className='text-gray-700 mt-2 md:mt-0'>Excellent product, highly recommend!</p>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center justify-between'>
                        <p className='font-medium'>Emma W.</p>
                        <div className='flex items-center text-yellow-400'>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                        <p className='text-gray-700 mt-2 md:mt-0'>Value for money, works perfectly.</p>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className='w-11/12 md:w-9/12 mx-auto mt-12 mb-10'>
                <h2 className='text-2xl font-bold mb-6'>You May Also Like</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {relatedProducts.map(p => (
                        <Link to={`/details/${p.id}`} key={p.id} className='bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden'>
                            <img src={p.image} alt={p.name} className='w-full h-40 object-cover' />
                            <div className='p-3 text-center'>
                                <p className='font-semibold'>{p.name}</p>
                                <p className='text-indigo-600 font-bold mt-1'>${p.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailsData;

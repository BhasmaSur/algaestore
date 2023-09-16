"use client"
import { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        supplier: '',
        location: '',
        type: '',
        subtype: '',
        ingredients: [{ name: '', quantity: '' }],
        weight: '',
        description: '',
        price: 0,

    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const updatedIngredients = [...formData.ingredients];
        updatedIngredients[index][name] = value;

        setFormData((prevData) => ({
            ...prevData,
            ingredients: updatedIngredients,
        }));
    }

    const handleAddIngredient = () => {
        setFormData((prevData) => ({
            ...prevData,
            ingredients: [...prevData.ingredients, { name: '', quantity: '' }],
        }));
    };

    const handleDeleteIngredient = (index) => {
        const updatedIngredients = [...formData.ingredients];
        updatedIngredients.splice(index, 1);
        setFormData((prevData) => ({
            ...prevData,
            ingredients: updatedIngredients,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the formData to your backend API using fetch or Axios
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success, e.g., redirect to a success page
                console.log('Registration successful');
            } else {
                // Handle errors, e.g., display an error message
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="md:w-full bg-violet-200">
            <form onSubmit={handleSubmit} className="dark:text-white m-12">
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Seaweed Snack"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Brand
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Ocean Delights"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Supplier
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="supplier"
                        value={formData.supplier}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Madan Kashyap"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Location
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Darioganj"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Type
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Harvested"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Subtype
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="subtype"
                        value={formData.subtype}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Wet Seaweed"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="ingredients" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Ingredients
                    </label>
                    {formData.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                name="name"
                                value={ingredient.name}
                                onChange={(e) => handleIngredientChange(e, index)}
                                placeholder="Ingredient name"
                                className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            />
                            <input
                                type="text"
                                name="quantity"
                                value={ingredient.quantity}
                                onChange={(e) => handleIngredientChange(e, index)}
                                placeholder="Quantity"
                                className="ml-2 shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            />
                            <button
                                type="button"
                                onClick={() => handleDeleteIngredient(index)}
                                className="text-red-600 hover:text-red-700 dark:text-red-500 ml-2"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddIngredient}
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        + Add Ingredient
                    </button>
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Weight
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="60g"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Description
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="weight"
                        value={formData.description}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Add product description"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Price
                    </label>
                    <input
                        type="number"
                        id="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-900 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Add product description"
                        required
                    />
                </div>
                {/* Add similar input fields for password and repeatPassword */}
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    ADD
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;

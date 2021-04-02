import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [{name:'Lenovo', category:'laptop'},{name:'Asus', category:'laptop'},{name:'Dell', category:'laptop'},{name:'HP', category:'laptop'},{name:'Samsung', category:'mobile'},{name:'Apple', category:'mobile'},{name:'Nokia', category:'mobile'},{name:'Canon', category:'camera'},{name:'Nikkon', category:'camera'},{name:'Sony', category:'camera'}];

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [category] = useContext(CategoryContext);
    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category === category.toLowerCase());
        setProducts(matchedProducts)
    },[category])
    return (
        <div>
            <h2>Select your category: {category}</h2>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;
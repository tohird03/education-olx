import React, { useEffect, useState } from 'react';
import { instance } from "../../Api/instance"
import { Container } from '../../Utils/Components';
import CategoryItem from './Category-item';
const CategoriesList = () => {

    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        instance.get("/categories")
            .then(response => setCategoryData(response.data))
    }, []);

    return (
        <section>
            <Container>
                <div className='category__item-wrapper'>
                    {
                        categoryData.map(item =>
                            <CategoryItem key={item.id} img={item.image} title={item.name} id={item.id}/>
                        )
                    }
                </div>
            </Container>
        </section>
    );
}

export default CategoriesList;

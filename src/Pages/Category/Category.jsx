import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { instance } from '../../Api/instance';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';
import { Container } from '../../Utils/Components';
import "./Category.scss"

const Category = () => {
    const { categoryId } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        instance.get(`/products/?categoryId=${categoryId}`)
            .then(res => setData(res.data))
    }, [categoryId]);
    return (<>
        <Header />
        <Search />
        <main>
            <section className='products'>
                <Container>
                    {
                        data && data.map(product => {
                            return <article className='product-item' key={product.id}>
                                <Link to={`/singleproduct/${product.id}`}>
                                    <img src={product.images.at(0)} alt="" />
                                </Link>
                                <div>
                                    <h1>{product.title}</h1>
                                    <p>{product.description}</p>
                                    <strong>${product.price}</strong>
                                </div>
                            </article>
                        })
                    }
                </Container>
            </section>
        </main>
    </>
    );
}

export default Category;

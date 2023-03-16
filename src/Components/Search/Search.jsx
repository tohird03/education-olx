import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { instance } from '../../Api/instance';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../../Utils/Components';
import "./Search.scss";

const Search = () => {
    const [searchTitle, setSearchTitle] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 2) {
            instance.get(`products/?title=${e.target.value}`)
                .then(response => setSearchTitle(response.data))
        }else {
            setSearchTitle([])
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        return navigate(`/search/${search}`)
    }

    return (
        <section className='search'>
            <Container>
                <div className="search-wrapper">
                    <form className='search-form' onSubmit={handleSubmit}>
                        <div className='search-input-wrapper'>
                            <FiSearch />
                            <input type="text" onChange={handleSearch} />

                            {
                                searchTitle.length > 3 ?
                                    <div className='search-suggestions'>
                                        {

                                            searchTitle.map(searchItem =>
                                                <Link to={`/singleproduct/${searchItem.id}`} key={searchItem.id} className="transarent-link search-result-item">
                                                    <p>{searchItem.title}</p>
                                                </Link>
                                            )
                                        }
                                    </div> : <></>
                            }

                        </div>
                        <button type='submit'>Qidirish</button>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default Search
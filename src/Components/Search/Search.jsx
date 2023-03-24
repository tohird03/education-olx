import React, { useContext, useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaMicrophoneAlt } from "react-icons/fa"
import { instance } from '../../Api/instance';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Container } from '../../Utils/Components';
import "./Search.scss";
import { ContextColor } from '../../Context/ThmeContext';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Search = () => {
    const { t } = useTranslation()
    const [searchTitle, setSearchTitle] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const { theme } = useContext(ContextColor)
    const [ modal, setModal ] = useState(false)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    if(!listening && transcript.length > 1) {

        return navigate(`/search/${transcript}`)
    }

    const handleModal = () => {
        setModal(!modal)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 2) {
            instance.get(`products/?title=${e.target.value}`)
                .then(response => setSearchTitle(response.data))
        } else {
            setSearchTitle([])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        return navigate(`/search/${search}`)
    }

    return (
        <section className={theme ? "search dark" : "light search"}>
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
                        <button className='search__btn' type='submit'>{t("search__btn-text")}</button>
                        <button className='search__btn' onClick={handleModal} type='button'>
                            <FaMicrophoneAlt />
                        </button>
                        <div className={modal ? "speech__open" : "speech__close"}>
                            <p>Microphone: {listening ? 'on' : 'off'}</p>
                            <button type='button' onClick={SpeechRecognition.startListening}>Start</button>
                            <button type='button' onClick={SpeechRecognition.stopListening}>Stop</button>
                            <button type='button' onClick={resetTranscript}>Reset</button>
                            <p>{transcript}</p>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default Search
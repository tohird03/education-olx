import React from 'react';
import {Container} from '../../Utils/Components';
import "./Header.scss"

import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";
import { Button } from '../../Utils/Components';

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <div className='header__wrapper'>
                    <img className='header__logo' src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=23-02-15" alt="" />

                    <nav className='header__nav'>
                        <ul className='header__list'>
                            <li>
                                Uz
                            </li>
                            |
                            <li>
                                Ru
                            </li>
                        </ul>

                        <button>
                            <FiMessageCircle />
                            Сообщения
                        </button>

                        <button>
                            <FiHeart />
                        </button>

                        <button>
                            <FiUser/>
                            Ваш профиль
                        </button>

                        <Button type={"light"} text="Подать объявление"/>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;

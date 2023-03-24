import React, { useContext } from 'react';
import { Container } from '../../Utils/Components';
import { Link } from "react-router-dom"
import i18n from '../../Language/i18next';
import { useTranslation } from "react-i18next";
import "./Header.scss"
import { useSelector } from 'react-redux/es/exports';
import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";
import { Button } from '../../Utils/Components';
import { ContextColor } from '../../Context/ThmeContext';

const Header = () => {
    const {email} = useSelector(state => state)
    console.log(email);
    const { theme, setTheme } = useContext(ContextColor)
    const { t } = useTranslation()
    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <header className={theme ? "header dark" : "header light"}>
            <Container>
                <div className='header__wrapper'>
                    <img className='header__logo' src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=23-02-15" alt="" />

                    <nav className='header__nav'>
                        <select onChange={handleChangeLanguage}>
                            <option value="uz">{t("select__uz")}</option>
                            <option value="ru">{t("select__ru")}</option>
                            <option value="en">{t("select__en")}</option>
                        </select>
                        <select onChange={
                            e =>
                            e.target.value == "dark" ? setTheme(true) : setTheme(false)
                        }>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>

                        <Link className='header__nav-link' to="/message">
                            <FiMessageCircle />
                            {t("header__message")}
                        </Link>

                        <button>
                            <FiHeart />
                        </button>

                        <Link className='header__nav-link' to="/auth">
                            <FiUser />
                            { email ? email : t("header__account")}
                        </Link>

                        <Button type={"light"} text="Подать объявление" />
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;

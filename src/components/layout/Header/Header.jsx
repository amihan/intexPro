import './Header.scss';
import BurgerMenu from './BurgerMenu';

const Header = ({ isOpen, openMenu }) => {
    return (
        <header className='header'>
            <BurgerMenu isOpen={isOpen} openMenu={openMenu} />
            <div className="header__container">
                <h1 className='header__title'>ЛИЧНЫЙ КАБИНЕТ</h1>
            </div>
        </header>
    );
};

export default Header;   
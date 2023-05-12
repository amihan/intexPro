
const BurgerMenu = ({ isOpen, openMenu }) => {
    return (
        <div className="header__menu">
            <button className={isOpen ? "header__blockBtn" : "header__blockBtn open"} onClick={openMenu}>
                <span className={isOpen ? 'header__btn' : 'header__btn open'}></span>
            </button>
        </div>
    );
};

export default BurgerMenu;
import logo from '../images/logo.png';

const AppHeader = () => {
    return (
        <header>
            <div className='leftTop'>
                <img src={logo} alt='Logo' width="50px" height="50px" />
            </div>
            <div className='leftTop'>
                <h1>Etch a Sratch</h1>
            </div>
        </header>
    )

}

export default AppHeader;
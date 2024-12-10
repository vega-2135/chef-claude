import logo from '../assets/images/logo.png'

export default function Header () {
    return (
        <header>
            <img className='logo' src={logo} alt="page logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}
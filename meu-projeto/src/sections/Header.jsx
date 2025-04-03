import SignupButton from '../components/SignupButton';

function Header() {
    return (
        <div className='font-roboto font-semibold'>
            <header className="w-full h-[10vh] text-amber-50 flex justify-between items-center px-5">
                <nav className="flex gap-8 md:gap-12">
                    <a href="#" className="hover:text-fuchsia-300 transition-colors px-2 py-1">Home</a>
                    <a href="#" className="hover:text-fuchsia-300 transition-colors px-2 py-1">Sobre</a>
                    <a href="#" className="hover:text-fuchsia-300 transition-colors px-2 py-1">Coach</a>
                    <a href="#" className="hover:text-fuchsia-300 transition-colors px-2 py-1">Contato</a>
                </nav>
                <SignupButton />
            </header>
        </div>
    )
}

export default Header;
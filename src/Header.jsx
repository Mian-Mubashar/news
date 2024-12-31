import { useContext } from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { AppContext } from './AppProvider';

const Header = () => {
    const { theme, dispatch, filteredData, setFilteredData } = useContext(AppContext);

    const handleFilter = (event) => {
        const value = event.target.value.toLowerCase();
        const filtered = data.filter((article) =>
            article.source.name.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    return (
        <header className="bg-blue-500 text-white shadow-md">
            <div className=" mx-auto flex items-center justify-between py-2 px-6">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img
                        src="https://img.icons8.com/?size=100&id=105890&format=png&color=000000"
                        alt="Company Logo"
                        className="w-12"
                    />
                </div>

                {/* Navigation */}
                <nav className="flex items-center space-x-10 ml-16">
                    <Link to="/" className="text-white hover:text-gray-300 transition">
                        Home
                    </Link>
                    <Link to="/sender" className="text-white hover:text-gray-300 transition">
                        Sender
                    </Link>
                    <Link to="/login" className="text-white hover:text-gray-300 transition">
                        Logout
                    </Link>
                </nav>

                <div className="flex items-center">

                    <input
                        type="text"
                        placeholder="Search"
                        onChange={handleFilter}
                        className="bg-gray-700 text-white placeholder-gray-400 border-none rounded-full px-8 py-2 focus:ring-2 focus:ring-blue-500 transition mr-10" />
                    <button

                        onClick={() => dispatch()}
                        className={`p-2 rounded-full ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>{theme === "light" ? <TiWeatherPartlySunny /> : <MdDarkMode />}</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

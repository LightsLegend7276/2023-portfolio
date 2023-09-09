import "../styles/HeaderStyle.css"

const navList = [
    {
        name: "My Tech Stack",
        link: "http://"
    },
    {
        name: "About Me",
        link: "http://"
    },
    {
        name: "Experience",
        link: "http://"
    },
    {
        name: "My Projects",
        link: "http://"
    },
]

const Header = () => {
    return (
        <>
            <nav>
                <p>Denis Duarte</p>
                <ul>
                    {navList.map(({name, link}) => (
                        <li key={name}><a href={link}>{name}</a></li>
                    )
                    )}
                </ul>
            </nav>
        </>
    );
};

export default Header;
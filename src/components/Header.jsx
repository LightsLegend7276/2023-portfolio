import "../styles/HeaderStyle.css"

const navList = [
    {
        name: "My Tech Stack",
        link: "#"
    },
    {
        name: "About Me",
        link: "#"
    },
    {
        name: "Experience",
        link: "#"
    },
    {
        name: "My Projects",
        link: "#"
    },
]

const Header = () => {
    return (
        <>
            <nav>
                <span>Denis Angel Duarte</span>
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
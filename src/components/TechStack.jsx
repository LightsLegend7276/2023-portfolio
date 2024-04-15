import "../styles/TechStackStyle.css"

function importAll() {
                                                                                    // vvv this gets rid of promises
    return Object.values(import.meta.glob("../assets/techBadges/*.svg", { eager: true })).map(
    ({default: path}) => {
        return new URL(path, import.meta.url).pathname;
    });
  }
  
  
const TechStack = () => {
    const imagePaths = importAll();
      return (
          <>
            <section className='tech-stack-container'>
                {imagePaths?.map((path, i) => (
                    <aside key={path} className={`image-${i}`}><img src={path} alt={path} /></aside>
                    ))
                }               
                </section>
        </>
    );
};

export default TechStack;
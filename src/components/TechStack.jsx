import "../styles/TechStackStyle.css"

function importAll(r) {
    const imagePaths = [];
//          note relative path vvv                 vvv this gets rid of promises
    Object.values(import.meta.glob("./assets/*.jpg", { eager: true })).forEach(
    ({ default: path }) => {
        const url = new URL(path, import.meta.url);
        const data = {
        path: url.pathname,
        };
        imagePaths.push(data);
    }
    );
    return r.keys().map(r);
  }
  
  
const TechStack = () => {
      return (
          <>
            <section className='tech-stack-container'>
                <aside><img src="src\assets\techBadges\bitbucket-code-source-svgrepo-com.svg" alt="BitBucket Logo" /></aside>
                <aside><img src="src\assets\techBadges\git-svgrepo-com.svg" alt="Git Logo" /></aside>
                <aside><img src="src\assets\techBadges\icons8-css3.svg" alt="CSS Logo" /></aside>
                <aside><img src="src\assets\techBadges\html-5-svgrepo-com.svg" alt="HTML Logo" /></aside>
                <aside><img src="src\assets\techBadges\icons8-github.svg" alt="Github Logo" /></aside>
                <aside><img src="src\assets\techBadges\java-logo-svgrepo-com.svg" alt="Java Logo" /></aside>
                <aside><img src="src\assets\techBadges\javascript-svgrepo-com.svg" alt="JS Logo" /></aside>
                <aside><img src="src\assets\techBadges\jira-svgrepo-com.svg" alt="Jira Logo" /></aside>
                <aside><img src="src\assets\techBadges\microsoft-sql-server-logo-svgrepo-com.svg" alt="MSSQL Logo" /></aside>
                <aside><img src="src\assets\techBadges\nodejs-1-logo-svgrepo-com.svg" alt="NodeJS Logo" /></aside>
                <aside><img src="src\assets\techBadges\python-svgrepo-com.svg" alt="Python Logo" /></aside>
                <aside><img src="src\assets\techBadges\react-svgrepo-com.svg" alt="React Logo" /></aside>
                <aside><img src="src\assets\techBadges\spring-boot-svgrepo-com.svg" alt="Spring Boot Logo" /></aside>
            </section>
        </>
    );
};

export default TechStack;
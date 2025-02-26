import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import Fade from "react-reveal/Fade";

export default function ProjectCard({ repo, ind, theme }) {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <style jsx>{`
        .projectCardHolder {
          color: rgb(88, 96, 105);
          background-color: rgb(255, 255, 255);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
          padding: 2rem;
          cursor: pointer;
          border-radius: 5px;
          height: 100%;
          transitiion: all 0.2s ease-in-out;
        }

        .projectCardHolder:hover {
          box-shadow: ${themes[theme].imageDark} 0 2px 15px;
        }
      `}</style>
      <Fade direction="bottom" duration={2000}>
        <div
          className="projectCardHolder"
          key={ind}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

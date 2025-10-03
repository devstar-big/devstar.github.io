// src/pages/Projects.jsx
import { projects } from "../data/projects"
export default function Projects() {
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Projects</h2>
            <p>Selected work with code and demos.</p>
          </div>
          <div className="grid three-col projects-grid">
            {
              projects.map(project=>(
                <article className="card project">
                  <h3>{project.title}</h3>
                  <p>{project.content}</p>
                  <div className="chip-group">
                    {
                      project.skills.split(',').map(skill=>(<span className="chip">{skill}</span>))
                    }
                  </div>
                  <div className="link-group">
                    <a href="#" target="_blank" rel="noopener" className="text-link">{project.live}</a>
                    <a href="#" target="_blank" rel="noopener" className="text-link">{project.gitHub}</a>
                  </div>
                </article>
              ))
            }
            
          </div>
        </div>
      </section>
    )
  }
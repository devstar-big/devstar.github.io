// src/pages/Services.jsx
import {services} from "../data/services"
export default function Services() {
    return (
      
      <section className="section">
        <div className="section-header">
            <h2>Services</h2>
            <p>How I can help you ship faster and better.</p>
          </div>
        <div className="container">
          <div className="grid three-col">
            {
              services.map(ser=>(
                <article className="card">
                    <h2>{ser.title}</h2>
                    <p>{ser.content}</p>
                </article>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
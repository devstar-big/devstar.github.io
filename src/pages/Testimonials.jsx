import { testimonials } from "../data/testimonials"

testimonials
export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>Coming soon — adding client feedback as projects ship.</p>
        </div>
        <div className="grid two-col">
          {
            testimonials.map(test=>(
              <article className="card testimonial">
                  <p>"{test.content}"</p>
                <p className="muted">{test.title}</p>
              </article>
            ))
          }
          
        </div>
      </div>
    </section>
  )
}
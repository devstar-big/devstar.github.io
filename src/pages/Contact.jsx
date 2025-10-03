export default function Contact() {
    const onSubmit = (e) => {
      e.preventDefault()
      const form = e.currentTarget
      const name = form.name.value
      const email = form.email.value
      const message = form.message.value
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
      window.location.href = `mailto:devStar@gmail.com?subject=${subject}&body=${body}`
    }
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Email me directly or use the form below.</p>
          </div>
          <div className="grid">
            
            <form className="card form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can I help?" required />
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
              <p className="form-note">This opens your email client using mailto.</p>
            </form>
            <div>
              <ul className="contact-list">
                <li><strong>Email:</strong> <a href="mailto:devStar@gmail.com">devStar@gmail.com</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/devStar" target="_blank" rel="noopener">linkedin.com/in/devStar</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener">github.com/yourusername</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
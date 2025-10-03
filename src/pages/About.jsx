// src/pages/About.jsx
export default function About() {
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>I’m a passionate Full-Stack Developer specializing in fast, user-friendly, and secure apps.</p>
          </div>
          <div className="grid two-col">
            <div>
              <p>I’m a passionate Full-Stack Developer specializing in creating websites and web applications that are fast, user-friendly, and secure.</p>
              <p>When you hire me, you’ll get a reliable developer who delivers clean code, clear communication, and on-time results.</p>
            </div>
            <div>
              <ul className="stack-list">
                <li>✅ <strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
                <li>✅ <strong>Backend:</strong> Node.js, Express</li>
                <li>✅ <strong>Database:</strong> MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
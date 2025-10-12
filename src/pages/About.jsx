// src/pages/About.jsx
export default function About() {
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>I’m a passionate Full-Stack Developer and a dedicated AI specialist.</p>
          </div>
          <div >
            <div>
              <h3>Professional Summary</h3>
              <div style={{textIndent:'2em'}}>
                Results-driven Full-Stack Developer & AI Specialist with a strong focus on building fast, secure, and user-centric web applications. Skilled at bridging design and functionality to create seamless digital experiences. Known for writing clean, scalable code and communicating effectively with clients and teams. Passionate about leveraging AI technologies to enhance performance, automation, and user engagement. Committed to delivering reliable, on-time results that align with business goals.
              </div>
            </div>
            
            <div>
              <h3>Technical Skills</h3>
              <ul className="stack-list" style={{textIndent:'1em', listStyleType:"none"}} >
                <li>✅ <strong>Frontend:</strong> React.js, Next.js, Redux, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript</li>
                <li>✅ <strong>Backend:</strong> Node.js, Express.js, REST APIs, GraphQL</li>
                <li>✅ <strong>Database:</strong> MongoDB, MySQL, PostgreSQL, Firebase</li>
                <li>✅ <strong>AI & Automation:</strong> OpenAI API, Python (Flask/FastAPI)</li>
                <li>✅ <strong>Cloud & DevOps:</strong> AWS, Vercel, Netlify, Docker, GitHub Actions</li>
                <li>✅ <strong>Tools & Platforms:</strong> Git, Postman, Figma, Jira, VS Code</li>
                <li>✅ <strong>Other:</strong> Agile/Scrum, Responsive Design, Web Security, API Integration</li>
              </ul>
            </div>

            <div>
              <h3>Core Strengths</h3>
              <ul>
                <li>Strong analytical and problem-solving abilities</li>
                <li>Clear, professional communication with clients and teams</li>
                <li>Detail-oriented with focus on performance and scalability</li>
                <li>Ability to manage full project lifecycle from concept to deployment</li>
                <li>Passionate about continuous learning and emerging technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
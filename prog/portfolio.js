class PortfolioProgram extends Program {
  createWorkWindow() {
    let wminfo = {
      name: 'Portfolio - Work',
      title: 'Portfolio - Work',
      icon: 'img/desktop/MyDocuments.png',
      y: 40,
      x: isMobileBrowser() ? 20 : 120
    };

    let body = `
      <div class="typography">
        <h2> Portfolio / Work </h2>
        <subtitle> Internships and key responsibilities in HR and Sales coordination. </subtitle>
        <hr class="hr--accent2"/>

        <b> Internzvalley — Academic Counselor Intern (Bangalore) </b>
        <ul>
          <li>Led lead-generation and sales teams across multiple states; assigned leads, tracked progress, and ensured timely follow-ups.</li>
          <li>Coordinated with sales to meet enrollment targets and improve conversion rates.</li>
          <li>Trained and motivated team members to enhance performance and communication.</li>
          <li>Strengthened leadership, sales coordination, and people management capabilities.</li>
        </ul>

        <br/>
        <b> Curefoods India Pvt. Ltd. — HR Intern (Project Work), Bangalore </b>
        <ul>
          <li>Supported recruitment: resume screening, candidate shortlisting, and interview coordination.</li>
          <li>Assisted onboarding and employee engagement initiatives.</li>
          <li>Maintained candidate records and worked with hiring managers to fulfill staffing needs.</li>
          <li>Gained hands-on exposure to HR operations, recruitment, and employee relations.</li>
        </ul>
      </div>
    `;

    return [wminfo, body];
  }

  createSkillsWindow() {
    let wminfo = {
      name: 'Portfolio - Skills',
      title: 'Portfolio - Skills',
      icon: 'img/desktop/MyDocuments.png',
      y: 80,
      x: isMobileBrowser() ? 60 : 200
    };

    let body = `
      <div class="typography">
        <h2> Portfolio / Skills </h2>
        <subtitle> Core HR and analytics strengths with productivity tooling. </subtitle>
        <hr class="hr--accent2"/>

        <b>HR Skills</b>
        <ul>
          <li>Recruitment & Talent Acquisition</li>
          <li>Employee Relations</li>
          <li>HR Analytics (Excel)</li>
          <li>Interview Scheduling</li>
          <li>Communication & Interpersonal Skills</li>
        </ul>

        <br/>
        <b>Tools</b>
        <ul>
          <li>Word, Excel, PowerPoint; Google Docs/Sheets</li>
          <li>Power BI</li>
          <li>Canva; DaVinci Resolve</li>
          <li>Prompt Engineering; GenAI & AI Tools</li>
          <li>Zapier (AI Automation)</li>
          <li>Jira; Credly</li>
        </ul>
      </div>
    `;

    return [wminfo, body];
  }

  createEducationWindow() {
    let wminfo = {
      name: 'Portfolio - Education',
      title: 'Portfolio - Education',
      icon: 'img/desktop/MyDocuments.png',
      y: 60,
      x: isMobileBrowser() ? 40 : 160
    };

    let body = `
      <div class="typography">
        <h2> Portfolio / Education </h2>
        <subtitle> Academic background in HRM and Commerce. </subtitle>
        <hr class="hr--accent2"/>

        <ul>
          <li><b>MBA - HRM</b> (2023–2025) — Dr. M.G.R. Educational & Research Institute, Maduravoyal (Chennai Suburb)</li>
          <li><b>B.Com (CA)</b> (2020–2023) — Vels Institute of Science, Technology & Advanced Studies (Pallavaram, Tambaram)</li>
          <li><b>HSC</b> (2018–2020) — State Board Matric Hr. Sec. School, Ukkal, Thiruvannamalai</li>
          <li><b>SSLC</b> (2017–2018) — Bharathidasan Matric Hr. Sec. School, Kanchipuram</li>
        </ul>
      </div>
    `;

    return [wminfo, body];
  }

  createCertsWindow() {
    let wminfo = {
      name: 'Portfolio - Certifications',
      title: 'Portfolio - Certifications',
      icon: 'img/desktop/MyDocuments.png',
      y: 100,
      x: isMobileBrowser() ? 80 : 240
    };

    let body = `
      <div class="typography">
        <h2> Portfolio / Certifications </h2>
        <subtitle> Workshops and analytics credentials. </subtitle>
        <hr class="hr--accent2"/>

        <ul>
          <li>Certificate in TAREEQA: Human Resource Skills Workshop — TAREEQA Global Solution Pvt. Ltd.</li>
          <li>HR Analytics using MS Excel for Human Resource Management — Start-Tech Academy (Completed: 27 May 2025)</li>
        </ul>
      </div>
    `;

    return [wminfo, body];
  }

  createPersonalWindow() {
    let wminfo = {
      name: 'Portfolio - Personal',
      title: 'Portfolio - Personal',
      icon: 'img/desktop/MyDocuments.png',
      y: 120,
      x: isMobileBrowser() ? 100 : 280
    };

    let body = `
      <div class="typography">
        <h2> Portfolio / Personal </h2>
        <subtitle> Languages, interests, and profile details. </subtitle>
        <hr class="hr--accent2"/>

        <b>Languages</b>
        <ul>
          <li>English</li>
          <li>Tamil</li>
        </ul>

        <br/>
        <b>Extracurricular</b>
        <ul>
          <li>Video Editing</li>
          <li>Mobile Photography</li>
        </ul>

        <br/>
        <b>Profile</b>
        <ul>
          <li>Date of Birth: 24/07/2003</li>
          <li>Address: No: 7, Velalar St., Ukkal Village, Thiruvannamalai, 631701</li>
          <li>Objective: Motivated MBA-HRM graduate seeking a role to apply HR knowledge, internship experience, and interpersonal skills in a dynamic environment.</li>
        </ul>
      </div>
    `;

    return [wminfo, body];
  }

  createContactWindow() {
    let wminfo = {
      name: 'Portfolio - Contact',
      title: 'Portfolio - Contact',
      icon: 'img/desktop/MyDocuments.png',
      y: isMobileBrowser() ? 0 : 20,
      x: isMobileBrowser() ? 0 : 20,
      w: isMobileBrowser() ? window.innerWidth - 20 : 380
    };

    let stickyBar = `
      <div class="sticky-contact-bar">
        <button class="tool-btn" data-action="call">Call</button>
        <button class="tool-btn" data-action="whatsapp">WhatsApp</button>
        <button class="tool-btn" data-action="email">Email</button>
      </div>
    `;

    let body = `
      <div class="typography">
        <h2> Portfolio / Contact </h2>
        <subtitle> Quick actions for recruiters. </subtitle>
        <hr class="hr--accent2"/>

        <p><b>Name:</b> VIGNESHWARAN M</p>
        <p><b>Role:</b> MBA - Human Resource Management (2023–2025)</p>
        <p><b>Phone:</b> 9344117877</p>
        <p><b>Email:</b> VIGNESHWARAN.OFCL@GMAIL.COM</p>

        ${stickyBar}

        <p class="text--highlighted">Tip: Map these buttons to native actions (tel:, mailto:, or your app handlers). External web links are intentionally omitted.</p>
      </div>
    `;

    // wire light JS handlers (host app can intercept and route)
    setTimeout(() => {
      try {
        const wnd = document.querySelector('.window[title="Portfolio - Contact"]') || document;
        wnd.querySelectorAll('.sticky-contact-bar .tool-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const act = e.currentTarget.getAttribute('data-action');
            if (act === 'call') window.location.href = 'tel:9344117877';
            if (act === 'email') window.location.href = 'mailto:VIGNESHWARAN.OFCL@GMAIL.COM?subject=Opportunity';
            if (act === 'whatsapp') {
              // Optionally trigger app-level WhatsApp intent; kept internal to avoid external URLs.
              alert('Open WhatsApp and message +91 9344117877');
            }
          });
        });
      } catch (e) { /* no-op */ }
    }, 50);

    return [wminfo, body];
  }

  onAttach() {
    window.wm.openWindow(...this.createWorkWindow());
    window.wm.openWindow(...this.createSkillsWindow());
    window.wm.openWindow(...this.createEducationWindow());
    window.wm.openWindow(...this.createCertsWindow());
    window.wm.openWindow(...this.createPersonalWindow());
    window.wm.openWindow(...this.createContactWindow());
  }
}

window.pm.registerPrototype('portfolio', PortfolioProgram);

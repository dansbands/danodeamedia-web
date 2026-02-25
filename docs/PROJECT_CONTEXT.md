# Project Context — danodeamedia-web

Goal:
Rebuild danodeamedia.com in Next.js (App Router) with architectural improvements, parity-first, then UX iteration.

Current Phase:
1) Clone existing site structure and functionality
2) Deploy to Vercel
3) Improve UX and replace experience section later

Constraints:
- TypeScript
- src/ directory required
- Import alias @/* → src/*
- CSS variables (tokens) + CSS Modules
- No Tailwind
- No Bootstrap
- No MUI
- No styled-components
- No unnecessary abstraction

Architecture Standards:
- Thin route files
- Components organized by role
- No secrets in client
- Route handler for contact form
- Accessibility-first markup

Long-Term:
All projects (StaffySoft, danismusicstudio.com, contracting work) follow shared engineering standards.
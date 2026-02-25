# Engineering Standards

These standards apply to all projects (Next.js, React, Node, StaffySoft apps, portfolio sites, contracting work). Stack-specific overlays may extend these rules but must not contradict them.

The goal is consistency, low cognitive load, and long-term maintainability.

---

## Core Principles

1. Prefer clarity over cleverness.
2. Prefer boring, maintainable solutions over novelty.
3. Optimize for consistency across repositories.
4. Avoid unnecessary abstraction.
5. Architectural decisions must be intentional.

---

## Repository Defaults

- Language: TypeScript by default.
- Formatting: Prettier is the source of truth.
- Linting: ESLint required.
- CI: Run lint, typecheck, and test on every PR.
- All application code lives inside `src/`.

---

## Folder Structure (Role-Based)

Use role-based organization, not feature sprawl.

Minimum baseline:

src/
  components/
  lib/
  styles/
  content/

Add only when justified:

hooks/
services/
api/
state/
types/
config/

Rule:
Do not create folders until there are at least 2–3 real files that justify them.

---

## Import Aliases

Use a single import alias across all projects:

@/* → src/*

Avoid multiple aliases unless absolutely necessary.
Never use deep relative paths like ../../../.

---

## Naming Conventions

Components:
PascalCase.tsx

Hooks:
useThing.ts  
Exported hook must match filename.

Utilities:
camelCase.ts

CSS Modules:
ComponentName.module.css

Tests:
*.test.ts  
*.test.tsx

Constants:
Avoid global constant files.
Use SCREAMING_SNAKE_CASE only for true constants.

---

## Component Rules

- Prefer small, focused components.
- Keep route files thin and composed of components.
- Prefer composition over inheritance.
- Keep side effects out of render logic.

Accessibility is required:
- Semantic HTML first
- Keyboard support for interactive elements
- No clickable divs without roles and key handlers

---

## Styling Standards

Default styling approach:

- CSS Variables (design tokens)
- CSS Modules for component scope
- Minimal global CSS

Global CSS should include:
- Reset
- Typography baseline
- Base layout styles
- Motion preference handling

Do NOT introduce:
- Tailwind
- Bootstrap
- MUI
- styled-components

Unless documented in an ADR.

---

## Design System (Lightweight)

Each project must define tokens for:

- Colors (bg, text, primary, muted)
- Spacing scale
- Font scale
- Border radius
- Breakpoints
- Focus styles

Dark mode must use CSS variables (e.g., [data-theme="dark"]).

---

## Data & Side Effects

- Keep API logic out of UI components.
- External integrations belong in services/ or stack-specific equivalents.
- Validation belongs in lib/validate*.ts.

Never expose secrets in client code.

---

## Environment Variables

Server-only variables:
FOO_API_KEY

Client-exposed variables must be explicit and rare:
NEXT_PUBLIC_*

All environment variables must be documented in README.

---

## Testing Philosophy

- Test behavior, not implementation details.
- Use stable selectors (getByRole, labels).
- Pure logic must have unit tests.
- Critical flows should have at least one integration test.

Avoid snapshot testing unless justified.

---

## Documentation Requirements

README must include:

- How to run locally
- How to test
- Required environment variables
- Deployment method
- Brief architectural overview

Optional:
- ADRs in docs/adr/ for significant decisions

---

## Senior Signal Checklist

Every repository should:

- [ ] Use src/
- [ ] Use @/* alias
- [ ] Have ESLint + Prettier
- [ ] Have CI configured
- [ ] Keep secrets server-side
- [ ] Follow consistent naming
- [ ] Use design tokens
- [ ] Have accessible navigation and forms
- [ ] Document deployment

---

## What We Avoid

- Overengineering small apps
- Building generic frameworks prematurely
- Copy-pasting enterprise patterns into simple sites
- Introducing styling libraries without strong justification
- Creating abstractions before the second use case
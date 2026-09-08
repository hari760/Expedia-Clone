# Contributing to Expedia-Clone

**Related docs:** [README](https://github.com/hari760/Expedia-Clone/blob/main/README.md)

---

## Getting started

**Requirements:** [Node.js](https://nodejs.org/).

```bash
git clone https://github.com/hari760/Expedia-Clone.git
cd Expedia-Clone
npm install
npm start
npm run server
```

Open **http://localhost:3000**

## Find something to work on

1. Find an issue to work on in the **[issue board](https://github.com/hari760/Expedia-Clone/issues)**
2. **Comment on the issue** to claim it (e.g. “I’d like to take this”). We’ll assign you to the issue.
3. Prefer one focused issue at a time.

If you’re new to open source, start with labels **`first-timers-only`**, **`good first issue`**, or **`easy`**.

---

## Branch naming

Create a branch from an up-to-date `main`:

| Prefix   | Use for                |
| -------- | ---------------------- |
| `feat/`  | New feature            |
| `fix/`   | Bug fix                |
| `docs/`  | Documentation only     |
| `test/`  | Tests only             |
| `chore/` | Tooling, deps, cleanup |

Examples: `docs/expand-contributing`, `fix/flight-booking`, `feat/email-sign-in`.

```bash
git checkout main
git pull origin main   # or upstream main if you forked
git checkout -b docs/your-short-description
```

---

## Code style

- **Language:** JavaScript + React (Create React App), with json-server as a mock REST API for local data.
- Prefer small, focused changes.
- **No secrets or real PII** in code, commits, or screenshots.

---

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add sign in using email
fix: correct flight booking bug
docs: expand CONTRIBUTING for first-time contributors
test: update test cases for new feature
chore: update packages
```

Keep the subject short.

---

## Pull requests

1. Push your branch and open a PR against **`hari760/Expedia-Clone` `main`**.
2. Link the issue: `Closes #123` or `Fixes #123`.

### PR checklist

- [ ] PR description explains **what** and **why**
- [ ] Linked issue
- [ ] No secrets / PII

Keep PRs focused. One issue → one PR when possible.

## Questions

- Unsure how to approach a task: comment on the issue before large changes.

Welcome aboard — even small docs and test PRs help.

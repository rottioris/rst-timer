# Contributing to rst-timer

Thank you for your interest in contributing to rst-timer! This guide will help you get started.

## 🌍 Choose Your Language

| Language | Guide |
|----------|-------|
| 🇺🇸 English | (You're viewing) |
| 🇪🇸 Español | [CONTRIBUTING.es.md](./CONTRIBUTING.es.md) |
| 🇯🇵 日本語 | [CONTRIBUTING.ja.md](./CONTRIBUTING.ja.md) |

---

## Ways to Contribute

| Type | Description |
|------|-------------|
| 🐛 Bug Reports | Found a bug? Let us know! |
| 💡 Feature Requests | Have an idea? Share it! |
| 🔧 Code Contributions | Fix bugs or add features |
| 📖 Documentation | Improve docs or translations |

## Getting Started

### 1. Fork the Repository

Click the **Fork** button on the [GitHub page](https://github.com/rottioris/rst-timer).

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/rst-timer.git
cd rst-timer
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
```

## Development Setup

### Prerequisites

- Node.js 18+
- Rust 1.70+
- npm or pnpm

### Install Dependencies

```bash
npm install
```

### Run in Development Mode

```bash
npm run tauri dev
```

## Making Changes

### Code Style

- Use meaningful variable names
- Add comments for complex logic
- Follow existing code patterns

### Commit Messages

Use clear commit messages:

```
feat: add dark mode support
fix: timer not resetting correctly
docs: update installation guide
refactor: simplify timer logic
```

### Types of Commits

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `refactor` | Code refactoring |
| `test` | Adding tests |
| `chore` | Maintenance |

## Submitting Changes

### 1. Test Your Changes

```bash
# Build the application
npm run tauri build
```

### 2. Commit Your Changes

```bash
git add .
git commit -m "type: description of changes"
```

### 3. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 4. Create a Pull Request

1. Go to the original repository
2. Click **New Pull Request**
3. Select your branch
4. Fill in the description
5. Submit

## Pull Request Guidelines

- **Describe what you changed** and **why**
- **Link related issues** (e.g., "Fixes #123")
- **Include screenshots** if UI changes
- **Test on multiple platforms** if possible

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism gracefully
- Focus on what is best for the community

## Questions?

- Open an [Issue](https://github.com/rottioris/rst-timer/issues)
- Start a [Discussion](https://github.com/rottioris/rst-timer/discussions)

---

Happy contributing! 🎉
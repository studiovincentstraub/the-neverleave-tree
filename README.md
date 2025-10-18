# Nagare - Personal Portfolio Website

<p align="center">
  <img src="https://github.com/angine04/nagare/blob/main/public/images/projects/nagare.png?raw=true" alt="Nagare Project Screenshot" width="600"/>
</p>

A modern personal portfolio website built with the [Astro](https://astro.build/) framework. It offers a clean, responsive interface to showcase your projects, experience, and contact information.

_A portfolio website template, featuring simplicity, beauty and clarity._

**Live Demo:** [nagare.angine.tech](https://nagare.angine.tech)

## Features

- Responsive Design
- Project Showcase Page
- Timeline/Resume Page
- Contact Information Page
- Resume Page

## Dependencies

- [Astro](https://astro.build/) - Static Site Generator
- [GSAP](https://greensock.com/gsap/) - Animation Library
- [Astro Icon](https://github.com/natemoo-re/astro-icon) - Icon Component

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or bun

### Installation

1.  Clone this repository:

    ```bash
    git clone https://github.com/yourusername/nagare.git
    cd nagare
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or using bun
    bun install
    ```

### Development

Start the development server:

```bash
npm run dev
# or using bun
bun run dev
```

Visit `http://localhost:4321` to see the website.

### Build

Build for production:

```bash
npm run build
# or using bun
bun run build
```

Preview the build:

```bash
npm run preview
# or using bun
bun run preview
```

## Customization

You can customize the website by editing the following:

- `src/components/` - Component directory
- `src/pages/` - Page content
- `src/styles/` - Style files
- `src/data/` - Data files

## Deployment (GitHub Pages)

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-gh-pages.yml` that builds the site and publishes the `dist/` output to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

How it works:

- On every push to `main`, the workflow installs dependencies, runs `npm run build`, and publishes the `dist/` directory to the `gh-pages` branch.
- To enable GitHub Pages, go to your repository Settings -> Pages and set the source to the `gh-pages` branch and the root (`/`).

If you prefer to publish from `main` `/docs`, you can modify the action to copy `dist/` to `docs/` and publish from `main`.

## License

This project is licensed under the MIT license specified in the [LICENSE](LICENSE) file.

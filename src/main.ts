import './style.css'
import heroMark from './assets/hero.png'

type Link = {
  label: string
  href: string
  icon: string
}

type FocusArea = {
  icon: string
  title: string
  copy: string
}

type Project = {
  title: string
  tag: string
  copy: string
  href: string
}

type TimelineItem = {
  year: string
  title: string
  copy: string
}

const profile = {
  name: 'Tangerine',
  handle: '@tangerinesalt',
  title: 'tangerine’s cool personal homepage',
  intro:
    'I build small, clear digital spaces for ideas, experiments, and useful tools. This site is designed to stay fast, editable, and ready to publish from GitHub to Vercel.',
  avatar: 'https://avatars.githubusercontent.com/u/150659913?v=4',
}

const links: Link[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/tangerinesalt',
    icon: 'github',
  },
  {
    label: 'Source',
    href: 'https://github.com/tangerinesalt/personal-homepage-openspec',
    icon: 'code',
  },
]

const focusAreas: FocusArea[] = [
  {
    icon: 'compass',
    title: 'Product shape',
    copy: 'Turning rough ideas into scoped screens, calm workflows, and decisions that are easy to revisit.',
  },
  {
    icon: 'code',
    title: 'Frontend craft',
    copy: 'Building responsive static pages with careful spacing, accessible markup, and fast production builds.',
  },
  {
    icon: 'briefcase',
    title: 'Spec-first delivery',
    copy: 'Keeping intent, requirements, and implementation tasks beside the code through OpenSpec.',
  },
]

const projects: Project[] = [
  {
    title: 'OpenSpec Homepage',
    tag: 'Vite / TypeScript',
    copy: 'A personal homepage project planned with OpenSpec, committed to GitHub, and prepared for Vercel deployment.',
    href: 'https://github.com/tangerinesalt/personal-homepage-openspec',
  },
  {
    title: 'Static Launch Kit',
    tag: 'GitHub / Vercel',
    copy: 'A clean structure for publishing small web projects without a server, database, or custom domain.',
    href: '#contact',
  },
  {
    title: 'Personal Knowledge Surface',
    tag: 'Writing / Systems',
    copy: 'A lightweight public place for notes, project updates, and a clearer signal of current work.',
    href: '#timeline',
  },
]

const timeline: TimelineItem[] = [
  {
    year: '01',
    title: 'Plan',
    copy: 'Define the homepage goals and requirements in OpenSpec before implementation.',
  },
  {
    year: '02',
    title: 'Build',
    copy: 'Implement a static, responsive TypeScript site with editable content arrays.',
  },
  {
    year: '03',
    title: 'Publish',
    copy: 'Commit the source to GitHub and deploy the production build on Vercel.',
  },
]

const icon = (name: string) =>
  `<svg class="icon" aria-hidden="true"><use href="/icons.svg#${name}"></use></svg>`

const externalAttrs = (href: string) =>
  href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''

const renderLinks = (items: Link[]) =>
  items
    .map(
      (item) => `
        <a class="button-link" href="${item.href}"${externalAttrs(item.href)}>
          ${icon(item.icon)}
          <span>${item.label}</span>
        </a>
      `,
    )
    .join('')

const renderFocusAreas = (items: FocusArea[]) =>
  items
    .map(
      (item) => `
        <article class="focus-card">
          ${icon(item.icon)}
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
        </article>
      `,
    )
    .join('')

const renderProjects = (items: Project[]) =>
  items
    .map(
      (item) => `
        <article class="project-card">
          <div>
            <p class="eyebrow">${item.tag}</p>
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
          </div>
          <a href="${item.href}"${externalAttrs(item.href)} aria-label="Open ${item.title}">
            ${icon('arrow-up-right')}
          </a>
        </article>
      `,
    )
    .join('')

const renderTimeline = (items: TimelineItem[]) =>
  items
    .map(
      (item) => `
        <li>
          <span>${item.year}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
          </div>
        </li>
      `,
    )
    .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="${profile.name} home">
      <span>T</span>
      <strong>${profile.name}</strong>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#focus">Focus</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="status">OpenSpec static site</p>
        <h1 id="hero-title">${profile.title}</h1>
        <p>${profile.intro}</p>
        <div class="hero-actions">
          ${renderLinks(links)}
        </div>
      </div>
      <div class="hero-visual" aria-label="${profile.name} profile visual">
        <img class="avatar" src="${profile.avatar}" alt="${profile.name} avatar" width="144" height="144" />
        <img class="hero-mark" src="${heroMark}" alt="" width="170" height="179" />
        <div class="profile-note">
          <span>${profile.handle}</span>
          <strong>GitHub to Vercel ready</strong>
        </div>
      </div>
    </section>

    <section class="metric-band" aria-label="Project highlights">
      <div>
        <strong>Static</strong>
        <span>No backend required</span>
      </div>
      <div>
        <strong>OpenSpec</strong>
        <span>Requirements live with code</span>
      </div>
      <div>
        <strong>Vercel</strong>
        <span>Default vercel.app URL</span>
      </div>
    </section>

    <section class="section-shell" id="focus" aria-labelledby="focus-title">
      <div class="section-heading">
        <p class="eyebrow">Focus</p>
        <h2 id="focus-title">Clear work, light structure.</h2>
      </div>
      <div class="focus-grid">
        ${renderFocusAreas(focusAreas)}
      </div>
    </section>

    <section class="section-shell work-section" id="work" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="eyebrow">Selected Work</p>
        <h2 id="work-title">Small projects with a tidy path to publish.</h2>
      </div>
      <div class="project-grid">
        ${renderProjects(projects)}
      </div>
    </section>

    <section class="section-shell timeline-section" id="timeline" aria-labelledby="timeline-title">
      <div class="section-heading">
        <p class="eyebrow">Process</p>
        <h2 id="timeline-title">From intent to live page.</h2>
      </div>
      <ol class="timeline-list">
        ${renderTimeline(timeline)}
      </ol>
    </section>

    <section class="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">Find the source and follow the next update.</h2>
      </div>
      <div class="contact-actions">
        ${renderLinks(links)}
      </div>
    </section>
  </main>
`

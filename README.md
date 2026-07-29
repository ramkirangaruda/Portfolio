# Garuda Ramkiran — Portfolio

A personal portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.
Design theme: a "trail map" visual language — contour-line motifs, an ember/moss
palette, and a scroll-linked runner marker — tying together the engineering work
and the trail running.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edit any file under `src/` and it hot-reloads.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/` — a pre-built copy is already included in this
zip so you can preview or deploy immediately without running the build yourself.
To preview that build locally: `npm run preview`.

## Deploy

`dist/` is a fully static site — drag-and-drop it onto Netlify, or:

```bash
# Vercel
npm i -g vercel
vercel dist --prod

# Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir dist
```

Or connect the GitHub repo to Vercel/Netlify and set:
- Build command: `npm run build`
- Output directory: `dist`

## Editing content

Everything text-based — your summary, experience, project descriptions, skills,
education, achievements, links — lives in one file:

```
src/data/content.js
```

Change the data there and every section updates automatically. No need to touch
the component files unless you want to change layout or styling.

To swap the resume file, replace `public/resume.pdf` with a new PDF of the same
filename (or update `profile.resume` in `content.js` if you rename it).

## Structure

```
src/
  data/content.js       <- all copy: profile, experience, projects, skills...
  components/
    Nav.jsx              nav bar + resume link
    Hero.jsx              headline + intro
    About.jsx             summary + stats
    Experience.jsx        the three current roles
    Projects.jsx           project cards (spotlight hover effect)
    Skills.jsx              marquee skill strips
    Education.jsx           school history
    Beyond.jsx               achievements + extracurriculars
    Contact.jsx               email + socials
    Footer.jsx
    ContourLine.jsx          the topographic backdrop + scroll-linked divider
    SpotlightCard.jsx         react-bits style cursor-glow card
    SplitText.jsx              react-bits style word-reveal animation
    Marquee.jsx                  react-bits style infinite scroll strip
    icons.jsx                     GitHub/LinkedIn icons (hand-rolled -- lucide-react
                                   dropped brand logos from its core package)
```

## Notes

- Your phone number from the resume is intentionally left off the public site
  (email + GitHub + LinkedIn only) to cut down on spam. Add it in `content.js`
  if you'd rather have it visible.
- Animations respect `prefers-reduced-motion`.
- The resume PDF you uploaded is bundled at `public/resume.pdf` -- the "Resume"
  button in the nav opens it directly.

# Mohammad Asif — Portfolio Website

Built with React and Vite. Responsive portfolio with a persistent dark/light theme and an EmailJS-powered contact form.

## 1. Extract the ZIP
Right-click `asif-portfolio.zip` and choose **Extract All** (Windows) or double-click it (Mac). You will get a folder named `asif-portfolio`.

## 2. Open in VS Code
Open VS Code, choose **File > Open Folder** and select the `asif-portfolio` folder.

## 3. Install dependencies
You need Node.js (version 18 or newer) from https://nodejs.org. Open the VS Code terminal (**Terminal > New Terminal**) and run:

```
npm install
```

## 4. Run the website
```
npm run dev
```

## 5. Open it in a browser
The terminal shows a link, usually http://localhost:5173. Hold Ctrl (or Cmd) and click it.

To create the final production files, run:
```
npm run build
```
The finished site appears in the `dist` folder.

## 6. Change your name and details
Open `src/data.js`. Your name, email, location, skills, projects, education and certifications are all there. Edit the text and save. The page text in `src/components/Hero.jsx` and `About.jsx` can be edited the same way.

## 7. Add project screenshots
1. Put your image (for example `cafehub.png`) in `public/images/`.
2. In `src/data.js`, add `image: './images/cafehub.png'` to that project.
3. In `src/components/Projects.jsx`, replace `<Preview type={p.preview} />` with
   `{p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className="preview" /> : <Preview type={p.preview} />}`

The current project pictures are original illustrations, not real screenshots.

## 8. Update GitHub and LinkedIn links
Edit `github` and `linkedin` in `src/data.js`. To show a GitHub or Live Demo button on a project, fill its `github` or `live` value with the real URL. Empty values hide the button.

## 9. Replace your resume PDF
Replace `public/resume.pdf` with your new file, keeping the same name.

## 10. Deploy for free
- **Netlify:** run `npm run build`, then drag the `dist` folder to https://app.netlify.com/drop.
- **Vercel:** push the project to GitHub, import it at https://vercel.com, and press Deploy.
- **GitHub Pages:** upload the contents of `dist` to a repository and enable Pages in its settings.

## About the contact form
The contact form submits directly through EmailJS and displays a sending state followed by a success or error message. Its EmailJS service, template, and public key are configured in `src/components/Contact.jsx`. Keep private credentials out of client-side code; EmailJS's browser public key is intended for use in a frontend application. You can also edit your displayed contact details in `src/data.js`.

## Theme
The theme toggle in the navigation saves the selected theme in the versioned `portfolio-theme-v2` localStorage key. The first visit defaults to dark mode regardless of the operating system theme. In light mode the Galaxy component is unmounted, leaving a static light background; in dark mode it is mounted as the animated page background.

## Galaxy background
The fixed, interactive dark-mode background uses the official React Bits Galaxy JavaScript/CSS source in `src/components/Galaxy.jsx` and `Galaxy.css`. Its colors, motion, and density are configured in `src/components/GalaxyBackground.jsx`; compact screens use a lower render pixel ratio. The component respects reduced-motion preferences and pauses when it is off-screen or the browser tab is hidden. Light mode unmounts Galaxy entirely, leaving a static background.

The source can be customized directly. React Bits' registry command is `npx shadcn@latest add @react-bits/Galaxy-JS-CSS`; adding through the CLI requires a `components.json` configuration.

# Mohammad Asif – Portfolio Website

Built with React and Vite. Dark theme, responsive, no backend needed.

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
There is no server. When a visitor presses **Send Message**, their own email app opens with your address, the subject and the message filled in. The message is only sent once they press Send in that app. It will not work for visitors who have no email app set up; the page also shows your email address for them. For direct delivery without an email app, use a free form service such as Formspree or Web3Forms.

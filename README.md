# 🚀 Personal Portfolio – React + Tailwind

A modern, responsive personal portfolio built with **React**, **Tailwind CSS**, and **React Router**.  
Designed with a clean UI, smooth interactions, dark/light mode, and a mobile-first scrolling experience.

---

## 📦 Tech Stack

- React
- Tailwind CSS
- React Router
- React Icons
- EmailJS (Contact Form)
- Vite / Create React App

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-portfolio-repo.git
cd your-portfolio-repo
```

---

### 2️⃣ Install dependencies

```bash
Copy code
npm install
```

---

### 3️⃣ Run the project locally

```bash
Copy code
npm run dev
or (if using CRA):

bash
Copy code
npm start
The app will be available at:

arduino
Copy code
http://localhost:5173
(or http://localhost:3000)
```

### 🗂️ Project Structure (Important)

```bash
text
Copy code
src/
├── components/
├── pages/
├── data/
│   ├── info.js        # Update personal details here
│   ├── projects.js    # Update project details here
├── assets/            # Images (profile, projects, etc.)
├── hooks/
└── layouts/

public/
├── AkashCV.pdf        # Replace with your resume
✏️ How to Customize This Portfolio
🔹 1. Update Personal Information
Go to:

text
Copy code
src/data/info.js
You can update:

Name & role

About summary

Social links (GitHub, LinkedIn, Instagram)

Contact details

Skills & percentages

All UI updates automatically.

🔹 2. Update Projects
Go to:

text
Copy code
src/data/projects.js
Add or edit projects like this:

js
Copy code
{
  id: 1,
  title: "Movie Explorer",
  description: "Movie search and details app using API integration.",
  tech: ["React", "TMDB API", "Tailwind"],
  image: movieImg,
  githubLink: "https://github.com/username/repo",
  liveLink: "https://your-live-site.com",
}
Projects automatically update in:

Desktop project slider

Mobile scroll layout

Dot indicators

🔹 3. Update Images
Add your images to:

text
Copy code
src/assets/
Then import them inside info.js or projects.js.

Example:

js
Copy code
import profile from "../assets/profile.png";
🔹 4. Add / Replace Resume
Place your resume file inside:

text
Copy code
public/
Example:

text
Copy code
public/YourName_CV.pdf
Update the download link if needed:

jsx
Copy code
<a href="/YourName_CV.pdf" download>
  Download CV
</a>
```

---

### 🎨 Create a Custom Avatar (Optional)

```bash
You can generate a professional avatar using AI tools such as ChatGPT, DALL·E, or Midjourney.

🪄 Recommended Prompt
Use the prompt below when generating your avatar:

css
Copy code
Create a semi-realistic cartoon avatar from the uploaded photo.
Preserve facial features, skin tone, hairstyle, glasses, and expression.
Smooth digital illustration with clean lines and soft shading.
Front-facing, head and upper torso visible, centered composition.
Violet / purple gradient background.
High-quality, modern profile-style avatar.
After generating:

Download the image

Place it in src/assets/

Update the image reference in info.js

```

---

### 📱 Responsive Behavior

```bash
Desktop / Tablet

Uses page routing

Project slider layout

Full navigation menu

Mobile

Single scrollable page (Home → About → Skills → Projects → Contact)

No section links

Logo + dark/light toggle only

Projects displayed as scrollable cards

This behavior is handled automatically using screen-size detection.
```

---

### 🌗 Dark / Light Mode

```bash
Toggle available in the navbar

Uses Tailwind dark mode

Easily extendable with localStorage persistence
```

---

### 📬 Contact Form (EmailJS)

```bash
The contact form uses EmailJS — no backend required.

Setup Steps:
Go to https://dashboard.emailjs.com

Create:

Email Service

Email Template

Copy:

Service ID

Template ID

Public Key

Paste them into Contact.jsx

Messages will be sent directly to your email.
```

---

### ✅ Final Notes

```bash
Fully data-driven architecture

Easy to customize and extend

Optimized for recruiters & personal branding

Works seamlessly across devices
```

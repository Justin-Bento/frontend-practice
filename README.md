# Front End Practice 

The goal of this repository is to practice and improve my skills in design, interactions, animations, responsiveness, troubleshooting, and more by providing a selection of real websites for me to recreate from scratch. Using only HTML, CSS, and JavaScript, this hands-on approach allows me to gain a diverse set of valuable skills.

This document you're reading is the parent folder, where all projects related to this practice site will stay. I don't want it to mix up with other projects

- Project Start Date: 
- Project End Date: 

## Features 

- Mobile-First design approach.
- Light and Dark Mode 
- Basic JavaScript dynamic interaction. 
- Unique variables to help align project design. 

## Technologies

- Hyper Text Markup Language 5 (HTML5)
- Cascading Style Sheet (CSS3)
- JavaScript or EcmaScript 3. 
- Webpack 


## Run Locally

Clone the project

```bash
  git clone git@github.com:Justin-Bento/frontend-practice.git
```

Go to the project directory

```bash
  cd path/to/frontend-practice
```

Open Visual Studio Code

```bash
  code .
```

Start the server using VS Code extention called "Live Server"

## Challenges

1. When working within a child folder of the "frontend practice" directory, I encountered issues with broken links to CSS, JavaScript, and Git files. To resolve this, I had to manually update the links to ensure proper referencing.
2. The project had multiple remote GitHub URLs, which caused confusion with Git and Github service. To streamline the setup, I consolidated everything into the parent folder, removing all additional remote URLs.
3. During deployment, I poundered how users would navigate between different projects. To address this, I created a main `index.html` file that serves as a hub, linking to the other projects within the folder for easy access.

## Lessons Learned

1. **Link Management**: When working within subfolders, it's crucial to carefully manage and update links to CSS, JavaScript, and Git files. I learned that failing to do so can result in broken links and disrupt the overall functionality. Ensuring relative paths are correct across all files is key.
2. **Remote URL Cleanup**: Having multiple remote URLs for GitHub caused confusion and clutter in the repository. I learned the importance of consolidating repositories into a single remote URL to keep the project structure clean and manageable.
3. **Deployment Navigation**: When deploying multiple projects within a folder, user navigation can become tricky. I learned that creating a central `index.html` file to link to the different projects provides a simple and effective way for users to access and explore all parts of the project seamlessly.

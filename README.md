# Gulp Boilerplate

### **By Devon Fazekas**

The project's structure was inspired from Brad Schiff's course on Udemy.com.

## ABOUT
By leveraging build tools like **Gulp** and **Browsersync**, your computer will clean up your code and refresh your browser (applying the new changes) every time you save. Furthermore, it's set up to handle **ES6**, **Babel**, and **PostCSS**, it will bundle your icons into a single sprite (with supporting files), and it will generate compressed, fully supported prepacked and distributive-ready files.

## HOW TO USE
1. Clone this repo to your local machine.
2. Open the terminal console (e.g., git bash) and navigate to the root of this project.
3. Ensure NPM is installed on your machine. Run `npm install` (sit back and watch the magic happen) - this installs all the tools that I've listed within the `package.json` file.
4. When you're ready to work, run the `gulp watch` command.
A new browser window should open, and your computer will now watch for any changes made within either `scripts/` or `styles/` directories, and `index.html`, automating many useful tools with the new changes you made.
5. The `watch` task creates the `temp/` directory within `app/`, containing all the necessary files that your browser will actually read.
6. To add **images**, simply paste them within the `app/assets/images/` directory. **icons** are special and should be placed in the `icons/` directory.
7. New **ES6/Babel/JS** files should be placed within the `app/assets/scripts/modules/` directory, then imported into the `App.js` file.
8. New **PostCSS/Sass/CSS** files should be placed within `app/assets/styles/` either in the `base/` or `modules/` directories, and should be imported into the `styles.css` file.
9. When you're ready to deploy the site, run the `gulp build` command.
This creates the `docs/` directory within the root of the project (which GitHub reads), containing fully optimized files that you need not worry about.

# Gulp Boilerplate

### **By Devon Fazekas**

The project's structure was inspired from Brad Schiff's course on Udemy.com.

## ABOUT
By leveraging build tools like **Gulp** and **Browsersync**, your computer will clean up your code and refresh your browser (applying the new changes) every time you save. Furthermore, it's set up to handle **ES6**, **Babel**, and **PostCSS**, it will bundle your icons into a single sprite (with supporting files), and it will generate compressed, fully supported prepacked and distributive-ready files.

## HOW TO USE
1. Fork this repo to your local machine.
2. Open the terminal console (e.g., git bash) and navigate to the root of this project.
3. Ensure NPM is installed on your machine. Run `npm install` (this may take a while).
    - This installs all the tools listed within the `package.json` and `package-lock.json` files.
4. When you're ready to work, run the `gulp watch` command (this may take a while).
    - Many files will be generated in your project.
    - A new browser window should open.
    - And the console will start acting as a server, watching for changes within the project.
5. Minimize the console window allowing it to run in the background.
6. Start developing your website. Save to see applied changes made in your browser.
7. When you're done, enter in the console `Ctrl+C` to stop the gulp service.
8. When you're ready to deploy your site, run the `gulp build` command in the console (this may take a while).
    - This creates the `docs/` directory in the root of the project. Use this for the live version.

## USING ES6 & JAVASCRIPT
**ES6 & JAVASCRIPT** files should be placed within the `app/assets/scripts/modules/` directory.
- Always import new files into the `App.js` file.

## USING POSTCSS & CSS
**PostCSS & CSS** files should be placed within the `app/assets/styles/base/` or `app/assets/styles/modules/` directories.
- Always import new files into the `styles.css` file.

## USING IMAGES
- **Images.jpg** should be placed within the `app/assets/images/` directory.
- Subdirectories are permitted.
```
<img class="lazyload"
            sizes="160px"
            data-srcset="assets/images/cat.jpg 160w,
                assets/images/cat-hi-dpi.jpg 320w"
            alt="Cat McKitty">
```

## USING ICONS
- **Icons.svg** should be placed in the `app/assets/images/icons/` directory.
- To display, assuming your icon's titled "facebook.svg" give a `span` tag the class `icon icon--facebook`. 
```
<span class="icon icon--facebook"></span>
```
---

```
Copyright (C) 2018 by Devon A. Fazekas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

# Chinni ♡ Akhiluuuuuuu — Boyfriend's Day website

A responsive, three-page scrapbook-style love website built with plain HTML, CSS, and JavaScript. No framework or build step needed.

## Preview it on your computer
1. Download and unzip `boyfriends_day_website.zip`.
2. Open the extracted folder.
3. Double-click `index.html` to open the website in your browser.
4. Use the navigation at the top to visit all three pages.

## Add your photos
You can put your own images in the `assets` folder. Then replace each photo placeholder in the HTML with an image element.

For example, replace:
```html
<div class="photo-placeholder">
  <span class="photo-icon">♡</span>
  <span>Add your favourite<br>photo of you two</span>
</div>
```
with:
```html
<img class="photo-placeholder" src="assets/us-together.jpg" alt="Chinni and Akhiluuuuuuu together">
```

For images inside the memory cards, replace the `<div class="memory-photo photo-placeholder"> ... </div>` with:
```html
<img class="memory-photo" src="assets/our-memory.jpg" alt="One of our favourite memories">
```
Add this CSS to `style.css` so photos crop neatly:
```css
img.photo-placeholder, img.memory-photo {
  display: block;
  width: 100%;
  object-fit: cover;
}
```
Use filenames without spaces if possible, and keep the image files inside `assets`.

## Personalise the letter
Open `forever.html` in a text editor and edit the paragraphs inside `<div class="love-letter">`. You can change the message, add a date, or include a private inside joke.

## Publish online for free with GitHub Pages
1. Sign in or create a free account at https://github.com/.
2. Create a new **public** repository, for example `for-akhiluuuuuuu`.
3. Upload the contents of this folder to the repository root: `index.html`, `memories.html`, `forever.html`, `style.css`, `script.js`, and the `assets` folder.
   - Upload the files themselves, not the ZIP file.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait a few minutes. The Pages section will show your live website URL, usually:
   `https://YOUR-USERNAME.github.io/for-akhiluuuuuuu/`
8. Open that URL on your phone to test it, then send the link to Akhiluuuuuuu.

## Important privacy note
A public GitHub Pages website is visible to anyone who has the link (and may be discoverable). Don't put private information on it. If you want the site to be harder to stumble across, choose an unguessable repository name, but remember that this is not password protection.

## Files
- `index.html` — welcome page
- `memories.html` — scrapbook photos and expandable reasons
- `forever.html` — love letter and final interactive surprise
- `style.css` — visual design and mobile layout
- `script.js` — heart effects and interactions
- `assets/` — place your photos here

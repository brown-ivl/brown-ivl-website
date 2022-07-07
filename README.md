# Global README with instructions

Please refer to this README for instructions on how to populate content and other details for the website.

## General Instructions

### Running the app locally

Clone the repository from [here](https://github.com/brown-ivl/brown-ivl-website.git)

You must have node installed. Download from [here](https://nodejs.org/en/download/)

`cd ivl-website`

`npm i`

`npm start`

### Pushing changes to repo

To push changes from local to the remote repository:

`git add .`

`git commit -m "some message"`

`git push origin`

### Deploying Changes

The website is currently deployed [here](https://brown-ivl.github.io/brown-ivl-website/#)

In order to deploy new changes to the server, use:

`npm run deploy`

Ideally you would want to deploy changes from main branch.

To view the deployment process, click [here](https://github.com/brown-ivl/brown-ivl-website/settings/pages)

### Important folder structure and files

    -> ivl-website  

        -> public  

            -> images (Add all images here in the appropriate subfolder)  
            -> parentConfig.json (Contains all the configuration information for the website on a global level)  

        -> src  

            -> md (Add all markdown content here in the appropriate subfolder)  

                -> ivlhome

                -> main  

                -> navbar  

            -> components (Holds javascript code for various pages)  

            -> json (Add all json content here in the appropriate folder)  

                -> configs  

                -> home  

                -> ivlhome  

                -> nav  

                -> paper  

                -> people  

            -> utils (Contains all shared code and logic)  

            -> theme.js (Contains all theme related code)  

            -> App.js (Entry component for the app)  

            -> index.js (Entry point for the app)  

            -> package.son (Contains installed package information and command aliases)  

## Component-wise Information

### Carousel

The code for the Carousel is located in the `src/components/carousel` folder.

Its functionality is to render the Carousel for the IVL homepage. Information is passed via props to Item.js.

### Footer

The code for the Footer is located in the `src/components/footer` folder.

The Last Updated Time is pulled from json/configs/ComponentConfig.json. The Last Updated Time is displayed in the footer. **Change the value before deploying**

### Navbar

The code for the Navbar is located in the `src/components/navbar` folder.

To add or remove pages from the Navbar, edit the file `src/md/navbar/Pages.md`. The file contains a list of pages that will be displayed in the Navbar. The pages need to be separated by a newline.

Logos are located in the `public/images/logos` folder.

### Homepage

The code for the Homepage is located in the `src/components/main` folder.

To modify homepage content, edit the file `src/md/main/Homepage.md`. It is a markdown file that contains the content for the homepage. **It is vital that you read the comment on the top of the file before editing the markdown content.** Only modification of the markdown content is possible at the moment. Addition of new sections will not reflect directly on the homepage as it is not explicitly parsed in the code.

Paths to images that are used in the homepage are located in the `src/json/home/Images.json` file. The path should be of the form `images/../..` The actual images themselves are located in the `public/images` folder.

### IVL Homepage

The code for the IVL Homepage is located in the `src/components/ivlhome` folder.

To modify homepage content, edit the file `src/md/ivlhome/Ivl.md`. It is a markdown file that contains the content for the IVL homepage. **It is vital that you read the comment on the top of the file before editing the markdown content.** Only modification of the markdown content is possible at the moment. Addition of new sections will not reflect directly on the homepage as it is not explicitly parsed in the code.

Paths to images that are used in the carousel are located in the `src/json/ivlhome/Carousel.json` file. The path should be of the form `images/carousel/..` The actual images themselves are located in the `public/images/carousel` folder.

Right now, the IVL homepage is just a stencil with dummy content and is in development.

### Research Page

The code for the Research Page is located in the `src/components/main` folder.

The information for the research papers that are rendered on the Research page are located in the `src/json/papers/ResearchPapers.json` file. Any new paper that needs to be added to the Research page should be added to this file. If any particular property of a paper is not valid or does not exists, it should just be an empty string.

Paths to images or gifs that are used for each paper should be entered the the appropriate property in the json file. The path should be of the form `images/papers/..` The actual images or gifs themselves are located in the `public/images/papers` folder.

### People Page

The code for the People Page is located in the `src/components/people` folder.

The information for each person that is rendered on the People page is located in the `src/json/people/People.json` file. Any new person that needs to be added to the People page should be added to this file under the appropriate category. If any particular property of a person is not valid or does not exists, it should just be an empty string.

Paths to the images of each person should be entered the the imgPath property in the json file with an alt tag. The path should be of the form `images/people/..` The actual images themselves are located in the `public/images/people` folder.

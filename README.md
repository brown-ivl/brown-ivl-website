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

### Important folder structure to know is as follows

    -> ivl-website  

        -> public  

            -> images (Add all images here in the appropriate subfolder)  
            -> config.json (Contains all the configuration information for the website)  

        -> src  

            -> md (Add all markdown content here in the appropriate subfolder)  

                -> ivlhome

                -> main  

                -> navbar  

            -> components (Holds javascript code for various pages)  

            -> json (Add all json content here in the appropriate folder)   

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

## Navbar

## Homepage

## Research Page

## People Page

## Openings Page

## About Page

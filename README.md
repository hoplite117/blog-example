## Description

An example of a SPA blog made with Laravel, React and MUI.

## Features

- User authentication and authorization
- Blog post creation and deletion
- Blog post sorting and searching
- Blog user viewer for logged in users

Future features:

- Post editing
- User roles
- Authentication done with Auth0 or Azure
- Live demo via Azure app services
- Blog post image support

## Steps to Run Locally

- Create a new database in MySql named "laravel"
- Set the correct MySql username and password in the repo's .ENV file
- Run Laravel migrations
- Create the site key with "php artisan key:generate"
- Run "npm i" from the repo root
- Build the React client by running "npm run watch"
- Run the Laravel testing server with "php artisan server"

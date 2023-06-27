# Keebsy

## Technologies Used
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /><img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" /><img src="https://camo.githubusercontent.com/35f2e05c7eea775c5fbcb068d30e6e69bbbc4205044608e3a4d1b1c648bbd438/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f466c61736b2d2532333030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d666c61736b266c6f676f436f6c6f723d7768697465" /><img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=whit" />

## Home Page
![Home](https://github.com/FrancisHuynh95/Capstone/assets/116605438/259e054e-cb23-45f0-bdb0-66e020b5c338)

## Product Page
![product page](https://github.com/FrancisHuynh95/Capstone/assets/116605438/a844570a-a52c-4ab7-9307-d19451094f41)

## User Cart
![Cart](https://github.com/FrancisHuynh95/Capstone/assets/116605438/c6a9e75b-b274-4404-9ca4-76f57baf181d)


This is the starter for the Flask React project.

## Getting started
1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      pipenv install boto3
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

   ## Amazon Web Services S3
* For setting up your AWS refer to this [guide](https://github.com/jdrichardsappacad/aws-s3-pern-demo)

# Features

## Products
* Users can create a product listing
* Users can read/view other product listings
* Users can edit/update their own product listing
* Users can delete their own product listings

## Cart
* Users can add products to their cart
* Users can read/view their own cart
* Users can edit their own cart
* Users can delete/remove products from their cart
* Users can make purchases from their own cart

## Reviews
* Users can make reviews on other user's product listings
* Any user can view/read product reviews
* Users can edit/update their own review
* Users can delete their own review




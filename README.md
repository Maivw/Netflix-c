# NETFLIX
*Created by <a href="https://maivw.github.io/" target="_blank">Mai Van Wagner</a> - **<a target="_blank" href="https://netflix-vw.web.app/">Live Site</a>***

<!-- <p align="center">
  <img src="https://github.com/Maivw/Netflix-c/blob/master/recording5.gif?raw=true"/>
</p> -->

<p>
<img src="https://res.cloudinary.com/maivw/image/upload/v1614636084/Screen_Shot_2021-03-01_at_5.01.14_PM_yjpyod.png" >
</p>
#### Table of Contents - [NETFLIX](#NEXFLIX)
  - [Table of Contents](#table-of-contents)
  - [Non-Technical Overview](#non-technical-overview)
  - [Core Features:](#core-features)
  - [Technical Overview](#technical-overview)

## Non-Technical Overview
This project is a simplified front end clone of Netflix. It was created with React, firebase (for hosting and authentication), and firebase Stripe extentsion so users can make a payment with Stripe. It uses The MovieDB APIs to search for movies and display details.
#### Core Features: 
* Login, logout and create a new account. 
* Access to the list of movies.
* Search, add, remove movie from the wished list.
*  Make a payment with Stripe;
## Technical Overview

I focused on the following considerations: 
1. Design elegant UX without having a designer by leveraging open source UI libraries
2. Adhered to React and ES6 best practices to generate a true single page reactive web app experience.
3. Controlled access to paid content by syncing subscriptions with Firebase Authentication.
4. Applied APIs that are provied by TMDB to get a list of movies depends on the different queries.
### Stripe test number account:
<img src="https://res.cloudinary.com/maivw/image/upload/v1614635920/Screen_Shot_2021-03-01_at_4.58.34_PM_quoizg.png" alt="payment">

* Card number: 4242 4242 4242 4242
* MM/YY: 04 / 24
* CVC: 242
* ZIP: 42424

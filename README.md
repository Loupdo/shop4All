# 🛍️ React Shop App

This is a basic shopping app built with **React** using the **Context API** for global state management.
Shop simulated with fakestoreapi.com .
The app allows users to register, sign in, and track their cart total.
It uses **Formik + Yup** for form handling and validation, and **localStorage** to persist data between sessions.

---

## 🚀 Features

- 🔐 User registration and login with form validation
- ✅ Formik + Yup for robust form handling
- 🧠 React Context API for global state (users, cart total, login status)
- 💾 Persistent user data via `localStorage`
- 🔓 Logout button that resets the cart total
- 🛒 Add to cart functionality (adds product price to cart total)
- 🌐 React Router navigation
- 💅 Styled with React Bootstrap


## 🛠️ Installation

### Clone the repo
git clone https://github.com/loupdo/shop4All.git
cd react-shop-app

### Install dependencies
npm install

### Start App
npm start

## 🧠 State Management

State is handled globally using React Context and includes:

users: All registered users

userName: Currently signed-in user's name
 
total: Shopping cart total

visible: Controls visibility of login/register modal

A custom useShop() hook provides access to these values anywhere in the app.


## 🔐 Authentication Logic

Register: Creates a new user and stores in localStorage

Sign In: Matches email + password from stored users

Logout: Clears userName, resets total to 0, and updates visible to show login again

## 🧰 Form Validation

All forms are built with Formik and validated using Yup, ensuring:

Valid email format

Minimum 8-character passwords

Required fields

## 🔓 Logout Behavior

Clicking "Logout" will:

Clear the logged-in user

Reset total to 0

Toggle UI back to login state


# 🛍️ try the App

https://shop-4-all.vercel.app/products

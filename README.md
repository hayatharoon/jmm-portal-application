# **JMM Portal Application**

This is an internal system portal that allows users to search employees of the company. The portal is secure, and users need to enter their email and password to access it.

GiHub Link: https://github.com/hayatharoon/jmm-portal-application.git
Live Link: https://jmm-portal-application.netlify.app
Video Link: https://www.loom.com/share/f31b8dae2be5490aaf1bc1add758d0ff

## **Installation:**

To install and run the application, follow these steps:

1. Clone this repository using git clone https://github.com/hayatharoon/jmm-portal-application.git
2. Install the dependencies by running npm install or yarn.
3. Then `npm start`

## **Features**

- **Secure login**: Users need to enter their email and password to access the application. Incorrect login credentials will trigger an error notification.
- **Success notification**: If the user's email and password are correct, a success notification appears.
- **Employee page**: Upon successful login, users are redirected to the employee page, which displays the first page of employees.

- **Pagination**: The application features pagination that allows users to fetch and view employees on different pages.

- **Secure routes**: Users cannot access the employee page without logging in first.

- **Search functionality**: Users can search for employees by name and designation.

- **Loader component**: A loader component is included to improve the user experience.

## **Technologies Used**

This application was built using:

- JavaScript
- React
- HTML
- CSS
- Axios

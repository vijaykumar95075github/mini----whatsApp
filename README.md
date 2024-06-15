# Mini WhatsApp
Real-Time Messaging Application
# Overview
Mini WhatsApp is a real-time messaging application designed to emulate the core functionalities of WhatsApp. It allows users to send and receive messages instantly, ensuring a seamless and interactive communication experience. The project focuses on implementing fundamental features such as user authentication, message sending, and message management.

#Features
User Authentication: Secure user sign-up and login functionality to ensure that only registered users can access the chat features.
Real-Time Messaging: Users can send and receive messages in real-time, providing an instant communication experience.
Message Editing: Users can edit their messages after sending them, allowing for quick corrections and updates.
Message Deletion: Users can delete messages, either for themselves or for everyone in the chat, providing control over their conversation history.
User Interface: A clean and intuitive interface that resembles the familiar layout of WhatsApp, making it easy for users to navigate and use the application.
Responsive Design: The application is designed to be fully responsive, providing a consistent user experience across all devices, including desktops, tablets, and mobile phones.
#Technologies Used
HTML & CSS: For creating the structure and styling the user interface of the application.
JavaScript: For adding interactive elements and enhancing the user experience.
Node.js & Express.js: For building the back-end server and handling routes and requests.
MongoDB: For managing the database, storing user information and messages.
Socket.io: For enabling real-time, bidirectional communication between clients and the server.
EJS: For templating and dynamically rendering HTML pages based on the data.
Project Details
User Interface:

The chat interface displays a list of messages exchanged between users, with options to edit or delete messages.
Users can see their message history and send new messages using a simple input field and send button.
Back-end Functionality:

The server handles user authentication, ensuring that only registered users can access the chat features.
Real-time communication is achieved using Socket.io, which allows for instant message sending and receiving.
CRUD operations (Create, Read, Update, Delete) for managing messages in the chat.
Integration with the MongoDB database to store and retrieve user information and messages efficiently.
How to Use
For Users:
Sign up or log in to your account.
Start a new chat or continue an existing conversation.
Send and receive messages in real-time.
Edit or delete your messages as needed.

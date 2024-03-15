## Set-up and run:
After downloading the content, just use the two following commands in the "chatbot" directory:
1. npm install
2. npm run dev

The app can be accessed at http://localhost:3000/ 

The concept is based on an array "options" which tracks all the choices the user has done. As user navigates the chatbot, more choices are pushed in this array.

One functionality of this bot is that you can only click on the last message. The app doesn't allow you to pick previous answers.

Also, the chat window navigates to the bottom everytime a reply is pushed to the conversation. 

App made using ReactJs + ViteJs.
# Installation
- git clone git@github.com:dimaorizz/light-it-task.git
- cd loght-it-task-master
- npm install
- change .env file: MONGO_URL: 'Your_Connection_Url'
- npm run start

# Endpoints

- /users/signIn - method: POST, in: json { username: String, password: String }, out: { msg: String }, purpose: sign in user to the system
- /users/signUp - method: POST, in: json { username: String, password: String, role: Number - (0 - seller, 1 - cashier, 2 - accountant) }, out: {  msg: String } / redirect, purpose: register new user
- /users/logOut - method: GET, out: redirect to '/' purpose: log user out of system

- /orders - method: GET, in: json { from: Number (date in miliseconds), to: (date in miliseconds) }, out: Array of objects { name: String, cost: Number, creationDate: Date }, purpose: display all orders from date to date / display all orders
- /orders/create - method: POST, in: json { productId: String }, out: json { msg: String } purpose: create new order
- /orders/update/:id - method: PUT, in: :id - ObjectID, out: json { msg: String }, purpose: update status of bill
- /orders/bill/:id - method: GET, out: json { itemName: String, totalCost: Number, orderDate: String, billDate: String }, purpose: generate a bill

- /goods - method: GET, out: Array of objects { name: String, cost: Number, creationDate: Date } / { msg: String }, purpose: display all goods
- /goods/create - method: POST, in: json { name: String, cost: String }, out: json { msg: String } purpose: create new item
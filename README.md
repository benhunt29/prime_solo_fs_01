# prime_solo_fs_01

## File Server/API Solo Challenge!

In this assignment, you’re going to practice many of the concepts we’ve covered: fileserving, creating project structures, and separating client-side code from server-side code.
1. Install express-generator
Start off by installing express-generator via npm. Create a new project using express generator and name it prime_solo_fs_01. 
2. Create views
Delete the views/index.jade file and create an HTML5 file: views/index.html. Change the routes/index.js file to serve this file as a static file.

3. Prepare client-side files
Create the file public/javascripts/app.js. You will write your JavaScript/jQuery code in here. You should also add jQuery to this folder and include it in your index.html.

4. Prepare server-side JavaScript files
In your backend (server side) app.js file, serve the public folder using express.static. 

5. Create data models
Create a new folder in your root directory named models. Inside of this folder create a json file that has an array of at least 4 customers, named customers.json. The customers should have
firstName 
lastName 
id (integers are fine) 
Create another json file named billing.json that contains an array of at least 4 billing addresses. These should include at least 
addressLine1
addressLine2
city
state
zip
phone number
customerId 
isShipping

Create another json file named shipping.json with the following properties:
addressLine1
addressLine2
city
state
zip
phone number
customerId 

This one should only have two array entries, and the addresses should be different than any you previously entered. 

Choose two billing addresses, and set their “isShipping” to true. Do not give them the same customerId as any shipping addresses.

The other two billing addresses should be false, and should have the same customerId as one other shipping address. 

6. Serve JSON files
Serve each json file using the app.get('/:id?', function) method, each on their own route, using three separate module files.

7. Retrieve data on the client side
The following logic should be implemented with JavaScript. 

When the page loads, access the list of customers from the /customers route. After this is complete, make another AJAX call to the server to get the list of all billing addresses from the /billing route.

When the final AJAX call is complete, compare all of the data. The possible data scenarios, and their implications, are as follows.
Billing address has isShipping set to true
Customers that have a billing address with their billing address’s “isShipping” set to true, use their billing address as their shipping addresses. You do not need to look up their shipping address.

For example, if customer with id: 2, matches a billing address with customerId: 2. Their billing address has “isShipping” true. Then they have the same billing and shipping addresses.
Billing address has isShipping set to false
For customers that have a billing address with their billing address’ “isShipping” set to false, have a different shipping address. This will need to be looked up.

For example, if a customer with id: 2, has a billing address with customerId: 2, and their billing address has “isShipping” set to false, then their shipping address must be looked up. Therefore, you must make one more call to the server to retrieve shipping addresses for each customer that doesn’t have an id that appears in the list of billing addresses with isShipping: true, and retrieve their shipping address from the server, using their Id. For example, using the url /shipping/2. 

8. Display data on the DOM
Once you have all of the data, write it to the DOM in a meaningful way. It doesn’t have to be pretty! Just get a list of customers inside of an unordered list, and then display their shipping and billing addresses inside a nested unordered list.

It should look something like the example data on the following page.
```html
<ul id="customers">
   <li>
       <p>
           John Smith
       </p>
       <ul>
           <li class="billing">
               John Smith's Billing Address Goes Here
           </li>
           <li class="shipping">
               John Smith's Shipping Address Goes Here
           </li>
       </ul>
   </li>
   <li>
       <p>
           Emmett Brown
       </p>
       <ul>
           <li class="billing">
               Emmett Brown's Billing Address Goes Here
           </li>
           <li class="shipping">
               Emmett Brown's Billing Address Goes Here, because it is also his Shipping Address
           </li>
       </ul>
   </li>
   ...
</ul>
```
## Hard/Pro Mode
Install grunt into your application using npm. 
Create a client folder in the root of the application. This will hold all of your front end work: your scripts, styles, images, and other front end assets need to be moved into this folder. Be sure to mimic the file structure of your public folder. 
Create a Gruntfile and use grunt to minify your JavaScripts and copy them to public/javascripts/app.js. Use grunt to copy your styles to public/stylesheets/style.css. Any images should go into public/images/.
Put your /public folder into the .gitignore and remove it from git. This will simulate an environment where you have a separate team working on front end assets which need to be integrated via a grunt file. 

# KendoReact Data Grid With MarkLogic

A sample application that showcases how to Integrate MarkLogic and the KendoReact Grid.

## Running the Application

Please execute the following steps to run the application:

1. Navigate inside the `setup` folder.

````
cd setup
````

2. Install the packages for the setting up MarkLogic.

````
npm install
````

3. If needed, edit `setup/config.js` for your MarkLogic server by changing the username and pasword accordingly.

4. Run MarkLogic as a service on your machine and run"

````
node setup.js
````

5. Navigate to the `server` folder.

````
cd ../server
````
6. Install the packages for the server.

````
npm install
````

7. Start the server.

````
node index.js
````

8. Open a new terminal at the project root and navigate to the ui folder.

````
cd ui
````

9. Install the packages for the client application.

````
npm install
````

10. Run the client application.

````
npm start
````


# smart home interface

After cloning your current project, be sure to run npm install to install all dependencies.

Project launch
You can start the project with the command:

npm start

Open http: // http://localhost:1234 / to view it in a browser.

The project consisted in creating a fragment of the web interface of a smart home system. The system supports three types of smart devices: light bulb, socket electrical and temperature sensor. In the future, it may be expanded with support for subsequent types.
The main screen contains a list of devices connected to the system.
After clicking on an element from the list, a window with device status visualization opens.
The content depends on the type of device that has been selected. Besides, the window:
1. Supports dragging option. For this, the interact.js library was used.
2. It does not block the selection of another device from the list.
3. If it is already open when the next device is selected, it remains opened and its contents replaced.
4. When you open it again, it is in the same place it was last time displayed.
It is assumed that the backend team is not ready provide the API, but its specification has been established. Mocking it with Mirage JS so that I could prepare and test the frontend implementation.

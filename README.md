# Real-Time Ticketing System - Frontend

The frontend is built using Angular and provides a user interface for configuring and monitoring the ticketing simulation. It interacts with the backend through REST APIs to manage data and simulate ticket transactions.

## Features
- **Interactive UI:**
  - Forms for setting configurations and entering customer/vendor data.
- **Real-Time Updates:**
  - Displays ticket availability and transaction progress.
- **Routing:**
  - Supports navigation between configuration, customer, and vendor management pages.
- **Responsive Design:**
  - Adapted for multiple screen sizes using modern CSS.


## File Structure

| File/Directory        | Description                             |
|-----------------------|-----------------------------------------|
|**app.component.***|Main application component files.|
| **configuration-form.component.***| Configuration form for multithreading parameters.|
| **ticket-counter.component.***|Displays real-time ticket transaction progress.|
|**services/api.service.ts**|API service to interact with the backend. |
| **styles.scss**|Global styles for the application. |
| **app.routes.ts** |Defines routing for the application.|


## Prerequisites

    1.	Node.js and npm installed.
	2.	Angular CLI for running and building the project.

## Setup Instructions
### Running the Frontend (Angular) in IntelliJ IDEA
1.	**Import the Project:**
- Open IntelliJ IDEA.
- Click on File > Open.
- Select the frontend project folder (e.g., RealTimeTicketing-Frontend).
2.	**Install Node.js Plugin:**
- Go to File > Settings > Plugins.
- Search for and install the Node.js plugin.
3.	**Setup Node.js:**
- Go to File > Settings > Languages & Frameworks > Node.js and NPM.
- Ensure the correct Node.js interpreter is selected.
4.	**Install Dependencies:**
- Open the terminal in IntelliJ (bottom of the screen) and run:
```
bash

npm install
```
5.	**Run the Frontend:**
- Open the package.json file in IntelliJ.
- Locate the scripts section and hover over the start script.
- Click the green play icon next to "start".
6.	**Verify:**
- Open a browser and navigate to http://localhost:4200. The frontend should be up and running.


## Usage
1.	Access the application at http://localhost:4200.
2.	Key pages:
- Set Configuration: /configurationForm
- Customer Details: /customerDetails
- Vendor Details: /vendorDetails
- Ticket Counter: /ticketCounter


## Troubleshooting
- **Cannot connect to backend:** Ensure the backend is running on http://localhost:8083.
- **Styling issues:** Check for missing dependencies like Angular Material or Tailwind CSS.

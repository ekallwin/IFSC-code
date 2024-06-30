## IFSC Code Bank Details Lookup
This web application allows users to retrieve bank details based on the IFSC code entered. It utilizes the Razorpay IFSC API for data retrieval.

## Features
- **IFSC Code Input:** Users can enter an IFSC code (Indian Financial System Code).
- **Bank Details Display:** Upon entering a valid IFSC code, the application displays details such as bank name, branch name, address, city, district, state, and electronic fund transfer availability.
- **Error Handling:** Provides meaningful error messages for invalid IFSC codes or network errors.
  
## Technologies Used
- HTML
- CSS
- JavaScript
  
## Razorpay API Integration
This project integrates with the Razorpay IFSC API to fetch bank details based on IFSC codes. The API provides reliable and up-to-date information about banks across India.

# Flow of Execution
## HTML Structure:
- Provides the basic structure for a webpage where users can input an IFSC code and retrieve bank details.

## Styles
- The application uses CSS (styles.css) to enhance the user interface with the following styles:
- **Input Field:** Styled with a consistent font size and placeholder text for clarity (#ifsc).
- **Button:** Styled to be visually appealing and easy to click (#button).
- **Result Display:** Styled to provide clear and readable bank details (#result).
- **Loading State:** Includes a loading indicator (fetching class) to inform users that data is being retrieved.
- **Error State:** Displays error messages (error class) in a distinct style for easy identification of issues.

## JavaScript (functions.js): 
- User Interaction: User enters an IFSC code into the input field (<input id="ifsc">) and clicks the "Get details" button (<button id="button">).
- Event Handling: When the button is clicked (onclick="validateIFSC()"), the validateIFSC() function is invoked.
- validateIFSC() Function: Retrieves the entered IFSC code from the input field. Displays a "Fetching..." message in the id="result" element to indicate that data retrieval is in progress.
- Asynchronous Data Fetching: Uses fetch() to make a GET request to https://ifsc.razorpay.com/{entered_IFSC_code}.
- Checks the response: If the response is not ok (HTTP status not in the 200-299 range), throws an error indicating "Invalid IFSC code". If successful, parses the response body as JSON.
- Displaying Results: Extracts relevant data from the JSON response (bank name, branch name, address, city, district, state, electronic fund transfer availability, MICR code, SWIFT code) and formats this information in the id="result" element.
- Error Handling: Catches errors (like network issues or invalid IFSC) and displays appropriate error messages.

## Setup
To run the application locally
clone this repository
bash
Copy code
- git clone https://github.com/ekallwin/IFSC-code.git
- Open index.html in your web browser.

## Contributing
Contributions are welcome! Please feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

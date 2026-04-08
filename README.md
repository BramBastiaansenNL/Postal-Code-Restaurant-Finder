# Restaurant Finder 🍽️

This is a simple web application that allows users to search for restaurants by entering a postcode (current API only works for UK-based restaurants).

## Features

- Search restaurants by postcode
- Displays:
  - Name
  - Cuisines
  - Rating
  - Address
- Clean and simple UI inspired by food delivery platforms
- Results limited to the first 10 restaurants
- Sorting by rating (default)

## Architecture

This project uses a simple full-stack setup:

- **Frontend**: HTML, CSS, JavaScript (served via Live Server)
- **Backend**: Python Flask API
- **External API**: Just Eat restaurant data

Flow:

## How to Run

1. Clone the repository:
git clone https://github.com/BramBastiaansenNL/Postal-Code-Restaurant-Finder.git

2. Start the backend

-Install dependencies:
'''pip install flask flask-cors requests'''

-Run the server:
'''python app.py'''

-Backend runs at:
'''http://127.0.0.1:5000'''

3. Start the frontend

- Open the project in VS Code
- Install **Live Server** extension
- Right-click `index.html` → **Open with Live Server**, and open in browser of choice.

Frontend runs at:
http://127.0.0.1:5500


## Notes

- This project uses the Just Eat public API, which is publicly available and stable
- Only UK postcodes are supported
- Backend is required to bypass CORS restrictions

## Known Limitations

Due to CORS restrictions, a proxy is used to access the API.

Some postcodes return very large datasets, which may exceed proxy size limits and result in errors.

In a production environment, this would be solved by introducing a backend service to handle API requests.

Backend is minimal and not production-hardened

## Future Improvements

- Add loading spinner animation
- Improve error handling and user feedback
- Add more sorting/filter options (e.g. based on the number of reviews)
- Enhance UI responsiveness for mobile
- Add additional unit tests

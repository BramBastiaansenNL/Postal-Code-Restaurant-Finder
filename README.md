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

## How to Run

1. Clone the repository:
git clone <Postal Code Restaurant Finder>

2. Open the project folder in VS Code

3. Open `index.html` in your browser of choice 

## Notes

- This project uses the Just Eat public API
- Only UK postcodes are supported

## Known Limitations

Due to CORS restrictions, a proxy is used to access the API.

Some postcodes return very large datasets, which may exceed proxy size limits and result in errors.

In a production environment, this would be solved by introducing a backend service to handle API requests.

## Future Improvements

- Add loading spinner animation
- Add sorting based on the number of reviews
- Improve error handling
- Add more sorting/filter options
- Enhance UI responsiveness for mobile
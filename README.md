# EventDiscover - Local Events Discovery Platform

A modern, responsive single-page website for discovering local events in your area. Built with HTML5, CSS3, and Vanilla JavaScript.

## 📋 Project Description

EventDiscover is a startup platform designed to help users discover and explore local events. The website features a clean, modern interface with a hero section, featured events display, and interactive search functionality. All event data is dynamically loaded from a JavaScript array, and users can filter events by name using the search feature.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup for structure
- **CSS3** - Custom styling with modern design principles
- **Bootstrap 5** - Responsive framework (via CDN)
- **Bootstrap Icons** - Icon library for visual elements
- **Vanilla JavaScript** - No frameworks, pure JavaScript for functionality

## 🚀 How to Run the Project

1. **Clone or download** the project files to your local machine
2. **Ensure all files are in the same directory:**
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`

3. **Open the project:**
   - Simply open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari)
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
   - Then navigate to `http://localhost:8000` in your browser

4. **No build process or dependencies required** - The project uses CDN links for Bootstrap and Bootstrap Icons, so an internet connection is needed for the first load.

## ✨ Features Implemented

### Core Features
- ✅ Responsive navigation bar with logo and menu items
- ✅ Hero section with call-to-action
- ✅ Featured Events section displaying 4 event cards
- ✅ Each event card includes:
  - Event name
  - Date and time (formatted)
  - Location
  - Description
  - Register button

### Bonus Features
- ✅ **Search Functionality** - Real-time filtering of events by name
- ✅ **Dynamic Event Loading** - Events are loaded from a dummy JSON array in JavaScript
- ✅ **Smooth Scrolling** - Navigation links smoothly scroll to sections
- ✅ **Active Navigation** - Navigation highlights based on scroll position
- ✅ **Responsive Design** - Fully responsive for mobile, tablet, and desktop
- ✅ **Modern UI/UX** - Clean design with hover effects, animations, and transitions

### Additional Enhancements
- Smooth fade-in animations on page load
- Interactive hover effects on cards and buttons
- No results message when search yields no matches
- Formatted date and time display
- Icon integration for better visual hierarchy
- Contact section with email and phone links
- Footer with copyright information

## 📁 File Structure

```
eventdiscover/
│
├── index.html      # Main HTML structure
├── style.css       # Custom CSS styles
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## 🎨 Design Highlights

- **Color Scheme**: Modern gradient hero section with primary blue theme
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins throughout
- **Cards**: Elevated card design with hover effects
- **Responsive Breakpoints**: Optimized for mobile (< 576px), tablet (576px - 768px), and desktop (> 768px)

## 🔧 Code Quality

- **Semantic HTML5** - Proper use of semantic elements (`<nav>`, `<section>`, `<footer>`, etc.)
- **Well-commented JavaScript** - All functions are documented with JSDoc-style comments
- **Modern CSS** - Uses CSS variables, flexbox, and modern selectors
- **Best Practices** - Follows modern web development standards
- **Accessibility** - Proper ARIA labels and semantic structure

## 📱 Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Future Enhancements (Not Implemented)

- Backend integration for real event data
- User authentication and registration
- Event filtering by date, location, or category
- Event detail pages
- User favorites/bookmarks
- Event creation by organizers
- Calendar view
- Map integration for event locations

## 📝 Notes

- The Register button currently shows an alert message (UI only, no backend)
- Event data is stored in a JavaScript array - in a real application, this would come from a database
- All styling is custom with Bootstrap 5 used only for the grid system and base components
- The website is fully functional as a front-end prototype

## 👤 Author

Built as a professional front-end development project.




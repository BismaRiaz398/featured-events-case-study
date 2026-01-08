/**
 * Bisma's Event - Main JavaScript File
 * Handles event data, search functionality, and dynamic rendering
 */

// Dummy JSON array containing event data
const eventsData = [
    {
        id: 1,
        name: "Summer Music Festival",
        date: "2026-07-15",
        time: "18:00",
        location: "Central Park, New York",
        description: "Join us for an unforgettable evening of live music featuring top artists from around the world. Food trucks and beverages available on-site."
    },
    {
        id: 2,
        name: "Tech Innovation Summit",
        date: "2026-07-20",
        time: "09:00",
        location: "Convention Center, San Francisco",
        description: "Explore the latest in technology and innovation. Network with industry leaders, attend workshops, and discover cutting-edge solutions."
    },
    {
        id: 3,
        name: "Local Food & Wine Tasting",
        date: "2026-07-25",
        time: "14:00",
        location: "Downtown Market Square, Chicago",
        description: "Savor delicious local cuisine and fine wines from regional producers. A perfect event for food enthusiasts and wine connoisseurs."
    },
    {
        id: 4,
        name: "Yoga & Wellness Retreat",
        date: "2026-08-01",
        time: "08:00",
        location: "Riverside Park, Seattle",
        description: "Start your day with peaceful yoga sessions, meditation, and wellness workshops. All skill levels welcome. Bring your own mat."
    }
];

/**
 * Formats date string to a readable format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Formats time string to 12-hour format
 * @param {string} timeString - Time in HH:MM format (24-hour)
 * @returns {string} Formatted time string (12-hour format)
 */
function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

/**
 * Creates an event card HTML element
 * @param {Object} event - Event object with all event details
 * @returns {string} HTML string for the event card
 */
function createEventCard(event) {
    const formattedDate = formatDate(event.date);
    const formattedTime = formatTime(event.time);
    
    return `
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="event-card fade-in">
                <div class="event-card-header">
                    <div class="event-date">
                        <i class="bi bi-calendar3 me-2"></i>${formattedDate}
                    </div>
                    <h3 class="event-name">${event.name}</h3>
                </div>
                <div class="event-card-body">
                    <div class="event-location">
                        <i class="bi bi-geo-alt-fill"></i>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-time mb-3">
                        <i class="bi bi-clock-fill text-primary me-2"></i>
                        <strong>Time:</strong> ${formattedTime}
                    </div>
                    <p class="event-description">${event.description}</p>
                </div>
                <div class="event-card-footer">
                    <button class="btn btn-primary btn-register" onclick="handleRegister('${event.name}')">
                        <i class="bi bi-person-plus me-2"></i>Register
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders event cards to the DOM
 * @param {Array} events - Array of event objects to render
 */
function renderEvents(events) {
    const eventsContainer = document.getElementById('eventsContainer');
    const noResults = document.getElementById('noResults');
    
    // Clear existing content
    eventsContainer.innerHTML = '';
    
    // If no events found, show no results message
    if (events.length === 0) {
        eventsContainer.classList.add('d-none');
        noResults.classList.remove('d-none');
        return;
    }
    
    // Hide no results message and show events
    noResults.classList.add('d-none');
    eventsContainer.classList.remove('d-none');
    
    // Render each event card
    events.forEach(event => {
        eventsContainer.innerHTML += createEventCard(event);
    });
}

/**
 * Filters events based on search query
 * @param {string} searchQuery - Search term entered by user
 * @returns {Array} Filtered array of events
 */
function filterEvents(searchQuery) {
    if (!searchQuery || !searchQuery.trim()) {
        return eventsData;
    }
    
    const query = searchQuery.toLowerCase().trim();
    return eventsData.filter(event => 
        event.name.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
    );
}

/**
 * Handles search input changes
 */
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value;
    const filteredEvents = filterEvents(searchQuery);
    renderEvents(filteredEvents);
}

/**
 * Handles register button click (UI only, no backend functionality)
 * @param {string} eventName - Name of the event to register for
 */
function handleRegister(eventName) {
    alert(`Thank you for your interest in "${eventName}"!\n\nRegistration functionality will be available soon.`);
}

/**
 * Smooth scroll to section when navigation links are clicked
 */
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 76; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
}

/**
 * Updates active navigation link based on scroll position
 */
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Initializes the application when DOM is loaded
 */
function init() {
    // Render all events on page load
    renderEvents(eventsData);
    
    // Setup search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keyup', handleSearch);
        searchInput.addEventListener('change', handleSearch);
    } else {
        console.error('Search input element not found!');
    }
    
    // Setup navigation
    setupNavigation();
    updateActiveNavOnScroll();
    
    // Add fade-in animation to hero section elements
    const heroElements = document.querySelectorAll('.hero-section h1, .hero-section p, .hero-section .btn');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
}

// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}


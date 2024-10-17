// Function to calculate and display countdown
function countdown(eventDate) {
    const eventTime = new Date(eventDate).getTime(); // Get event date in milliseconds
    
    const interval = setInterval(function () {
        const currentTime = new Date().getTime(); // Get current time in milliseconds
        const timeRemaining = eventTime - currentTime; // Time remaining until event

        // Calculating days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display countdown
        console.log(`Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`);

        // If countdown is over, stop the interval
        if (timeRemaining < 0) {
            clearInterval(interval);
            console.log("Event has started!");
        }
    }, 1000); // Update every second
}

// Example usage: Enter your event date in "YYYY-MM-DD HH:MM:SS" format
const userEventDate = prompt("Enter the event date (YYYY-MM-DD HH:MM:SS):");
countdown(userEventDate);

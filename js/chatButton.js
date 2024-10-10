// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Handle chat button click for yab (first chat button)
    document.querySelector('.chat').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        event.stopPropagation(); // Prevent click from affecting other elements

        // Open the chat in a new browser tab or window
        window.open('https://www2.cbox.ws/box/?boxid=2388565&boxtag=4xncwv', '_blank');
    });
});
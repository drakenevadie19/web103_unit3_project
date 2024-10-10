// Events API
const EventsAPI = () => {
    // Get all events
    getAllEvents = async () => {
        try {
            const response = await fetch('/events');
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    }
};

export default EventsAPI; 
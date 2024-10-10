// Locations API
const LocationsAPI = () => {
    // Get all locations
    getAllLocations = async () => {
        try {
            const response = await fetch('/api/locations');
            if (!response.ok) {
                throw new Error('Failed to fetch locations');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
        }
    },

    // Get location by ID
    getLocationById = async (id) => {
        try {
            const response = await fetch(`/locations/${name}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch location with id ${name}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching location with id ${name}:`, error);
            throw error;
        }
    }
};

export default LocationsAPI;
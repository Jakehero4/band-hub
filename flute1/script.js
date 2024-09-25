document.addEventListener('DOMContentLoaded', () => {
    const resourceList = document.getElementById('resource-list');

    // Fetch the JSON file from the root directory
    fetch('../resources.json')
        .then(response => response.json())
        .then(data => {
            // Retrieve the flute resources
            const fluteResources = data.flute;

            // Check if flute resources exist
            if (fluteResources && fluteResources.length > 0) {
                fluteResources.forEach(resource => {
                    // Create a list item for each resource
                    const resourceItem = document.createElement('div');
                    resourceItem.classList.add('resource-item');
                    
                    const resourceLink = document.createElement('a');
                    resourceLink.href = resource.file;
                    resourceLink.textContent = resource.name;

                    resourceItem.appendChild(resourceLink);
                    resourceList.appendChild(resourceItem);
                });
            } else {
                resourceList.textContent = 'No resources available for Flute.';
            }
        })
        .catch(error => {
            console.error('Error fetching resources:', error);
            resourceList.textContent = 'Error loading resources.';
        });
});

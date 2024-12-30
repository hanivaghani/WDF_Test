document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        { src: 'images/beachview.jpeg', type: 'beach', title: 'Beach View' },
        { src: 'images/scubadiving.jpeg', type: 'beach', title: 'Scuba Diving' },
        { src: 'images/forest.jpeg', type: 'nature', title: 'Beautiful Forest' },
        { src: 'images/cityview.jpeg', type: 'city', title: 'City View' },
        { src: 'images/mountainview.jpeg', type: 'nature', title: 'Mountain View' },
        { src: 'images/streetnight.jpeg', type: 'city', title: 'Street at Night' }
    ];

    const gallery = document.getElementById('gallery');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function createPhotoElement(photo) {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        photoDiv.setAttribute('data-type', photo.type);

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.title;
        img.loading = 'lazy';

        const title = document.createElement('p');
        title.textContent = photo.title;

        photoDiv.appendChild(img);
        photoDiv.appendChild(title);
        return photoDiv;
    }

    function displayPhotos(filter = 'all') {
        gallery.innerHTML = '';
        photos.forEach(photo => {
            if (filter === 'all' || photo.type === filter) {
                const photoElement = createPhotoElement(photo);
                gallery.appendChild(photoElement);
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            displayPhotos(filter);
        });
    });

    // Initial display of all photos
    displayPhotos();
});
function scrollToSlide(slideId) {
    const slide = document.getElementById(slideId);
    slide.scrollIntoView({ behavior: 'smooth' });
}

function scrollHorizontal(direction, containerId) {
    const container = document.getElementById(containerId);
    const scrollAmount = container.clientWidth;
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

let isScrolling;
const container = document.querySelector('.container');

container.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        const sections = document.querySelectorAll('.container > .section');
        let closestSection = sections[0];
        let closestDistance = Math.abs(container.scrollTop - closestSection.offsetTop);

        sections.forEach(section => {
            const distance = Math.abs(container.scrollTop - section.offsetTop);
            if (distance < closestDistance) {
                closestSection = section;
                closestDistance = distance;
            }
        });

        closestSection.scrollIntoView({ behavior: 'smooth' });
        updateDots();
    }, 100); // Adjust the delay as needed
});

/**
 * The following function has the affect to go to either slide 2 or three, which is not actually needed. 
 */
// const horizontalContainers = document.querySelectorAll('.horizontal-container');
// horizontalContainers.forEach(horizontalContainer => {
//     horizontalContainer.addEventListener('scroll', () => {
//         window.clearTimeout(isScrolling);

//         isScrolling = setTimeout(() => {
//             const slides = horizontalContainer.querySelectorAll('.slide');
//             let closestSlide = slides[0];
//             let closestDistance = Math.abs(horizontalContainer.scrollLeft - closestSlide.offsetLeft);

//             slides.forEach(slide => {
//                 const distance = Math.abs(horizontalContainer.scrollLeft - slide.offsetLeft);
//                 if (distance < closestDistance) {
//                     closestSlide = slide;
//                     closestDistance = distance;
//                 }
//             });

//             closestSlide.scrollIntoView({ behavior: 'smooth' });
//             updateDots();
//         }, 100); // Adjust the delay as needed
//     });
// });

const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideId = dot.getAttribute('data-slide');
        scrollToSlide(slideId);
    });
});

function updateDots() {
    const sections = document.querySelectorAll('.container > .section');
    let activeSection = sections[0];
    let closestDistance = Math.abs(container.scrollTop - activeSection.offsetTop);

    sections.forEach(section => {
        const distance = Math.abs(container.scrollTop - section.offsetTop);
        if (distance < closestDistance) {
            activeSection = section;
            closestDistance = distance;
        }
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-slide') === activeSection.querySelector('.slide').id) {
            dot.classList.add('active');
        }
    });
}

function showInfo(profileId) {
    // Hide all profile info
    const infos = document.querySelectorAll('.info');
    infos.forEach(info => info.style.display = 'none');

    // Show the selected profile info
    document.getElementById(profileId).style.display = 'block';
}

updateDots(); // Initialize dots on page load


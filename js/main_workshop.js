const mworkshopcard = [
    {
        workshopname: 'DeCode Devs',
        workshopimg: 'devs.jpg',
        workshoplink: '#',
        date: '2024-11-20',
    },
    {
        workshopname: 'Fetch.AI Hackathon',
        workshopimg: 'fetchai.jpg',
        workshoplink: '#',
        date: '2013-09-18',
    },
    {
        workshopname: 'Hack4India',
        workshopimg: 'hfi.jpg',
        workshoplink: '#',
        date: '2022-06-30', // Corrected the date format to 'YYYY-MM-DD
    },
    {
        workshopname: 'Web3Sangam',
        workshopimg: 'hfi.jpg',
        workshoplink: '#',
        date: '2023-01-12',
    },
];

function display_upcoming_events() {
    const eventsContainer = document.querySelector('.workrow');
    eventsContainer.innerHTML = '';
    const today = new Date();
    const upcomingEvents = mworkshopcard.filter(event => new Date(event.date) >= today);
    upcomingEvents.forEach(event => {
        const work = document.createElement('div');
        work.className = 'workcolums';
        const imgurl = 'workshop/images/' + event.workshopimg;
        work.innerHTML = `
            <a href="${event.workshoplink}" class="sess_card">
                <div class="sesscardstext">${event.workshopname}</div>
                <div class="sesscardsimg">
                    <img class="sess_img" src="${imgurl}" alt="${event.workshopname}">
                </div>
            </a>`;
        eventsContainer.appendChild(work);
    });
}

function display_past_events() {
    const eventsContainer = document.querySelector('.workrow');
    eventsContainer.innerHTML = '';
    const today = new Date();
    const pastEvents = mworkshopcard.filter(event => new Date(event.date) < today);
    pastEvents.forEach(event => {
        const work = document.createElement('div');
        work.className = 'workcolums';
        const imgurl = 'workshop/images/' + event.workshopimg;
        work.innerHTML = `
            <a href="${event.workshoplink}" class="sess_card">
                <div class="sesscardstext">${event.workshopname}</div>
                <div class="sesscardsimg">
                    <img class="sess_img" src="${imgurl}" alt="${event.workshopname}">
                </div>
            </a>`;
        eventsContainer.appendChild(work);
    });
}

// Initially display upcoming events when the page loads
document.addEventListener('DOMContentLoaded', () => {
    display_upcoming_events();
});

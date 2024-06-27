const mworkshopcard = [
    {
        workshopname:'DeCode Devs',
        workshopimg:'devn.jpeg',
        workshoplink:'#' //workshop/git and github/git-and-github.html
        
    },{
        workshopname:'Fetch.AI Hackathon',
        workshopimg:'fetchai.jpg',
        workshoplink:'workshop/event2.html'
    },{
        workshopname:'Hack4India',
        workshopimg:'hfi.jpg',
        workshoplink:'workshop/event3.html'
    },{
         workshopname:'Web3Sangam',
         workshopimg:'web3.jpg',
         workshoplink:'workshop/event4.html'
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

const workshopcard = [
    {
        workshopname:'DeCode Devs',
       workshopimg:'devs.jpg',
       workshoplink:'event1.html' //workshop/git and github/git-and-github.html
   },{
       workshopname:'Fetch.AI Hackathon',
       workshopimg:'fetchai.jpg',
       workshoplink:'event2.html'
   },{
       workshopname:'Hack4India',
       workshopimg:'hfi.jpg',
       workshoplink:'event3.html'
   },{
        workshopname:'Web3Sangam',
       workshopimg:'hfi.jpg',
       workshoplink:'event4.html'
   },
];

var workRow = document.querySelectorAll('.workrow')[0];
for(let i=0;i<workshopcard.length;i++){
    let work=document.createElement('div');
    work.className='workcolums';
    let imgurl;
  
        imgurl= 'images/' + workshopcard[i].workshopimg;
        work.innerHTML='<a href="'+workshopcard[i].workshoplink + '" class="sess_card"><div class="sesscardstext">'+workshopcard[i].workshopname+'</div><div class="sesscardsimg"><img class="sess_img" src="'+imgurl+'" alt="'+workshopcard[i].workshopname+'"></div></a>';
    
workRow.append(work);    
}

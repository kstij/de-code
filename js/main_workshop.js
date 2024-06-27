const mworkshopcard = [
    {
         workshopname:'DeCode Devs',
        workshopimg:'devs.jpg',
        workshoplink:'#' //workshop/git and github/git-and-github.html
    },{
        workshopname:'Fetch.AI Hackathon',
        workshopimg:'fetchai.jpg',
        workshoplink:'#'
    },{
        workshopname:'Hack4India',
        workshopimg:'hfi.jpg',
        workshoplink:'#'
    },{
         workshopname:'Web3Sangam',
        workshopimg:'hfi.jpg',
        workshoplink:'#'
    },
];

var mworkRow = document.querySelectorAll('.workrow')[0];
for(let i=0;i<mworkshopcard.length;i++){
    let work=document.createElement('div');
    work.className='workcolums';
    let imgurl;
   
        imgurl= 'workshop/images/' + mworkshopcard[i].workshopimg;
        work.innerHTML='<a href="'+mworkshopcard[i].workshoplink +' "class="sess_card"><div class="sesscardstext">'+mworkshopcard[i].workshopname+'</div><div class="sesscardsimg"><img class="sess_img" src="'+imgurl+'" alt="'+mworkshopcard[i].workshopname+'"></div></a>';
    
mworkRow.append(work);    
}

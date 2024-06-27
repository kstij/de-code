var teamMember = [{
        name: 'Rahul Khinchi',
        image: './images/Team/t1.jpg',
        linkedin: 'https://www.linkedin.com/in/rahulkhinchi03/',
        portfolio: 'https://linktr.ee/rahhul.k7'
    }, {
        name: 'Harsh Trivedi',
        image: './images/Team/harsh.jpg',
        linkedin: 'https://www.linkedin.com/in/harsh-trivedi03/',
        portfolio: 'https://github.com/Harsh-Trivedi03'
    },
    {
        name: 'Kshitij Varma',
        image: './images/Team/Kshitij-Varma_Tech.jpg',
        linkedin: 'https://www.linkedin.com/in/kshitijvarma21/',
        portfolio: 'https://kshitijvarma.me/'
    }, {
        name: 'Shiv Vishen',
        image: './images/Team/shiv.jpg',
        linkedin: 'https://www.linkedin.com/in/shivvishen/',
        portfolio: 'https://github.com/shvshn'
    },
    {
        name: 'Reedham Pujara',
        image: './images/Team/reedham.jpg',
        linkedin: 'https://www.linkedin.com/in/reedham-pujara/',
        portfolio: 'https://github.com/Reedham20'
    }, {
        name: 'Sneha Singh',
        iimage: './images/Team/sneha.jpg',
        linkedin: 'https://www.linkedin.com/in/sneha-singh-636578273/',
        portfolio: 'https://github.com/Sneha6003'
    },
    {
        name: 'Sahil Tiwari',
        image: './images/Team/sahil.jpg',
        linkedin: 'https://www.linkedin.com/in/sahil-tiwari-8a166926b',
        portfolio: 'https://github.com/sahil-1610'
    }, {
        name: 'Urmit Tajwala',
        image: './images/Team/urmit.jpg',
        linkedin: 'https://www.linkedin.com/in/urmit-tajwala-5296a1221/',
        portfolio: 'https://github.com/URMIT18'
    }, {
        name: 'Kenil Kavar',
        image: './images/Team/kenil.jpg',
        linkedin: 'https://www.linkedin.com/in/kenil-kavar',
        portfolio: 'https://github.com/Kenil-kavar'
    }, {
        name: 'Nidhi Dhattani',
        image: './images/Team/nidhi.jpg',
        linkedin: 'http://www.linkedin.com/in/nidhidattani',
        portfolio: 'https://github.com/nidhidattani13'
    }, {
        name: 'Vidya Sinha',
        image: './images/Team/vidya.jpg',
        linkedin: 'https://www.linkedin.com/in/vidya-sinha-88715224b?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BH%2FzgEISCQm62Dpve%2FUuJJQ%3D%3D',
        portfolio: 'https://github.com/VidyaSinha'
    }, {
        name: 'Vaibhav Sharma',
        image: './images/Team/vaibhav.jpg',
        linkedin: 'https://www.linkedin.com/in/vaibhav-sharma-84606b256/',
        portfolio: 'https://github.com/vaibhavvext'
    }, {
        name: 'Khushal Khandelwal',
        image: './images/Team/khushal.jpg',
        linkedin: 'https://www.linkedin.com/in/khushal-khandelwal/',
        portfolio: 'https://khushalkhandelwal.com/'
    } , {
        name: 'Yagnesh Patoriya',
        image: './images/Team/yagnesh.jpg',
        linkedin: 'https://www.linkedin.com/in/yagnesh-patoriya',
        portfolio: 'https://github.com/yaggit'
    } , {
        name: 'Nishi Panchal',
        image: './images/Team/nishi.jpg',
        linkedin: 'https://www.linkedin.com/in/nishi-panchal-a09b64255',
        portfolio: 'https://github.com/nishi1403'
    } , {
        name: 'Pratik Dungano',
        image: './images/Team/pratik.jpeg',
        linkedin: 'https://www.linkedin.com/in/pratik-dungano-9a6892250/',
        portfolio: 'https://github.com/Pratik-Dungano'
    } , {
        name: 'Parv Parreek',
        image: './images/Team/Parv.png',
        linkedin: 'https://www.linkedin.com/in/parvpareek',
        portfolio: 'https://parvpareek.github.io/'
    } , {
        name: 'Virengiri Goswami',
        image: './images/Team/Virengiri.jpg',
        linkedin: 'https://www.linkedin.com/in/virengiri-goswami',
        portfolio: 'https://github.com/Veerengiri'
    } , {
        name: 'Nishtha Pitroda',
        image: './images/Team/nishtha.jpeg',
        linkedin: 'https://www.linkedin.com/in/nishthapitroda/',
        portfolio: 'https://portfolio-website-nualjr7xj-nishtha-pitrodas-projects.vercel.app/'
    } , {
        name: 'Dinesh Talwadkar',
        image: './images/Team/dinesh.png',
        linkedin: 'https://www.linkedin.com/in/dineshtalwadker/',
        portfolio: 'https://dinxsh.xyz/'
    } , {
        name: 'Darshan Gupta',
        image: './images/Team/darshan.png',
        linkedin: 'https://www.linkedin.com/in/darshanguptatech/',
        portfolio: 'https://bento.me/darshanguptadesign'
    }
];


var contributors1 = document.querySelectorAll('.contributors')[0];
var contributors2 = document.querySelectorAll('.contributors')[1];

for (let i = 0; i < teamMember.length; i++) {
    let divCreate = document.createElement('div');
    divCreate.className = 'contri_box';
    divCreate.innerHTML = '<div class="contri-card"><div class="contri-card-inner"><div class="contri-card-front"><img src="' + teamMember[i].image + '" alt="' + teamMember[i].name + '" /></div><div class="contri-card-back"><div style="position:relative;transform-style:preserve-3d;"><span>' + teamMember[i].name + '</span><div> <li><a href="' + teamMember[i].linkedin + '" target="_blank"><i class="fab fa-linkedin"></i></a></li><li><a href="' + teamMember[i].portfolio + '" target="_blank"><i class="fas fa-link"></i></a></li></div></div></div></div></div>';
    contributors1.append(divCreate);
}

for (let i = 0; i < contriMember.length; i++) {
    let divCreate = document.createElement('div');
    divCreate.className = 'contri_box';
    divCreate.innerHTML = '<div class="contri-card"><div class="contri-card-inner"><div class="contri-card-front"><img src="' + contriMember[i].image + '" alt="' + contriMember[i].name + '" /></div><div class="contri-card-back"><div><span>' + contriMember[i].name + '</span><div> <li><a href="' + contriMember[i].github + '" target="_blank"><i class="fab fa-linkedin style="color: white;"></i></a></li></div></div></div></div></div>';
    contributors2.append(divCreate);
}
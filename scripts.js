let data1 = {
    photo: 'images/foci.jpg',
    title: 'Labdarúgás',
    description: 'A labdarúgás az egyik legnépszerűbb sportág a Földön.'
};
let data2 = {
    photo: 'images/atletika.jpg',
    title: 'Atlétika',
    description: 'Az atlétika az egyik legnépszerűbb sportág a Földön.'
};
let data3 = {
    photo: 'images/jegkorong.jpg',
    title: 'Jégkorong',
    description: 'A jégkorong az egyik legnépszerűbb sportág a Földön.'
};
let data4 = {
    photo: 'images/kosarlabda.jpg',
    title: 'Kosárlabda',
    description: 'A kosárlabda az egyik legnépszerűbb sportág a Földön.'
};


let currentPhoto = 1;

let imagesData = [data1, data2, data3, data4];

$('#photo').attr('src', imagesData[currentPhoto].photo);

$('#photo-title').

$('#photo-description').

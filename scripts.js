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

let imagesData = [data1, data2, data3, data4];



let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
}

loadPhoto(currentPhoto);

let currentTitle = 0;
let loadTitle = (titleNumber) => {
    $('#photo-title').text(imagesData[titleNumber].title);
}
loadTitle(currentTitle);


let currentDesc = 0;
let loadDesc = (descNumber) => {
    $('#photo-description').text(imagesData[descNumber].description);
}
loadDesc(currentDesc);



$('#left-arrow').click(() => {
    if(currentPhoto > 0) {
      currentPhoto--;  
    }
    loadPhoto(currentPhoto);
    if(currentTitle > 0) {
        currentTitle--;
    }
    loadTitle(currentTitle);
    if(currentDesc > 0) {
        currentDesc--;
    }
    loadDesc(currentDesc);
  });

$('#right-arrow').click(() => {
    if(currentPhoto < 3) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
    if(currentTitle < 3) {
        currentTitle++;
    }
    loadTitle(currentTitle);
    if(currentDesc < 3) {
        currentDesc++;
    }
    loadDesc(currentDesc);
})








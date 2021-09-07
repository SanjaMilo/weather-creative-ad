// Geo Location API: https://ipgeolocation.io/
// Open Weather API: https://openweathermap.org/api/one-call-api#current

// FETCH DATA

async function fetchData (url) {
	try {
		let res = await fetch(url);
		let data = await res.json();
        console.log(data);
        return data;

	} catch (error) {
		console.log(error);
	}
};

// CHANGE BACKGROUND IMAGE 

let i = 0; // start index in the array of images 

function slideImages(arr) {
    bgCreative.style.backgroundImage = `url(${arr[i].imgUrl})`;
    bgCreative.style.opacity = '1';  
    // go to next image in the array
    i++;
    // back to first image in the array
    if ( i >= arr.length) {
        i = 0
    };
};

function onInterval(slider, imgArr) {
    setInterval(function() {
        slider(imgArr);
    }, 5000);

    slider(imgArr);
};

// Using switch 

function changeBGImage(val) {

    switch (true) {

        case val < 15 : 
            onInterval(slideImages, imagesCold);
            break;
        case val >= 15 && val <= 23 :
            onInterval(slideImages, imagesWarm);
            break;
        case val > 23 : 
            onInterval(slideImages, imagesHot);
            break;
        default: 
            return;
    }
};

// Using if else 

// function changeBGImage(val) {
//     if (val < 15) {
//         onInterval(slideImages, imagesCold)

//     } else if (val >= 15 && val <= 23) { 
//         onInterval(slideImages, imagesWarm)

//     } else {
//         onInterval(slideImages, imagesHot)
//     }
// };




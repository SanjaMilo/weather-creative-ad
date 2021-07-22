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

function changeBGImage(val) {
    if (val < 15) {
        setInterval(function() {
            slideImages(imagesCold) 
        }, 5000);
    
        slideImages(imagesCold);

    } else if (val >= 15 && val <= 23) {
        setInterval(function() {
            slideImages(imagesWarm)
        }, 5000);

        slideImages(imagesWarm); 

    } else {
        setInterval(function(){
            slideImages(imagesHot)
        }, 5000); 

        slideImages(imagesHot);
    }
};

let i = 0; // start index in the array of images 

function slideImages (arr) {
    bgCreative.style.backgroundImage = `url(${arr[i].imgUrl})`;
    bgCreative.style.opacity = '1';  
    // go to next image in the array
    i++;
    // back to first image in the array
    if ( i >= arr.length) {
        i = 0
    };
};



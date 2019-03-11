//query form
const form = document.getElementById('query-form');

//text Input field
const query = document.getElementById('query');

const list = document.getElementById('list-data');


//set onsubmit
form.onsubmit = function (event) {
    event.preventDefault();

    //get value in input field
    const queryTerm = query.value;
    console.log(queryTerm);
}
fetch('http://api.tumblr.com/v2/tagged?tag=gif&api_key=mVg3nhSchGWTKJ4fBdXun0dWPVeJ5COyQnI2HYD9DylGxBTbRm')
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {


        const items = result.response;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            if (items.photos != undefined) {
                const imgSrc = item.photos[0].original_size.url;

                const img = document.createElement('img');
                img.src = imgSrc;

                const li = document.createElement('li');
                li.appendChild(img)
                //li.appendchild
                //li.innerHTML = imgSrc;

                list.appendChild(li);
            }


        }
    })
console.log("Let's get this party started!");
const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const searchWord = document.querySelector("#Search-Word");
const searchBtn = document.querySelector("#Search-Giphy");
const removeBtn = document.querySelector("#Remove-Images");
const gifs = document.querySelector("#gifs");

searchBtn.addEventListener("click", getGif);
removeBtn.addEventListener("click", e => {
	e.preventDefault();
	gifs.innerText = "";
});

async function getGif(e){
	e.preventDefault();
	const q = searchWord.value;
	if(q === ''){
		alert("No value entered!");
		return;
	}
	searchWord.value = "";

	const response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { api_key , q} });
	
	addGif(response);
}

function addGif(res){
	const random = Math.floor(Math.random() * res.data.data.length);
	const randomImg = res.data.data[random].images.original.url;

	//Create and append elements if there is a valid result
	if (randomImg){
		const imgGif = document.createElement('img');
		imgGif.setAttribute("src", randomImg);
		gifs.appendChild(imgGif);	
	}	
}
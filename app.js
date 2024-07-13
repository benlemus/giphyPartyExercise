console.log("Let's get this party started!");

const giphContainer = document.querySelector(".giphContainer");
const searchInput = document.querySelector("#searchInput");
const form = document.querySelector("#searchForm");
const removeBtn = document.querySelector("#removeBtn");

async function getGiphyData(params) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/random", params);

  console.log(res.data);
  createGiph(res.data);
}
function createGiph(res) {
  let newImg = document.createElement("img");
  newImg.src = res.data.images.original.url;
  giphContainer.append(newImg);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let searchVal = searchInput.value;

  let params = {
    params: { api_key: "vMHMRBYzSyUpycKrCDkkTJfxGeKFoilO", tag: searchVal },
  };
  getGiphyData(params);
});

$("#removeBtn").on("click", function () {
  $(".giphContainer").empty();
});

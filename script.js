
const accessKey="dHa1tvJB7pU_FckAsDZ1IAmQztxEbKWYuFxkqkulXho";
const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchresult=document.getElementById("search-result");
const showmorebtn=document.getElementById("show-more-btn");


let keyword=" ";
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword} &client_id=${accessKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();


//   means we can get cat after we view bird without refreshing the page again
    if(page===1){
        searchresult.innerHTML="";
    }

   const results=data.results;

 


   results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    // open link in new tabh
    imageLink.target="_blank"
    imageLink.appendChild(image);
    searchresult.appendChild(imageLink);

   })
   showmorebtn.style.display="block";
}

searchForm.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    page=1;
    searchImages();

});

showmorebtn.addEventListener("click" ,()=>{
      page++;
      searchImages();
})

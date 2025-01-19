let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    
    let image = document.querySelector(".image");
    let link = await getImage();

    image.setAttribute("src",link);
    
})

async function getImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(e){
        console.log("Error - ",e);
    }
}
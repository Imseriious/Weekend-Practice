document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector(".tile").addEventListener("click", order());
})

let order = () => {
    let xoro = ["x","o","x","o","x","o","x","o","x"];
    for (let i = 0; i<xoro.length; i++){
        if (i = xoro["x"]){
            
            console.log("its x")
        } else if (i = "o"){
            
            console.log("its o")
        }
    
    }
}

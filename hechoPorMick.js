let pe = document.getElementsByClassName("pedir");
  
for(let x = 0; x < pe.length; x++){
  pe[x].addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
})
}
document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});
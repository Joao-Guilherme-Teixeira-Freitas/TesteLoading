function showLoading() {
    const div = document.createElement('div');
    div.classList.add("loading", "centralize");
    

    const label = document.createElement("label");
    label.innerText = "Caregando...";

    div.appendChild(label);
    
    document.body.appendChild(div)
}

function hideloading () {
   const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
   }

}
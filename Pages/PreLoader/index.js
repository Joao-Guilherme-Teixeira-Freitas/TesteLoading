function login() {
    showLoading();


    //Confirmação de login por parte de authentication...
   
   
    (response => {
        hideloading();
    })
    (error => {
        hideloading();
    })
}
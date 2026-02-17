function callBackend() {
    fetch("https://hello-deploy-backend.onrender.com/")
        .then(res => res.json())
        .then(data => {
            document.getElementById("response").innerText = data.message;
        })
        .catch(err => {
            document.getElementById("response").innerText = "Error connecting to backend";
        });
}

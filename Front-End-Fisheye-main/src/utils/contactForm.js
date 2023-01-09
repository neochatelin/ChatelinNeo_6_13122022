function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.querySelector('.contact_button').onclick((e)=>{e.preventDefault()})
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
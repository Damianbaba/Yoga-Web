


document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')



    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        }
        else {
            nav.classList.remove('shadow-bg')
        }
    }
    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
    window.addEventListener('scroll', addShadow)
})

document.getElementById("readMoreBtn").addEventListener("click", function () {
    document.getElementById("bioModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("bioModal").style.display = "none";
});

document.getElementById("exitModal").addEventListener("click", function () {
    document.getElementById("bioModal").style.display = "none";
});

// Close the modal when clicking outside the modal content or pressing the main page button
document.getElementById("modalOverlay").addEventListener("click", function (e) {
    if (e.target === this) {
        document.getElementById("bioModal").style.display = "none";
    }
});



function switchForm(role) {
    if (role == "student") {
        document.getElementById("student-btn").classList.remove("active");
        document.getElementById("abiturient-btn").classList.remove("active");
        document.getElementById("guest-btn").classList.remove("active");

        document.getElementById("student-btn").classList.add("active");

        document.getElementById("student").style.display = "block";
        document.getElementById("abiturient").style.display = "none";
        document.getElementById("guest").style.display = "none";
    } else if (role == "abiturient") {
        document.getElementById("student-btn").classList.remove("active");
        document.getElementById("abiturient-btn").classList.remove("active");
        document.getElementById("guest-btn").classList.remove("active");

        document.getElementById("abiturient-btn").classList.add("active");

        document.getElementById("student").style.display = "none";
        document.getElementById("abiturient").style.display = "block";
        document.getElementById("guest").style.display = "none";
    } else if (role == "guest") {
        document.getElementById("student-btn").classList.remove("active");
        document.getElementById("abiturient-btn").classList.remove("active");
        document.getElementById("guest-btn").classList.remove("active");

        document.getElementById("guest-btn").classList.add("active");

        document.getElementById("student").style.display = "none";
        document.getElementById("abiturient").style.display = "none";
        document.getElementById("guest").style.display = "block";
    }
}
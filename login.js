function switchForm(role) {
    if (role == "student") {
        $('#student-btn')[0].classList.remove("active");
        $('#abiturient-btn')[0].classList.remove("active");
        $('#guest-btn')[0].classList.remove("active");

        $('#student-btn')[0].classList.add("active");

        $('#student')[0].style.display = "block";
        $('#abiturient')[0].style.display = "none";
        $('#guest')[0].style.display = "none";
    } else if (role == "abiturient") {
        $('#student-btn')[0].classList.remove("active");
        $('#abiturient-btn')[0].classList.remove("active");
        $('#guest-btn')[0].classList.remove("active");

        $('#abiturient-btn')[0].classList.add("active");

        $('#student')[0].style.display = "none";
        $('#abiturient')[0].style.display = "block";
        $('#guest')[0].style.display = "none";
    } else if (role == "guest") {
        $('#student-btn')[0].classList.remove("active");
        $('#abiturient-btn')[0].classList.remove("active");
        $('#guest-btn')[0].classList.remove("active");

        $('#guest-btn')[0].classList.add("active");

        $('#student')[0].style.display = "none";
        $('#abiturient')[0].style.display = "none";
        $('#guest')[0].style.display = "block";
    }
}
let users = [];
let courses = [];
let labs = [];
let forumPosts = [];
let feedbacks = [];

function manageUsers() {
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const role = document.getElementById("user-role").value;

    users.push({ name, email, role });
    displayUsers();
}

function displayUsers() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = users.map(user => `<p>${user.name} (${user.role}) - ${user.email}</p>`).join("");
}

function manageCourses() {
    const title = document.getElementById("course-title").value;
    const description = document.getElementById("course-description").value;

    courses.push({ title, description });
    displayCourses();
}

function displayCourses() {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = courses.map(course => `<p>${course.title}: ${course.description}</p>`).join("");
}

function manageLabs() {
    const name = document.getElementById("lab-name").value;
    const instructions = document.getElementById("lab-instructions").value;

    labs.push({ name, instructions });
    displayLabs();
}

function displayLabs() {
    const labList = document.getElementById("lab-list");
    labList.innerHTML = labs.map(lab => `<p>${lab.name}: ${lab.instructions}</p>`).join("");
}

function submitPost() {
    const postContent = document.getElementById("forum-post").value;
    if (postContent.trim()) {
        forumPosts.push(postContent);
        const forum = document.getElementById("forum");
        forum.innerHTML = forumPosts.map(post => `<p>${post}</p>`).join("");
        document.getElementById("forum-post").value = "";
    } else {
        alert("Post cannot be empty!");
    }
}

function submitFeedback(event) {
    event.preventDefault();
    const feedbackContent = event.target.querySelector("textarea").value;
    feedbacks.push(feedbackContent);
    const feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = feedbacks.map(feedback => `<p>${feedback}</p>`).join("");
    event.target.reset();
}

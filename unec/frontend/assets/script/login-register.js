const name_input = document.getElementById("name_input");
const surname_input = document.getElementById("surname_input");
const mail_register_input = document.getElementById("mail_register_input");
const linkedin_input = document.getElementById("linkedin_input");
const password_register_input = document.getElementById("password_register_input");
const confirm_input = document.getElementById("confirm_input");

const check_input = document.getElementById("check_input");

const mail_login_input = document.getElementById("mail_login_input");
const password_login_input = document.getElementById("password_login_input");

const fullnameRegex = /^[a-zA-Z\- ]+$/;
const mailRegex = /^[a-zA-Z0-9._%+-]+@unec\.edu\.az$/;
const linkedInRegex = /^www\.linkedin\.com\/in\/[a-zA-Z0-9-]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const register_btn = document.getElementById("register_btn");
const login_btn = document.getElementById("login_btn");
const sign_button = document.getElementById("sign_button");
const logout = document.getElementById("logout");

if (register_btn) {
    register_btn.onclick = (event) => {
        event.preventDefault();

        if (fullnameRegex.test(name_input.value) &&
            fullnameRegex.test(surname_input.value) &&
            mailRegex.test(mail_register_input.value) &&
            linkedInRegex.test(linkedin_input.value) &&
            passwordRegex.test(password_register_input.value) &&
            password_register_input.value === confirm_input.value) {

            let user = {
                name: name_input.value,
                surname: surname_input.value,
                mail: mail_register_input.value,
                linkedin: linkedin_input.value,
                password: password_register_input.value
            };

            localStorage.setItem('user', JSON.stringify(user));

            document.location = "login-student.html";
        } else {
            alert("Please fill out all fields correctly.");
        }
    };
}

if (login_btn) {
    login_btn.onclick = (event) => {
        event.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser &&
            mail_login_input.value === storedUser.mail &&
            password_login_input.value === storedUser.password) {

            sessionStorage.setItem('currentUser', JSON.stringify(storedUser));

            document.location = "index.html";
        } else {
            alert("Invalid email or password.");
        }
    };
}

function showUserProfile() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
        sign_button.style.display = 'none';

        const user_profile_details = document.getElementById("user-profile-details");
        if (user_profile_details) {
            user_profile_details.style.display = "flex";
        }
    }
}

showUserProfile();

if (logout) {
    logout.onclick = () => {
        sessionStorage.removeItem('currentUser');
        document.location = "index.html";
    };
}
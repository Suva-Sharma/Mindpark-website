// To hide the sidebar with cross button
const hideSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

//To show the sidebar with menu button
const showSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

//Sidebar visibility
let sidebarVisible = false;

// Show sidebar and update the state
const handleShowSideBar = () => {
    showSideBar();
    sidebarVisible = true;
}

// Hide sidebar and update the state
const handleHideSideBar = () => {
    hideSideBar();
    sidebarVisible = false;
}

// Attach event listeners to the buttons
document.querySelector('.menu-button a').addEventListener('click', handleShowSideBar);
document.querySelector('.cross-button a').addEventListener('click', handleHideSideBar);

// Close the sidebar on window resize
window.addEventListener('resize', () => {
    if (sidebarVisible) {
        handleHideSideBar();
    }
});

//Contact Us section

let data = {
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
};

const handleInput = (event) => {
    data = {
        ...data,
        [event.target.name]: event.target.value,
    };
}


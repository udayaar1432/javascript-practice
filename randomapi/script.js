document.addEventListener("DOMContentLoaded", () => {
    const generateUserButton = document.getElementById("generateUser");
    const userDetailsDiv = document.getElementById("userDetails");
    const loadingMessage = document.getElementById("loadingMessage");

    generateUserButton.addEventListener("click", () => {
        loadingMessage.style.display = "block";
        userDetailsDiv.innerHTML = "";

        fetch("https://randomuser.me/api/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const user = data.results[0];
                const fullName = `${user.name.first} ${user.name.last}`;
                const email = user.email;
                const picture = user.picture.large;

                const userHTML = `
                    <img src="${picture}" alt="${fullName}">
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                `;

                userDetailsDiv.innerHTML = userHTML;
            })
            .catch((error) => {
                console.error("Error fetching random user data:", error);
                userDetailsDiv.innerHTML = "Failed to fetch user data.";
            })
            .finally(() => {
                loadingMessage.style.display = "none";
            });
    });
});


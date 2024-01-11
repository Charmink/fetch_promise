import "../index.css";
import IMAGE from "../assets/wojak.png";

const renderImage = () => {
    const image = document.createElement("img");
    image.className = "js-image";
    image.src = IMAGE;
    document.body.append(image);
}


const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

const dataContainer = document.querySelector("#data-container");


const getUsers = async () => {
    try {
        toggleLoader()
        const response = await fetch(GET_USERS_URL);
        if (!response.ok) {
            throw Error("Ошибка загрузки данных")
        }
        return await response.json();
    } catch(error) {
        console.error(error);
    } finally {
        toggleLoader()
    }
}

const toggleLoader = () => {
    const loader = document.querySelector("#loader");
    if (loader.hasAttribute("hidden")) {
        console.log(loader)
        loader.removeAttribute("hidden");
    } else {
        loader.setAttribute("hidden", "hidden");
    }
}

const renderUser = (user) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.innerText = user.name;
    li.append(a);
    dataContainer.append(li);
}

getUsers()
    .then(users => {
        users.forEach(element => {
            renderUser(element)
        });
    });

renderImage();

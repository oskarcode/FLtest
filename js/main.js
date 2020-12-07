const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");


const client_id = 'Iv1.a28d83270a182327';
const client_secret = 'be2f8d7e75a45ef8e174dfed94db5b868bc1b194';



const awaitFetch = async (url) => {
    const api_call = await fetch(url);
    const data = await api_call.json();
    return { data }
}

const ShowData = async () => {
    const user = 'mosh-hamedani'
    const user_url = `https://api.github.com/users/${user}?client_id=${client_id} & client_secret=${client_secret}`
    let res = await awaitFetch(user_url)
    console.log(res)

    var followers_url = res.data.followers_url
    followers_url += '?per_page=1000&page=1'
    console.log(followers_url)
    let res2 = await awaitFetch(followers_url)
    console.log(res2)
    console.log(res2.data)
    const followers = res2.data
    for (i in followers) {
        // console.log(followers[i].followers_url);
        console.log(followers[i].login);
        nameContainer.innerHTML += `name: ${followers[i].login}<br>`
    }
}
window.onload = () => {
    const searchButton = document.querySelector('#mysearch');
    searchButton.addEventListener('click', () => {
        ShowData();
    })
}
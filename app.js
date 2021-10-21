const linksSocialMedia = {
    youtube: "channel/UC436uebW2EWe1LsoNSrAXBw",
    facebook:"maykbrito",
    instagram: "marcusvgu",
    twitter: "maykbrito"
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks();

const github = 'MarcusUrani'

function getUserInfos() {
    const urlApiGithub = `https://api.github.com/users/${github}`
    fetch(urlApiGithub)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        githubUser.textContent = data.login;
        githubUser.href = data.html_url;
        githubBio.textContent = data.bio;
    })

    console.log(urlApiGithub);
}

getUserInfos()
const linksSocialMedia = {
    youtube: "channel/UC436uebW2EWe1LsoNSrAXBw",
    facebook:"maykbrito",
    instagram: "marcusvgu",
    twitter: "maykbrito"
}

const socialLinks = document.querySelector('.socialLinks');

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks();
//variaveis: let ou const

const linksSocialMedia = {
  github: 'Tinnyschz',
  instagram: 'tifannysanches',
  youtube: 'watch?v=dQw4w9WgXcQ',
  linkedin: 'in/tifanny-sanches-4570841b4',
  twitter: 'Little_Wolfiie'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      gitHubLink.href = data.html_url
      userPhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()

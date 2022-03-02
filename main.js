/*  function showMeSomething() {
        alert(links.instagram)
      }
      
      const links = {
      github:"jakeliny",
      youtube: "jakelinygracielly",
      facebook: "maykbrito",
      instagram: "jakeliny.gracielly",
      twitter: "jakelinytec"

      }

      showMeSomething()*/

/* DOM */
/*
      const linksSocialMedia = {
      github:"jakeliny",
      youtube: "jakelinygracielly",
      facebook: "maykbrito",
      instagram: "jakeliny.gracielly",
      twitter: "jakelinytec"

      }

      
 /*forma 1 de chamar ID*/ /*
        document.getElementById('userName').textContent = 'Olivia' 
/*forma 2 de chamar ID*/ /*
        userName.textContent = "Marcelo" */ /*
      }

      changeSocialMediaLinks()  */

/*
      function changeSocialMediaLinks(){
        /*laço de repetição */
/*        for(let i = 0; i <= 10; i++){
          alert(i)
        }
      }
*/

const LinksSocialMedia = {
  github: 'SantiagoOliveira22',
  youtube: 'san',
  facebook: 'santiago.cardosodeoliveira',
  instagram: 'santiago_oliveira22',
  twitter: 'San_Oliveira22'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //alert(social)

    //li.children[0].href = "https://www.youtube.com/jakelinygracielly"
    //crase
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    //ARROW FUNCTIONS
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  //alert(url)
}

getGitHubProfileInfos()

/*
  cameCasel
  PascalCase
  snake_case
*/

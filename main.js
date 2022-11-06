
function createLinks(link, emoji, text) {
  return `
  <li>
  <a href="${link}" target="_blank"> <img src="${emoji}"> <h3>${text}</h3></a>
  </li>
  `
}

const app = (document.querySelector('#links').innerHTML =  
createLinks('https://www.linkedin.com/in/edna-maria-farias-moreira-51b35176/', "./assets/linkdin.png","LINKDIN ") + 
createLinks('https://github.com/Edna06', "./assets/github.png","GITHUB") + 
createLinks('mailto:edna.maria887@gmail.com', "./assets/gmail.png ","E-MAIL") +
createLinks('https://discord.gg/TbVhsGzf', "./assets/discord.png","DISCORD") 
)
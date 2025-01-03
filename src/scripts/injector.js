const actionsecret = localStorage.getItem("secret");
let profile = !!localStorage.getItem("myBarkUsername") ? `<a href="/mail" class="right">Mail</a><a href="/profile/${localStorage.getItem("myBarkUsername")}" class="right">My Profile</a></div>` : '<a href="login" class="right">Login</a><a href="signup" class="right">Join bark</a></div>'
let setting = !!localStorage.getItem("myBarkUsername") ? `<a href="/settings">Settings</a>` : ''
let afdbtn = new Date().getMonth() === 3 && new Date().getDate() === 1 ? "<a id='flip-it-afd-btn'>FLIP IT</a>" : '';
let turkey = new Date().getMonth() === 10 && new Date().getDate() === 28 ? "<a onclick='alert(`Happy Thanksgiving!!\n\n🦃🦃🦃`)'>🦃</a>" : '';

const components = {
    //navbar
    "navbar": `
    <div id="navbar" class="navbar"><a href="/"><img id="bark_logo" src="/src/images/Logo_christmas.svg" alt="bark" width="25" height="25" ></a>
    <a href="/create">Create</a>
    <a href="/explore">Explore</a>
    <a href="/about">About</a>
    ${setting}
    ${afdbtn}
    ${turkey}
    <a class="dark-mode-button" onclick="toggleDarkMode()" id="darkModeToggle"><dmbico alt="Dark Mode"></dmbico></a><form action="/search" style="display: contents;"><input class="searchBar" id="search" name="q" placeholder="Search for Projects"></input></form>
    ${profile}
    `,
    // editor_navbar
    "editor_navbar": `
    <div id="navbar" class="navbar"><a href="/"><img src="/src/images/Logo.svg" alt="Bark" width="25" height="25"></a>
    <input type="file" id="fileInput" accept=".barkf" style="display: none;" onchange="loadWorkspaceFromFile(this.files[0])" />
    <a href="#" onclick="openFileInput();" title="open a saved project">Open</a>
    <a href="#" id="downloadbutton" onclick="downloadproject();" title="download project to your computer.">Download</a>
    <a href="/advanced/">Advanced</a>
    <a class="dark-mode-button" id="darkModeToggle">
      <dmbico alt="Dark Mode"></dmbico>
    </a>
    <input class="searchBar" id="projectname" placeholder="Project name..." value="project"></input></div>
    `,
    //footer
    "footer": `
    <footer><p style="color: #777;">Looks like you\'ve reached the bottom.</p><p>
    <a href="/">Home</a>
    <a href="/advanced">Editor</a>
    <a href="https://github.com/mariocraft987/bark.github.io/">Github</a>
    <br/><br/><a href="https://bark.dumorando.com/docs">Docs</a>
    <a href="https://discord.gg/hXmHw7H9BF">Discord</a>
    <a href="https://x.com/barkcoding">Twitter</a></p>
    <p style="color: #777;">for bark dog: 🦴</p><br />
  <p style="font-size: 5pt; color: #777;">Even though this project is hosted on a dumorando.com domain, this project is barely affiliated with dumorando.</p></footer>
    `
};
Object.keys(components).forEach(item => {
    document.body.innerHTML = document.body.innerHTML.replace(`<!-- inject:${item} -->`, components[item]);
});
//done injecting, go to the top cuz it scrolls down automatically for some reason
window.scrollTo(0, 0);

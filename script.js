function search(){let a=document.getElementById("searchbar").value;a=a.toLowerCase();let b=document.getElementsByClassName("animals");for(i=0;i<b.length;i++)b[i].innerHTML.toLowerCase().includes(a)?b[i].style.diplay="list-item":b[i].style.display="none"}let subMenu=document.getElementById("subMenu");function toggleMenu(){subMenu.classList.toggle("open-menu")}document.querySelectorAll("#nav-bar a").forEach(a=>{a.addEventListener("click",a=>{document.querySelectorAll("#nav-bar a").forEach(a=>{a.classList.remove("active")}),a.target.classList.add("active")})});const showMoreBtn=document.getElementById("show-more-btn"),moreInfoDiv=document.getElementById("more-info");showMoreBtn.addEventListener("click",()=>{moreInfoDiv.classList.toggle("hidden"),showMoreBtn.textContent=moreInfoDiv.classList.contains("hidden")?"Show More":"Show Less"});const tweetsContainer=document.querySelector(".tweets-container"),apiKey="YOUR_TWITTER_API_KEY",apiSecret="YOUR_TWITTER_API_SECRET",apiUrl="https://api.twitter.com/1.1/statuses/user_timeline.json",params={screen_name:"twitter",count:10},headers={Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"};fetch(apiUrl,{method:"GET",headers:headers,params:params}).then(a=>a.json()).then(a=>{a.forEach(a=>{const b=`
    <div class="tweet">
        <p>${a.text}</p>
        <p>— ${a.user.name} (@${a.user.screen_name})</p>
    </div>
`;tweetsContainer.innerHTML+=b})}).catch(a=>console.error(a));const commentForm=document.querySelector("#comment-form");commentForm.addEventListener("submit",a=>{a.preventDefault();const b=document.querySelector("#comment-text").value,c=document.querySelector("#comment-author").value,d=new Date().toISOString().split("T")[0],e=document.querySelector(".publication-comments ul");e.innerHTML+=`
<li>
    <p>${b}</p>
    <p>Author: ${c}</p>
    <p>Published: ${d}</p>
</li>
`});
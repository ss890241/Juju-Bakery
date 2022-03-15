var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");
var today = new Date().toLocaleDateString();

btn.addEventListener("click", function () {
    list.innerHTML = `
    <div class="article" style=" width: 600px; margin: auto;padding: 10px 30px 0px 20px; border: 3px solid rgba(129, 89, 37, 0.123); border-radius: 10px; margin-top: 25px;">
    <h3>${title.value}</h3>
    <p> ${content.value}</p>
    <h6 style=" text-align:right; font-weight:300;">發布日期：${today}</h6>
    </div>
    ` + list.innerHTML;
    title.value = "";
    content.value = "";
})
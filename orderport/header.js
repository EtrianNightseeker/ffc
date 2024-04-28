document.querySelector("header nav ~ nav ~ svg").addEventListener("click",() => {
    document.querySelector("header nav:nth-of-type(2)").classList.add("active");
})
document.querySelector("header nav ~ nav svg").addEventListener("click",() => {
    document.querySelector("header nav:nth-of-type(2)").classList.remove("active");
})

document.addEventListener("DOMContentLoaded", function(){
    const mobileNavItems = document.querySelectorAll('header nav:nth-of-type(2) > ul > li:has(ul)');
    for (const item of mobileNavItems) {
      item.addEventListener('click', function (event) {
        try {
            const selected = document.querySelector('header nav:nth-of-type(2) ul > li > ul[class="selected-nav-item"]');

            if (selected) {
                selected.classList.remove("selected-nav-item")
            }

            if (event.target.nextSibling !== null) {
                event.target.nextSibling.nextSibling.classList.add("selected-nav-item");
            }
            else {
                document.querySelector("header nav:nth-of-type(2)").classList.remove("active");
            }
        }
        catch(e) {
            console.log(e);
        }
      });
    }
});

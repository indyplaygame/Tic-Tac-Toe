/* #########################################################
# +------------------------------------------------------+ #
# |                       Selector                       | #
# +------------------------------------------------------+ #
######################################################### */
const selectors = document.querySelectorAll(".selector");
selectors.forEach(selector => {
    const options = selector.querySelectorAll(".options .option");
    const func_name = selector.getAttribute("func");
    const func = window[func_name];

    options.forEach(option => {
        if(option.classList.contains("active"))
            selector.style.setProperty("--n", option.getAttribute("i"));

        option.addEventListener("click", () => {
            selector.style.setProperty("--n", option.getAttribute("i"));
            options.forEach(o => {
                o.classList.remove("active");
            });

            option.classList.add("active");

            const val = option.getAttribute("val");
            if(func) func(val);
        });
    });
});

/* #########################################################
# +------------------------------------------------------+ #
# |                        Select                        | #
# +------------------------------------------------------+ #
######################################################### */
const selects = document.querySelectorAll(".select");
selects.forEach(select => {
    const options = select.querySelectorAll(".options .option");
    const func_name = select.getAttribute("func");
    const func = window[func_name];

    options.forEach(option => {
        option.addEventListener("click", () => {

            const val = option.getAttribute("val");
            if(func) func(val);
        });
    });
})

// document.addEventListener("click", () => {
//     selects.forEach(select => {
//         select.removeAttribute("open");
//     });
// });
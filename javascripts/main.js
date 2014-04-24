// window on load
window.onload = function () {

    // get run code button
    document.getElementById("run-code").addEventListener("click", function () {
        // evaluate the code to run
        eval(document.getElementById("js-code-to-run").innerHTML);
    });
};

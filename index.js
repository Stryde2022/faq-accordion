const btns = document.querySelectorAll(".plus");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // Get the closest div container to the clicked button
        const parentDiv = e.currentTarget.closest(".border-top");

        // Select the paragraph within this specific div
        const paragraph = parentDiv.querySelector("p");

        // Check if the clicked paragraph is already open
        const isCurrentlyOpen = paragraph.classList.contains("show-text");

        // Close all paragraphs and reset all button icons
        const allParagraphs = document.querySelectorAll(".border-top p");
        console.log(allParagraphs);
        
        const allBtns = document.querySelectorAll(".plus");

        allParagraphs.forEach(function (para) {
            para.classList.remove("show-text");
        });

        allBtns.forEach(function (btn) {
            btn.src = "assets/images/icon-plus.svg";
        });

        // If it was not open, open it; otherwise, leave it closed
        if (!isCurrentlyOpen) {
            paragraph.classList.add("show-text");
            e.currentTarget.src = "assets/images/icon-minus.svg";
        }
    });
});

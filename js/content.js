// document.addEventListener("DOMContentLoaded", function () {
//     const heading = document.getElementById("hero-heading");
//     const paragraph = document.getElementById("hero-paragraph");

//     let headingText = heading.innerHTML;
//     let paragraphText = paragraph.innerHTML;

//     heading.innerHTML = "";  // Clear the heading text initially
//     paragraph.innerHTML = "";  // Clear the paragraph text initially

//     let indexHeading = 0;
//     let indexParagraph = 0;

//     const typingSpeed = 100; // Increase this value to make it slower

//     function typewriterHeading() {
//         if (indexHeading < headingText.length) {
//             heading.innerHTML += headingText.charAt(indexHeading);
//             indexHeading++;
//             setTimeout(typewriterHeading, typingSpeed); // Slow down by increasing the delay
//         } else {
//             // Once heading is done, start typing paragraph
//             typewriterParagraph();
//         }
//     }

//     function typewriterParagraph() {
//         if (indexParagraph < paragraphText.length) {
//             paragraph.innerHTML += paragraphText.charAt(indexParagraph);
//             indexParagraph++;
//             setTimeout(typewriterParagraph, typingSpeed); // Slow down by increasing the delay
//         }
//     }

//     typewriterHeading();  // Start typing the heading text
// });

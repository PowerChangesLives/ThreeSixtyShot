document.addEventListener("DOMContentLoaded", function () {
                const hamburger = document.querySelector(".hamburger");
                const nav = document.querySelector(".nav");

                // Add click event listener to hamburger menu
                hamburger.addEventListener("click", function () {
                    // Toggle the 'active' class on each bar of hamburger
                    hamburger.querySelectorAll('.bar').forEach(bar => bar.classList.toggle('active'));
                    // Toggle the 'active' class on the navigation
                    nav.classList.toggle("active");
                });
            });

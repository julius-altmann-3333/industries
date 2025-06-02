// Toggle menu visibility on mobile
        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }

        // Toggle dropdown visibility when clicked
        function toggleDropdown(event) {
            const dropdown = event.target.nextElementSibling;
            dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
        }

        // Close the menu if clicked outside
        window.addEventListener('click', function(event) {
            const menu = document.querySelector('.nav-links');
            const menuToggle = document.querySelector('.menu-toggle');
            
            // If click is outside the menu and the toggle button, close the menu
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove('active');
            }
        });

        // Prevent the click event from propagating to the window when clicking on the toggle button
        document.querySelector('.menu-toggle').addEventListener('click', function(event) {
            event.stopPropagation();
        });

        // Dynamic Results

        document.querySelectorAll('.dropdown li').forEach(item => {
          item.addEventListener('click', function() {
              let resultContainer = document.getElementById('result-container');
              resultContainer.innerHTML = ""; // Clear previous content

              // Create and style title
              let title = document.createElement('h2');
              title.textContent = this.dataset.title;
              title.style.color = "#333";
              title.style.fontSize = "24px";
              title.style.marginBottom = "10px";

              // Create and style description
              let description = document.createElement('p');
              description.textContent = this.dataset.content;
              description.style.fontSize = "18px";
              description.style.color = "#555";

              // Append title and description
              resultContainer.appendChild(title);
              resultContainer.appendChild(description);

              // Add images if available
              if (this.dataset.img1 && this.dataset.img2) {
                  let imgContainer = document.createElement('div');
                  imgContainer.style.display = "flex";
                  imgContainer.style.gap = "10px";
                  imgContainer.style.justifyContent = "center";
                  imgContainer.style.marginTop = "10px";

                  let img1 = document.createElement('img');
                  img1.src = this.dataset.img1;
                  img1.alt = "Image 1";
                  img1.style.width = "45%";
                  img1.style.height = "100px";
                  img1.style.borderRadius = "8px";
                  img1.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

                  let img2 = document.createElement('img');
                  img2.src = this.dataset.img2;
                  img2.alt = "Image 2";
                  img2.style.width = "45%";
                  img1.style.height = "200px";
                  img2.style.borderRadius = "8px";
                  img2.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

                  // Append images inside container
                  imgContainer.appendChild(img1);
                  imgContainer.appendChild(img2);
                  resultContainer.appendChild(imgContainer);
              }
          });
      });

// Project data
        const projects = [
            {
                title: "3D Lab Designer, BuMo3DR",
                date: "Dec 2016 - June 2024",
                details: [
                    "Developed a 3D Lab Editor for architectural plans across PC, AR, VR & MR platforms",
                    "Ported project from Unreal Engine 4 to Unreal Engine 5",
                    "Implemented core features and advanced drawing tools",
                    "Integrated AWS SDK for cloud-based storage and authentication"
                ]
            },
            {
                title: "Adhesive Technology Exploration (VR & AR), BuMo3DR",
                date: "Jan 2020 - Oct 2020",
                details: [
                    "Developed VR and AR versions exploring advanced adhesive manufacturing technologies",
                    "Optimized performance on mobile hardware",
                    "Implemented Cross-Platform Multiplayer functionality"
                ]
            },
            // Add more projects here...
        ];

        // Function to generate HTML for projects
        function generateProjects() {
            const projectsContainer = document.getElementById('projectsContainer');
            
            projects.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project';
                projectDiv.onclick = function() { toggleDetails(this); };

                projectDiv.innerHTML = `
                    <h3>${project.title}</h3>
                    <p><em>${project.date}</em></p>
                    <div class="project-details">
                        <ul>
                            ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </div>
                `;

                projectsContainer.appendChild(projectDiv);
            });
        }

        // Function to toggle project details
        function toggleDetails(element) {
            var details = element.querySelector('.project-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        }

        // Back to top functionality
        window.onscroll = function() {
            var backToTop = document.getElementById("back-to-top");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        };

        document.getElementById("back-to-top").onclick = function(e) {
            e.preventDefault();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

        // Call this function when the page loads
        window.onload = function() {
            generateProjects();
        };
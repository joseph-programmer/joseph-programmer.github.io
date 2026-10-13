// Resume data
const resumeData = {
    header: {
        name: "Joseph Fernandez",
        title: "Unreal Developer | Game Development, XR & Digital Twins",
        email: "joseph3713@gmail.com",
        phone: "+91 7358437317"
    },
    summary: "Developer with 10+ years of experience spanning game development, XR (AR/VR/MR), multiplayer systems, and large-scale real-time visualization.",
    experience: [
        {
            title: "Associate Tech Lead - Unreal Developer",
            company: "Dbiz.ai, Kochi",
            date: "Nov 2025 - Present",
            responsibilities: [
                "Designed a data-driven level streaming framework with data assets, allowing new sectors to be added without code changes.",
                "Implemented streaming for the Abu Dhabi and Dubai digital twins and led mass crowd simulation across city-scale scenes.",
                "Developed a procedural road authoring tool alongside utilities for collision creation and level optimization.",
                "Engineered mesh decimation and instancing tools for large-scale environments.",
                "Profiled resource use, reducing VRAM by 63%, RAM by 67%, and build size by 20%.",
                "Coordinated Perforce structure, branching, Git-to-Perforce migration, and CI/CD setup while reviewing feature architecture and code."
            ],
            tools: "Unreal Engine 5, C++, Blueprints, Cesium ion, Perforce, Git, Mass Entity, Pixel Streaming"
        },
        {
            title: "Gameplay Programmer",
            company: "NextPlayerGames, USA (remote)",
            date: "Oct 2024 - Oct 2025",
            responsibilities: [
                "Implemented replicated weapon mechanics, including ammo handling, hit detection, and recoil.",
                "Developed replicated session management, player interactions, and real-time data synchronization.",
                "Built multiplayer inventory, NPC replication, and AI-driven behaviors.",
                "Developed a character customizer and a skeletal mesh merging tool with morph support.",
                "Designed a graph-based dialogue system with conditions."
            ],
            tools: "Unreal Engine 5, C++, Blueprints, Multiplayer Replication, Sessions, AI Perception, EQS, Epic Online Services"
        },
        {
            title: "Lead Game Programmer",
            company: "BuMo3DR, Chennai, India",
            date: "Nov 2021 - Jun 2024",
            responsibilities: [
                "Developed a data-driven 3D Lab Designer for real-time architectural visualization across multiple platforms.",
                "Engineered room creation, wall structures, traffic simulation, and lab automation systems.",
                "Created custom file formats and parsers for integration with industry-standard tools.",
                "Integrated real-time ray tracing, Nanite, and advanced global illumination with artists.",
                "Mentored junior developers and tracked project delivery."
            ],
            tools: "Unreal Engine 4 & 5, C++, C#, Python, Photon Networking, AWS SDK, CSG, Visio/DWG, AR, VR, HoloLens"
        },
        {
            title: "Senior Game Programmer",
            company: "BuMo3DR, Chennai, India",
            date: "May 2018 - Oct 2021",
            responsibilities: [
                "Created reusable cross-platform libraries and custom Unreal Engine and Unity plugins.",
                "Built Photon multiplayer functionality for Unity and Unreal Engine.",
                "Developed an iPad spectator mode and scene control app for VR events.",
                "Designed data visualization applications using OGDF for graph rendering."
            ],
            tools: "Unreal Engine 4, Unity, C++, C#, Python, ARKit, Vuforia, MRTK, Photon Networking, OGDF"
        },
        {
            title: "3D Programmer",
            company: "BuMo3DR, Chennai, India",
            date: "Mar 2016 - Apr 2018",
            responsibilities: [
                "Developed training and simulation modules for medical diagnostics equipment.",
                "Implemented shaders, physics interactions, and real-time visualization techniques.",
                "Improved UI and interactive environments."
            ],
            tools: "Unreal Engine 4, Unity, C++, C#, VR, MR"
        },
        {
            title: "Associate Software Engineer",
            company: "Electronic Arts, Hyderabad, India",
            date: "Mar 2012 - Apr 2014",
            responsibilities: [
                "Developed, maintained, and supported 10+ shipped iOS games, including Battleship, Monopoly, Boggle, Need for Speed, and Madden NFL.",
                "Ported EA titles, including The Sims, Need for Speed, FIFA, Bejeweled, and The Simpsons, to Java phones.",
                "Used EA's EAMT and Bedrock frameworks for cross-platform deployment."
            ],
            tools: "Java, Objective-C, C++, Python, EAMT, Bedrock"
        }
    ],
    projects: [
        {
            title: "Abu Dhabi & Dubai Digital Twins",
            company: "Dbiz.ai",
            date: "Nov 2025 - Present",
            details: [
                "Built a data-driven level streaming framework with data assets, allowing new streaming sectors to be added without code changes.",
                "Implemented level streaming for Abu Dhabi and Dubai digital twin environments to improve traversal across city-scale assets.",
                "Led mass crowd simulation for city-scale scenes, including population density, movement, and traffic behavior.",
                "Developed a procedural road tool in Unreal Engine 5 to speed up infrastructure and environment authoring.",
                "Designed a collision creation tool for scene assets.",
                "Built a level optimization tool to support performance work.",
                "Implemented a mesh decimator to reduce geometry complexity.",
                "Engineered a mesh instancing tool for repeated assets.",
                "Profiled and optimized resource usage, reducing VRAM by 63%, RAM by 67%, and build size by 20%.",
                "Coordinated Perforce repository structure, branching strategy, Git-to-Perforce migration, and CI/CD setup with architecture and DevOps teams.",
                "Designed feature architecture and reviewed code for quality, consistency, and alignment with project standards."
            ],
            tools: "Unreal Engine 5, C++, Blueprints, Cesium ion, Mass Entity, Pixel Streaming"
        },
        {
            title: "Multiplayer Gameplay & Character Systems",
            company: "NextPlayerGames",
            date: "Oct 2024 - Oct 2025",
            details: [
                "Implemented replicated weapon mechanics, including ammo handling, hit detection, and recoil.",
                "Developed replicated session management, player interactions, and real-time data synchronization.",
                "Built multiplayer inventory and NPC replication with AI-driven behaviors.",
                "Developed a data-driven character customizer.",
                "Built a skeletal mesh merging tool with morph support.",
                "Implemented a graph-based dialogue system with conditions."
            ],
            tools: "Unreal Engine 5, C++, Blueprints, Epic Online Services, AI Perception, EQS"
        },
         {
                title: "3D Lab Designer",
				company: "BuMo3DR",
                date: "Dec 2016 - June 2024",
                details: [
                    "Ported project from Unreal Engine 4 to Unreal Engine 5.",
					"Implemented core features: room creation, wall structures, and dynamic presentation tools.",
					"Engineered systems for object connections, traffic management, and lab automation simulation.",
					"Developed advanced drawing tools for complex structures and wall designs.",
					"Created data structures and algorithms for wall, ceiling, and floor manipulation.", 
					"Integrated libraries for computational solid geometry and file format imports (Visio, DWG).", 
					"Designed custom file formats with parsers for project saving and loading.", 
					"Implemented AWS SDK integration for cloud-based file storage and authentication.", 
					"Developed Unreal Editor utilities and pipeline tools to enhance workflow efficiency.", 
					"Created plugins to improve code reusability across the project.",
					"Implemented undo/redo functionality using design patterns (Command, Memento).", 
					"Integrated Photon SDK for cross-platform multiplayer functionality.",
					"Developed modules for simulation, auto-detection of rooms, and floor generation.", 
					"Designed and implemented user interface components."
                ],
				tools: "Unreal Engine 4, Unreal Engine 5, Unity, ARKit, Photon Networking, AWS SDK.",
				platforms:"PC, Oculus Rift, Oculus Rift S, Oculus Quest, iPad, and Hololens"
            },
			{
                title: "Adhesive Technology Exploration (VR & AR)",
				company: "BuMo3DR",
                date: "Jan 2020 - Oct 2020",
                details: [
					"Developed VR and AR versions of the application and implemented code for multiple systems.", 
					"Optimized performance on mobile hardware, prioritizing Memory Management for reducing Poly Count and Texture Map memory usage.", 
					"Implemented Cross-Platform Multiplayer functionality, 360 Video integration, Hand Motion Controller support, In-game Screenshots, and utilized design patterns (Command, Factory, Message) for structured software architecture." 
                ],
				tools: "Unreal Engine 4, Vuforia, Photon Networking",
				platforms:"PC, Oculus Rift, iPad"
            },
			{
                title: "Proton Center Location Estimator (Augmented Reality)",
				company: "BuMo3DR",
                date: "NOV 2019 - JAN 2020 ",
                details: [
					"Designed and developed the entire application based on specific client requirements."
                ],
				tools: "Unity, Vuforia",
				platforms:"iPad"
            },
			{
                title: "Car Configurator (Virtual Reality)",
				company: "BuMo3DR",
                date: "OCT 2019",
                details: [
					"Engineered library and plugin code in C++ and implemented game-play logic using Blueprints.",
					"Led the product development from inception to completion.",
					"Designed and integrated cross-platform and multi-player functionality.",
					"Applied design patterns including Factory and Singleton to enhance code architecture." 
                ],
				tools: "Unreal Engine 4, Photon Networking",
				platforms:"PC, Oculus Rift S, iPad"
            },
			{
                title: "Packaging Technology Training (Virtual Reality)",
				company: "BuMo3DR",
                date: "APRIL 2019 - MAY 2020",
                details: [
					"Created 3D UI interactions, animated interactions, and controllers.",
					"Implemented grab interactions tailored for the Oculus platform.",
					"Integrated cross-platform multiplayer functionality and an in-game replay system.",
					"Implemented design patterns (Command, Factory, Message) to enhance software architecture efficiency." 
                ],
				tools: "Unreal Engine 4, Photon Networking",
				platforms:"PC, Oculus Rift,Oculus Rift S"
            },
			{
                title: "Avant (Virtual Reality)",
				company: "BuMo3DR",
                date: "APRIL 2018 - MAY 2020",
                details: [
					"Implemented an in-game replay system enabling users to view and save replays of their interactions in XML format, with support for cross-platform multiplayer functionality.",
					"Refactored and ported library code into project plugins to enhance reusability.",
					"Enhanced codebase by rewriting and optimizing various components.",
					"Employed design patterns such as Message, Command, and State Machine to improve software architecture." 
                ],
				tools: "Unreal Engine 4, Photon Networking",
				platforms:"PC, Oculus Rift"
            },
			{
                title: "Industry 4.0 Training & Maintenance (Mixed Reality - Hololens)",
				company: "BuMo3DR",
                date: "JUL 2018- NOV 2018",
                details: [
					"Implemented features such as cross-platform multiplayer, spectator view, and live event synchronization.",
					"Applied various design patterns, including Message, State Machines, Singleton, and Event Listeners.",
					"Integrated gesture recognition and image target detection APIs." 
                ],
				tools: "Unity, Photon Networking, Mixed Reality Toolkit (MRTK),  Vuforia SDK",
				platforms:"PC, Hololens and iPad"
            },
			{
                title: "Journey through nasal cavity and Blood stream(Virtual Reality)",
				company: "BuMo3DR",
                date: " ",
                details: [
					"Designed and implemented the entire application workflow.",
					"Developed AI algorithms to efficiently simulate the flow of large particles.",
					"Created a custom particle system module with path modifiers and various emitter shapes.",
					"Developed an iPad application for spectator view and scene control."
                ],
				tools: "Unreal Engine 4 and Photon Networking",
				platforms:"PC, Oculus Rift, and HTC Vive"
            },
			{
                title: "360 Video (Virtual Reality)",
				company: "BuMo3DR",
                date: " ",
                details: [
					"Created a custom plugin in Unreal Engine 4 to render 360 videos.",
					"Developed scripts in Python to utilize ffmpeg for combining individual frames into videos of desired resolutions.",
					"Automated 360 frame capture using Nvidia Ansel for efficient video creation processes." 
                ],
				tools: "Unreal Engine 4, Nvidia Ansel",
				platforms:"Oculus Go, Oculus Rift, and HTC Vive"
            },
			{
                title: "Virtual Lab(Virtual Reality)",
				company: "BuMo3DR",
                date: " ",
                details: [
					"Developed user interface, animation interactions, and motion controls."
                ],
				tools: "Unity and Photon Networking",
				platforms:"PC and Oculus Rift"
            },
			{
                title: "Go Game(Mixed Reality)",
				company: "BuMo3DR",
                date: " ",
                details: [
					"Designed and implemented game logic and mechanics, creating and fine-tuning the core gameplay elements to ensure a seamless and engaging user experience.",
					"Developed an editor application that allows for the precise placement of virtual objects in real-world locations, enhancing the game's interactive capabilities.",
					"Created AI algorithms that enable enemy entities to exhibit realistic flocking and evasion behaviors, adding depth and challenge to the gameplay." 
                ],
				tools: "Unity and Vuforia",
				platforms:"Hololens and iPad"
            },
			{
                title: "Data Visualization",
				company: "BuMo3DR",
                date: " ",
                details: [
					"Designed and developed the entire application according to client specifications.",
					"Integrated OGDF (Open Graph Drawing Framework) for advanced graph visualization.",
					"Implemented client authorization API for secure access." 
                ],
				tools: "Unreal Engine 4 and OGDF library",
				platforms:"PC"
            },
			{
                title: "VR Video Gallery(Virtual Reality)",
				company: "BuMo3DR",
                date: " ",
                details: [
					"Created a custom 360 video player to render and display videos.",
					"Designed and implemented a user interface for browsing and interacting with the video library." 
                ],
				tools: "Unity",
				platforms:"Samsung Gear VR"
            },
			{
                title: "Battleship(iPhone), Electronic Arts",
				company: "Electronic Arts",
                date: " ",
                details: [
					"Enhanced application performance and stability through optimization and bug fixing.",
					"Updated the application to support the latest iOS platform available at the time.",
					"Expanded device compatibility to include more iOS devices."
                ],
				platforms:"iPhone"
            },
			{
                title: "Monopoly(iPad), Electronic Arts",
				company: "Electronic Arts",
                date: " ",
                details: [
					"Added and replaced game tokens.",
					"Optimized the application and updated it to the latest iOS version.",
					"Added support for the latest iPad generation.",
					"Resolved several multiplayer connection problems, crashes, and audio issues."
                ],
				platforms:"iPad"
            },
			{
                title: "Boggle(iPhone), Electronic Arts",
				company: "Electronic Arts",
                date: " ",
                details: [
					"Fixed multiple crashes and bugs.",
					"Expanded iPhone device support.",
					"Integrated in-house SDKs for enhanced functionality." 
                ],
				platforms:"iPhone"
            },
			{
                title: "Need for speed:Shift(iPhone), Electronic Arts",
				company: "Electronic Arts",
                date: " ",
                details: [
					"Improved user interface as per the design.",
					"Fixed several crashes and bugs.",
					"Integrated AD sdk and COPPA sdk."
                ],
				platforms:"iPhone"
            },
			{
                title: "Need for speed:Hot Pursuit(iPhone), Electronic Arts",
				company: "Electronic Arts",
                date: " ",
                details: [
					"Tested Everyplay SDK for video recording with developer assistance.",
					"Integrated AD SDK and proprietary SDKs to enhance user experience.",
					"Added support for the latest iOS devices.",
					"Implemented user interface changes."
                ],
				platforms:"iPhone"
            },
			{
                title: "Madden NFL(iPad), Electronic Arts",
				company: "Electronic Arts",
                date: " ",
                details: [
					"Optimized application performance, fixed bugs, and updated to the latest iOS version.",
					"Expanded iOS device compatibility.",
					"Integrated AD SDK and proprietary SDKs to enhance user experience." 
                ],
				platforms:"iPad"
            },
			{
                title: "Porting to different java feature phones, Electronic Arts",
				company: "Electronic Arts",
                date: " ",
                details: [
					"Ported EA titles including Sims, NFS Hot Pursuit, FIFA, Bejeweled, and The Simpsons to various Java feature phones." 
                ]
            },
            // Add more projects here...
    ],
    skills: [
        "C++", "C#", "Objective-C", "Python", "Java", "Unreal Engine 4 & 5", "Unity",
        "ARKit", "Vuforia", "MRTK", "Photon Networking", "Multiplayer Replication",
        "Behavior Trees", "EQS", "Game Physics", "Multithreading", "Real-time Visualization",
        "Data-driven Systems", "Profiling", "Git", "Perforce", "SVN", "Visual Studio",
        "Android", "Oculus Rift S", "Mirage Solo", "iPad", "Magic Leap", "HoloLens 2", "Meta Quest 2"
    ],
    education: [
        {
            degree: "PG-Diploma Game Programming",
            institution: "ICAT, Chennai",
            date: "2011 - 2012"
        },
        {
            degree: "B-Tech Electronics & Communication",
            institution: "College Of Engineering, Trivandrum",
            date: "2006 - 2010"
        }
    ]
};

// Function to generate HTML for header
function generateHeader() {
    const header = document.querySelector('header');
    header.innerHTML = `
        <h1>${resumeData.header.name}</h1>
        <p>${resumeData.header.title}</p>
        <p class="contact-links"><a href="mailto:${resumeData.header.email}">${resumeData.header.email}</a><a href="tel:+917358437317">${resumeData.header.phone}</a></p>
    `;
}

// Function to generate HTML for summary
function generateSummary() {
    const summarySection = document.getElementById('summary');
    summarySection.innerHTML = `<h2>Summary</h2><p>${resumeData.summary}</p>`;
}

// Function to generate HTML for experience
function generateExperience() {
    const experienceSection = document.getElementById('experience');
    let experienceHTML = '<h2>Experience</h2>';
    
    resumeData.experience.forEach(job => {
        experienceHTML += `
            <div class="job">
                <h3>${job.title}</h3>
                <p class="job-meta"><em>${job.company}</em><span>${job.date}</span></p>
                <ul>
                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
                ${job.tools ? `<p class="job-tools"><strong>Tools &amp; tech:</strong> ${job.tools}</p>` : ''}
            </div>
        `;
    });
    
    experienceSection.innerHTML = experienceHTML;
}

// Function to generate HTML for projects
function generateProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    resumeData.projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        projectDiv.innerHTML = `
            <div class="project-header">
                <div>
                    <h3>${project.title}</h3>
                    <p class="project-company-date">
                        ${project.company ? `${project.company} | ` : ''}${project.date || ''}
                    </p>
                </div>
                <button class="project-toggle" type="button" aria-label="Show details for ${project.title}" aria-controls="project-${index}" aria-expanded="false" onclick="toggleProject(${index})">+</button>
            </div>
            <div class="project-details" id="project-${index}">
                <div class="project-details-content">
                    <h4>Contributions</h4>
                    <ul>
                        ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                    ${project.tools ? `<p><strong>Tools:</strong> ${project.tools}</p>` : ''}
                    ${project.platforms ? `<p><strong>Platforms:</strong> ${project.platforms}</p>` : ''}
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectDiv);
    });
}



// Function to generate HTML for skills
function generateSkills() {
    const skillsSection = document.getElementById('skills');
    let skillsHTML = '<h2>Skills</h2><div class="skills">';
    
    resumeData.skills.forEach(skill => {
        skillsHTML += `<span class="skill">${skill}</span>`;
    });
    
    skillsHTML += '</div>';
    skillsSection.innerHTML = skillsHTML;
}

// Function to generate HTML for education
function generateEducation() {
    const educationSection = document.getElementById('education');
    let educationHTML = '<h2>Education</h2><ul>';
    
    resumeData.education.forEach(edu => {
        educationHTML += `
            <li>
                <strong>${edu.degree}</strong> - ${edu.institution} (${edu.date})
            </li>
        `;
    });
    
    educationHTML += '</ul>';
    educationSection.innerHTML = educationHTML;
}

// Function to toggle project details
function toggleProject(index) {
    const projectDetails = document.getElementById(`project-${index}`);
    const projectToggle = projectDetails.previousElementSibling.querySelector('.project-toggle');
    
    projectDetails.classList.toggle('active');
    projectToggle.classList.toggle('active');
    projectToggle.setAttribute('aria-expanded', String(projectDetails.classList.contains('active')));
    
    if (projectDetails.classList.contains('active')) {
        projectToggle.textContent = '−';
    } else {
        projectToggle.textContent = '+';
    }
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

// Change navigation style on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Call this function when the page loads
window.onload = function() {
    generateHeader();
    generateSummary();
    generateExperience();
    generateProjects();
    generateSkills();
    generateEducation();
	
	// Make toggleProject function global
    window.toggleProject = toggleProject;
};

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navHeight = document.querySelector('nav').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Highlight active section using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(navLinksContainer.classList.contains('active')));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinksContainer.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Resume data
const resumeData = {
    header: {
        name: "Joseph Fernandez",
        title: "Game Programmer"
    },
    summary: "Experienced Lead Game Programmer with over a decade in computer graphics, XR, and game development. Successfully led teams of up to 10 members, creating advanced tools and optimizing workflows to boost efficiency by 30%. Proficient in various programming languages and game engines, with specialized expertise in multithreading and multiplayer systems.",
    experience: [
        {
            title: "Lead Game Programmer",
            company: "BuMo3DR, Chennai, India",
            date: "Nov 2021 - Jun 2024",
            responsibilities: [
                "Led teams of 10+ programmers and designers on 5+ projects involving computer graphics and extended reality, ensuring timely delivery and high-quality outcomes.",
                "Developed a 3D Lab Designer using Unreal Engine and C++, enabling real-time visualization of architectural plans across PC, AR, VR, and MR platforms, adopted by over 10 clients.",
                "Engineered new tools and frameworks with C++, C#, and Python, enhancing product development efficiency by 30%.",
                "Architected technical solutions for various projects, streamlining 3D pipeline workflows for technical artists, programmers, and designers.",
                "Mentored more than 5 junior developers through weekly code reviews and monthly knowledge transfer sessions.",
                "Conducted project development tracking and ensured timely product delivery of over 10+ projects."
            ]
        },
        {
            title: "Senior Game Programmer",
            company: "BuMo3DR, Chennai, India",
            date: "May 2018 - Oct 2021",
            responsibilities: [
                "Developed applications involving 3D computer graphics and XR for diverse industries, delivering 10+ projects that improved client productivity and engagement.",
                "Engineered VR and AR applications for product visualization, training, and simulation purposes.",
                "Integrated ARKit, Vuforia, and MRTK, streamlining XR project development and reducing integration time by 20%, leading to faster deployment of features.",
                "Wrote cross-platform core libraries and templates to improve code re-usability across projects by 50%.",
                "Enhanced existing frameworks for better performance and functionality.",
                "Collaborated with clients to customize solutions to their needs, resulting in a 30% increase in repeat business."
            ]
        },
        {
            title: "3D Programmer",
            company: "BuMo3DR, Chennai, India",
            date: "Mar 2016 - Apr 2018",
            responsibilities: [
                "Created 3D applications and games, focusing on graphics programming and optimization.",
                "Implemented XR features for over 5 client projects.",
                "Collaborated with a team of 2 to 4 members to improve existing codebases and develop new features."
            ]
        },
        {
            title: "Associate Software Engineer",
            company: "Electronic Arts, Hyderabad, India",
            date: "Jun 2012 - Mar 2014",
            responsibilities: [
                "Worked in the iOS Live services team, focusing on the development and maintenance of over 10 mobile games.",
                "Refined and maintained several in-house tools to improve development efficiency.",
                "Enhanced features for existing EA mobile games including Battleship, Monopoly, Boggle, Need for Speed series, and Madden NFL, resulting in a 20% reduction in bug reports and fixing all reported bugs.",
                "Expanded device compatibility and resolved critical issues such as multiplayer connection problems and performance bottlenecks.",
                "Ported EA titles, including Sims, NFS Hot Pursuit, FIFA, Bejeweled, and The Simpsons, to over 100+ Java feature phones, ensuring compatibility and functionality"
            ]
        }
    ],
    projects: [
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
				company: "BuMo3DR",
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
        "C++", "C#", "Python", "Unreal Engine", "Unity3D", "OpenGL", "DirectX",
        "AR/VR/MR Development", "Game Development", "3D Graphics",
        "Shader Programming", "Cross-platform Development"
    ],
    education: [
        {
            degree: "PG-Diploma Game Programming",
            institution: "ICAT, Chennai",
            date: "June 2011 - May 2012"
        },
        {
            degree: "B-Tech Electronics & Communication",
            institution: "College Of Engineering, Trivandrum",
            date: "June 2006 - April 2010"
        }
    ]
};

// Function to generate HTML for header
function generateHeader() {
    const header = document.querySelector('header');
    header.innerHTML = `
        <h1>${resumeData.header.name}</h1>
        <p>${resumeData.header.title}</p>
    `;
}

// Function to generate HTML for summary
function generateSummary() {
    const summarySection = document.getElementById('summary');
    summarySection.innerHTML = `<p>${resumeData.summary}</p>`;
}

// Function to generate HTML for experience
function generateExperience() {
    const experienceSection = document.getElementById('experience');
    let experienceHTML = '<h2>Experience</h2>';
    
    resumeData.experience.forEach(job => {
        experienceHTML += `
            <div class="job">
                <h3>${job.title}</h3>
                <p><em>${job.company}</em><span style="float: right;">${job.date}</span></p>
                <ul>
                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
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
                <button class="project-toggle" onclick="toggleProject(${index})">+</button>
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

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navigation
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('nav').offsetHeight;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - navHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

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
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinksContainer.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});
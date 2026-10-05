let testimonials = [
  {
    quote: "Very reliable and professional. The work was completed carefully and everything worked as expected.",
    author: "Mark Cuban"
  },
  {
    quote: "Great attention to detail and a strong understanding of web development and testing.",
    author: "Piers Morgan"
  },
  {
    quote: "Communication was clear throughout the project, and the final result is exactly what we needed.",
    author: "James Clark"
  },
  {
    quote: "A dedicated developer who takes time to understand the problem and find practical solutions.",
    author: "Hillary Hill"
  }

    
]
let projects = [
  {
    title: "Personal Finance Tracker",
    description:
      "A web app that lets users track income, expenses, and savings goals. Users can add transactions, categorize them (food, rent, transport), view monthly summaries, and see spending patterns through charts. All data is stored in the browser so no backend is required.",
    tools: ["HTML",  "CSS",  "JavaScript",  "localStorage",  "Canvas API"]
  },
  {
    title: "Task Management Board",
    description:
      "A Kanban-style board where users create tasks and drag them between columns (To Do, In Progress, Done). Includes due dates, priority tags, and the ability to filter or search tasks. State persists in the browser between sessions.",
    tools: ["HTML", "CSS", "JavaScript", "Drag and Drop API", "localStorage"]
  },
  {
    title: "Quiz Platform",
    description:
      "An interactive quiz app where users answer multiple-choice questions, get instant scoring, and see a detailed results breakdown. Includes a countdown timer per question, progress bar, and a high-score leaderboard saved locally.",
    tools: ["HTML", "CSS", "JavaScript", "setInterval", "localStorage"]
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive app that fetches real-time weather for any city using a public weather API. Displays current conditions, a 7-day forecast, humidity, wind speed, and animated icons, with dark/light mode and a saved search history.",
    tools: ["HTML", "CSS", "JavaScript", "Fetch API", "OpenWeatherMap API", "localStorage"]
  }
];

//Script for rendering testimonials
let testimonialsListEl = document.getElementById("Testimonials-list");

testimonials.forEach(function (testimonial) {
  testimonialsListEl.innerHTML += `
    <li class="testimonial">
      <p class="quote">"${testimonial.quote}"</p>
      <span class="author">- ${testimonial.author}</span>
    </li>
  `;
});

// Script to render projects
let projectsListEl = document.getElementById('Projects-list');

if (projectsListEl) {
    projects.forEach(function (project) {
        // card container
        let card = document.createElement('div');
        card.className = 'project-card';

        // title
        let title = document.createElement('h3');
        title.textContent = project.title;
        card.appendChild(title);

        // description
        let desc = document.createElement('p');
        desc.textContent = project.description;
        card.appendChild(desc);

         // tools
        let tools = document.createElement('div');
        tools.className = 'project-tools';

        project.tools.forEach(function (tool) {
            let toolTag = document.createElement('span');
            toolTag.className = 'tool-tag';
            toolTag.textContent = tool;
            tools.appendChild(toolTag);
        });

        card.appendChild(tools);
        // append card to list
        projectsListEl.appendChild(card);
    });
}
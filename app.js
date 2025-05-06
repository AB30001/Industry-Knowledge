// Sanity API configuration
const projectId = 'eoxsg65n';
const dataset = 'industry-knowledge';
const apiVersion = '2023-05-03';

// Function to fetch data from Sanity
async function fetchSanityData(query) {
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
}

// Load hero section data
async function loadHeroSection() {
  try {
    const query = '*[_type == "hero"][0]';
    const heroData = await fetchSanityData(query);
    if (heroData) {
      const heroNameEl = document.getElementById('hero-name');
      const heroTaglineEl = document.getElementById('hero-tagline');
      const heroIntroEl = document.getElementById('hero-intro');
      if (heroNameEl && heroData.name) heroNameEl.textContent = heroData.name;
      if (heroTaglineEl && heroData.tagline) heroTaglineEl.textContent = heroData.tagline;
      if (heroIntroEl && heroData.intro) heroIntroEl.textContent = heroData.intro;
    }
    return true;
  } catch (error) {
    console.error("Error loading hero section:", error);
    return false;
  }
}

// Load projects data
async function loadProjects() {
  try {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) {
      console.error("CRITICAL ERROR: The designated <div id='projects-container'> was NOT FOUND. Projects cannot be displayed.");
      return false; 
    }
    const query = '*[_type == "project"]';
    const projectsData = await fetchSanityData(query);
    if (projectsData && projectsData.length > 0) {
      displayProjects(projectsData, projectsContainer);
    }
    return true; 
  } catch (error) {
    console.error("Error in loadProjects function:", error);
    return false; 
  }
}

// Helper function to display projects
function displayProjects(projects, container) {
  container.innerHTML = '';
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'col mb-4';
    projectCard.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${project.image ? 
          `https://cdn.sanity.io/images/${projectId}/${dataset}/${project.image.asset._ref
            .replace('image-', '')
            .replace('-png', '.png')
            .replace('-jpg', '.jpg')
            .replace('-jpeg', '.jpeg')
            .replace('-webp', '.webp')}` : ''}" 
          alt="${project.title}" class="card-img-top card__img" style="max-height: 200px; object-fit: cover;" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${project.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${project.tech ? project.tech.join(', ') : ''}</h6>
          <div class="card__division" style="height: 2px; width: 63%; background-color: #5c6a66; margin-bottom: 0.5rem;"></div>
          <p class="card-text flex-grow-1">${project.description || ''}</p>
          <div class="mt-auto d-flex gap-2">
            <a href="${project.githubLink || '#'}" target="_blank" class="btn btn-primary">Github</a>
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn btn-secondary">Live site</a>` : ''}
          </div>
        </div>
      </div>
    `;
    container.appendChild(projectCard);
  });
}

// Load about section data
async function loadAboutSection() {
  try {
    const query = '*[_type == "about"][0]';
    const aboutData = await fetchSanityData(query);
    if (aboutData) {
      const aboutBioEl = document.getElementById('about-bio');
      const aboutBackgroundEl = document.getElementById('about-background');
      const aboutImageEl = document.getElementById('about-image');
      if (aboutBioEl && aboutData.bio) aboutBioEl.textContent = aboutData.bio;
      if (aboutBackgroundEl && aboutData.background) aboutBackgroundEl.textContent = aboutData.background;
      if (aboutImageEl && aboutData.image) {
        const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${aboutData.image.asset._ref
          .replace('image-', '')
          .replace('-png', '.png')
          .replace('-jpg', '.jpg')
          .replace('-jpeg', '.jpeg')
          .replace('-webp', '.webp')}`;
        aboutImageEl.src = imageUrl;
      }
    }
    return true;
  } catch (error) {
    console.error("Error loading about section:", error);
    return false;
  }
}

// Load contact information
async function loadContactInfo() {
  try {
    const query = '*[_type == "contact"][0]';
    const contactData = await fetchSanityData(query);
    if (contactData) {
      const emailEl = document.getElementById('contact-email');
      const githubEl = document.getElementById('contact-github');
      const linkedinEl = document.getElementById('contact-linkedin');
      const additionalInfoEl = document.getElementById('contact-additional-info');
      if (emailEl && contactData.email) {
        emailEl.textContent = contactData.email;
        emailEl.href = `mailto:${contactData.email}`;
      }
      if (githubEl && contactData.github) {
        githubEl.textContent = 'GitHub Profile';
        githubEl.href = contactData.github;
      }
      if (linkedinEl && contactData.linkedin) {
        linkedinEl.textContent = 'LinkedIn Profile';
        linkedinEl.href = contactData.linkedin;
      }
      if (additionalInfoEl && contactData.additionalInfo) {
        additionalInfoEl.textContent = contactData.additionalInfo;
      }
    }
    return true;
  } catch (error) {
    console.error("Error loading contact info:", error);
    return false;
  }
}

// Load skills data
async function loadSkills() {
  try {
    const query = '*[_type == "skill"]';
    const skillsData = await fetchSanityData(query);
    if (skillsData && skillsData.length > 0) {
      const skillsContainer = document.getElementById('skills-container');
      if (!skillsContainer) {
        console.error("Skills container (#skills-container) not found.");
        return false; 
      }
      skillsContainer.innerHTML = '';
      skillsData.forEach(skill => {
        const iconUrl = skill.icon ? 
          `https://cdn.sanity.io/images/${projectId}/${dataset}/${skill.icon.asset._ref
            .replace('image-', '')
            .replace('-png', '.png')
            .replace('-jpg', '.jpg')
            .replace('-jpeg', '.jpeg')
            .replace('-webp', '.webp')}` : '';
        
        const skillItem = document.createElement('div');
        // Added Bootstrap column classes for responsive grid layout
        skillItem.className = 'col-6 col-md-4 col-lg-2 mb-4 text-center skill-item'; 
        skillItem.innerHTML = `
          <div class="skill-icon mb-2">
            <img src="${iconUrl}" alt="${skill.title}" style="width: 60px; height: 60px; object-fit: contain;" />
          </div>
          <h6 class="skill-title">${skill.title}</h6>
        `;
        skillsContainer.appendChild(skillItem);
      });
    }
    return true;
  } catch (error) {
    console.error("Error loading skills:", error);
    return false;
  }
}

// Initialize all sections in the correct order
document.addEventListener('DOMContentLoaded', () => {
  loadHeroSection()
    .then(() => loadAboutSection())
    .then(() => loadSkills())
    .then(() => loadProjects())
    .then(() => loadContactInfo())
    .catch(error => {
      console.error("Error during initial content loading sequence:", error);
    });
}); 
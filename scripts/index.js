// Open menu bar
const openMenuBar = () => {
  const menuBar = document.getElementById('the-menu-bar');
  const menuBarOverlay = document.getElementById('menu-bar-overlay');
  menuBar.addEventListener('click', () => {
    menuBarOverlay.style.display = 'block';
  });
};
openMenuBar();

// Close menu bar
function closeMenuBar() {
  document.getElementById('menu-bar-overlay').style.display = 'none';
}

// Open mobile menu options
const menuOptions = document.querySelectorAll('.menu-options');
const mobileMenuOpts = () => {
  menuOptions.forEach((menuOption) => {
    menuOption.addEventListener('click', () => {
      closeMenuBar();
    });
  });
};
mobileMenuOpts();

// Creat and Display Projects Section

const workSection = [
  {
    id: 1,
    title: 'My To-Do List',
    description: 'A React to-do list that allows you to enter the date, time and activity information.',
    featured_image: 'images/tonic_one.svg',
    alt_message: 'My_ToDo_Project',
    overview: ['CANOPY', 'Full Stack Dev', 2022],
    overview_image: 'images/circle.svg',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://track92.github.io/My-To-Do-List/',
    liveSource: 'https://github.com/TracK92/My-To-Do-List.git',
  },
  {
    id: 2,
    title: 'Awesome Books',
    description: 'A simple library that allows you to add and remove books from a list.',
    featured_image: 'images/multi-stories.png',
    alt_message: 'My_Multi_Stories_Project',
    overview: ['CANOPY', 'Full Stack Dev', 2022],
    overview_image: 'images/circle.svg',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://track92.github.io/Awesome-Books-ES6-Modules/',
    liveSource: 'https://github.com/TracK92/Awesome-Books-ES6-Modules.git',
  },
  {
    id: 3,
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/tonic-project.png',
    alt_message: 'My_Tonic_Project',
    overview: ['CANOPY', 'Full Stack Dev', 2022],
    overview_image: 'images/circle.svg',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://track92.github.io/Portfolio-mobile-version-skeleton/',
    liveSource: 'https://github.com/TracK92/Portfolio-mobile-version-skeleton.git',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/multi_stories_two.png',
    alt_message: 'My_Multi_Stories_Project',
    overview: ['CANOPY', 'Full Stack Dev', 2022],
    overview_image: 'images/circle.svg',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://track92.github.io/Portfolio-mobile-version-skeleton/',
    liveSource: 'https://github.com/TracK92/Portfolio-mobile-version-skeleton.git',
  },
];
// Create Project Section
function CreateProject(myArray, index) {
  const worksSect = document.querySelector('#portfolio-sect');
  worksSect.classList.add('works-sect');

  const projects = document.createElement('div');
  projects.classList.add('projects');
  worksSect.appendChild(projects);

  const projectOne = document.createElement('div');
  projectOne.classList.add('oneProject');
  projects.appendChild(projectOne);

  const articles = document.createElement('div');
  articles.classList.add('articles');
  projectOne.appendChild(articles);

  const articleOne = document.createElement('article');
  articleOne.classList.add('article-one');
  articleOne.innerHTML = `<img class='main-img' src="${myArray[index].featured_image}" alt="${myArray[index].alt_message}">`;
  articles.appendChild(articleOne);

  const articleTwo = document.createElement('article');
  articleTwo.classList.add('article-two');
  articles.appendChild(articleTwo);

  const headingTwo = document.createElement('h2');
  headingTwo.classList.add('tonic');
  headingTwo.innerHTML = `${myArray[index].title}`;
  articleTwo.appendChild(headingTwo);

  const description = document.createElement('div');
  description.classList.add('description');
  articleTwo.appendChild(description);

  const headingFive = document.createElement('h5');
  headingFive.classList.add('descript');
  headingFive.innerHTML = `${myArray[index].overview[0]}`;
  description.appendChild(headingFive);

  const unorderedList = document.createElement('ul');
  description.appendChild(unorderedList);

  const listOne = document.createElement('li');
  listOne.innerHTML = `<img src="${myArray[index].overview_image}" alt="circle">`;
  unorderedList.appendChild(listOne);

  const listTwo = document.createElement('li');
  listTwo.innerHTML = `${myArray[index].overview[1]}`;
  unorderedList.appendChild(listTwo);

  const listThree = document.createElement('li');
  listThree.innerHTML = `<img src="${myArray[index].overview_image}" alt="circle">`;
  unorderedList.appendChild(listThree);

  const listFour = document.createElement('li');
  listFour.innerHTML = `${myArray[index].overview[2]}`;
  unorderedList.appendChild(listFour);

  const textSect = document.createElement('div');
  textSect.classList.add('text-sect');
  articleTwo.appendChild(textSect);

  const textDescription = document.createElement('p');
  textDescription.classList.add('text-description');
  textDescription.innerHTML = `${myArray[index].description}`;
  textSect.appendChild(textDescription);

  const languages = document.createElement('div');
  languages.classList.add('languages');
  articleTwo.appendChild(languages);

  const unorderedListTwo = document.createElement('ul');
  languages.appendChild(unorderedListTwo);

  const listLanguagesOne = document.createElement('li');
  listLanguagesOne.innerHTML = `${myArray[index].technologies[0]}`;
  unorderedListTwo.appendChild(listLanguagesOne);

  const listLanguagesTwo = document.createElement('li');
  listLanguagesTwo.innerHTML = `${myArray[index].technologies[1]}`;
  unorderedListTwo.appendChild(listLanguagesTwo);

  const listLanguagesThree = document.createElement('li');
  listLanguagesThree.innerHTML = `${myArray[index].technologies[2]}`;
  unorderedListTwo.appendChild(listLanguagesThree);

  const seeProjectOption = document.createElement('div');
  articleTwo.appendChild(seeProjectOption);

  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('see_project');
  seeProjectBtn.id = `${myArray[index].id}`;
  seeProjectBtn.innerHTML = 'See Project';
  seeProjectOption.appendChild(seeProjectBtn);
}
const displayProject = () => {
  const projectCardCount = [0, 1, 2, 3];
  projectCardCount.map((position) => CreateProject(workSection, position));
};
displayProject();

// POPUP WINDOWS
const checkProjects = document.querySelectorAll('.see_project');
const closePopupIcons = document.querySelectorAll('.popup-icon');
const mobilePopup = document.querySelector('.mobile-popup-window');
const desktopPopup = document.querySelector('.desktop-popup-window');
const projectImage = document.querySelector('.project-img');
const desktopProjectImage = document.querySelector('.desktop-project-img');
const projectTitle = document.querySelector('.popupheading');
const desktopPopupHeading = document.querySelector('.desktopPopupheading');

function addPopupImage(seeProjectId) {
  for (let i = 0; i < workSection.length; i += 1) {
    const workProject = workSection[i];
    if (workProject.id === seeProjectId) {
      projectImage.innerHTML = `<img class="main-img" src="${workProject.featured_image}" alt="${workProject.alt_message}">`;
      desktopProjectImage.innerHTML = `<img class="desktop-img-popup" src="${workProject.featured_image}" alt="${workProject.alt_message}">`;
      projectTitle.innerHTML = `${workProject.title}`;
      desktopPopupHeading.innerHTML = `${workProject.title}`;
    }
  }
}
// Open Popup Windows
const viewProjectDetails = () => {
  checkProjects.forEach((singleProject) => {
    singleProject.addEventListener('click', () => {
      if (Number(singleProject.id) === 1) {
        mobilePopup.style.display = 'block';
        desktopPopup.style.display = 'block';
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 2) {
        mobilePopup.style.display = 'block';
        desktopPopup.style.display = 'block';
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 3) {
        mobilePopup.style.display = 'block';
        desktopPopup.style.display = 'block';
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 4) {
        mobilePopup.style.display = 'block';
        desktopPopup.style.display = 'block';
        addPopupImage(Number(singleProject.id));
      }
    });
  });
};
viewProjectDetails();

// Close Project Popups
const closeProjectPopups = () => {
  closePopupIcons.forEach((closePopupIcon) => {
    closePopupIcon.addEventListener('click', () => {
      mobilePopup.style.display = 'none';
      desktopPopup.style.display = 'none';
    });
  });
};
closeProjectPopups();

// View Live Project
const seeLiveBtns = document.querySelectorAll('.see_live');
const viewLiveProject = () => {
  seeLiveBtns.forEach((seeLiveBtn) => {
    seeLiveBtn.addEventListener('click', () => {
      workSection.map((project) => window.open(project.liveVersion, '_blank'));
    });
  });
};
viewLiveProject();

// View Source Code
const seeSourceBtns = document.querySelectorAll('.see_source');
const viewSourceCode = () => {
  seeSourceBtns.forEach((seeSourceBtn) => {
    seeSourceBtn.addEventListener('click', () => {
      workSection.map((project) => window.open(project.liveSource, '_blank'));
    });
  });
};
viewSourceCode();

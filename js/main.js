import '../css/style.css'

const resumeData = {
  name: "Смоляков Иван",
  title: "Full-Stack Разработчик/Маркетолог",
  photo: "media/me.jpg",
  experience: [
    { role: "Маркетолог", company: "Фриланс", period: "Март 2024 - Настоящее время", desc: "Разработка сайтов под ключ при помощи no-code и code инструментов (Лендинги, Квиз-сайты, Интернет магазины); Настройка контекстной рекламы; Создание продающего видеоконтента;" },
    { role: "Python разработчик", company: "Фриланс", period: "Декабрь 2024 - Настоящее время", desc: "Разработка Telegram ботов; Участие в различных проектах в роли python разработчика" },
  ],
  edicatinon: [
    { degree: "Фулстек разработка", year: "2023-2027", insititution: "РТУ МИРЭА" },
    { degree: "Комплексный онлайн маркетнг", year: "2024", insititution: "Grind University (онлайн курс)" },
    { degree: "Взлом конверсии X (онлайн маркетнг)", year: "2025", insititution: "Surgay.ru (онлайн курс)" },
    { degree: "Digital-marketing по программе НИУ ВШЭ", year: "2025", insititution: "Surgay.ru (онлайн курс)" },
  ],
  languages: [
    { name: "Русский", level: 100 },
    { name: "English", level: 75 },
    { name: "Français", level: 5 }
  ],
  tools: {
    design: [
      { name: "Figma", image: "media/Figma.png", link: "https://www.figma.com/" },
      { name: "Photoshop", image: "media/PhotoshopLogo.png", link: "https://www.adobe.com/ru/products/photoshop.html" },
      { name: "Premiere Pro", image: "media/PremiereProLogo.png", link: "https://www.adobe.com/products/premiere.html" },
      { name: "DaVinchi Resolve", image: "media/DavinciLogo.png", link: "https://www.blackmagicdesign.com/products/davinciresolve" }
    ],
    nocode: [
      { name: "Tilda", image: "media/TildaLogo.png", link: "https://tilda.cc/ru/" },
      { name: "WordPress", image: "media/WordPressLogo.png", link: "https://wordpress.com/ru/" }
    ],
    ai: [
      { name: "GPT", image: "media/GptLogo.png", link: "https://chatgpt.com/" },
      { name: "Grok", image: "media/GrokLogo.png", link: "https://grok.com/" },
      { name: "Flux", image: "media/KreaLogo.jpeg", link: "https://www.krea.ai/image" },
    ]
  },
  interests: ["Видеоигры", "Спорт", "ИИ", "Видеосъемка", "Монтаж"]
};

function renderSite() {
  const app = document.getElementById("app");

  const photoSection = document.createElement("section");
  photoSection.className = "profile-photo-section";
  const photo = document.createElement("img");
  photo.src = resumeData.photo;
  photo.alt = "Profile photo";
  photo.className = "profile-photo";
  photoSection.appendChild(photo);
  app.appendChild(photoSection);

  const infoSection = document.createElement("section");
  infoSection.className = "profile-info-section";
  const greeting = document.createElement("p");
  greeting.textContent = "Привет, меня зовут";
  const name = document.createElement("h1");
  name.textContent = resumeData.name;
  const title = document.createElement("h2");
  title.textContent = resumeData.title;
  infoSection.appendChild(greeting);
  infoSection.appendChild(name);
  infoSection.appendChild(title);
  app.appendChild(infoSection);

  const langSection = document.createElement("section");
  langSection.className = "lang";
  const langH1 = document.createElement("h1");
  langH1.textContent = "Языки";
  langSection.appendChild(langH1);
  resumeData.languages.forEach(lang => {
    const langDiv = document.createElement("div");
    langDiv.innerHTML = `<strong>${lang.name}</strong>`;
    const progressBar = document.createElement("div");
    progressBar.style.width = `${lang.level}%`;
    progressBar.style.height = "20px";
    progressBar.style.backgroundColor = "#4CAF50";
    progressBar.style.borderRadius = "5px";
    langDiv.appendChild(progressBar);
    langSection.appendChild(langDiv);
  });
  app.appendChild(langSection);

  const expSection = document.createElement("section");
  expSection.className = "exp";
  const expH1 = document.createElement("h1");
  expH1.textContent = "Опыт";
  expSection.appendChild(expH1);
  resumeData.experience.forEach(job => {
    const jobDiv = document.createElement("div");
    jobDiv.className = "jobDiv";
    jobDiv.innerHTML = `<strong>${job.role}</strong> - ${job.company} (${job.period})<br>${job.desc}`;
    expSection.appendChild(jobDiv);
  });
  app.appendChild(expSection);

  const toolsSection = document.createElement("section");
  toolsSection.className = "tools";
  const toolsH1 = document.createElement("h1");
  toolsH1.textContent = "Инструменты";
  toolsSection.appendChild(toolsH1);
  for (const category in resumeData.tools) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "tool-category";
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categoryDiv.appendChild(categoryTitle);
    const toolsContainer = document.createElement("div");
    toolsContainer.className = "tools-container";
    resumeData.tools[category].forEach(tool => {
      const toolDiv = document.createElement("div");
      toolDiv.innerHTML = `<a href="${tool.link}" target="_blank"><img src="${tool.image}" alt="${tool.name}"></a>`;
      toolsContainer.appendChild(toolDiv);
    });
    categoryDiv.appendChild(toolsContainer);
    toolsSection.appendChild(categoryDiv);
  }
  app.appendChild(toolsSection);

  const eduSection = document.createElement("section");
  eduSection.className = "edu";
  const eduH1 = document.createElement("h1");
  eduH1.textContent = "Образование";
  eduSection.appendChild(eduH1);
  resumeData.edicatinon.forEach(edu => {
    const eduDiv = document.createElement("div");
    eduDiv.className = "eduDiv";
    eduDiv.innerHTML = `<strong>${edu.degree}</strong> - ${edu.insititution} ${edu.year}`;
    eduSection.appendChild(eduDiv);
  });
  app.appendChild(eduSection);

  const interestsSection = document.createElement("section");
  interestsSection.className = "interest";
  const interestsH1 = document.createElement("h1");
  interestsH1.textContent = "Интересы";
  interestsSection.appendChild(interestsH1);
  resumeData.interests.forEach(interest => {
    const interestDiv = document.createElement("div");
    interestDiv.className = "interestDiv";
    interestDiv.textContent = interest;
    interestsSection.appendChild(interestDiv);
  });
  app.appendChild(interestsSection);

  const contactSection = document.createElement("section");
  contactSection.className = "contact-info";
  const contactH2 = document.createElement("h2");
  contactH2.textContent = "Контакты";
  contactSection.appendChild(contactH2);
  const socials = [
  { name: "VK", image: "media/VkLogo.png", link: "https://vk.com/facelessgod123" },
  { name: "Telegram", image: "media/telegramLogo.png", link: "https://t.me/i1vanch0s" },
  ];
  socials.forEach(social => {
  const socialDiv = document.createElement("div");
  socialDiv.innerHTML = `<a href="${social.link}" target="_blank"><img src="${social.image}" alt="${social.name}"></a>`;
  contactSection.appendChild(socialDiv);
  });
  const phone = document.createElement("p");
  phone.innerHTML = `<strong>Телефон:</strong> <a href="tel:+79154165738">+79154165738</a>`;
  const email = document.createElement("p");
  email.innerHTML = `<strong>Email:</strong> <a href="mailto:1vanch0s133@gmail.com">1vanch0s133@gmail.com</a>`;
  contactSection.appendChild(phone);
  contactSection.appendChild(email);
  app.appendChild(contactSection);

  const downloadButton = document.createElement("button");
  downloadButton.textContent = "Скачать резюме в PDF";
  downloadButton.className = "download-button";
  const pdfLink = document.createElement("a");
  pdfLink.href = "media/resume.pdf"; 
  pdfLink.download = "media/resume.pdf"; 
  pdfLink.appendChild(downloadButton);
  app.appendChild(pdfLink); 
  
};

document.addEventListener("DOMContentLoaded", renderSite);
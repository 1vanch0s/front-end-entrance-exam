import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const resumeData = {
  name: "Смоляков Иван",
  title: "Full-Stack Разработчик/Маркетолог",
  photo: " ",
  experience:[
    {role: "Маркетолог", company: "Фриланс", period: "Март 2024 - Настоящее время", desc: "Разработка сайтов под ключ при помощи no-code и code инструментов (Лендинги, Квиз-сайты, Интернет магазины); Настройка контекстной рекламы; Создание продающего видеоконтента;"},
    {role: "Python разработчик", company: "Фриланс", period: "Декабрь 2024 - Настоящее время", desc: "Разработка Telegram ботов; Участие в различных проектах в роли python разработчика"},
  ],
  edicatinon: [
    {degree: "Фулстек разработка", year: "2023-2027", insititution: "РТУ МИРЭА" },
    {degree: "Комплексный онлайн маркетнг", year: "2024", insititution: "Grind University (онлайн курс)"},
    {degree: "Взлом конверсии X (онлайн маркетнг)", year: "2025", insititution: "Surgay.ru (онлайн курс)"},
    {degree:"Digital-marketing по программе НИУ ВШЭ", year:"2025", insititution:"Surgay.ru (онлайн курс)"},

  ],
  languages: [
    {name:"Русский", level: 100},
    {name:"English", level: 75},
    {name:"Français", level: 5}
  ],
  tools: {
    design: [
      { name: "Дизайн", image: "path/to/design-logo.png", link: "https://example.com/design" }
    ],
    nocode: [
      { name: "No-code", image: "path/to/nocode-logo.png", link: "https://example.com/nocode" }
    ],
    ai: [
      { name: "ИИ", image: "path/to/ai-logo.png", link: "https://example.com/ai" }
    ]
  },
  interests: ["Видеоигры", "Спорт", "ИИ", "Видеосъемка", "Монтаж"]

};

function renderSite() {
  const app = document.getElementById("app");

  const header = document.createElement("header");
  const name = document.createElement("h1");
  name.textContent = resumeData.name;
  const title = document.createElement('h2');
  title.textContent = resumeData.title;
  header.appendChild(name);
  header.appendChild(title);
  app.appendChild(header);

  
  const expSection = document.createElement("section");
  const expH1 = document.createElement("h1");
  expH1.textContent = "Опыт"; 
  expSection.appendChild(expH1); 
  resumeData.experience.forEach(job => {
    const jobDiv = document.createElement("div");
    jobDiv.innerHTML = `<strong>${job.role}</strong> - ${job.company} (${job.period})<br>${job.desc}`;
    expSection.appendChild(jobDiv);
  });
  app.appendChild(expSection);

  const eduSection = document.createElement("section");
  resumeData.edicatinon.forEach(edu=>{
    const eduDiv = document.createElement("div");
    eduDiv.innerHTML = `<strong>${edu.degree}</strong> - ${edu.insititution} ${edu.year}`;
    eduSection.appendChild(eduDiv);
  });
  app.appendChild(eduSection);

  const langSection = document.createElement("section");
  const langH1 = document.createElement("h1");
  langH1.textContent = "Языки"; 
  langSection.appendChild(langH1); 
  resumeData.languages.forEach(lang=>{
    const langDiv = document.createElement("div");
    langDiv.innerHTML=`<strong>${lang.name}</strong>`;
    const progressBar = document.createElement("div");
    progressBar.style.width = `${lang.level}%`; 
    progressBar.style.height = "20px"; 
    progressBar.style.backgroundColor = "#4CAF50"; 
    progressBar.style.borderRadius = "5px"; 
    langDiv.appendChild(progressBar);
    langSection.appendChild(langDiv);
    langSection.appendChild(langDiv);
  });
  app.appendChild(langSection);

  const toolsSection = document.createElement("section");
const toolsH1 = document.createElement("h1");
toolsH1.textContent = "Инструменты";
toolsSection.appendChild(toolsH1);


for (const category in resumeData.tools) {
  const categoryDiv = document.createElement("div");
  categoryDiv.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Заголовок подкатегории (например, "Design")
  resumeData.tools[category].forEach(tool => {
    const toolDiv = document.createElement("div");
    toolDiv.innerHTML = `<a href="${tool.link}"><strong>${tool.name}</strong></a>`; // Пока текст, позже заменим на img
    categoryDiv.appendChild(toolDiv);
  });
  toolsSection.appendChild(categoryDiv);
}
app.appendChild(toolsSection);

  const interestsSection = document.createElement("section");
  const interestsH1 = document.createElement("h1");
  interestsH1.textContent = "Интересы"; 
  interestsSection.appendChild(interestsH1); 
  resumeData.interests.forEach(interest => {
    const interestDiv = document.createElement("div");
    interestDiv.textContent = interest;
    interestsSection.appendChild(interestDiv);
});
app.appendChild(interestsSection);

}

document.addEventListener("DOMContentLoaded", renderSite);
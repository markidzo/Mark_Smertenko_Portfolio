

// ===== SCROLL =====
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// ===== ANIMATION =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// ===== LANGUAGE =====
const translations = {
    ua: {
        nav_home: "Головна",
        nav_about: "Про мене",
        nav_projects: "Проєкти",
        nav_contact: "Контакти",
        hero_title: "Python Developer",
        hero_sub: "ML Enthusiast | Web Developer",
        hero_btn: "Мої проєкти",
        about_title: "Про мене",
        about_text: "Мене звати Марк, я junior Python-розробник із практичним досвідом у машинному навчанні, веб-розробці та роботі з даними. Розробляю власні проєкти, де поєдную програмування з вирішенням реальних задач. Є учасником і переможцем двох національних IT-конкурсів.Зараз шукаю можливість стажування, щоб поглибити технічні навички та отримати комерційний досвід.",
        skills_title: "Навички",
        sertif_eng: "Сертифікат",
        educ_title: "Освіта",
        educ1: "Вища середня освіта 2016-2027",
        educ2: "Успішне проходження курсу Web development 2023-2025",
        web_sert: "Сертифікат",
        educ3: "КПНЗ 'КИЇВСЬКА МАЛА АКАДЕМІЯ НАУК УЧНІВСЬКОЇ МОЛОДІ' 2025-2026",
        educ4: "Успішне проходження 3-х курсів робототехніки 2019-2022",
        educ5: "Успішне проходження курсу Python 2020-2021",
        projects_title: "Проєкти",
        proj1: "Інтелектуальна система акустичного виявлення несправностей",
        proj2: "Система складського обліку",
        proj3: "Інтернет-магазин",
        achiev_title: "Досягнення",
        achiev1: "1 місце на національному етапі конкурсу INFOMATRIX",
        achiev2: "2 місце у конкурсі Мала академія наук України",
        achiev3: "Розробив та успішно натренував нейромережу для класифікації промислових несправностей",
        achiev4: "Створив напівавтоматизовану систему підготовки даних для навчання моделі (Python)",
        achiev5: "4 роки досвіду в робототехніці; робота з Arduino та Raspberry Pi",
        contact_title: "Контакти",
        why: "Чому?",
        acoust_und_head: "Інтелектуальна система акустичного виявлення несправностей",
        why_text: "Акустична діагностика має значний потенціал для раннього виявлення несправностей. Однак наразі не має усталеної стандартизації, на відміну від вібраційного контролю, який регламентується міжнародними стандартами ISO. Водночас акустичний моніторинг має такі переваги:",
        why_1: " • забезпечує безконтактний контроль обладнання",
        why_2: " • дозволяє виявляти дефекти на ранніх стадіях їх розвитку",
        why_3: "• охоплює більшу зону моніторингу одним датчиком",
        why_4: "• є простішим та дешевшим у впровадженні",
        why_5: "• у поєднанні з ШІ дозволяє ефективніше аналізувати сигнали у шумному середовищі",
        diagrama: "Архітектура системи",
        apar: "Апаратне забезпечення",
        apar_aud: "аудіоплата",
        apar_aud_ras: "одноплатний комп'ютер",
        prog: "Програмне забезпечення",
        obr_title: "Обробка аудіо даних",
        obr_1: "- Дискретизація з частотою 16 кГц",
        obr_2: "- Сегментація сигналу",
        obr_3: "- Застосування швидкого перетворення Фур’є (FFT)",
        obr_4: "- Формування мел-спектрограми",
        net_1: "Нейромережа",
        net_2: "- Тип моделі: згорткова нейронна мережа (CNN)",
        net_3: "- Вхід: мел-спектрограма",
        net_4: "- Вихід: ймовірності належності до класів",
        net_5: "Класи акустичних подій:",
        net_6: "- Пошкодження підшипників",
        net_7: "- Витік газу",
        net_8: "- Електричне іскріння",
        net_9: "- Витік води",
        net_10: "- Металеве тертя",
        net_11: "- Металевий удар",
        ui: "Візуалізація результатів",
        ui_1: "- Відображення поточного стану системи за допомогою графіку",
        ui_2: "- Індикація аномалій",
        perevag: "Переваги",
        perev_1: "Низька вартість",
        perev_2: "Автономна робота",
        perev_3: "Легка маштабованість",
        perev_4: "Можливість інтеграції у промислові системи моніторингу",
        result: "Результати",
        perev_5: "Робота в режимі реального часу",
        perev_6: "Виконання моделі на периферійному пристрої",
        perev_7: "Значення метрики F1 до 0,95",
        perev_8: "Низьке обчислювальне навантаження",
        shema: "Схема пристрою",
        compet: "Перше місце на національному конкурсі INFOMATRIX"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_title: "Python Developer",
        hero_sub: "ML Enthusiast | Web Developer",
        hero_btn: "My Projects",
        about_title: "About Me",
        about_text: "My name is Mark, and I am a junior Python developer with hands-on experience in machine learning, web development, and data processing. I build my own projects where I combine programming with solving real-world problems. I am also a participant and winner of two national IT competitions.Currently, I am looking for an internship opportunity to deepen my technical skills and gain practical industry experience.",
        skills_title: "Skills",
        sertif_eng: "Qualification",
        educ_title: "Education",
        educ1: "Upper secondary education 2016-2027",
        educ2: "Successful completion of the web development course 2023-2025",
        web_sert: "Qualification",
        educ3: "'KYIV JUNIOR ACADEMY OF SCIENCES' 2025-2026'",
        educ4: "Successful completion of 3 robotics courses 2019-2022",
        educ5: "Successful completion of the Python course 2020-2021",
        projects_title: "Projects",
        proj1: "Intelligent acoustic fault detection system",
        proj2: "Warehouse management system",
        proj3: "Online store",
        achiev_title: "Achievement",
        achiev1: "1st place at the national stage of the INFOMATRIX competition",
        achiev2: "2nd place in the competition of the Small Academy of Sciences of Ukraine",
        achiev3: "Developed and successfully trained a neural network for industrial fault classification",
        achiev4: "Created a semi-automated data preparation system for model training (Python)",
        achiev5: "4 years of experience in robotics; working with Arduino and Raspberry Pi",
        contact_title: "Contact",
        why: "Why?",
        acoust_und_head: "Intelligent acoustic fault detection system",
        why_text: "Acoustic diagnostics has significant potential for early fault detection. However, it currently lacks established standardization, unlike vibration monitoring, which is regulated by international ISO standards. At the same time, acoustic monitoring has the following advantages:",
        why_1: " • provides contactless control of equipment",
        why_2: " • allows you to detect defects in the early stages of their development",
        why_3: "• covers a larger monitoring area with one sensor",
        why_4: "• is simpler and cheaper to implement",
        why_5: "• combined with AI allows for more efficient analysis of signals in noisy environments",
        diagrama: "System architecture",
        apar: "Hardware",
        apar_aud: "audio card",
        apar_aud_ras: "single-board computer (SBC)",
        prog: "Software",
        obr_title: "Audio data processing",
        obr_1: "- Sampling frequency 16 kHz",
        obr_2: "- Signal segmentation",
        obr_3: "- Applying the Fast Fourier Transform (FFT)",
        obr_4: "- Formation of mel-spectrogram",
        net_1: "Neural network",
        net_2: "- Model type: convolutional neural network (CNN)",
        net_3: "- Input: mel-spectrogram",
        net_4: "- Output: class membership probabilities",
        net_5: "Clasification of acoustic events:",
        net_6: "- Bearing fault",
        net_7: "- Gas leak",
        net_8: "- Electric noise",
        net_9: "- Water leak",
        net_10: "- Friction",
        net_11: "- Impact",
        ui: "User Interface",
        ui_1: "- Displaying the current system status using a graph",
        ui_2: "- Anomalies detection",
        perevag: "Advantages",
        perev_1: "Lower price",
        perev_2: "Autonomous work",
        perev_3: "Easy scalability",
        perev_4: "Possibility of integration into industrial monitoring systems",
        result: "Results",
        perev_5: "Real-time operation",
        perev_6: "Running the model on a Edge device",
        perev_7: "F1 metric value up to 0.95",
        perev_8: "Low computational load",
        shema: "Device diagram",
        compet: "First place in the national competition INFOMATRIX"
    }
};

function setLang(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[lang][key];
    });
    localStorage.setItem("lang", lang);
}

setLang(localStorage.getItem("lang") || "ua");




const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});
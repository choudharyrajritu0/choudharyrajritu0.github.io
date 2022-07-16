AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "FreeLancer as a Bug Hunter",
    cardImage: "assets/images/experience-page/bug_bounty.png",
    place: "Bug hunter at google microsoft and private websites",
    time: "(since Dec 2021)",
    desp: "<li>Found bugs into more than 20+ Companies like Google, Cisco, Nykaa, Indiamart, etc.</li>",
  },
  {
    title: "Testing Engineer Intern ",
    cardImage: "assets/images/experience-page/artyvis.jpg",
    place: "Artyvis",
    time: "(April, 2022 - present)",
    desp: "<li>Working  as a tester for APIs, UI, Quality assurance (QA), Security.</li> <li>Maintaing the website for bug free and worked for sitemaps for the whole website(SEO) </li>",
  },
  {
    title: "Cyber Security Instructor",
    cardImage: "assets/images/experience-page/build_my_projects.jpg",
    place: "Build my project",
    time: "(Aug - Nov, 2021)",
    desp: " <li>Worked as a ethical hacking trainer. </li> <li>Speaker for the workshops.</li> <li>Worked on the projects",
  },
  // {
  //   title: "Research Intern",
  //   cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
  //   place: "IIT, Bombay",
  //   time: "(Dec, 19 - Jan, 20)",
  //   desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Google",
    description:
      "HALL OF FAME .",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `    
      <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">    
      <div class="card card1" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" >
      
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Participation

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Hackathon",
    subtitle: "Selected",
    image: "assets/images/experience-page/uplift.png",
    desp: "The Narcotics Control Bureau, Ministry of Home Affairs is organizing a Hackathon titled Darkathon 2022 to find solutions to trafficking of drugs through darkweb.",
  },
  {
    title: "Hacktober Fest 2021",
    subtitle: "Open source Cotributer",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Cotributed for the open source on github and won the swags,T-shirts.",
  },
  {
    title: "Workshop",
    subtitle: "Speaker",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "Deliverd two days workshop for  Cyber security.",
  },
  {
    title: "Microsoft Engaged Program 2022",
    subtitle: "Selected",
    image: "assets/images/experience-page/elevate.png",
    desp: "Selcted for Microsft Engaged program 2022  but at last round got Disqualified",
  },
  {
    title: "Try hack me ",
    subtitle: "TOP 1%",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "Foe Try hack me site i was in top 1% form the entire user in the website for 2021.",
  },
  {
    title: "TCS hack Quest",
    subtitle: "cleared",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "cleared the hack quest orgnised by TCS.",
  },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  // },
  {
    title: "Hacktober fest 2020",
    subtitle: "contributer",
    image: "assets/images/experience-page/hack3.png",
    desp: "Cotributed for the open source on github and won the swags,T-shirts",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

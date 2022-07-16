AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Microsoft Technology Associate: Security Fundamentals",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://support.microsoft.com/en-us/topic/earn-a-microsoft-technology-associate-mta-certification-357215d0-31ce-0620-feba-1bb60165b770",
  },
  {
    title: "Cryptography",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/",
  },
  {
    title: "Introduction to HTML 5",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
  {
    title: "Computer Networking",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "Intro to React",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://www.edx.org/learn/reactjs",
  },
  {
    title: "GOOGLE Digital marketing",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:
      "https://grow.google/intl/en_in/certificates/?utm_source=paid&utm_medium=essence&utm_campaign=in-dr-q22022-sem-BKWS-EXA-txt-Digital-Marketing-Course&gclid=CjwKCAjwy_aUBhACEiwA2IHHQFaSHTyumgejyvY4ABr9jejK4-DBl-GypbTxDCf5PKnonr-cGi4e1xoCek0QAvD_BwE&gclsrc=aw.ds",
  },
  {
    title: "Cisco Cybersecurity Essentials ",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials",
  },
  {
    title: "AWS Certified Solutions Architect",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://acloudguru.com/learning-paths/aws-architect",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});

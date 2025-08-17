//About section code from line 67.
//Education section code 272..
//projects section code 342
//skill section code 355

// Navbar section code.
document.addEventListener("DOMContentLoaded", function () {
  // Initialize feather icons
  feather.replace();

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  let isOpen = false;

  mobileMenuButton.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.remove("max-h-0");
      mobileMenu.classList.add("max-h-96");
      menuIcon.innerHTML = feather.icons.x.toSvg(); // Set to close icon
    } else {
      mobileMenu.classList.remove("max-h-96");
      mobileMenu.classList.add("max-h-0");
      menuIcon.innerHTML = feather.icons.menu.toSvg(); // Set to menu icon
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll("#mobileMenu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      isOpen = false;
      mobileMenu.classList.remove("max-h-96");
      mobileMenu.classList.add("max-h-0");
      menuIcon.innerHTML = feather.icons.menu.toSvg(); // Set back to menu icon
    });
  });
});

//About section code

document.addEventListener("DOMContentLoaded", function () {
  // Initialize feather icons
  feather.replace();

  // Animation for about section
  const animateElements = () => {
    const aboutHeader = document.getElementById("about-header");
    const profileImage = document.getElementById("profile-image");
    const decorativeCircle1 = document.getElementById("decorative-circle-1");
    const decorativeCircle2 = document.getElementById("decorative-circle-2");

    // Simple fade-in animation for header
    aboutHeader.style.opacity = "0";
    aboutHeader.style.transform = "translateY(20px)";
    setTimeout(() => {
      aboutHeader.style.transition =
        "opacity 0.5s ease-out, transform 0.5s ease-out";
      aboutHeader.style.opacity = "1";
      aboutHeader.style.transform = "translateY(0)";
    }, 300);

    // Profile image animation
    profileImage.style.opacity = "0";
    profileImage.style.transform = "translateX(-50px)";
    setTimeout(() => {
      profileImage.style.transition =
        "opacity 0.6s ease-out, transform 0.6s ease-out";
      profileImage.style.opacity = "1";
      profileImage.style.transform = "translateX(0)";
    }, 300);

    // Decorative circles animation
    decorativeCircle1.style.transform = "scale(0)";
    decorativeCircle2.style.transform = "scale(0)";
    setTimeout(() => {
      decorativeCircle1.style.transition = "transform 0.5s ease-out";
      decorativeCircle2.style.transition = "transform 0.7s ease-out";
      decorativeCircle1.style.transform = "scale(1)";
      decorativeCircle2.style.transform = "scale(1)";
    }, 800);
  };

  // Create particles
  const createParticle = (container, count) => {
    const colors = [
      "text-indigo-400 dark:text-indigo-300",
      "text-pink-400 dark:text-pink-300",
      "text-blue-400 dark:text-blue-300",
      "text-purple-400 dark:text-purple-300",
    ];
    const shapes = [
      '<circle cx="8" cy="8" r="SIZE" />',
      '<rect x="4" y="4" width="SIZE2" height="SIZE2" rx="1" />',
      '<polygon points="POINTS" />',
    ];

    for (let i = 0; i < count; i++) {
      const size = 2 + Math.random() * 3;
      const size2 = size * 2;
      const points = `${8 - size},${8 + size} ${8 + size},${8 + size} ${8},${
        8 - size
      }`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)]
        .replace("SIZE", size)
        .replace("SIZE2", size2)
        .replace("POINTS", points);

      const particle = document.createElement("div");
      particle.className = `absolute ${color}`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.transform = "translate(-50%, -50%)";

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "16");
      svg.setAttribute("height", "16");
      svg.setAttribute("viewBox", "0 0 16 16");
      svg.setAttribute("fill", "currentColor");
      svg.innerHTML = shape;

      particle.appendChild(svg);
      container.appendChild(particle);

      // Animate particle
      animateParticle(particle);
    }
  };

  const animateParticle = (particle) => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const duration = 10 + Math.random() * 10;
    const delay = Math.random() * 2;

    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    particle.style.opacity = "0";

    const keyframes = [
      {
        left: `${startX}%`,
        top: `${startY}%`,
        opacity: 0,
      },
      {
        left: `${startX + (Math.random() * 20 - 10)}%`,
        top: `${startY + (Math.random() * 20 - 10)}%`,
        opacity: 1,
      },
      {
        left: `${startX + (Math.random() * 20 - 10)}%`,
        top: `${startY + (Math.random() * 20 - 10)}%`,
        opacity: 0,
      },
    ];

    const options = {
      duration: duration * 1000,
      delay: delay * 1000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    };

    particle.animate(keyframes, options);
  };

  // Create social links
  const createSocialLinks = () => {
    const socialLinks = [
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/samarth-heble-9a67342ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        color:
          "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30",
        border: "border-blue-300 dark:border-blue-600",
      },
      {
        name: "Email",
        icon: "mail",
        url: "mailto:sam31heble@gmail.com",
        color:
          "hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30",
        border: "border-red-200 dark:border-red-700",
      },
      {
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/samarth_h30",
        color:
          "hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30",
        border: "border-pink-200 dark:border-pink-700",
      },
    ];

    const container = document.getElementById("social-links");

    socialLinks.forEach((social) => {
      const link = document.createElement("a");
      link.href = social.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = `flex items-center justify-center p-3 rounded-full border ${social.border} ${social.color} text-gray-600 dark:text-gray-400 transition-all duration-300`;
      link.setAttribute("aria-label", social.name);

      const icon = document.createElement("i");
      icon.setAttribute("data-feather", social.icon);
      icon.className = "text-xl";

      link.appendChild(icon);
      container.appendChild(link);

      // Add hover animation
      link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1) translateY(-3px)";
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
      });

      link.addEventListener("mousedown", () => {
        link.style.transform = "scale(0.95)";
      });

      link.addEventListener("mouseup", () => {
        link.style.transform = "scale(1.1) translateY(-3px)";
      });
    });

    feather.replace();
  };

  // Initialize everything
  animateElements();
  createParticle(document.getElementById("particles-container"), 30);
  createParticle(document.getElementById("profile-particles"), 15);
  createSocialLinks();
});

//Education section code..

// Initialize feather icons
feather.replace();

// Simple animation implementation
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = () => {
    const elements = document.querySelectorAll("[data-aos]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  animateElements();

  // Add motion effects similar to Framer Motion
  const motionElements = document.querySelectorAll(".motion-element");
  motionElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `all 0.5s ease-out ${index * 0.2 + 0.3}s`;

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  });
});

// Projects section code

// Animation for elements on page load
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(".animate-fade-in-up");

  animateElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 100);
  });
});

//Skills section code

document.addEventListener("DOMContentLoaded", function () {
  // Frontend skills data
  const frontendSkills = [
    {
      category: "Core Technologies",
      iconClass: "text-indigo-600 dark:text-indigo-400 text-2xl",
      icon: "FiCode",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 60 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      iconClass: "text-indigo-600 dark:text-indigo-400 text-2xl",
      icon: "FiLayout",
      skills: [
        { name: "React", level: 52 },
        { name: "Tailwind CSS", level: 70 },
      ],
    },
  ];

  // Soft skills data
  const softSkills = [
    "group work",
    "communication",
    "problem solving",
    "time management",
    "adaptability",
    "creativity",
  ];

  // Render frontend skills
  const skillsGrid = document.getElementById("skills-grid");
  frontendSkills.forEach((category, index) => {
    const skillCard = document.createElement("div");
    skillCard.className =
      "bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1";

    // Icon and category header
    const headerDiv = document.createElement("div");
    headerDiv.className = "flex items-center mb-5";

    const iconDiv = document.createElement("div");
    iconDiv.className =
      "p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mr-4";

    const icon = document.createElement("span");
    icon.className = category.iconClass;
    icon.setAttribute("data-icon", category.icon);
    iconDiv.appendChild(icon);

    const title = document.createElement("h3");
    title.className = "text-xl font-semibold text-gray-800 dark:text-white";
    title.textContent = category.category;

    headerDiv.appendChild(iconDiv);
    headerDiv.appendChild(title);

    // Skills list
    const skillsList = document.createElement("div");
    skillsList.className = "space-y-4";

    category.skills.forEach((skill) => {
      const skillDiv = document.createElement("div");

      const skillHeader = document.createElement("div");
      skillHeader.className = "flex justify-between mb-1.5";

      const skillName = document.createElement("span");
      skillName.className =
        "text-sm font-medium text-gray-700 dark:text-gray-300";
      skillName.textContent = skill.name;

      const skillLevel = document.createElement("span");
      skillLevel.className = "text-xs text-gray-500 dark:text-gray-400";
      skillLevel.textContent = `${skill.level}%`;

      skillHeader.appendChild(skillName);
      skillHeader.appendChild(skillLevel);

      const progressBarContainer = document.createElement("div");
      progressBarContainer.className =
        "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2";

      const progressBar = document.createElement("div");
      progressBar.className =
        "h-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300 dark:from-indigo-400 dark:to-indigo-600 progress-bar";
      progressBar.style.width = "0";
      // Store the level as a data attribute for easy access
      progressBar.setAttribute("data-level", skill.level);

      progressBarContainer.appendChild(progressBar);

      skillDiv.appendChild(skillHeader);
      skillDiv.appendChild(progressBarContainer);

      skillsList.appendChild(skillDiv);
    });

    skillCard.appendChild(headerDiv);
    skillCard.appendChild(skillsList);

    skillsGrid.appendChild(skillCard);
  });

  // Render soft skills
  const softSkillsTags = document.getElementById("soft-skills-tags");
  softSkills.forEach((skill, index) => {
    const tag = document.createElement("span");
    tag.className =
      "px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:text-white opacity-0 scale-80";
    tag.textContent = skill;
    softSkillsTags.appendChild(tag);
  });

  // Intersection Observer for animations
  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate progress bars
        const progressBars = document.querySelectorAll(".progress-bar");
        progressBars.forEach((bar) => {
          const level = bar.getAttribute("data-level");
          bar.style.width = `${level}%`;
        });

        // Animate soft skills tags
        if (entry.target.id === "soft-skills-section") {
          const tags = document.querySelectorAll("#soft-skills-tags span");
          tags.forEach((tag, index) => {
            setTimeout(() => {
              tag.classList.remove("opacity-0", "scale-80");
              tag.classList.add("opacity-100", "scale-100");
            }, index * 100);
          });
        }
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  // Observe the skills section and soft skills section
  const skillsSection = document.getElementById("skills");
  const softSkillsSection = document.getElementById("soft-skills-section");
  if (skillsSection) observer.observe(skillsSection);
  if (softSkillsSection) observer.observe(softSkillsSection);

  // Hover effects for skill cards and tags
  document.querySelectorAll("#skills-grid > div").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("shadow-md");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("shadow-md");
    });
  });

  document.querySelectorAll("#soft-skills-tags span").forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.classList.add("bg-indigo-600", "text-white", "scale-105");
    });
    tag.addEventListener("mouseleave", () => {
      tag.classList.remove("bg-indigo-600", "text-white", "scale-105");
      tag.classList.add(
        "bg-gray-100",
        "dark:bg-gray-700",
        "dark:text-gray-200",
        "text-gray-800"
      );
    });
  });

  // Load icons
  document.querySelectorAll("[data-icon]").forEach((iconElement) => {
    const iconName = iconElement.getAttribute("data-icon");
    iconElement.innerHTML = getIconSvg(iconName);
  });

  // Simple icon mapping
  function getIconSvg(iconName) {
    const icons = {
      FiCode:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      FiLayout:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
      FiSmartphone:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>',
      FiGlobe:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    };
    return icons[iconName] || "";
  }
});

//Contact form section code

document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("DkGskjTaqCy2SOm7f");

  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const notification = document.getElementById("notification");
  const closeNotificationBtn = document.getElementById("closeNotificationBtn");
  const closeNotification = document.getElementById("closeNotification");
  const notificationTitle = document.getElementById("notificationTitle");
  const notificationMessage = document.getElementById("notificationMessage");
  const successIcon = document.getElementById("successIcon");
  const errorIcon = document.getElementById("errorIcon");
  const successBg = document.getElementById("successBg");
  const messageDetails = document.getElementById("messageDetails");
  const detailName = document.getElementById("detailName");
  const detailEmail = document.getElementById("detailEmail");
  const detailMessage = document.getElementById("detailMessage");

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  function validateForm(formData) {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    // Display errors
    if (errors.name) {
      nameError.textContent = errors.name;
      nameError.classList.remove("hidden");
      document.getElementById("name").classList.add("border-red-500");
    } else {
      nameError.classList.add("hidden");
      document.getElementById("name").classList.remove("border-red-500");
    }

    if (errors.email) {
      emailError.textContent = errors.email;
      emailError.classList.remove("hidden");
      document.getElementById("email").classList.add("border-red-500");
    } else {
      emailError.classList.add("hidden");
      document.getElementById("email").classList.remove("border-red-500");
    }

    if (errors.message) {
      messageError.textContent = errors.message;
      messageError.classList.remove("hidden");
      document.getElementById("message").classList.add("border-red-500");
    } else {
      messageError.classList.add("hidden");
      document.getElementById("message").classList.remove("border-red-500");
    }

    return isValid;
  }

  function showNotification(type, message, formData = null) {
    // Reset notification state
    successIcon.classList.add("hidden");
    errorIcon.classList.add("hidden");
    successBg.classList.add("hidden");
    messageDetails.classList.add("hidden");

    if (type === "success") {
      notificationTitle.textContent = "Success!";
      notificationMessage.textContent = message;
      successIcon.classList.remove("hidden");
      successBg.classList.remove("hidden");
      closeNotificationBtn.className =
        "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors";

      if (formData) {
        detailName.textContent = formData.name;
        detailEmail.textContent = formData.email;
        detailMessage.textContent = formData.message;
        messageDetails.classList.remove("hidden");
      }
    } else {
      notificationTitle.textContent = "Error";
      notificationMessage.textContent = message;
      errorIcon.classList.remove("hidden");
      closeNotificationBtn.className =
        "w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors";
    }

    notification.classList.remove("hidden");
  }

  function closeNotificationHandler() {
    notification.classList.add("hidden");
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    if (!validateForm(formData)) return;

    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
                    <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                `;

    try {
      const result = await emailjs.sendForm(
        "service_fgwlbql",
        "template_u1ozlc3",
        form
      );

      if (result.status === 200) {
        showNotification("success", "Message sent successfully!", formData);
        form.reset();
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      showNotification(
        "error",
        "Failed to send message. Please try again later."
      );
    } finally {
      // Reset submit button
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        Send Message
                    `;
    }
  });

  // Close notification handlers
  closeNotificationBtn.addEventListener("click", closeNotificationHandler);
  closeNotification.addEventListener("click", closeNotificationHandler);
  notification.addEventListener("click", function (e) {
    if (e.target === notification) {
      closeNotificationHandler();
    }
  });

  // Animate SVGs when they come into view
  const animateOnScroll = () => {
    const svgs = document.querySelectorAll('svg path[stroke-dasharray="0 1"]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "dash 2s linear forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    svgs.forEach((svg) => {
      observer.observe(svg);
    });
  };

  // Add CSS animation for path drawing
  const style = document.createElement("style");
  style.textContent = `
                @keyframes dash {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            `;
  document.head.appendChild(style);

  animateOnScroll();
});

// Footer section code

document.addEventListener("DOMContentLoaded", function () {
  // Set current year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Back to top button
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-fade-in-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });
  };

  animateOnScroll();
});

//resume btt

document.addEventListener("DOMContentLoaded", function () {
  // Initialize feather icons
  feather.replace();

  // State variables
  let scrollDirection = "up"; // Start with up direction
  let scrollAmount = 0;
  let rotation = 0;
  let isAtTopOrBottom = false;
  let lastScrollPos = window.pageYOffset;
  let isScrolling = false;
  let scrollStopTimer = null;
  let animationId = null;
  let circleInstance = null;

  // DOM elements
  const circleTextRef = document.getElementById("circleText");
  const downloadBtn = document.getElementById("downloadBtn");
  const arrowUp = document.getElementById("arrowUp");
  const arrowDown = document.getElementById("arrowDown");

  // Initialize CircleType for circular text
  if (circleTextRef) {
    circleInstance = new CircleType(circleTextRef);
    circleInstance.radius(35);
  }

  // Check if at top or bottom of page
  const checkIfAtTopOrBottom = () => {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const buffer = 5;

    isAtTopOrBottom =
      scrollY <= buffer || scrollY + windowHeight >= docHeight - buffer;
  };

  // Handle scroll events
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const delta = currentScrollPos - lastScrollPos;

    // Determine scroll direction
    if (currentScrollPos > lastScrollPos) {
      // Scrolling down
      if (scrollDirection !== "down") {
        scrollDirection = "down";
        arrowUp.classList.add("hidden");
        arrowDown.classList.remove("hidden");
      }
    } else if (currentScrollPos < lastScrollPos) {
      // Scrolling up
      if (scrollDirection !== "up") {
        scrollDirection = "up";
        arrowDown.classList.add("hidden");
        arrowUp.classList.remove("hidden");
      }
    }

    // Update scroll amount (absolute value)
    scrollAmount = Math.abs(delta);
    lastScrollPos = currentScrollPos;

    // Check if we're at top or bottom
    checkIfAtTopOrBottom();

    // Mark that scrolling is happening
    isScrolling = true;

    // Clear any existing timeout
    if (scrollStopTimer) {
      clearTimeout(scrollStopTimer);
    }

    // Set a new timeout to detect when scrolling stops
    scrollStopTimer = setTimeout(() => {
      isScrolling = false;
    }, 100);
  };

  // Animation loop for rotating text
  const animateRotation = () => {
    // Only rotate when scrolling is happening
    if (isScrolling) {
      const speedFactor = 0.2;
      const rotationDelta =
        scrollAmount * speedFactor * (scrollDirection === "down" ? 1 : -1);
      rotation = (rotation + rotationDelta) % 360;
    }
    // Stop rotation completely when not scrolling (removed the idle rotation)
    else {
      rotation = rotation; // Maintain current rotation but don't change it
    }

    // Apply rotation to the circular text
    if (circleTextRef) {
      circleTextRef.style.transform = `rotate(${rotation}deg)`;
      circleTextRef.style.transition = isScrolling
        ? "transform 0.1s ease-out"
        : "transform 0.3s ease-out";
    }

    animationId = requestAnimationFrame(animateRotation);
  };

  // Handle download button click
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1OyXg8Uwt3ZM4Hhkk-Qyyzeu5syWprrl1/view?usp=sharing";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "samarth.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Set up event listeners
  window.addEventListener("scroll", handleScroll);
  downloadBtn.addEventListener("click", handleDownload);

  // Initial check for position
  checkIfAtTopOrBottom();

  // Start the animation loop
  animationId = requestAnimationFrame(animateRotation);

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (scrollStopTimer) {
      clearTimeout(scrollStopTimer);
    }
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    downloadBtn.removeEventListener("click", handleDownload);
  };
});


// GSAP Animations with ScrollTrigger
document.addEventListener("DOMContentLoaded", (event) => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial check for loading
    console.log("GSAP Animations Loaded");

    // 1. Hero Section Animations
    // Let's animate the slider content if possible, although Swiper handles transitions.
    // Instead, we can animate the static elements inside the active slide, but Swiper might reset them.
    // For now, let's focus on scroll animations for sections below hero.

    // 2. About Us Section
    // Animation for the image group
    gsap.from(".about-img-main", {
        scrollTrigger: {
            trigger: ".about-custom-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 1.2,
        x: -50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".about-img-sub", {
        scrollTrigger: {
            trigger: ".about-custom-section",
            start: "top 70%"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from(".about-exp-badge", {
        scrollTrigger: {
            trigger: ".about-custom-section",
            start: "top 70%"
        },
        duration: 0.8,
        scale: 0.5,
        opacity: 0,
        delay: 0.6,
        ease: "back.out(1.7)"
    });

    // Animation for About content
    gsap.from([".about-sub-heading", ".about-main-heading", ".about-desc"], {
        scrollTrigger: {
            trigger: ".about-custom-content",
            start: "top 85%"
        },
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from(".about-feature-item", {
        scrollTrigger: {
            trigger: ".about-feature-list",
            start: "top 90%"
        },
        duration: 0.8,
        x: 30,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
    });

    // 3. Services Section
    gsap.from(".service-card-home", {
        scrollTrigger: {
            trigger: ".services-home-section",
            start: "top 80%"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    // 4. Why Choose Us (Dark Section)
    gsap.from([".why-us-heading-small", ".why-us-heading-large", ".why-us-desc"], {
        scrollTrigger: {
            trigger: ".why-us-dark-section",
            start: "top 80%"
        },
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from(".feature-box-dark", {
        scrollTrigger: {
            trigger: ".why-us-grid",
            start: "top 85%"
        },
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
    });

    gsap.from(".why-us-image-wrapper", {
        scrollTrigger: {
            trigger: ".why-us-image-wrapper",
            start: "top 80%"
        },
        duration: 1.2,
        x: 50,
        opacity: 0,
        ease: "power3.out"
    });

    // 5. Global Impact Section
    gsap.from(".impact-subtitle", {
        scrollTrigger: {
            trigger: ".impact-section",
            start: "top 80%"
        },
        duration: 0.8,
        x: -30,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".impact-title", {
        scrollTrigger: {
            trigger: ".impact-section",
            start: "top 80%"
        },
        duration: 0.8,
        x: -30,
        opacity: 0,
        delay: 0.1,
        ease: "power2.out"
    });

    gsap.from(".impact-desc", {
        scrollTrigger: {
            trigger: ".impact-section",
            start: "top 80%"
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        delay: 0.2,
        ease: "power2.out"
    });

    gsap.from(".impact-stat-item", {
        scrollTrigger: {
            trigger: ".impact-stats-row",
            start: "top 85%"
        },
        duration: 0.8,
        scale: 0.9,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)"
    });

    gsap.from(".impact-image-container", {
        scrollTrigger: {
            trigger: ".impact-section",
            start: "top 75%"
        },
        duration: 1.2,
        x: 50,
        opacity: 0,
        ease: "power3.out"
    });

    // 6. Featured Properties
    gsap.from(".box-dream", {
        scrollTrigger: {
            trigger: ".work-with-us", // Adjust selector if needed
            start: "top 80%"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
    });

    // 7. Testimonials
    gsap.from(".testimonials-inner", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%"
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".slider-testimonials", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%"
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power3.out"
    });
});

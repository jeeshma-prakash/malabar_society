/* =====================================================
   GSAP SCROLL TRIGGER ANIMATIONS
   Malabar Multistate Agro Co-operative Society Ltd.
   Premium Smooth Animations - Triggered on Scroll
   ===================================================== */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // =====================================================
    // GLOBAL ANIMATION SETTINGS
    // =====================================================
    const defaultDuration = 1;
    const defaultEase = "power3.out";
    const staggerDelay = 0.15;

    // =====================================================
    // UTILITY FUNCTION - Create ScrollTrigger with reset
    // Animations replay every time section comes into view
    // =====================================================
    function createScrollAnimation(trigger, animation, start = "top 85%", end = "bottom 15%") {
        return ScrollTrigger.create({
            trigger: trigger,
            start: start,
            end: end,
            onEnter: () => animation.restart(),
            onEnterBack: () => animation.restart(),
            toggleActions: "play none none none"
        });
    }

    // =====================================================
    // HERO SECTION ANIMATIONS
    // =====================================================
    function animateHeroSection() {
        const heroSection = document.querySelector(".hero-section");
        if (!heroSection) return;

        // Hero Title Animation
        const heroTitle = heroSection.querySelector(".hero-title");
        const heroSubtitle = heroSection.querySelector(".hero-subtitle");
        const heroButtons = heroSection.querySelectorAll(".hero-content .btn");

        const heroTl = gsap.timeline({ paused: true });

        if (heroSubtitle) {
            heroTl.from(heroSubtitle, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            });
        }

        if (heroTitle) {
            heroTl.from(heroTitle, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            }, "-=0.4");
        }

        if (heroButtons.length > 0) {
            heroTl.from(heroButtons, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: defaultEase
            }, "-=0.5");
        }

        // Navbar Animation
        const navbar = document.querySelector(".main-navbar");
        if (navbar) {
            heroTl.from(navbar, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            }, 0);
        }

        // Play hero animation on load
        heroTl.play();
    }

    // =====================================================
    // ABOUT SECTION ANIMATIONS
    // =====================================================
    function animateAboutSection() {
        const aboutSection = document.querySelector(".about-section");
        if (!aboutSection) return;

        const aboutTl = gsap.timeline({ paused: true });

        // Left Images Animation
        const leftImg = aboutSection.querySelector(".tall-left-img");
        const rightImgs = aboutSection.querySelectorAll(".right-column img");
        const badge = aboutSection.querySelector(".badge-circle");

        if (leftImg) {
            aboutTl.from(leftImg, {
                x: -100,
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: defaultEase
            });
        }

        if (rightImgs.length > 0) {
            aboutTl.from(rightImgs, {
                x: 100,
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                stagger: 0.2,
                ease: defaultEase
            }, "-=0.6");
        }

        if (badge) {
            aboutTl.from(badge, {
                scale: 0,
                rotation: -180,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.4");
        }

        // Right Content Animation
        const subheading = aboutSection.querySelector(".section-subheading");
        const heading = aboutSection.querySelector(".section-heading");
        const descriptions = aboutSection.querySelectorAll(".section-description");
        const aboutBtn = aboutSection.querySelector(".btn-gold-orange");

        if (subheading) {
            aboutTl.from(subheading, {
                x: 50,
                opacity: 0,
                duration: 0.4,
                ease: defaultEase
            }, "-=0.4");
        }

        if (heading) {
            aboutTl.from(heading, {
                x: 50,
                opacity: 0,
                duration: 0.4,
                ease: defaultEase
            }, "-=0.4");
        }

        if (descriptions.length > 0) {
            aboutTl.from(descriptions, {
                y: 30,
                opacity: 0,
                duration: 0.4,
                stagger: 0.15,
                ease: defaultEase
            }, "-=0.4");
        }

        if (aboutBtn) {
            aboutTl.from(aboutBtn, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: defaultEase
            }, "-=0.3");
        }

        // About section - only animate on first scroll (no reverse effect)
        ScrollTrigger.create({
            trigger: aboutSection,
            start: "top 85%",
            once: true,
            onEnter: () => aboutTl.play()
        });
    }

    // =====================================================
    // VISION & MISSION SECTION ANIMATIONS
    // =====================================================
    function animateVisionMissionSection() {
        const vmSection = document.querySelector(".vision-mission-section");
        if (!vmSection) return;

        const vmTl = gsap.timeline({ paused: true });

        // Values Bar Animation
        const valueItems = vmSection.querySelectorAll(".value-item");
        if (valueItems.length > 0) {
            vmTl.from(valueItems, {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.5)"
            });
        }

        // Vision & Mission Cards
        const visionCard = vmSection.querySelector(".vision-card");
        const missionCard = vmSection.querySelector(".mission-card");

        if (visionCard) {
            vmTl.from(visionCard, {
                x: -80,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            }, "-=0.3");
        }

        if (missionCard) {
            vmTl.from(missionCard, {
                x: 80,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            }, "-=0.6");
        }

        createScrollAnimation(vmSection, vmTl);
    }

    // =====================================================
    // LEADERSHIP SECTION ANIMATIONS
    // =====================================================
    function animateLeadershipSection() {
        const leadershipSection = document.querySelector(".leadership-section");
        if (!leadershipSection) return;

        const leaderTl = gsap.timeline({ paused: true });

        // Section Header
        const subheading = leadershipSection.querySelector(".section-subheading");
        const heading = leadershipSection.querySelector(".section-heading");

        if (subheading) {
            leaderTl.from(subheading, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: defaultEase
            });
        }

        if (heading) {
            leaderTl.from(heading, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            }, "-=0.4");
        }

        // Quote Icons
        const quoteIcons = leadershipSection.querySelectorAll(".quote-icon");
        if (quoteIcons.length > 0) {
            leaderTl.from(quoteIcons, {
                scale: 0,
                rotation: -90,
                duration: 0.5,
                stagger: 0.2,
                ease: "back.out(2)"
            }, "-=0.4");
        }

        createScrollAnimation(leadershipSection, leaderTl);
    }

    // =====================================================
    // SERVICES SECTION ANIMATIONS
    // =====================================================
    function animateServicesSection() {
        const servicesSection = document.querySelector(".services-section");
        if (!servicesSection) return;

        const servicesTl = gsap.timeline({ paused: true });

        // Section Header
        const subheading = servicesSection.querySelector(".section-subheading");
        const heading = servicesSection.querySelector(".section-heading");
        const description = servicesSection.querySelector(".text-center > p");


        if (heading) {
            servicesTl.from(heading, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            }, "-=0.4");
        }

        if (description) {
            servicesTl.from(description, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: defaultEase
            }, "-=0.4");
        }

        // Service Cards
        const serviceCards = servicesSection.querySelectorAll(".carousel-card");
        if (serviceCards.length > 0) {
            servicesTl.from(serviceCards, {
                y: 80,
                opacity: 0,
                scale: 0.8,
                duration: 0.7,
                stagger: 0.15,
                ease: "back.out(1.3)"
            }, "-=0.3");
        }

        // Pill Box
        const pillBox = servicesSection.querySelector(".custom-pill-box");
        if (pillBox) {
            servicesTl.from(pillBox, {
                y: 30,
                opacity: 1,
                duration: 0.5,
                ease: defaultEase
            }, "-=0.3");
        }

        // Services section - only animate on first scroll (no reverse effect)
        ScrollTrigger.create({
            trigger: servicesSection,
            start: "top 85%",
            once: true,
            onEnter: () => servicesTl.play()
        });
    }

    // =====================================================
    // COUNTER SECTION ANIMATIONS
    // =====================================================
    function animateCounterSection() {
        const counterSection = document.querySelector(".counter-section");
        if (!counterSection) return;

        const counterTl = gsap.timeline({ paused: true });

        // Counter Circles
        const counterCircles = counterSection.querySelectorAll(".counter-circle");
        const counterLabels = counterSection.querySelectorAll(".counter-label");

        if (counterCircles.length > 0) {
            counterTl.from(counterCircles, {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "elastic.out(1, 0.5)"
            });
        }

        if (counterLabels.length > 0) {
            counterTl.from(counterLabels, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: defaultEase
            }, "-=0.5");
        }

        createScrollAnimation(counterSection, counterTl);
    }

    // =====================================================
    // WHY CHOOSE US SECTION ANIMATIONS
    // =====================================================
    function animateWhySection() {
        const whySection = document.querySelector(".why-section");
        if (!whySection) return;

        const whyTl = gsap.timeline({ paused: true });

        // Left Content
        const subheading = whySection.querySelector(".section-subheading");
        const heading = whySection.querySelector(".section-heading");
        const text = whySection.querySelector(".whychoose-text");
        const btn = whySection.querySelector(".btn-gold-orange");

        if (subheading) {
            whyTl.from(subheading, {
                x: -50,
                opacity: 0,
                duration: 0.6,
                ease: defaultEase
            });
        }

        if (heading) {
            whyTl.from(heading, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            }, "-=0.4");
        }

        if (text) {
            whyTl.from(text, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: defaultEase
            }, "-=0.4");
        }

        if (btn) {
            whyTl.from(btn, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: defaultEase
            }, "-=0.3");
        }

    

        createScrollAnimation(whySection, whyTl);
    }

    // =====================================================
    // VALUES & IMPACT SECTION ANIMATIONS
    // =====================================================
    function animateValuesImpactSection() {
        const viSection = document.querySelector(".values-impact");
        if (!viSection) return;

        const viTl = gsap.timeline({ paused: true });

        // Top Row
        const viPill = viSection.querySelector(".vi-pill");
        const viHeading = viSection.querySelector(".vi-heading");
        const viLead = viSection.querySelector(".vi-lead");

        if (viPill) {
            viTl.from(viPill, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        }

        if (viHeading) {
            viTl.from(viHeading, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            }, "-=0.3");
        }

        if (viLead) {
            viTl.from(viLead, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: defaultEase
            }, "-=0.4");
        }

        // Main Image
        const mainImg = viSection.querySelector(".vi-main-img");
        if (mainImg) {
            viTl.from(mainImg, {
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            }, "-=0.4");
        }

        // Arc SVG
        const arcSvg = viSection.querySelector(".vi-arc-svg");
        if (arcSvg) {
            viTl.from(arcSvg, {
                rotation: -90,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.6");
        }

        // Value Cards
        const valueCards = viSection.querySelectorAll(".vi-value-card");
        if (valueCards.length > 0) {
            viTl.from(valueCards, {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.5)"
            }, "-=0.8");
        }

        createScrollAnimation(viSection, viTl);
    }

    // =====================================================
    // CONTACT SECTION ANIMATIONS
    // =====================================================
    function animateContactSection() {
        const contactSection = document.querySelector(".contact-section");
        if (!contactSection) return;

        const contactTl = gsap.timeline({ paused: true });

        // Contact Form
        const contactTitle = contactSection.querySelector(".contact-title");
        const formGroups = contactSection.querySelectorAll(".form-group");
        const submitBtn = contactSection.querySelector(".btn-contact-submit");

        if (contactTitle) {
            contactTl.from(contactTitle, {
                x: -50,
                opacity: 0,
                duration: 0.6,
                ease: defaultEase
            });
        }

        if (formGroups.length > 0) {
            contactTl.from(formGroups, {
                x: -30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: defaultEase
            }, "-=0.3");
        }

        if (submitBtn) {
            contactTl.from(submitBtn, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: defaultEase
            }, "-=0.2");
        }

        // Map
        const mapWrapper = contactSection.querySelector(".contact-map-wrapper");
        if (mapWrapper) {
            contactTl.from(mapWrapper, {
                x: 80,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: defaultEase
            }, "-=0.8");
        }

        createScrollAnimation(contactSection, contactTl);
    }

    // =====================================================
    // FOOTER SECTION ANIMATIONS
    // =====================================================
    function animateFooterSection() {
        const footer = document.querySelector(".modern-footer");
        if (!footer) return;

        const footerTl = gsap.timeline({ paused: true });

        // Newsletter Box
        const newsletterBox = footer.querySelector(".newsletter-box");
        if (newsletterBox) {
            footerTl.from(newsletterBox, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: defaultEase
            });
        }

        // Footer Columns
        const footerBrand = footer.querySelector(".footer-brand");
        const footerLinks = footer.querySelectorAll(".footer-links");
        const footerContact = footer.querySelector(".footer-contact");

        if (footerBrand) {
            footerTl.from(footerBrand, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                ease: defaultEase
            }, "-=0.4");
        }

        if (footerLinks.length > 0) {
            footerTl.from(footerLinks, {
                y: 40,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: defaultEase
            }, "-=0.4");
        }

        if (footerContact) {
            footerTl.from(footerContact, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                ease: defaultEase
            }, "-=0.4");
        }

        // Social Icons
        const socialIcons = footer.querySelectorAll(".social-icon");
        if (socialIcons.length > 0) {
            footerTl.from(socialIcons, {
                scale: 0,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "back.out(2)"
            }, "-=0.3");
        }

        createScrollAnimation(footer, footerTl, "top 90%");
    }

    // =====================================================
    // FLOATING ELEMENTS ANIMATION (Continuous)
    // =====================================================
    function animateFloatingElements() {
        // Decorative circles and leaves
        const decorCircles = document.querySelectorAll(".decor-circle, .decor-1, .decor-2");
        const decorLeaves = document.querySelectorAll(".decor-leaf");

        decorCircles.forEach((circle, index) => {
            gsap.to(circle, {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                duration: "random(3, 5)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.2
            });
        });

        decorLeaves.forEach((leaf, index) => {
            gsap.to(leaf, {
                rotation: "random(-15, 15)",
                y: "random(-15, 15)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.3
            });
        });
    }

    // =====================================================
    // PARALLAX EFFECT FOR BACKGROUNDS
    // =====================================================
    function initParallax() {
        const heroBg = document.querySelector(".hero-bg");
        if (heroBg) {
            gsap.to(heroBg, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }

    // =====================================================
    // SMOOTH REVEAL FOR IMAGES
    // =====================================================
    function initImageReveal() {
        const allImages = document.querySelectorAll(".about-img, .leader-img, .service-img, .vi-main-img");
        
        allImages.forEach(img => {
            gsap.set(img, { 
                clipPath: "inset(100% 0 0 0)" 
            });

            ScrollTrigger.create({
                trigger: img,
                start: "top 85%",
                onEnter: () => {
                    gsap.to(img, {
                        clipPath: "inset(0% 0 0 0)",
                        duration: 1,
                        ease: "power3.inOut"
                    });
                },
                onEnterBack: () => {
                    gsap.to(img, {
                        clipPath: "inset(0% 0 0 0)",
                        duration: 1,
                        ease: "power3.inOut"
                    });
                }
            });
        });
    }

    // =====================================================
    // TEXT REVEAL ANIMATION FOR HEADINGS
    // =====================================================
    function initTextReveal() {
        const headings = document.querySelectorAll(".section-heading, .hero-title");
        
        headings.forEach(heading => {
            // Split text into words for animation
            const text = heading.textContent;
            heading.innerHTML = text.split(" ").map(word => 
                `<span class="gsap-word" style="display: inline-block;">${word}</span>`
            ).join(" ");
        });
    }

    // =====================================================
    // HOVER ANIMATIONS FOR BUTTONS
    // =====================================================
    function initButtonHoverAnimations() {
        const buttons = document.querySelectorAll(".btn");
        
        buttons.forEach(btn => {
            btn.addEventListener("mouseenter", () => {
                gsap.to(btn, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }

    // =====================================================
    // INITIALIZE ALL ANIMATIONS
    // =====================================================
    function initAllAnimations() {
        // Hero (plays on load)
        animateHeroSection();

        // Scroll-triggered sections
        animateAboutSection();
        animateVisionMissionSection();
        animateLeadershipSection();
        animateServicesSection();
        animateCounterSection();
        animateWhySection();
        animateValuesImpactSection();
        animateContactSection();
        animateFooterSection();

        // Continuous animations
        animateFloatingElements();

        // Special effects
        initParallax();
        initButtonHoverAnimations();
    }

    // Start animations
    initAllAnimations();

    // =====================================================
    // REFRESH SCROLLTRIGGER ON WINDOW RESIZE
    // =====================================================
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });

});

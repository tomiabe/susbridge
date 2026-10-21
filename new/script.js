(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const lenis = window.Lenis
    ? new window.Lenis({
        autoRaf: false,
        anchors: true,
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
        respectReducedMotion: true,
        stopInertiaOnNavigate: true,
        prevent: (node) => Boolean(node instanceof Element && node.closest("[data-lenis-prevent]")),
      })
    : null;
  const menuButton = document.querySelector("[data-menu-button]");
  const menuCloseButton = document.querySelector("[data-menu-close]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const siteHeader = document.querySelector("[data-header]");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const menuLinks = mobileMenu ? [...mobileMenu.querySelectorAll("a[href]")] : [];
  let lastFocusedElement = null;

  const scrollToTarget = (target, options = {}) => {
    if (lenis) {
      lenis.scrollTo(target, {
        immediate: reducedMotion.matches,
        ...options,
      });
      return;
    }

    const element = typeof target === "string" ? document.querySelector(target) : target;
    element?.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
  };

  root.dataset.js = "true";

  if (lenis) {
    const { gsap, ScrollTrigger } = window;

    if (gsap && ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const updateLenis = (time) => {
        lenis.raf(time);
        window.requestAnimationFrame(updateLenis);
      };

      window.requestAnimationFrame(updateLenis);
    }
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const setPageInert = (isInert) => {
    [siteHeader, main, footer].forEach((element) => {
      if (element) element.inert = isInert;
    });
  };

  const closeMenu = ({ returnFocus = true } = {}) => {
    if (!mobileMenu || !menuButton) return;

    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.inert = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
    setPageInert(false);
    syncSmoothScrollLock();

    if (returnFocus && lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  };

  const openMenu = () => {
    if (!mobileMenu || !menuButton) return;

    lastFocusedElement = document.activeElement;
    setPageInert(true);
    mobileMenu.inert = false;
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close menu");
    document.body.classList.add("menu-open");
    syncSmoothScrollLock();
    menuCloseButton?.focus();
  };

  if (mobileMenu) mobileMenu.inert = true;

  menuButton?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.contains("is-open");
    if (isOpen) closeMenu();
    else openMenu();
  });

  menuCloseButton?.addEventListener("click", () => closeMenu());

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu({ returnFocus: false }));
  });

  document.addEventListener("keydown", (event) => {
    if (!mobileMenu?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = [...mobileMenu.querySelectorAll('a[href], button:not([disabled])')];
    const first = focusable[0];
    const last = focusable.at(-1);

    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const drawer = document.querySelector("[data-drawer]");
  const drawerPanel = document.querySelector("[data-drawer-panel]");
  const drawerContent = document.querySelector("[data-drawer-content]");
  const drawerCloseButton = document.querySelector("[data-drawer-close]");
  const drawerBackdrop = document.querySelector("[data-drawer-backdrop]");
  const drawerCopyButton = document.querySelector("[data-drawer-copy]");
  const drawerLinks = [...document.querySelectorAll(".drawer-link[data-drawer-slug]")];
  let lastDrawerTrigger = null;
  let copyResetTimer = null;

  const syncSmoothScrollLock = () => {
    if (!lenis) return;

    const overlayOpen = mobileMenu?.classList.contains("is-open") || drawer?.classList.contains("is-open");
    if (overlayOpen) lenis.stop();
    else lenis.start();
  };

  const workItems = [
    {
      type: "work",
      slug: "systems-thinking-for-sdg-implementation",
      title: "Systems Thinking for SDG Implementation",
      year: "2026",
      discipline: "Training and communications",
      image: "assets/systems-thinking.webp",
      imageAlt: "Systems thinking visual used in a training for SDG implementation",
      introduction: "A live learning experience for people working with linked, stubborn problems.",
      body: [
        "The starting point was not a framework. It was a familiar day in Lagos, where power, water, transport, food, money, safety, and health are already connected.",
        "Tomi led the narrative, content, and design. Adetoro facilitated a practical session for young advocates, helping them name an issue, map what shapes it, trace the effects, and choose a useful entry point.",
        "The result made systems thinking feel less like theory and more like a way to design work that understands the conditions around it.",
      ],
      resource: {
        label: "View the session deck",
        href: "/images/systems-thinking-sdg/systems-thinking-for-sdg-implementation.pdf",
      },
    },
    {
      type: "work",
      slug: "abuja-carbon-accounting-electricity",
      title: "Abuja's Backup Penalty: A Carbon Accounting of Household Electricity",
      year: "2026",
      discipline: "Research and data",
      image: "assets/abuja-carbon-accounting.webp",
      imageAlt: "Generator from Abuja's Backup Penalty project",
      introduction: "A household carbon account that makes electricity choices visible.",
      body: [
        "Backup power is not a side note in household energy. It can quietly overtake grid electricity in climate cost, expense, and everyday decision-making.",
        "This interactive report makes that tradeoff legible by connecting generator use, fuel, cost, and emissions in the context people actually live with.",
        "It turns a hidden household system into something people can question, compare, and act on.",
      ],
      resource: {
        label: "Open the interactive report",
        href: "/abj-carbon-accounting-electricity",
      },
    },
    {
      type: "work",
      slug: "urban-climate-signals",
      title: "Urban Climate Signals",
      year: "2026",
      discipline: "Research and data",
      image: "assets/urban-climate.webp",
      imageAlt: "Urban Climate Signals dashboard shown on desktop and mobile devices",
      introduction: "A public tool that brings Lagos heat and air quality into one clear view.",
      body: [
        "Urban Climate Signals translates live weather and air-quality conditions into a view people can use without needing to be climate specialists.",
        "It maps the relationship between concrete, traffic, generators, tree cover, heat, and air quality, then lets users explore the effects of possible interventions.",
        "The tool makes a case for treating heat and air quality as everyday questions of health, access, and city governance.",
      ],
      resource: {
        label: "Explore the live tool",
        href: "https://susbridge.github.io/urbanclimate/",
      },
    },
    {
      type: "work",
      slug: "sachet-vs-bottled-water-lagos",
      title: "Sachet vs Bottled Water: What Lagos Actually Pays Per Liter",
      year: "2025",
      discipline: "Research",
      image: "assets/sachet-water.webp",
      imageAlt: "Sachet versus bottled water visual analysis",
      introduction: "A life cycle study that puts common assumptions about packaging under scrutiny.",
      body: [
        "The visible problem is only one part of the system. This study follows the impacts of sachet and PET bottled water from production through use and disposal.",
        "The comparison asks a more useful question than what looks cleaner: what do people actually pay in climate impact per litre, and where can change make the biggest difference?",
        "The work turns a familiar consumer choice into evidence for more honest conversations about waste, infrastructure, and access to safe water.",
      ],
      resource: {
        label: "Explore the study",
        href: "https://susbridge.xyz/lca-sachet-pet/#dashboard",
      },
    },
    {
      type: "work",
      slug: "culerson-translating-technical-expertise-into-market-presence",
      title: "Translating Technical Expertise Into Market Presence for Culerson",
      year: "2025",
      discipline: "Communications and advisory",
      image: "assets/culerson.webp",
      imageAlt: "Culerson communications and website project visual",
      introduction: "Making an energy advisory's technical expertise easier to find, understand, and trust.",
      body: [
        "Culerson had deep technical knowledge. The challenge was making that knowledge legible to the people who needed it, without flattening the work into generic marketing.",
        "We shaped its narrative, website, content, and communications system so the firm could show what it knows, who it serves, and why its perspective matters.",
        "The work gave a technical practice a clearer public presence and a stronger route into the conversations it was already qualified to lead.",
      ],
    },
    {
      type: "work",
      slug: "lca-car-transport-nigeria",
      title: "Petrol vs Diesel: What Nigeria's Cars Actually Cost",
      year: "2024",
      discipline: "Research",
      image: "assets/petrol-diesel.webp",
      imageAlt: "Petrol versus diesel life cycle assessment project visual",
      introduction: "A Nigeria-focused life cycle study of the cars people rely on every day.",
      body: [
        "Petrol and diesel do not end their story at the pump. This study follows their impacts through the life of the vehicles people use every day in Nigeria.",
        "It brings a local lens to a comparison often discussed in broad global terms, asking what the numbers mean before electric cars become the default answer.",
        "The aim is not to declare one perfect choice. It is to make the tradeoffs visible enough for better transport conversations to begin.",
      ],
      resource: {
        label: "Read the report",
        href: "https://drive.google.com/file/d/1oLLjP5q60fBAA4mKreYNSSmM7MkSR7e2/view",
      },
    },
  ];

  const insightItems = [
    {
      type: "insight",
      slug: "avoid-greenwashing-traps-tell-your-story-this-way",
      title: "Avoid Greenwashing Traps, Tell Your Story This Way",
      topic: "Communications",
      date: "Apr 2025",
      author: "Adetoro Adetayo",
      image: "assets/greenwashing.webp",
      imageAlt: "Editorial image for the article Avoid Greenwashing Traps, Tell Your Story This Way",
      introduction: "Sustainability claims earn trust when the evidence, the limits, and the work behind them are plain.",
      body: [
        "People can tell when a promise is carrying more weight than the work behind it. Vague language and selective success stories do not build credibility.",
        "Start with the facts. Name what has changed, how it was measured, what remains difficult, and who can verify the claim.",
        "A strong story does not pretend to be perfect. It gives people enough evidence to see the direction of travel and decide whether they believe it.",
      ],
    },
    {
      type: "insight",
      slug: "how-new-carbon-regulations-will-impact-african-businesses",
      title: "How New Carbon Regulations Will Impact African Businesses",
      topic: "Sustainability and policy",
      date: "Jan 2025",
      author: "Adetoro Adetayo",
      image: "assets/carbon-regulations.webp",
      imageAlt: "Editorial image for the article How New Carbon Regulations Will Impact African Businesses",
      introduction: "New carbon rules are already changing the cost of access to major markets.",
      body: [
        "Carbon regulation is no longer a distant policy debate for African businesses that export, raise capital, or sit inside global supply chains.",
        "The pressure is practical: understand the rules, measure what matters, improve the operations behind the numbers, and communicate the work clearly.",
        "Those who treat this as a business question early have more room to adapt than those who wait for a reporting deadline to force the issue.",
      ],
    },
    {
      type: "insight",
      slug: "still-treating-sustainability-like-a-marketing-campaign-that-wont-work-anymore",
      title: "Still Treating Sustainability Like a Marketing Campaign? That Won't Work Anymore",
      topic: "Strategy",
      date: "Nov 2024",
      author: "Adetoro Adetayo",
      image: "assets/marketing-campaign.webp",
      imageAlt: "Editorial image for the article Still Treating Sustainability Like a Marketing Campaign That Won't Work Anymore",
      introduction: "A campaign can tell the story. It cannot do the work that makes the story true.",
      body: [
        "When sustainability sits apart from product, sourcing, operations, and leadership, audiences can feel the gap between the message and the business.",
        "The stronger approach is to build the decisions first, then communicate them with enough detail for people to understand what has really changed.",
        "Trust grows when sustainability becomes part of how a business works, not an annual moment designed around visibility.",
      ],
    },
    {
      type: "insight",
      slug: "the-role-of-digital-media-in-driving-sustainability-engagement",
      title: "The Role of Digital Media in Driving Sustainability Engagement",
      topic: "Communications",
      date: "Oct 2024",
      author: "Tomi Abe",
      image: "assets/digital-media.webp",
      imageAlt: "Editorial image for the article The Role of Digital Media in Driving Sustainability Engagement",
      introduction: "Digital media can turn a distant issue into a useful invitation to pay attention and act.",
      body: [
        "A good digital experience does more than broadcast a message. It helps people see the relevance of an issue to their own lives and gives them a clear next step.",
        "That might mean turning complex data into a usable tool, designing a story that travels, or creating space for people to question what they are seeing.",
        "The measure is not reach alone. It is whether the work helps someone understand more clearly and act with more confidence.",
      ],
    },
    {
      type: "insight",
      slug: "the-art-of-sustainability-communication",
      title: "The Art of Sustainability Communication",
      topic: "Communications",
      date: "Sep 2024",
      author: "Adetoro Adetayo",
      image: "assets/art-sustainability.webp",
      imageAlt: "Editorial image for the article The Art of Sustainability Communication",
      introduction: "Useful communication makes the work easier to understand without making it less true.",
      body: [
        "The audience does not need every technical detail. They do need a clear sense of what is changing, why it matters, and how the claim is supported.",
        "Plain language is not a simplification of the work. It is a discipline that tests whether the work can be understood beyond the people who made it.",
        "When evidence and language stay close together, communication becomes part of implementation rather than a layer added at the end.",
      ],
    },
  ];

  const drawerItems = new Map([...workItems, ...insightItems].map((item) => [item.slug, item]));
  const externalIcon = '<svg class="atlas-icon" aria-hidden="true" focusable="false"><use href="assets/icons.svg#external-link"></use></svg>';
  const arrowIcon = '<svg class="atlas-icon" aria-hidden="true" focusable="false"><use href="assets/icons.svg#arrow-right"></use></svg>';

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const itemForCurrentPath = () => {
    const slug = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return drawerItems.get(slug) || null;
  };

  const restoreLegacyRedirect = () => {
    const redirect = new URLSearchParams(window.location.search).get("redirect");
    if (!redirect) return;

    try {
      const redirectedUrl = new URL(redirect, window.location.origin);
      if (redirectedUrl.origin !== window.location.origin) return;

      const redirectedSlug = redirectedUrl.pathname.replace(/^\/+|\/+$/g, "");
      if (!drawerItems.has(redirectedSlug)) return;

      history.replaceState(history.state || {}, "", `/${redirectedSlug}`);
    } catch {
      // Leave an unrecognised redirect value untouched.
    }
  };

  const drawerFocusable = () => {
    if (!drawerPanel) return [];

    return [...drawerPanel.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(
      (element) => !element.hasAttribute("hidden") && element.getClientRects().length,
    );
  };

  const updateCopyLabel = (label) => {
    if (!drawerCopyButton) return;

    drawerCopyButton.textContent = label;
    window.clearTimeout(copyResetTimer);
    copyResetTimer = window.setTimeout(() => {
      drawerCopyButton.textContent = "Copy link";
    }, 1800);
  };

  const renderDrawer = (item) => {
    if (!drawerContent) return;

    const metadata =
      item.type === "work"
        ? `${item.year} / ${item.discipline}`
        : `${item.topic} / ${item.date} / ${item.author}`;
    const body = item.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
    const resource = item.resource
      ? `<a class="drawer-resource" href="${escapeHtml(item.resource.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.resource.label)} ${externalIcon}</a>`
      : "";

    drawerContent.innerHTML = `
      <img class="drawer-image" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" width="1440" height="810" />
      <article class="drawer-inner">
        <p class="drawer-kicker">${escapeHtml(metadata)}</p>
        <h2 id="drawer-title">${escapeHtml(item.title)}</h2>
        <p class="drawer-lead">${escapeHtml(item.introduction)}</p>
        <div class="drawer-body">${body}</div>
        <div class="drawer-resources">
          ${resource}
          <a class="drawer-contact" href="#contact" data-drawer-contact>Start a conversation ${arrowIcon}</a>
        </div>
      </article>
    `;
  };

  const openDrawer = (item, { push = false, trigger = null } = {}) => {
    if (!drawer || !drawerPanel || !drawerContent) return;

    if (mobileMenu?.classList.contains("is-open")) {
      closeMenu({ returnFocus: false });
    }

    if (trigger instanceof HTMLElement) {
      lastDrawerTrigger = trigger;
    }

    if (push) {
      history.pushState({ susbridgeDrawer: item.slug }, "", `/${item.slug}`);
    }

    renderDrawer(item);
    setPageInert(true);
    drawer.inert = false;
    drawer.dataset.slug = item.slug;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    syncSmoothScrollLock();
    requestAnimationFrame(() => drawerPanel.focus());
  };

  const closeDrawer = ({ fromNavigation = false, returnFocus = true } = {}) => {
    if (!drawer || !drawerPanel) return;

    const activeSlug = drawer.dataset.slug;
    const wasOpen = drawer.classList.contains("is-open");

    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    drawer.inert = true;
    delete drawer.dataset.slug;
    document.body.classList.remove("drawer-open");
    setPageInert(false);
    syncSmoothScrollLock();

    if (returnFocus && wasOpen && lastDrawerTrigger instanceof HTMLElement) {
      lastDrawerTrigger.focus();
    }

    if (fromNavigation) return;

    if (history.state?.susbridgeDrawer === activeSlug) {
      history.back();
    } else if (itemForCurrentPath()) {
      history.replaceState(history.state || {}, "", "/");
    }
  };

  const copyCurrentLink = async () => {
    const link = window.location.href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(link);
      } else {
        const copyField = document.createElement("textarea");
        copyField.value = link;
        copyField.setAttribute("readonly", "");
        copyField.style.position = "fixed";
        copyField.style.opacity = "0";
        document.body.append(copyField);
        copyField.select();
        const copied = document.execCommand("copy");
        copyField.remove();
        if (!copied) throw new Error("Copy failed");
      }
      updateCopyLabel("Copied");
    } catch {
      updateCopyLabel("Copy failed");
    }
  };

  if (drawer) drawer.inert = true;

  drawerLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const item = drawerItems.get(link.dataset.drawerSlug);
      if (!item || item.type !== link.dataset.drawerType) return;

      event.preventDefault();
      openDrawer(item, { push: true, trigger: link });
    });
  });

  drawerCloseButton?.addEventListener("click", () => closeDrawer());
  drawerBackdrop?.addEventListener("click", () => closeDrawer());
  drawerCopyButton?.addEventListener("click", () => copyCurrentLink());

  drawerContent?.addEventListener("click", (event) => {
    const contactLink = event.target.closest("[data-drawer-contact]");
    if (!contactLink) return;

    event.preventDefault();
    closeDrawer({ returnFocus: false });
    window.setTimeout(() => {
      scrollToTarget("#contact");
    }, 0);
  });

  document.addEventListener("keydown", (event) => {
    if (!drawer?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeDrawer();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = drawerFocusable();
    const first = focusable[0];
    const last = focusable.at(-1);

    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("popstate", () => {
    const item = itemForCurrentPath();
    if (item) {
      openDrawer(item, { push: false });
    } else {
      closeDrawer({ fromNavigation: true, returnFocus: false });
    }
  });

  restoreLegacyRedirect();
  const initialDrawerItem = itemForCurrentPath();
  if (initialDrawerItem) openDrawer(initialDrawerItem);

  const revealElements = [...document.querySelectorAll("[data-reveal]")];

  const showAllReveals = () => {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  };

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    showAllReveals();
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navLinks.length && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleSection) return;

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${visibleSection.target.id}`);
        });
      },
      { rootMargin: "-25% 0px -65%", threshold: [0.1, 0.4, 0.7] },
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  const headingSplits = [];
  let headingAnimationsReady = false;

  const clearHeadingTextAnimations = () => {
    headingSplits.splice(0).forEach((split) => split.revert());
    headingAnimationsReady = false;
  };

  const setupHeadingTextAnimations = () => {
    if (
      headingAnimationsReady ||
      reducedMotion.matches ||
      !window.gsap ||
      !window.ScrollTrigger ||
      !window.SplitText
    ) {
      return;
    }

    const { gsap, ScrollTrigger, SplitText } = window;

    try {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      document.querySelectorAll("[data-split-heading]").forEach((heading) => {
        const split = SplitText.create(heading, {
          type: "lines",
          tag: "span",
          mask: "lines",
          linesClass: "split-line++",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 110,
              autoAlpha: 0,
              duration: 0.88,
              stagger: 0.1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 84%",
                once: true,
                invalidateOnRefresh: true,
              },
            });
          },
        });

        headingSplits.push(split);
      });

      headingAnimationsReady = true;
      requestAnimationFrame(() => ScrollTrigger.refresh());
    } catch {
      clearHeadingTextAnimations();
    }
  };

  const requestHeadingTextAnimations = () => {
    if (document.fonts?.ready) {
      document.fonts.ready.then(setupHeadingTextAnimations);
      return;
    }

    setupHeadingTextAnimations();
  };

  requestHeadingTextAnimations();

  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      showAllReveals();
      clearHeadingTextAnimations();
      return;
    }

    requestHeadingTextAnimations();
  });
})();

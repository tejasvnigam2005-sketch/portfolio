// ═══════════════════════════════════════════════════════════════
// PORTFOLIO APP — V2 — Section controller, renderer, navigation,
// animated counters, magnetic buttons, smooth mobile menu.
// Reads content from data.js, controls section visibility based
// on scroll progress, and handles all interactivity.
// ═══════════════════════════════════════════════════════════════

(() => {
  'use strict';

  // ── Section Progress Ranges ──────────────────────────────
  // Each section has a distinct, non-overlapping range with clean buffers
  // between them so two sections can never collide or overlap.
  const SECTIONS = {
    hero:       { start: 0.000, end: 0.065 },
    about:      { start: 0.080, end: 0.150 },
    work:       { start: 0.165, end: 0.395 },
    kinship:    { start: 0.410, end: 0.490 },
    experience: { start: 0.505, end: 0.575 },
    skills:     { start: 0.590, end: 0.645 },
    proof:      { start: 0.660, end: 0.710 },
    now:        { start: 0.725, end: 0.775 },
    personal:   { start: 0.790, end: 0.840 },
    contact:    { start: 0.855, end: 1.000 },
  };

  // Project sub-sections within the work range
  // Card 0 starts at 0.208, after the section-work-header intro (0.165-0.198)
  function getProjectRanges(count) {
    const cardsStart = 0.208;
    const cardsEnd = 0.386;
    const totalSpan = cardsEnd - cardsStart;
    const slice = totalSpan / count;
    const gap = 0.010; // clean buffer between cards so no cards collide
    const ranges = [];
    for (let i = 0; i < count; i++) {
      const pStart = cardsStart + i * slice;
      const pEnd = pStart + slice - gap;
      ranges.push({
        start: pStart,
        end: pEnd,
      });
    }
    return ranges;
  }

  // ── State ────────────────────────────────────────────────
  let currentProgress = 0;
  let mobileMenuOpen = false;
  let countersAnimated = false;
  let previouslyActive = new Set();

  // ── DOM References ───────────────────────────────────────
  const overlay = document.getElementById('overlay');
  const nav = document.querySelector('.nav');
  const scrollIndicator = document.getElementById('scroll-indicator');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('nav-hamburger');

  // ── Render Content ───────────────────────────────────────
  function renderContent() {
    const d = portfolio; // from data.js

    // — Navigation —
    const navLinksEl = document.getElementById('nav-links');
    d.nav.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'nav-link';
      a.textContent = link.label;
      a.dataset.target = link.target;
      a.addEventListener('click', () => scrollToSection(link.target));
      li.appendChild(a);
      navLinksEl.appendChild(li);
    });

    // Nav CTA
    const navCtaEl = document.getElementById('nav-cta');
    navCtaEl.innerHTML = `<span>${esc(d.nav.cta.label)}</span> <span class="nav-cta-arrow">→</span>`;
    navCtaEl.addEventListener('click', () => scrollToSection(d.nav.cta.target));

    // Brand
    const navBrandEl = document.getElementById('nav-brand');
    navBrandEl.textContent = d.nav.brand;
    navBrandEl.addEventListener('click', () => scrollToSection('hero'));

    // Mobile menu links
    const mobileLinksList = document.getElementById('mobile-links');
    d.nav.links.forEach(link => {
      const a = document.createElement('a');
      a.className = 'nav-mobile-link';
      a.textContent = link.label;
      a.addEventListener('click', () => {
        closeMobileMenu();
        scrollToSection(link.target);
      });
      mobileLinksList.appendChild(a);
    });

    // — Hero —
    document.getElementById('hero-name').textContent = d.person.name;
    document.getElementById('hero-title').textContent = d.person.title;
    document.getElementById('hero-headline').textContent = d.hero.headline;
    document.getElementById('hero-description').textContent = d.hero.description;

    const cta1 = document.getElementById('hero-cta1');
    cta1.textContent = d.hero.cta1.label;
    cta1.addEventListener('click', () => scrollToSection(d.hero.cta1.target));

    const cta2 = document.getElementById('hero-cta2');
    cta2.textContent = d.hero.cta2.label;
    cta2.addEventListener('click', () => scrollToSection(d.hero.cta2.target));

    // — About —
    document.getElementById('about-label').innerHTML = formatLabel(d.about.sectionLabel);
    document.getElementById('about-headline').textContent = d.about.headline;
    document.getElementById('about-statement').textContent = d.about.statement;

    const pillarsEl = document.getElementById('about-pillars');
    d.about.pillars.forEach((p, i) => {
      const div = document.createElement('div');
      div.className = `pillar reveal-up delay-${i + 2}`;
      div.innerHTML = `
        <div class="pillar-title">${esc(p.title)}</div>
        <div class="pillar-desc">${esc(p.description)}</div>
      `;
      pillarsEl.appendChild(div);
    });

    // — Projects —
    document.getElementById('work-label').innerHTML = formatLabel(d.projects.sectionLabel);
    document.getElementById('work-headline').textContent = d.projects.headline;

    const projectsContainer = document.getElementById('projects-container');
    d.projects.items.forEach((proj, i) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.id = `project-${i}`;

      const isReverse = i % 2 !== 0;
      const layoutClass = isReverse ? 'project-layout reverse' : 'project-layout';

      let tagsHtml = '';
      if (proj.tags && proj.tags.length) {
        tagsHtml = `<div class="project-tags">${proj.tags.map(t => `<span class="project-tag">${esc(t)}</span>`).join('')}</div>`;
      }

      let stackHtml = '';
      if (proj.stack && proj.stack.length) {
        stackHtml = `<div class="project-stack">${proj.stack.map(s => `<span class="project-stack-item">${esc(s)}</span>`).join('')}</div>`;
      }

      let linksHtml = '';
      if (proj.github || proj.demo) {
        linksHtml = '<div class="project-links">';
        if (proj.github) {
          linksHtml += `<a href="${esc(proj.github)}" target="_blank" rel="noopener" class="project-link" data-interactive>GITHUB <span class="project-link-arrow">→</span></a>`;
        }
        if (proj.demo) {
          linksHtml += `<a href="${esc(proj.demo)}" target="_blank" rel="noopener" class="project-link" data-interactive>LIVE DEMO <span class="project-link-arrow">→</span></a>`;
        }
        linksHtml += '</div>';
      }

      card.innerHTML = `
        <div class="section-inner">
          <div class="section-label reveal-up"><span>02</span> / SELECTED WORK &nbsp;·&nbsp; ${esc(proj.number)}</div>
          <div class="${layoutClass}">
            <div class="project-info">
              <div class="project-name reveal-up delay-1">${esc(proj.name)}</div>
              <div class="project-short reveal-up delay-2">${esc(proj.shortDescription)}</div>
              ${tagsHtml ? `<div class="reveal-up delay-2">${tagsHtml}</div>` : ''}
              <div class="project-details reveal-up delay-3">
                ${proj.problem ? `<div class="project-detail-block"><h4>Problem</h4><p>${esc(proj.problem)}</p></div>` : ''}
                ${proj.build ? `<div class="project-detail-block"><h4>Build</h4><p>${esc(proj.build)}</p></div>` : ''}
                ${proj.result ? `<div class="project-detail-block"><h4>Impact</h4><p>${esc(proj.result)}</p></div>` : ''}
              </div>
              ${stackHtml ? `<div class="reveal-up delay-4">${stackHtml}</div>` : ''}
              <div class="reveal-up delay-5">${linksHtml}</div>
            </div>
            <div class="project-visual-col reveal-up delay-3">
              <div class="project-visual">
                <span class="project-visual-label">${esc(proj.name)}</span>
              </div>
            </div>
          </div>
        </div>
      `;
      projectsContainer.appendChild(card);
    });

    // — Kinship —
    document.getElementById('kinship-label').innerHTML = formatLabel(d.kinship.sectionLabel);
    document.getElementById('kinship-name').textContent = d.kinship.name;
    document.getElementById('kinship-role').textContent = d.kinship.role;
    document.getElementById('kinship-mission').textContent = d.kinship.mission;

    const kinshipGrid = document.getElementById('kinship-grid');
    const kinshipBlocks = [
      { title: 'PROBLEM', text: d.kinship.problem },
      { title: 'PRODUCT', text: d.kinship.product },
      { title: 'VISION', text: d.kinship.vision },
      { title: 'STATUS', text: d.kinship.stage },
    ];
    kinshipBlocks.forEach((b, i) => {
      const div = document.createElement('div');
      div.className = `kinship-block reveal-up delay-${i + 3}`;
      div.innerHTML = `
        <div class="kinship-block-title">${esc(b.title)}</div>
        <div class="kinship-block-text">${esc(b.text)}</div>
      `;
      kinshipGrid.appendChild(div);
    });

    // — Experience —
    document.getElementById('exp-label').innerHTML = formatLabel(d.experience.sectionLabel);
    document.getElementById('exp-headline').textContent = d.experience.headline;

    const expContainer = document.getElementById('exp-container');
    d.experience.items.forEach(exp => {
      const card = document.createElement('div');
      card.className = 'experience-card reveal-up delay-2';

      let techGroupsHtml = '';
      if (exp.techGroups && exp.techGroups.length) {
        techGroupsHtml = '<div class="exp-tech-groups">';
        exp.techGroups.forEach(g => {
          techGroupsHtml += `
            <div class="exp-tech-group">
              <div class="exp-tech-label">${esc(g.label)}</div>
              <div class="exp-tech-items">
                ${g.items.map(item => `<span class="exp-tech-item">${esc(item)}</span>`).join('')}
              </div>
            </div>
          `;
        });
        techGroupsHtml += '</div>';
      }

      card.innerHTML = `
        <div class="exp-header">
          <div class="exp-company">${esc(exp.company)}</div>
          <div class="exp-date">${esc(exp.date)}</div>
        </div>
        <div class="exp-role">${esc(exp.role)}</div>
        <div class="exp-description">${esc(exp.description)}</div>
        ${exp.impact ? `<div class="exp-impact">IMPACT: <strong>${esc(exp.impact)}</strong></div>` : ''}
        ${techGroupsHtml}
        ${exp.note ? `<div class="exp-note">${esc(exp.note)}</div>` : ''}
      `;
      expContainer.appendChild(card);
    });

    // — Skills —
    document.getElementById('skills-label').innerHTML = formatLabel(d.skills.sectionLabel);
    document.getElementById('skills-headline').textContent = d.skills.headline;

    const skillsGrid = document.getElementById('skills-grid');
    d.skills.groups.forEach((g, i) => {
      const div = document.createElement('div');
      div.className = `skill-group reveal-up delay-${i + 1}`;
      div.innerHTML = `
        <div class="skill-group-title">${esc(g.title)}</div>
        <div class="skill-items">
          ${g.items.map(item => `<div class="skill-item">${esc(item)}</div>`).join('')}
        </div>
      `;
      skillsGrid.appendChild(div);
    });

    // — Proof —
    document.getElementById('proof-label').innerHTML = formatLabel(d.proof.sectionLabel);
    document.getElementById('proof-headline').textContent = d.proof.headline;

    const proofStats = document.getElementById('proof-stats');
    d.proof.stats.forEach((s, i) => {
      const div = document.createElement('div');
      div.className = `proof-stat reveal-up delay-${i + 1}`;
      div.innerHTML = `
        <div class="proof-value" data-target="${esc(s.value)}">${esc(s.value)}</div>
        <div class="proof-label">${esc(s.label)}</div>
      `;
      proofStats.appendChild(div);
    });

    // — Currently Building —
    document.getElementById('now-label').innerHTML = formatLabel(d.currentlyBuilding.sectionLabel);
    document.getElementById('now-headline').textContent = d.currentlyBuilding.headline;

    const nowGrid = document.getElementById('now-grid');
    const nowItems = [
      { key: 'FOCUS', value: d.currentlyBuilding.focus },
      { key: 'PROJECT', value: d.currentlyBuilding.project },
      { key: 'OBJECTIVE', value: d.currentlyBuilding.objective },
      { key: 'STATUS', value: d.currentlyBuilding.status, isBadge: true },
      { key: 'NEXT', value: d.currentlyBuilding.nextMilestone },
    ];
    nowItems.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = `now-row reveal-up delay-${i + 1}`;
      if (item.isBadge) {
        div.innerHTML = `
          <div class="now-key">${esc(item.key)}</div>
          <div class="now-value"><span class="now-status-badge"><span class="now-status-dot"></span>${esc(item.value)}</span></div>
        `;
      } else {
        div.innerHTML = `
          <div class="now-key">${esc(item.key)}</div>
          <div class="now-value">${esc(item.value)}</div>
        `;
      }
      nowGrid.appendChild(div);
    });

    // — Personal —
    document.getElementById('personal-label').innerHTML = formatLabel(d.personal.sectionLabel);
    document.getElementById('personal-headline').textContent = d.personal.headline;

    const interestsEl = document.getElementById('personal-interests');
    d.personal.interests.forEach(interest => {
      const span = document.createElement('span');
      span.className = 'personal-interest';
      span.textContent = interest;
      interestsEl.appendChild(span);
    });

    if (d.personal.featured) {
      document.getElementById('personal-featured-title').textContent = d.personal.featured.title;
      document.getElementById('personal-featured-desc').textContent = d.personal.featured.description;
    }

    // — Contact —
    document.getElementById('contact-headline').textContent = d.contact.headline;
    document.getElementById('contact-desc').textContent = d.contact.description;
    document.getElementById('contact-email').textContent = d.contact.email;
    document.getElementById('contact-email').href = `mailto:${d.contact.email}`;

    if (d.contact.github) {
      document.getElementById('contact-github').textContent = d.contact.github.replace('https://github.com/', '');
      document.getElementById('contact-github').href = d.contact.github;
      document.getElementById('contact-github-row').style.display = 'flex';
    }

    if (d.contact.linkedin) {
      document.getElementById('contact-linkedin').textContent = 'LinkedIn Profile';
      document.getElementById('contact-linkedin').href = d.contact.linkedin;
      document.getElementById('contact-linkedin-row').style.display = 'flex';
    }

    const contactViewGithub = document.getElementById('contact-view-github');
    if (d.contact.github) {
      contactViewGithub.href = d.contact.github;
      contactViewGithub.style.display = 'inline-flex';
    }
  }

  // ── Animated Counter ─────────────────────────────────────
  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    const proofValues = document.querySelectorAll('.proof-value');
    proofValues.forEach(el => {
      const target = el.getAttribute('data-target');
      if (!target) return;

      // Extract numeric part and suffix
      const match = target.match(/^(\d+)(.*)$/);
      if (match) {
        const endNum = parseInt(match[1], 10);
        const suffix = match[2]; // e.g., "+"
        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * endNum);

          el.textContent = current + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }

        el.textContent = '0' + suffix;
        requestAnimationFrame(updateCounter);
      }
      // Non-numeric values (like "FINALIST") just stay as-is
    });
  }

  // ── Section Visibility Controller ────────────────────────
  function updateSections(progress) {
    // 1. Determine which main section (if any) is active.
    // Single-winner guarantee: only ONE main section can ever be active.
    const mainKeys = ['hero', 'about', 'kinship', 'experience', 'skills', 'proof', 'now', 'personal', 'contact'];
    let activeMainKey = null;
    for (const key of mainKeys) {
      const range = SECTIONS[key];
      if (progress >= range.start && progress <= range.end) {
        activeMainKey = key;
        break;
      }
    }

    mainKeys.forEach(key => {
      const el = document.getElementById(`section-${key}`);
      if (!el) return;
      const isActive = (key === activeMainKey);
      el.classList.toggle('active', isActive);

      // Trigger counter animation when proof section becomes active
      if (key === 'proof' && isActive && !countersAnimated) {
        animateCounters();
      }
    });

    // 2. Work section header — active strictly during intro phase before project cards
    const workHeader = document.getElementById('section-work-header');
    if (workHeader) {
      const inWorkHeader = progress >= SECTIONS.work.start && progress <= 0.198;
      workHeader.classList.toggle('active', inWorkHeader);
    }

    // 3. Project cards — single-winner guarantee: only ONE card can ever be active
    const projectCount = portfolio.projects.items.length;
    const projectRanges = getProjectRanges(projectCount);
    let activeCardIndex = -1;
    projectRanges.forEach((range, i) => {
      if (progress >= range.start && progress <= range.end) {
        activeCardIndex = i;
      }
    });

    for (let i = 0; i < projectCount; i++) {
      const card = document.getElementById(`project-${i}`);
      if (card) {
        card.classList.toggle('active', i === activeCardIndex);
      }
    }

    // 4. Update nav active states
    const navLinks = document.querySelectorAll('.nav-link');
    let activeTarget = null;
    const orderedSections = ['hero', 'about', 'work', 'kinship', 'experience', 'skills', 'proof', 'now', 'personal', 'contact'];
    for (const key of orderedSections) {
      const range = SECTIONS[key];
      if (progress >= range.start && progress <= range.end) {
        activeTarget = key;
        break;
      }
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.target === activeTarget);
    });

    // 5. Nav scroll state
    nav.classList.toggle('scrolled', progress > 0.02);

    // 6. Scroll indicator
    if (scrollIndicator) {
      scrollIndicator.style.width = `${progress * 100}%`;
    }
  }

  // ── Scroll to Section ────────────────────────────────────
  function scrollToSection(target) {
    const range = SECTIONS[target];
    if (!range) return;
    // Scroll directly into the comfortable center of the section's active range
    const targetProgress = (range.start + range.end) / 2;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = targetProgress * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }

  // ── Mobile Menu ──────────────────────────────────────────
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    mobileMenu.classList.toggle('open', mobileMenuOpen);
    hamburger.classList.toggle('active', mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }

  // ── Magnetic Button Effect ───────────────────────────────
  function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');

    buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = 0.15;

        btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.transition = `transform var(--duration-normal) var(--ease-spring)`;

        // Reset transition after animation completes
        setTimeout(() => {
          btn.style.transition = '';
        }, 400);
      });
    });
  }

  // ── Helpers ──────────────────────────────────────────────
  function esc(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function formatLabel(label) {
    // Turn "01 / ABOUT" into "<span>01</span> / ABOUT"
    const parts = label.split(' / ');
    if (parts.length === 2) {
      return `<span>${esc(parts[0])}</span> / ${esc(parts[1])}`;
    }
    return esc(label);
  }

  // ── Integration with Frame Engine ────────────────────────
  // The frame engine in index.html updates currentProgress.
  // We expose a hook so it can call our update function.
  window._portfolioUpdate = function(progress) {
    currentProgress = progress;
    updateSections(progress);
  };

  // ── Initialize ───────────────────────────────────────────
  renderContent();
  updateSections(0);

  // Defer magnetic buttons to after DOM paint
  requestAnimationFrame(() => {
    initMagneticButtons();
  });

})();

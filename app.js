/**
 * DroneTV.in — Production Interactive Services Engine
 * Architecture: Clean State-Driven Component Controller
 * Author: Senior Frontend Engineer
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA REPOSITORY (Single Source of Truth)
  // =========================================================================
  const SERVICES_DATA = [
    {
      id: 1,
      title: "Solar Plant Inspection",
      company: "SkyInspect Technologies",
      category: "inspection",
      industry: "energy",
      location: "maharashtra",
      stateName: "Maharashtra",
      sector: "energy",
      package: "enterprise",
      verified: "dgca",
      rating: 4.8,
      reviews: 112,
      badge: "POPULAR",
      badgeClass: "badge-popular",
      image: "images/solar_inspection.jpg",
      description: "Radiometric thermal & RGB inspection for utility-scale solar PV assets with string-level defect mapping.",
      tags: ["INSPECTION", "SOLAR", "THERMAL AUDIT"],
      features: [
        { icon: "fa-solid fa-camera-rotate", label: "Radiometric Thermal (±2°C)" },
        { icon: "fa-solid fa-brain", label: "AI Hotspot Classification" },
        { icon: "fa-solid fa-file-invoice", label: "IEC 62446-3 Compliant Reports" }
      ],
      specs: {
        accuracy: "Radiometric Thermal (±2°C Accuracy)",
        turnaround: "24 – 48 Hours for full AI classification",
        equipment: "DJI Matrice 350 RTK + Zenmuse H20T",
        deliverables: "Hotspot GIS Map, Orthomosaic, String-level Defect PDF",
        priceRange: "₹450 – ₹750 per MW"
      }
    },
    {
      id: 2,
      title: "Aerial Survey & Topographic Mapping",
      company: "GeoMap Solutions",
      category: "survey",
      industry: "agriculture",
      location: "karnataka",
      stateName: "Karnataka",
      sector: "agriculture",
      package: "enterprise",
      verified: "dgca",
      rating: 4.7,
      reviews: 98,
      badge: "VERIFIED",
      badgeClass: "badge-verified",
      image: "images/aerial_mapping.jpg",
      description: "High-precision cadastral mapping, contours, DEM/DSM and cut-fill volumetric calculation.",
      tags: ["MAPPING", "SURVEY", "GIS"],
      features: [
        { icon: "fa-solid fa-map-location", label: "Sub-3cm GSD Precision" },
        { icon: "fa-solid fa-cubes", label: "Volumetric Cut/Fill Math" },
        { icon: "fa-solid fa-diagram-project", label: "CAD / GIS Ready Formats" }
      ],
      specs: {
        accuracy: "GCP Calibrated < 3cm Horizontal / Vertical",
        turnaround: "3 – 5 Business Days",
        equipment: "WingtraOne GEN II / eBee X PPK",
        deliverables: "GeoTIFF Orthomosaic, DSM/DTM, CAD Contours, LAS Point Cloud",
        priceRange: "₹800 – ₹1,800 per Acre"
      }
    },
    {
      id: 3,
      title: "Construction & Infrastructure Monitoring",
      company: "BuildView Drones",
      category: "inspection",
      industry: "infrastructure",
      location: "telangana",
      stateName: "Telangana",
      sector: "infrastructure",
      package: "amc",
      verified: "dgca",
      rating: 4.6,
      reviews: 76,
      badge: "CERTIFIED",
      badgeClass: "badge-certified",
      image: "images/construction_monitor.jpg",
      description: "Milestone progress tracking, site logistics audit, 4K orthomosaic overlays and BIM integration.",
      tags: ["CONSTRUCTION", "MONITORING", "BIM"],
      features: [
        { icon: "fa-solid fa-clipboard-check", label: "Bi-Weekly Progress Reports" },
        { icon: "fa-solid fa-clock-rotate-left", label: "4K Time-Lapse Flythroughs" },
        { icon: "fa-solid fa-city", label: "Autodesk BIM 360 Overlay" }
      ],
      specs: {
        accuracy: "Sub-centimeter volumetric analysis",
        turnaround: "Weekly or Bi-weekly automated sync",
        equipment: "DJI Mavic 3 Enterprise RTK",
        deliverables: "4K Video Flythroughs, BIM Overlay, Cut/Fill Reports",
        priceRange: "₹35,000 / month retainership"
      }
    },
    {
      id: 4,
      title: "DGCA Remote Pilot Training (RPC)",
      company: "India Drone Academy",
      category: "training",
      industry: "infrastructure",
      location: "delhi",
      stateName: "Delhi NCR",
      sector: "infrastructure",
      package: "basic",
      verified: "dgca",
      rating: 4.8,
      reviews: 145,
      badge: "TRAINING",
      badgeClass: "badge-training",
      image: "images/pilot_training.jpg",
      description: "DGCA-authorized Remote Pilot Certificate course with simulator training and hands-on flying sessions.",
      tags: ["TRAINING", "PILOT", "CERTIFICATION"],
      features: [
        { icon: "fa-solid fa-shield-halved", label: "Govt DGCA Approved RPTO" },
        { icon: "fa-solid fa-gamepad", label: "Dual Controls & Simulators" },
        { icon: "fa-solid fa-certificate", label: "DigitalSky Official RPC" }
      ],
      specs: {
        accuracy: "100% DGCA Remote Pilot Certificate (RPC)",
        turnaround: "5-Day intensive program (Small & Medium Drone)",
        equipment: "DGCA Type-Certified Training Quadcopters & Simulators",
        deliverables: "DigitalSky Certification, Logbook, Placement Assistance",
        priceRange: "₹42,000 all-inclusive"
      }
    },
    {
      id: 5,
      title: "GIS & Geospatial Consulting",
      company: "TerraScan Technologies",
      category: "consulting",
      industry: "agriculture",
      location: "maharashtra",
      stateName: "Maharashtra",
      sector: "agriculture",
      package: "enterprise",
      verified: "dgca",
      rating: 4.6,
      reviews: 63,
      badge: "CONSULTING",
      badgeClass: "badge-consulting",
      image: "images/gis_consulting.jpg",
      description: "Enterprise GIS geodatabase architecture, spatial modeling, terrain analytics and custom web dashboards.",
      tags: ["GIS", "CONSULTING", "SPATIAL AI"],
      features: [
        { icon: "fa-solid fa-chart-network", label: "Spatial Database Design" },
        { icon: "fa-solid fa-sliders", label: "Custom GeoPortals" },
        { icon: "fa-solid fa-chart-pie", label: "Predictive Flood/Crop Models" }
      ],
      specs: {
        accuracy: "Enterprise GIS GeoDatabase Architecture",
        turnaround: "Milestone-based delivery",
        equipment: "ArcGIS Pro, QGIS, WebGIS Portal Stacks",
        deliverables: "Interactive Web Maps, Geopackage, Watershed Models",
        priceRange: "Custom Project Quote"
      }
    },
    {
      id: 6,
      title: "Industrial & Confined Space Inspection",
      company: "AeroInspect India",
      category: "inspection",
      industry: "mining",
      location: "gujarat",
      stateName: "Gujarat",
      sector: "mining",
      package: "basic",
      verified: "dgca",
      rating: 4.7,
      reviews: 89,
      badge: "ON DEMAND",
      badgeClass: "badge-ondemand",
      image: "images/industrial_inspect.jpg",
      description: "NDT visual and thermographic audit of flare stacks, boiler chimneys, storage tanks and mining pits.",
      tags: ["INSPECTION", "INDUSTRIAL", "SAFETY"],
      features: [
        { icon: "fa-solid fa-camera", label: "Confined Cage Elios Drones" },
        { icon: "fa-solid fa-magnifying-glass-chart", label: "AI Defect Severity Index" },
        { icon: "fa-solid fa-shield-check", label: "Zero-Downtime Safe Audits" }
      ],
      specs: {
        accuracy: "Sub-millimeter crack & corrosion measurement",
        turnaround: "Same-day on-site summary + 48hr full NDT report",
        equipment: "Flyability Elios 3 (Confined Space) & DJI M30T",
        deliverables: "Thermographic NDT Logs, 3D Asset Twin, Defect Severity Matrix",
        priceRange: "₹65,000 per inspection day"
      }
    },
    {
      id: 7,
      title: "LiDAR Point Cloud Data Processing",
      company: "PointCloud Analytics",
      category: "software",
      industry: "infrastructure",
      location: "tamil-nadu",
      stateName: "Tamil Nadu",
      sector: "infrastructure",
      package: "enterprise",
      verified: "dgca",
      rating: 4.5,
      reviews: 58,
      badge: "DATA PROCESSING",
      badgeClass: "badge-dataproc",
      image: "images/lidar_processing.jpg",
      description: "Dense point cloud classification, transmission line sag clearance, digital elevation models and 3D wireframing.",
      tags: ["LIDAR", "PROCESSING", "3D MODELING"],
      features: [
        { icon: "fa-solid fa-network-wired", label: "250+ pts/m² Classification" },
        { icon: "fa-solid fa-cubes-stacked", label: "Powerline & Ground Separation" },
        { icon: "fa-solid fa-map-location-dot", label: "Direct CAD Integration" }
      ],
      specs: {
        accuracy: "Over 250 pts/m² classified point cloud",
        turnaround: "48 – 72 hours per 100km corridor",
        equipment: "Terrasolid, CloudCompare & Deep Learning Classifiers",
        deliverables: "Ground/Vegetation/Powerline Classified LAS, DTM, CAD Wireframes",
        priceRange: "₹4,500 per sq km"
      }
    },
    {
      id: 8,
      title: "Drone Repair, Spares & AMC Support",
      company: "DroneCare Services",
      category: "maintenance",
      industry: "infrastructure",
      location: "uttar-pradesh",
      stateName: "Uttar Pradesh",
      sector: "infrastructure",
      package: "amc",
      verified: "dgca",
      rating: 4.6,
      reviews: 71,
      badge: "MAINTENANCE",
      badgeClass: "badge-maintenance",
      image: "images/drone_repair.jpg",
      description: "Authorized OEM repairs, genuine avionics replacements, sensor recalibration and yearly AMC retainers.",
      tags: ["REPAIR", "MAINTENANCE", "SUPPORT"],
      features: [
        { icon: "fa-solid fa-microchip", label: "Bench Diagnostic Test" },
        { icon: "fa-solid fa-gear", label: "OEM Spares with 6M Warranty" },
        { icon: "fa-solid fa-handshake", label: "Comprehensive AMC Plans" }
      ],
      specs: {
        accuracy: "OEM Genuine Spares with 6-Month Warranty",
        turnaround: "24 – 48 hours express bench turnaround",
        equipment: "Oscilloscope, Motor Dynamometer, Calibration jigs",
        deliverables: "Pre/Post Diagnostic Bench Certificate, Test Flight Logs",
        priceRange: "₹1,500 inspection + spares cost"
      }
    }
  ];

  // =========================================================================
  // 2. STATE STORE & PERSISTENCE
  // =========================================================================
  class Store {
    constructor() {
      this.state = {
        search: '',
        category: 'all',
        industries: [],
        locations: [],
        sector: '',
        state: '',
        package: '',
        verified: '',
        sortBy: 'relevance',
        viewMode: 'grid',
        currentPage: 1,
        itemsPerPage: 8,
        wishlist: this.loadWishlist()
      };
      this.listeners = [];
    }

    loadWishlist() {
      try {
        const saved = localStorage.getItem('dronetv_wishlist');
        return saved ? new Set(JSON.parse(saved)) : new Set();
      } catch {
        return new Set();
      }
    }

    saveWishlist() {
      try {
        localStorage.setItem('dronetv_wishlist', JSON.stringify(Array.from(this.state.wishlist)));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }
    }

    subscribe(listener) {
      this.listeners.push(listener);
    }

    setState(patch) {
      this.state = { ...this.state, ...patch };
      this.listeners.forEach(fn => fn(this.state));
    }

    toggleWishlist(id) {
      const idNum = Number(id);
      if (this.state.wishlist.has(idNum)) {
        this.state.wishlist.delete(idNum);
      } else {
        this.state.wishlist.add(idNum);
      }
      this.saveWishlist();
      this.setState({ wishlist: new Set(this.state.wishlist) });
    }
  }

  const appStore = new Store();

  // =========================================================================
  // 3. DOM ELEMENT REFERENCES
  // =========================================================================
  const DOM = {
    // Header & Mobile Nav
    mobileNavToggle: document.getElementById('mobileNavToggle'),
    mainNav: document.getElementById('mainNav'),
    dropdownToggles: document.querySelectorAll('.dropdown-toggle'),
    savedCount: document.getElementById('savedCount'),
    viewSavedServicesBtn: document.getElementById('viewSavedServicesBtn'),
    langMenuBtn: document.getElementById('langMenuBtn'),
    langOptions: document.querySelectorAll('.lang-option'),
    currentLangLabel: document.getElementById('currentLangLabel'),

    // Top Ribbon
    sectorSelect: document.getElementById('sectorSelect'),
    stateSelect: document.getElementById('stateSelect'),
    packageSelect: document.getElementById('packageSelect'),
    verifiedSelect: document.getElementById('verifiedSelect'),
    categorySelect: document.getElementById('categorySelect'),
    serviceSearchInput: document.getElementById('serviceSearchInput'),
    searchSubmitBtn: document.getElementById('searchSubmitBtn'),
    sortBySelect: document.getElementById('sortBySelect'),

    // Mobile Action Bar & Drawer
    mobileFilterBtn: document.getElementById('mobileFilterBtn'),
    mobileFilterBadge: document.getElementById('mobileFilterBadge'),
    closeSidebarBtn: document.getElementById('closeSidebarBtn'),
    sidebarBackdrop: document.getElementById('sidebarBackdrop'),
    quickCatButtons: document.querySelectorAll('.quick-cat-btn'),

    // Sidebar Filters
    filtersSidebar: document.getElementById('filtersSidebar'),
    clearAllFiltersBtn: document.getElementById('clearAllFiltersBtn'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    applyFiltersBtn: document.getElementById('applyFiltersBtn'),
    categoryPills: document.querySelectorAll('.cat-pill'),
    industryCheckboxes: document.querySelectorAll('input[name="industry"]'),
    locationCheckboxes: document.querySelectorAll('input[name="location"]'),
    stateSearchInput: document.getElementById('stateSearchInput'),
    toggleMoreIndustries: document.getElementById('toggleMoreIndustries'),
    extraIndustries: document.getElementById('extraIndustries'),
    toggleMoreLocations: document.getElementById('toggleMoreLocations'),
    extraLocations: document.getElementById('extraLocations'),
    activeMatchesCount: document.getElementById('activeMatchesCount'),
    collapseToggles: document.querySelectorAll('.collapse-toggle'),

    // Content Grid & Actions
    servicesGrid: document.getElementById('servicesGrid'),
    servicesTotalCount: document.getElementById('servicesTotalCount'),
    activeFilterTagsBar: document.getElementById('activeFilterTagsBar'),
    activeTagsContainer: document.getElementById('activeTagsContainer'),
    clearAllTagsBtn: document.getElementById('clearAllTagsBtn'),
    gridViewBtn: document.getElementById('gridViewBtn'),
    listViewBtn: document.getElementById('listViewBtn'),
    noResultsBox: document.getElementById('noResultsBox'),
    resetFromEmptyBtn: document.getElementById('resetFromEmptyBtn'),

    // Pagination
    paginationInfo: document.getElementById('paginationInfo'),
    paginationTotalCount: document.getElementById('paginationTotalCount'),
    pageNumbersContainer: document.getElementById('pageNumbersContainer'),
    prevPageBtn: document.getElementById('prevPageBtn'),
    nextPageBtn: document.getElementById('nextPageBtn'),
    perPageSelect: document.getElementById('perPageSelect'),

    // Modals
    enquireModal: document.getElementById('enquireModal'),
    closeEnquireModal: document.getElementById('closeEnquireModal'),
    enquireForm: document.getElementById('enquireForm'),
    modalServiceTitle: document.getElementById('modalServiceTitle'),
    modalCompanySubtitle: document.getElementById('modalCompanySubtitle'),
    formServiceId: document.getElementById('formServiceId'),
    submitEnquiryBtn: document.getElementById('submitEnquiryBtn'),

    // Details Modal
    detailsModal: document.getElementById('detailsModal'),
    closeDetailsModal: document.getElementById('closeDetailsModal'),
    detailsTitle: document.getElementById('detailsTitle'),
    detailsCompany: document.getElementById('detailsCompany'),
    detailsBadge: document.getElementById('detailsBadge'),
    detailsBody: document.getElementById('detailsBody'),

    // TV & 10-Foot UI Elements
    tvModeToggleBtn: document.getElementById('tvModeToggleBtn'),
    tvModePill: document.getElementById('tvModePill'),
    tvFullscreenBtn: document.getElementById('tvFullscreenBtn'),
    tvRemoteHud: document.getElementById('tvRemoteHud'),
    tvHudDismissBtn: document.getElementById('tvHudDismissBtn'),
    tvShowcaseModeBtn: document.getElementById('tvShowcaseModeBtn'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  // =========================================================================
  // 4. UI HELPER UTILITIES
  // =========================================================================
  
  /**
   * Display accessible, auto-dismissing toast notifications
   * @param {string} message - Text notification message
   * @param {'success'|'info'|'wishlist'|'danger'} type - Visual styling category
   */
  function showToast(message, type = 'info') {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    let icon = '<i class="fa-solid fa-circle-check" aria-hidden="true"></i>';
    if (type === 'wishlist') icon = '<i class="fa-solid fa-heart" aria-hidden="true"></i>';
    if (type === 'danger') icon = '<i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i>';
    if (type === 'info') icon = '<i class="fa-solid fa-circle-info" aria-hidden="true"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  /**
   * Smooth number ticker for metrics bar
   */
  function animateMetrics() {
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      if (!target) return;
      let current = Math.floor(target * 0.7);
      const step = Math.ceil((target - current) / 40);
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target.toLocaleString('en-IN');
          clearInterval(timer);
        } else {
          el.textContent = current.toLocaleString('en-IN');
        }
      }, 25);
    });
  }

  // =========================================================================
  // 5. CORE FILTER & SORT ENGINE
  // =========================================================================
  function getFilteredAndSortedServices(state) {
    const query = (state.search || '').trim().toLowerCase();

    const filtered = SERVICES_DATA.filter(service => {
      // 1. Search Query
      if (query) {
        const fullText = `${service.title} ${service.company} ${service.description} ${service.tags.join(' ')} ${service.stateName}`.toLowerCase();
        if (!fullText.includes(query)) return false;
      }

      // 2. Category
      if (state.category && state.category !== 'all') {
        if (service.category !== state.category) return false;
      }

      // 3. Industry (Multi-select)
      if (state.industries.length > 0) {
        if (!state.industries.includes(service.industry)) return false;
      }

      // 4. Location (Multi-select)
      if (state.locations.length > 0) {
        if (!state.locations.includes(service.location)) return false;
      }

      // 5. Sector from Top Ribbon
      if (state.sector) {
        if (service.sector !== state.sector) return false;
      }

      // 6. State from Top Ribbon
      if (state.state) {
        if (service.location !== state.state) return false;
      }

      // 7. Package from Top Ribbon
      if (state.package) {
        if (service.package !== state.package) return false;
      }

      // 8. Verification Status
      if (state.verified === 'dgca') {
        if (service.verified !== 'dgca') return false;
      } else if (state.verified === 'popular') {
        if (service.badge !== 'POPULAR') return false;
      }

      return true;
    });

    // Sort Results
    filtered.sort((a, b) => {
      if (state.sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (state.sortBy === 'reviews') {
        return b.reviews - a.reviews;
      }
      return a.id - b.id; // Relevance / Default
    });

    return filtered;
  }

  // =========================================================================
  // 6. RENDERERS
  // =========================================================================

  /**
   * Render single service card HTML component
   * @param {Object} service - Service item data
   * @param {boolean} isSaved - Wishlist status
   */
  function createServiceCardHTML(service, isSaved) {
    return `
      <article class="service-card" data-id="${service.id}" data-category="${service.category}">
        <div class="card-thumb-wrap">
          <img src="${service.image}" alt="${service.title}" class="card-img" loading="lazy">
          <span class="badge ${service.badgeClass}">${service.badge}</span>
          <button type="button" class="wishlist-btn ${isSaved ? 'saved' : ''}" 
                  title="${isSaved ? 'Remove from Saved' : 'Save Service'}" 
                  data-service-id="${service.id}" 
                  aria-label="${isSaved ? 'Saved to Wishlist' : 'Add to Wishlist'}">
            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
        
        <div class="card-body">
          <h3 class="service-title">${service.title}</h3>
          <div class="company-name">
            <i class="fa-solid fa-shield-halved company-icon"></i> ${service.company}
          </div>
          <p class="service-desc">${service.description}</p>

          <div class="feature-bullets">
            ${service.features.map(f => `
              <div class="feature-bullet">
                <i class="${f.icon}"></i>
                <span>${f.label}</span>
              </div>
            `).join('')}
          </div>

          <div class="service-tags">
            ${service.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
          </div>

          <div class="card-rating">
            <i class="fa-solid fa-star star-filled"></i>
            <span class="rating-score">${service.rating.toFixed(1)}</span>
            <span class="reviews-count">(${service.reviews} verified reviews)</span>
          </div>

          <div class="card-actions">
            <button type="button" class="btn btn-outline view-details-btn" data-id="${service.id}">
              <i class="fa-regular fa-eye"></i> Details
            </button>
            <button type="button" class="btn btn-danger enquire-btn" 
                    data-id="${service.id}" 
                    data-title="${service.title}" 
                    data-company="${service.company}">
              <i class="fa-solid fa-paper-plane"></i> Enquire
            </button>
          </div>
        </div>
      </article>
    `;
  }

  /**
   * Synchronize Active Filter Tags Bar
   */
  function renderActiveFilterChips(state) {
    if (!DOM.activeFilterTagsBar || !DOM.activeTagsContainer) return;

    const chips = [];

    if (state.category && state.category !== 'all') {
      chips.push({ type: 'category', label: `Category: ${state.category}`, val: state.category });
    }
    if (state.search) {
      chips.push({ type: 'search', label: `Keyword: "${state.search}"`, val: state.search });
    }
    state.industries.forEach(ind => {
      chips.push({ type: 'industry', label: `Industry: ${ind}`, val: ind });
    });
    state.locations.forEach(loc => {
      chips.push({ type: 'location', label: `State: ${loc}`, val: loc });
    });
    if (state.sector) {
      chips.push({ type: 'sector', label: `Sector: ${state.sector}`, val: state.sector });
    }
    if (state.state) {
      chips.push({ type: 'state', label: `Region: ${state.state}`, val: state.state });
    }
    if (state.package) {
      chips.push({ type: 'package', label: `Package: ${state.package}`, val: state.package });
    }

    // Update Mobile Filter Badge Count
    if (DOM.mobileFilterBadge) {
      let filterCount = chips.length;
      DOM.mobileFilterBadge.textContent = filterCount;
      DOM.mobileFilterBadge.style.display = filterCount > 0 ? 'inline-flex' : 'none';
    }

    if (chips.length > 0) {
      DOM.activeFilterTagsBar.style.display = 'flex';
      DOM.activeTagsContainer.innerHTML = chips.map(c => `
        <span class="filter-tag-badge">
          ${c.label}
          <button type="button" class="remove-chip-btn" data-type="${c.type}" data-val="${c.val}" aria-label="Remove filter">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </span>
      `).join('');

      DOM.activeTagsContainer.querySelectorAll('.remove-chip-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const type = btn.getAttribute('data-type');
          const val = btn.getAttribute('data-val');

          if (type === 'category') {
            appStore.setState({ category: 'all', currentPage: 1 });
            DOM.categorySelect.value = 'all';
          } else if (type === 'search') {
            appStore.setState({ search: '', currentPage: 1 });
            DOM.serviceSearchInput.value = '';
          } else if (type === 'industry') {
            const next = state.industries.filter(i => i !== val);
            appStore.setState({ industries: next, currentPage: 1 });
            const cb = Array.from(DOM.industryCheckboxes).find(c => c.value === val);
            if (cb) cb.checked = false;
          } else if (type === 'location') {
            const next = state.locations.filter(l => l !== val);
            appStore.setState({ locations: next, currentPage: 1 });
            const cb = Array.from(DOM.locationCheckboxes).find(c => c.value === val);
            if (cb) cb.checked = false;
          } else if (type === 'sector') {
            appStore.setState({ sector: '', currentPage: 1 });
            DOM.sectorSelect.value = '';
          } else if (type === 'state') {
            appStore.setState({ state: '', currentPage: 1 });
            DOM.stateSelect.value = '';
          } else if (type === 'package') {
            appStore.setState({ package: '', currentPage: 1 });
            DOM.packageSelect.value = '';
          }
        });
      });
    } else {
      DOM.activeFilterTagsBar.style.display = 'none';
      DOM.activeTagsContainer.innerHTML = '';
    }
  }

  /**
   * Main Render Pipeline
   */
  function render(state) {
    const filteredServices = getFilteredAndSortedServices(state);
    const total = filteredServices.length;

    // Update Counter Badges
    if (DOM.servicesTotalCount) DOM.servicesTotalCount.textContent = total;
    if (DOM.paginationTotalCount) DOM.paginationTotalCount.textContent = total;
    if (DOM.activeMatchesCount) DOM.activeMatchesCount.textContent = total;
    if (DOM.savedCount) DOM.savedCount.textContent = state.wishlist.size;

    // Sync Quick Category Buttons on Mobile
    if (DOM.quickCatButtons) {
      DOM.quickCatButtons.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat === state.category || (cat === 'all' && (!state.category || state.category === 'all'))) {
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        }
      });
    }

    // Handle View Mode Layout Class
    if (state.viewMode === 'list') {
      DOM.servicesGrid.classList.add('list-view');
      if (DOM.listViewBtn) DOM.listViewBtn.classList.add('active');
      if (DOM.gridViewBtn) DOM.gridViewBtn.classList.remove('active');
    } else {
      DOM.servicesGrid.classList.remove('list-view');
      if (DOM.gridViewBtn) DOM.gridViewBtn.classList.add('active');
      if (DOM.listViewBtn) DOM.listViewBtn.classList.remove('active');
    }

    // Render Active Filter Chips
    renderActiveFilterChips(state);

    // Empty State Check
    if (total === 0) {
      DOM.servicesGrid.innerHTML = '';
      if (DOM.noResultsBox) DOM.noResultsBox.style.display = 'block';
      if (DOM.paginationInfo) DOM.paginationInfo.textContent = 'Showing 0 services';
      if (DOM.pageNumbersContainer) DOM.pageNumbersContainer.innerHTML = '';
      if (DOM.prevPageBtn) DOM.prevPageBtn.disabled = true;
      if (DOM.nextPageBtn) DOM.nextPageBtn.disabled = true;
      return;
    } else {
      if (DOM.noResultsBox) DOM.noResultsBox.style.display = 'none';
    }

    // Pagination Calculation
    const totalPages = Math.ceil(total / state.itemsPerPage);
    const safePage = Math.min(Math.max(1, state.currentPage), totalPages);
    const startIndex = (safePage - 1) * state.itemsPerPage;
    const paginatedItems = filteredServices.slice(startIndex, startIndex + state.itemsPerPage);

    // Render Cards
    DOM.servicesGrid.innerHTML = paginatedItems.map(item => {
      const isSaved = state.wishlist.has(item.id);
      return createServiceCardHTML(item, isSaved);
    }).join('');

    // Update Pagination Bar
    const endDisplay = Math.min(startIndex + state.itemsPerPage, total);
    if (DOM.paginationInfo) {
      DOM.paginationInfo.textContent = `Showing ${startIndex + 1} – ${endDisplay} of ${total} services`;
    }

    if (DOM.prevPageBtn) DOM.prevPageBtn.disabled = safePage <= 1;
    if (DOM.nextPageBtn) DOM.nextPageBtn.disabled = safePage >= totalPages;

    if (DOM.pageNumbersContainer) {
      let pagesHTML = '';
      for (let p = 1; p <= totalPages; p++) {
        pagesHTML += `<button type="button" class="page-num ${p === safePage ? 'active' : ''}" data-page="${p}">${p}</button>`;
      }
      DOM.pageNumbersContainer.innerHTML = pagesHTML;

      DOM.pageNumbersContainer.querySelectorAll('.page-num').forEach(btn => {
        btn.addEventListener('click', () => {
          const page = parseInt(btn.getAttribute('data-page'), 10);
          appStore.setState({ currentPage: page });
          DOM.servicesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    // Attach Dynamic Event Listeners to New DOM elements
    bindCardEvents();
  }

  // =========================================================================
  // 7. EVENT HANDLERS & MODAL CONTROLLERS
  // =========================================================================
  function bindCardEvents() {
    // 1. Wishlist Buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-service-id'), 10);
        const item = SERVICES_DATA.find(s => s.id === id);
        const wasSaved = appStore.state.wishlist.has(id);

        appStore.toggleWishlist(id);

        if (wasSaved) {
          showToast(`Removed "${item.title}" from saved list.`, 'info');
        } else {
          showToast(`Saved "${item.title}" to your favorites!`, 'wishlist');
        }
      });
    });

    // 2. View Details Modal Buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        openDetailsModal(id);
      });
    });

    // 3. Enquire Modal Buttons
    document.querySelectorAll('.enquire-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const title = btn.getAttribute('data-title');
        const company = btn.getAttribute('data-company');
        openEnquireModal(id, title, company);
      });
    });
  }

  function openEnquireModal(id, title, company) {
    if (!DOM.enquireModal) return;
    DOM.formServiceId.value = id || '';
    DOM.modalServiceTitle.textContent = `Enquire for ${title || 'Drone Service'}`;
    DOM.modalCompanySubtitle.textContent = `By ${company || 'Verified Partner'}`;
    DOM.enquireModal.classList.add('open');
    DOM.enquireModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeEnquireModal() {
    if (!DOM.enquireModal) return;
    DOM.enquireModal.classList.remove('open');
    DOM.enquireModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openDetailsModal(id) {
    const service = SERVICES_DATA.find(item => item.id === id);
    if (!service || !DOM.detailsModal) return;

    DOM.detailsTitle.textContent = service.title;
    DOM.detailsCompany.textContent = `Provided by ${service.company} • DGCA & DroneTV Verified`;
    DOM.detailsBadge.textContent = service.badge;

    DOM.detailsBody.innerHTML = `
      <img src="${service.image}" alt="${service.title}" class="details-hero-img">
      
      <div class="details-grid">
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; margin-bottom: 8px;">
            Service Overview
          </h4>
          <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 16px; line-height: 1.6;">
            ${service.description} Operated by DGCA-certified flight crews with comprehensive third-party insurance and DigitalSky clearance protocols.
          </p>

          <h4 style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 800; margin-bottom: 8px;">
            Key Deliverables & Formats
          </h4>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
            ${service.tags.map(t => `<span class="tag-chip" style="font-size: 0.75rem; padding: 4px 10px;">${t}</span>`).join('')}
          </div>

          <div style="background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 8px; padding: 14px; margin-bottom: 16px;">
            <strong style="color: #92400E; display: flex; align-items: center; gap: 6px; font-size: 0.86rem;">
              <i class="fa-solid fa-certificate"></i> Compliance Guarantee
            </strong>
            <p style="font-size: 0.8rem; color: #78350F; margin-top: 4px; line-height: 1.4;">
              100% compliant with DGCA Drone Rules 2021, DigitalSky Green Zone permissions, and liability insurance coverage.
            </p>
          </div>
        </div>

        <div class="details-specs">
          <h5 class="spec-title"><i class="fa-solid fa-list-check"></i> Technical Specs</h5>
          <ul class="spec-list">
            <li><i class="fa-solid fa-bullseye"></i> <div><strong>Accuracy:</strong><br>${service.specs.accuracy}</div></li>
            <li><i class="fa-solid fa-stopwatch"></i> <div><strong>Turnaround:</strong><br>${service.specs.turnaround}</div></li>
            <li><i class="fa-solid fa-plane-up"></i> <div><strong>Equipment:</strong><br>${service.specs.equipment}</div></li>
            <li><i class="fa-solid fa-box-open"></i> <div><strong>Output:</strong><br>${service.specs.deliverables}</div></li>
            <li><i class="fa-solid fa-indian-rupee-sign"></i> <div><strong>Pricing:</strong><br><span style="color: #059669; font-weight: 800;">${service.specs.priceRange}</span></div></li>
          </ul>

          <button type="button" class="btn btn-danger" style="width: 100%; margin-top: 18px; padding: 10px;" id="modalEnquireFromDetails">
            <i class="fa-solid fa-paper-plane"></i> Request Instant Quote
          </button>
        </div>
      </div>
    `;

    DOM.detailsModal.classList.add('open');
    DOM.detailsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const innerEnquire = document.getElementById('modalEnquireFromDetails');
    if (innerEnquire) {
      innerEnquire.addEventListener('click', () => {
        closeDetailsModal();
        setTimeout(() => openEnquireModal(service.id, service.title, service.company), 150);
      });
    }
  }

  function closeDetailsModal() {
    if (!DOM.detailsModal) return;
    DOM.detailsModal.classList.remove('open');
    DOM.detailsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // =========================================================================
  // 8. BIND GLOBAL EVENT LISTENERS
  // =========================================================================
  
  // Mobile Nav Toggle
  if (DOM.mobileNavToggle && DOM.mainNav) {
    DOM.mobileNavToggle.addEventListener('click', () => {
      DOM.mainNav.classList.toggle('open');
      const isOpen = DOM.mainNav.classList.contains('open');
      DOM.mobileNavToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Mobile Dropdown Accordions
  if (DOM.dropdownToggles) {
    DOM.dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          const parentItem = toggle.closest('.nav-item.dropdown');
          if (parentItem) {
            parentItem.classList.toggle('dropdown-open');
            const isExpanded = parentItem.classList.contains('dropdown-open');
            toggle.setAttribute('aria-expanded', isExpanded);
          }
        }
      });
    });
  }

  // Mobile Sidebar Drawer Controls
  function openMobileFilterDrawer() {
    if (DOM.filtersSidebar) DOM.filtersSidebar.classList.add('drawer-open');
    if (DOM.sidebarBackdrop) DOM.sidebarBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileFilterDrawer() {
    if (DOM.filtersSidebar) DOM.filtersSidebar.classList.remove('drawer-open');
    if (DOM.sidebarBackdrop) DOM.sidebarBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (DOM.mobileFilterBtn) DOM.mobileFilterBtn.addEventListener('click', openMobileFilterDrawer);
  if (DOM.closeSidebarBtn) DOM.closeSidebarBtn.addEventListener('click', closeMobileFilterDrawer);
  if (DOM.sidebarBackdrop) DOM.sidebarBackdrop.addEventListener('click', closeMobileFilterDrawer);

  // Quick Category Buttons (Mobile Strip)
  if (DOM.quickCatButtons) {
    DOM.quickCatButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        appStore.setState({ category: cat, currentPage: 1 });

        if (DOM.categorySelect) DOM.categorySelect.value = cat;

        DOM.categoryPills.forEach(p => {
          if (p.getAttribute('data-category') === cat) {
            p.classList.add('active');
            p.setAttribute('aria-selected', 'true');
          } else {
            p.classList.remove('active');
            p.setAttribute('aria-selected', 'false');
          }
        });
      });
    });
  }

  // Search Input Debouncing
  let searchTimeout = null;
  if (DOM.serviceSearchInput) {
    DOM.serviceSearchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        appStore.setState({ search: e.target.value, currentPage: 1 });
      }, 150);
    });
  }

  if (DOM.searchSubmitBtn) {
    DOM.searchSubmitBtn.addEventListener('click', () => {
      appStore.setState({ search: DOM.serviceSearchInput.value, currentPage: 1 });
    });
  }

  // Sidebar Category Pills
  DOM.categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.categoryPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      const cat = pill.getAttribute('data-category');
      appStore.setState({ category: cat, currentPage: 1 });

      if (DOM.categorySelect) DOM.categorySelect.value = cat;
    });
  });

  // Top Ribbon Category Select Sync
  if (DOM.categorySelect) {
    DOM.categorySelect.addEventListener('change', (e) => {
      const val = e.target.value;
      appStore.setState({ category: val, currentPage: 1 });

      DOM.categoryPills.forEach(p => {
        if (p.getAttribute('data-category') === val) {
          p.classList.add('active');
          p.setAttribute('aria-selected', 'true');
        } else {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        }
      });
    });
  }

  // Sidebar Industry Checkboxes
  DOM.industryCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const selected = Array.from(DOM.industryCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      appStore.setState({ industries: selected, currentPage: 1 });
    });
  });

  // Sidebar Location Checkboxes
  DOM.locationCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const selected = Array.from(DOM.locationCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      appStore.setState({ locations: selected, currentPage: 1 });
    });
  });

  // Sidebar State List Search
  if (DOM.stateSearchInput) {
    DOM.stateSearchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase().trim();
      document.querySelectorAll('#locationCheckboxes .custom-checkbox').forEach(label => {
        const text = label.textContent.toLowerCase();
        label.style.display = text.includes(val) ? 'flex' : 'none';
      });
    });
  }

  // Expandable filters toggle
  if (DOM.toggleMoreIndustries && DOM.extraIndustries) {
    DOM.toggleMoreIndustries.addEventListener('click', () => {
      DOM.extraIndustries.classList.toggle('open');
      const isOpen = DOM.extraIndustries.classList.contains('open');
      DOM.toggleMoreIndustries.innerHTML = isOpen 
        ? '<span>Show less</span> <i class="fa-solid fa-chevron-up"></i>'
        : '<span>Show more</span> <i class="fa-solid fa-chevron-down"></i>';
    });
  }

  if (DOM.toggleMoreLocations && DOM.extraLocations) {
    DOM.toggleMoreLocations.addEventListener('click', () => {
      DOM.extraLocations.classList.toggle('open');
      const isOpen = DOM.extraLocations.classList.contains('open');
      DOM.toggleMoreLocations.innerHTML = isOpen 
        ? '<span>Show less</span> <i class="fa-solid fa-chevron-up"></i>'
        : '<span>Show more</span> <i class="fa-solid fa-chevron-down"></i>';
    });
  }

  // Sidebar Section Collapse
  DOM.collapseToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const body = document.getElementById(targetId);
      if (body) {
        body.classList.toggle('collapsed');
        btn.classList.toggle('collapsed');
      }
    });
  });

  // Top Ribbon Filters
  if (DOM.sectorSelect) {
    DOM.sectorSelect.addEventListener('change', (e) => {
      appStore.setState({ sector: e.target.value, currentPage: 1 });
    });
  }

  if (DOM.stateSelect) {
    DOM.stateSelect.addEventListener('change', (e) => {
      appStore.setState({ state: e.target.value, currentPage: 1 });
    });
  }

  if (DOM.packageSelect) {
    DOM.packageSelect.addEventListener('change', (e) => {
      appStore.setState({ package: e.target.value, currentPage: 1 });
    });
  }

  if (DOM.verifiedSelect) {
    DOM.verifiedSelect.addEventListener('change', (e) => {
      appStore.setState({ verified: e.target.value, currentPage: 1 });
    });
  }

  if (DOM.sortBySelect) {
    DOM.sortBySelect.addEventListener('change', (e) => {
      appStore.setState({ sortBy: e.target.value });
      showToast(`Sorted by ${DOM.sortBySelect.options[DOM.sortBySelect.selectedIndex].text}`, 'info');
    });
  }

  // Reset All Filters
  function resetAllFilters() {
    if (DOM.serviceSearchInput) DOM.serviceSearchInput.value = '';
    if (DOM.sectorSelect) DOM.sectorSelect.value = '';
    if (DOM.stateSelect) DOM.stateSelect.value = '';
    if (DOM.packageSelect) DOM.packageSelect.value = '';
    if (DOM.verifiedSelect) DOM.verifiedSelect.value = '';
    if (DOM.categorySelect) DOM.categorySelect.value = 'all';

    DOM.categoryPills.forEach(p => {
      if (p.getAttribute('data-category') === 'all') {
        p.classList.add('active');
        p.setAttribute('aria-selected', 'true');
      } else {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      }
    });

    DOM.industryCheckboxes.forEach(cb => cb.checked = false);
    DOM.locationCheckboxes.forEach(cb => cb.checked = false);

    if (DOM.stateSearchInput) {
      DOM.stateSearchInput.value = '';
      document.querySelectorAll('#locationCheckboxes .custom-checkbox').forEach(l => l.style.display = 'flex');
    }

    appStore.setState({
      search: '',
      category: 'all',
      industries: [],
      locations: [],
      sector: '',
      state: '',
      package: '',
      verified: '',
      currentPage: 1
    });

    showToast('Filters reset to default.', 'info');
  }

  if (DOM.clearAllFiltersBtn) DOM.clearAllFiltersBtn.addEventListener('click', resetAllFilters);
  if (DOM.resetFiltersBtn) DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
  if (DOM.resetFromEmptyBtn) DOM.resetFromEmptyBtn.addEventListener('click', resetAllFilters);
  if (DOM.clearAllTagsBtn) DOM.clearAllTagsBtn.addEventListener('click', resetAllFilters);
  if (DOM.applyFiltersBtn) {
    DOM.applyFiltersBtn.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        closeMobileFilterDrawer();
      }
      showToast('Filters applied successfully.', 'success');
    });
  }

  // View Mode Toggles
  if (DOM.gridViewBtn) {
    DOM.gridViewBtn.addEventListener('click', () => {
      appStore.setState({ viewMode: 'grid' });
    });
  }

  if (DOM.listViewBtn) {
    DOM.listViewBtn.addEventListener('click', () => {
      appStore.setState({ viewMode: 'list' });
    });
  }

  // Pagination Controls
  if (DOM.prevPageBtn) {
    DOM.prevPageBtn.addEventListener('click', () => {
      if (appStore.state.currentPage > 1) {
        appStore.setState({ currentPage: appStore.state.currentPage - 1 });
        DOM.servicesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (DOM.nextPageBtn) {
    DOM.nextPageBtn.addEventListener('click', () => {
      appStore.setState({ currentPage: appStore.state.currentPage + 1 });
      DOM.servicesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (DOM.perPageSelect) {
    DOM.perPageSelect.addEventListener('change', (e) => {
      const num = parseInt(e.target.value, 10);
      appStore.setState({ itemsPerPage: num, currentPage: 1 });
    });
  }

  // Language Menu Options
  DOM.langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      DOM.langOptions.forEach(o => o.classList.remove('active-lang'));
      opt.classList.add('active-lang');
      if (DOM.currentLangLabel) DOM.currentLangLabel.textContent = opt.textContent.split(' ')[0];
      showToast(`Language switched to ${opt.textContent}`, 'info');
    });
  });

  // Modal Closures
  if (DOM.closeEnquireModal) DOM.closeEnquireModal.addEventListener('click', closeEnquireModal);
  if (DOM.enquireModal) {
    DOM.enquireModal.addEventListener('click', (e) => {
      if (e.target === DOM.enquireModal) closeEnquireModal();
    });
  }

  if (DOM.closeDetailsModal) DOM.closeDetailsModal.addEventListener('click', closeDetailsModal);
  if (DOM.detailsModal) {
    DOM.detailsModal.addEventListener('click', (e) => {
      if (e.target === DOM.detailsModal) closeDetailsModal();
    });
  }

  // Keyboard Escape Handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEnquireModal();
      closeDetailsModal();
      closeMobileFilterDrawer();
    }
  });

  // Enquiry Form Submission
  if (DOM.enquireForm) {
    DOM.enquireForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phoneNumber').value.trim();
      const title = DOM.modalServiceTitle.textContent.replace('Enquire for ', '');

      if (DOM.submitEnquiryBtn) {
        DOM.submitEnquiryBtn.disabled = true;
        DOM.submitEnquiryBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
      }

      setTimeout(() => {
        closeEnquireModal();
        DOM.enquireForm.reset();
        if (DOM.submitEnquiryBtn) {
          DOM.submitEnquiryBtn.disabled = false;
          DOM.submitEnquiryBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Request Free Quote';
        }
        showToast(`Thank you, ${fullName}! Your quote request for "${title}" has been sent. Provider will contact you at ${phone} within 2 hours.`, 'success');
      }, 700);
    });
  }

  // Saved Services Link Click
  if (DOM.viewSavedServicesBtn) {
    DOM.viewSavedServicesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (appStore.state.wishlist.size === 0) {
        showToast('No saved services yet! Click the heart icon on any card to save.', 'info');
      } else {
        showToast(`You have ${appStore.state.wishlist.size} saved services in your favorites.`, 'wishlist');
      }
    });
  }

  // =========================================================================
  // 9. SMART TV & 10-FOOT UI CONTROLLER ENGINE
  // =========================================================================
  let isTvModeActive = false;
  let isShowcaseRunning = false;
  let showcaseTimer = null;
  let currentSpatialFocusIndex = -1;

  /**
   * Check if current device is a Smart TV platform
   */
  function isTvDeviceDetected() {
    const ua = navigator.userAgent || '';
    const isTvUserAgent = /SmartTV|Tizen|Web0S|NetCast|HbbTV|Android.*TV|GoogleTV|AppleTV|Roku|Viera|BRAVIA/i.test(ua);
    const isUltraLargeTouchless = window.innerWidth >= 1920 && !('ontouchstart' in window);
    return isTvUserAgent;
  }

  /**
   * Toggle Smart TV Mode
   * @param {boolean|null} forceState
   */
  function toggleTvMode(forceState = null) {
    if (forceState !== null) {
      isTvModeActive = forceState;
    } else {
      isTvModeActive = !isTvModeActive;
    }

    document.body.classList.toggle('tv-mode', isTvModeActive);

    if (DOM.tvModeToggleBtn) {
      DOM.tvModeToggleBtn.classList.toggle('active', isTvModeActive);
    }

    if (DOM.tvModePill) {
      DOM.tvModePill.textContent = isTvModeActive ? 'ON' : 'OFF';
    }

    if (DOM.tvRemoteHud) {
      if (isTvModeActive) {
        DOM.tvRemoteHud.setAttribute('aria-hidden', 'false');
      } else {
        DOM.tvRemoteHud.setAttribute('aria-hidden', 'true');
        stopShowcaseMode();
      }
    }

    localStorage.setItem('dronetv_tv_mode', isTvModeActive ? 'true' : 'false');

    if (isTvModeActive) {
      showToast('📺 Smart TV Mode Activated! Remote & D-Pad Navigation Enabled.', 'info');
      // Set initial focus to first card or search
      const firstFocusable = document.querySelector('.service-card .view-details-btn, #serviceSearchInput');
      if (firstFocusable) {
        firstFocusable.focus();
        firstFocusable.classList.add('tv-focused');
      }
    } else {
      showToast('🖥️ Standard Desktop/Mobile Mode Restored.', 'info');
      document.querySelectorAll('.tv-focused').forEach(el => el.classList.remove('tv-focused'));
    }
  }

  /**
   * Fullscreen Toggle for Smart TV & Living Room Displays
   */
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
        showToast('Fullscreen mode blocked or unsupported by browser.', 'info');
      });
      if (DOM.tvFullscreenBtn) DOM.tvFullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
      showToast('⛶ Fullscreen Presentation Mode Enabled.', 'info');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      if (DOM.tvFullscreenBtn) DOM.tvFullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
      showToast('Exited Fullscreen Mode.', 'info');
    }
  }

  /**
   * Spatial Navigation Engine for TV Remote Controls & Arrow Keys
   * Uses Euclidean geometric distance to find best candidate in requested direction
   * @param {'ArrowUp'|'ArrowDown'|'ArrowLeft'|'ArrowRight'} direction
   */
  function handleSpatialNavigation(direction) {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    // If modal is open, scope to modal
    let container = document;
    if (DOM.enquireModal && DOM.enquireModal.classList.contains('open')) {
      container = DOM.enquireModal;
    } else if (DOM.detailsModal && DOM.detailsModal.classList.contains('open')) {
      container = DOM.detailsModal;
    }

    const allFocusable = Array.from(container.querySelectorAll(focusableSelectors))
      .filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && window.getComputedStyle(el).visibility !== 'hidden';
      });

    if (allFocusable.length === 0) return;

    const currentEl = document.activeElement && allFocusable.includes(document.activeElement)
      ? document.activeElement
      : allFocusable[0];

    const currentRect = currentEl.getBoundingClientRect();
    const currentCenter = {
      x: currentRect.left + currentRect.width / 2,
      y: currentRect.top + currentRect.height / 2
    };

    let bestCandidate = null;
    let minScore = Infinity;

    allFocusable.forEach(candidate => {
      if (candidate === currentEl) return;
      const cRect = candidate.getBoundingClientRect();
      const cCenter = {
        x: cRect.left + cRect.width / 2,
        y: cRect.top + cRect.height / 2
      };

      const dx = cCenter.x - currentCenter.x;
      const dy = cCenter.y - currentCenter.y;

      let isCandidateInDirection = false;
      let primaryDistance = 0;
      let orthogonalDistance = 0;

      switch (direction) {
        case 'ArrowRight':
          if (dx > 5) {
            isCandidateInDirection = true;
            primaryDistance = dx;
            orthogonalDistance = Math.abs(dy);
          }
          break;
        case 'ArrowLeft':
          if (dx < -5) {
            isCandidateInDirection = true;
            primaryDistance = -dx;
            orthogonalDistance = Math.abs(dy);
          }
          break;
        case 'ArrowDown':
          if (dy > 5) {
            isCandidateInDirection = true;
            primaryDistance = dy;
            orthogonalDistance = Math.abs(dx);
          }
          break;
        case 'ArrowUp':
          if (dy < -5) {
            isCandidateInDirection = true;
            primaryDistance = -dy;
            orthogonalDistance = Math.abs(dx);
          }
          break;
      }

      if (isCandidateInDirection) {
        // Penalty for elements that are far off axis
        const score = primaryDistance + (orthogonalDistance * 2.2);
        if (score < minScore) {
          minScore = score;
          bestCandidate = candidate;
        }
      }
    });

    if (bestCandidate) {
      document.querySelectorAll('.tv-focused').forEach(el => el.classList.remove('tv-focused'));
      bestCandidate.focus();
      bestCandidate.classList.add('tv-focused');

      // Keep focused element centered in TV viewing viewport
      bestCandidate.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }

  /**
   * TV Auto Showcase Tour Mode (For Showrooms / Expos / TV screens)
   */
  function toggleShowcaseMode() {
    if (isShowcaseRunning) {
      stopShowcaseMode();
    } else {
      startShowcaseMode();
    }
  }

  function startShowcaseMode() {
    isShowcaseRunning = true;
    if (DOM.tvShowcaseModeBtn) {
      DOM.tvShowcaseModeBtn.classList.add('active');
      DOM.tvShowcaseModeBtn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>Pause Tour</span>';
    }
    showToast('✨ Auto Showcase Tour Started. Browsing Drone Services...', 'info');

    let currentCardIndex = 0;
    showcaseTimer = setInterval(() => {
      const cards = document.querySelectorAll('.service-card');
      if (cards.length === 0) return;

      cards.forEach(c => c.classList.remove('tv-focused'));
      const card = cards[currentCardIndex % cards.length];
      if (card) {
        card.classList.add('tv-focused');
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      currentCardIndex++;
    }, 4000);
  }

  function stopShowcaseMode() {
    isShowcaseRunning = false;
    if (showcaseTimer) clearInterval(showcaseTimer);
    if (DOM.tvShowcaseModeBtn) {
      DOM.tvShowcaseModeBtn.classList.remove('active');
      DOM.tvShowcaseModeBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Auto Show</span>';
    }
    document.querySelectorAll('.service-card.tv-focused').forEach(c => c.classList.remove('tv-focused'));
  }

  // TV Mode & Remote Action Listeners
  if (DOM.tvModeToggleBtn) {
    DOM.tvModeToggleBtn.addEventListener('click', () => toggleTvMode());
  }

  if (DOM.tvFullscreenBtn) {
    DOM.tvFullscreenBtn.addEventListener('click', toggleFullscreen);
  }

  if (DOM.tvHudDismissBtn && DOM.tvRemoteHud) {
    DOM.tvHudDismissBtn.addEventListener('click', () => {
      DOM.tvRemoteHud.style.display = 'none';
      showToast('Remote helper bar hidden. Press "T" anytime to toggle TV controls.', 'info');
    });
  }

  if (DOM.tvShowcaseModeBtn) {
    DOM.tvShowcaseModeBtn.addEventListener('click', toggleShowcaseMode);
  }

  // Smart TV Remote & Keyboard Shortcut System
  document.addEventListener('keydown', (e) => {
    const activeTag = (document.activeElement?.tagName || '').toLowerCase();
    const isTyping = activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select';

    // 1. D-Pad Directional Navigation (When in TV Mode or not typing in text fields)
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      if (!isTyping || isTvModeActive) {
        // If user is inside a select or multiline textarea, allow standard behavior unless TV mode explicit
        if (!isTyping || activeTag !== 'textarea') {
          e.preventDefault();
          handleSpatialNavigation(e.key);
        }
      }
    }

    // 2. TV Mode Toggle Shortcut ('T' or 't' when not typing)
    if ((e.key === 't' || e.key === 'T') && !isTyping) {
      e.preventDefault();
      toggleTvMode();
    }

    // 3. Fullscreen Shortcut ('F' or 'f' when not typing)
    if ((e.key === 'f' || e.key === 'F') && !isTyping) {
      e.preventDefault();
      toggleFullscreen();
    }

    // 4. Quick Jump to Search ('S' or '/' when not typing)
    if ((e.key === 's' || e.key === 'S' || e.key === '/') && !isTyping) {
      e.preventDefault();
      if (DOM.serviceSearchInput) {
        DOM.serviceSearchInput.focus();
        DOM.serviceSearchInput.select();
        showToast('🔍 Search focused. Type to filter services.', 'info');
      }
    }

    // 5. Category Quick Jump (Keys 1 - 6)
    if (['1', '2', '3', '4', '5', '6'].includes(e.key) && !isTyping) {
      const categories = ['all', 'survey', 'inspection', 'training', 'consulting', 'software'];
      const targetCat = categories[parseInt(e.key, 10) - 1];
      if (targetCat) {
        appStore.setState({ category: targetCat, currentPage: 1 });
        DOM.categoryPills.forEach(p => {
          if (p.getAttribute('data-category') === targetCat) {
            p.classList.add('active');
            p.setAttribute('aria-selected', 'true');
          } else {
            p.classList.remove('active');
            p.setAttribute('aria-selected', 'false');
          }
        });
        showToast(`Category switched to: ${targetCat.toUpperCase()}`, 'info');
      }
    }
  });

  // Track Focus for TV remote visual indicator
  document.addEventListener('focusin', (e) => {
    document.querySelectorAll('.tv-focused').forEach(el => el.classList.remove('tv-focused'));
    if (isTvModeActive && e.target) {
      e.target.classList.add('tv-focused');
    }
  });

  // =========================================================================
  // 10. APP INITIALIZATION & AUTO-TV DETECTION
  // =========================================================================
  appStore.subscribe(render);
  
  // First Render & Metrics Animation
  render(appStore.state);
  animateMetrics();

  // Initialize TV Mode if previously stored or if Smart TV device detected
  const savedTvPref = localStorage.getItem('dronetv_tv_mode');
  if (savedTvPref === 'true' || (savedTvPref === null && isTvDeviceDetected())) {
    toggleTvMode(true);
  }

  console.info('🚀 DroneTV.in Services Platform Initialized with Senior-Grade TV & 10-Foot UI Engine.');
});


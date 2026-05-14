import {
    navItems,
    processSteps,
    quickDirections,
    services,
    serviceRules,
    serviceConditions,
    equipmentItems,
    equipmentTimeline,
    equipmentCategories,
    businessFeatures,
    businessScenarios,
    documents,
    scheduleModes,
    partners,
    partnerFormats,
    faqs,
    contacts,
    requisites
} from './data.js';

function siteApp() {
    return {
        currentTab: 'home',
        mobileMenu: false,
        activeFaq: null,
        themeMode: 'light',
        accessibilityMode: 'normal',

        // Import data from data.js
        navItems,
        processSteps,
        quickDirections,
        services,
        serviceRules,
        serviceConditions,
        equipmentItems,
        equipmentTimeline,
        equipmentCategories,
        businessFeatures,
        businessScenarios,
        documents,
        scheduleModes,
        partners,
        partnerFormats,
        faqs,
        contacts,
        requisites,

        init() {
            try {
                const savedTheme = localStorage.getItem('belvtor-theme');
                const savedAccessibility = localStorage.getItem('belvtor-accessibility');

                if (savedTheme === 'dark' || savedTheme === 'light') {
                    this.themeMode = savedTheme;
                }

                if (savedAccessibility === 'colorblind' || savedAccessibility === 'normal') {
                    this.accessibilityMode = savedAccessibility;
                }
            } catch (error) {
                this.themeMode = 'light';
                this.accessibilityMode = 'normal';
            }

            this.applyDisplayModes();

            const initial = window.location.hash.replace('#', '');
            if (this.navItems.some((item) => item.id === initial)) {
                this.currentTab = initial;
            }

            window.addEventListener('hashchange', () => {
                const next = window.location.hash.replace('#', '');
                if (this.navItems.some((item) => item.id === next)) {
                    this.currentTab = next;
                    this.mobileMenu = false;
                }
            });
        },

        setTab(tabId) {
            if (!this.navItems.some((item) => item.id === tabId)) {
                return;
            }

            this.currentTab = tabId;
            this.mobileMenu = false;
            this.activeFaq = tabId === 'faq' ? this.activeFaq : null;

            if (window.location.hash !== `#${tabId}`) {
                history.pushState(null, '', `#${tabId}`);
            }

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },

        toggleTheme() {
            this.themeMode = this.themeMode === 'dark' ? 'light' : 'dark';
            this.persistDisplayModes();
            this.applyDisplayModes();
        },

        toggleColorblind() {
            this.accessibilityMode = this.accessibilityMode === 'colorblind' ? 'normal' : 'colorblind';
            this.persistDisplayModes();
            this.applyDisplayModes();
        },

        persistDisplayModes() {
            try {
                localStorage.setItem('belvtor-theme', this.themeMode);
                localStorage.setItem('belvtor-accessibility', this.accessibilityMode);
            } catch (error) {
                return;
            }
        },

        applyDisplayModes() {
            document.body.classList.toggle('theme-dark', this.themeMode === 'dark');
            document.body.classList.toggle('mode-colorblind', this.accessibilityMode === 'colorblind');
            document.documentElement.style.colorScheme = this.themeMode === 'dark' ? 'dark' : 'light';

            const themeMeta = document.querySelector('meta[name="theme-color"]');
            if (themeMeta) {
                if (this.themeMode === 'dark') {
                    themeMeta.setAttribute('content', '#071e15');
                } else if (this.accessibilityMode === 'colorblind') {
                    themeMeta.setAttribute('content', '#005f99');
                } else {
                    themeMeta.setAttribute('content', '#0f5f3a');
                }
            }
        }
    };
}

// Make Alpine.js app global
window.siteApp = siteApp;

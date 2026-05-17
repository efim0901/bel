/* ============================================================
   БелВторПереработка — app.js
   v2.0 — settings panel, setTheme, full data, hash routing
   ============================================================ */

function siteApp() {
    return {
        /* ── State ────────────────────────────────────────────── */
        currentTab:       'home',
        mobileMenu:       false,
        settingsOpen:     false,
        activeFaq:        0,
        themeMode:        'light',
        accessibilityMode:'normal',

        /* ── Navigation ───────────────────────────────────────── */
        navItems: [
            { id: 'home',      label: 'Главная',        icon: 'fa-solid fa-house' },
            { id: 'services',  label: 'Услуги и цены',  icon: 'fa-solid fa-recycle' },
            { id: 'equipment', label: 'Техника и отходы',icon: 'fa-solid fa-microchip' },
            { id: 'business',  label: 'Для бизнеса',    icon: 'fa-solid fa-briefcase' },
            { id: 'partners',  label: 'Партнёры',        icon: 'fa-solid fa-handshake' },
            { id: 'faq',       label: 'FAQ',             icon: 'fa-solid fa-circle-question' },
            { id: 'contacts',  label: 'Контакты',        icon: 'fa-solid fa-phone' }
        ],

        /* ── Process steps ────────────────────────────────────── */
        processSteps: [
            {
                number: '01',
                icon:   'fa-solid fa-phone-volume',
                title:  'Заявка',
                text:   'Вы звоните или пишете, называете вид сырья, примерный объём, адрес и удобное время связи.'
            },
            {
                number: '02',
                icon:   'fa-solid fa-clipboard-check',
                title:  'Оценка',
                text:   'Менеджер уточняет качество, загрязнённость, доступ к площадке и формат расчёта.'
            },
            {
                number: '03',
                icon:   'fa-solid fa-truck-ramp-box',
                title:  'Вывоз',
                text:   'Согласованный транспорт приезжает на адрес, сырьё взвешивается и передаётся в работу.'
            },
            {
                number: '04',
                icon:   'fa-solid fa-file-invoice-dollar',
                title:  'Документы',
                text:   'Для организаций оформляются договорные и первичные документы, для населения — понятный расчёт.'
            }
        ],

        /* ── Quick directions (home section) ─────────────────── */
        quickDirections: [
            { title: 'Макулатура', text: 'картон, архивы, бумага',   icon: 'fa-solid fa-scroll',         tab: 'services'  },
            { title: 'Полимеры',   text: 'ПЭТ, плёнка, канистры',    icon: 'fa-solid fa-bottle-water',   tab: 'services'  },
            { title: 'Стеклобой',  text: 'бутылки, банки, стекло',   icon: 'fa-solid fa-wine-bottle',    tab: 'services'  },
            { title: 'Техника',    text: 'выкуп и утилизация',        icon: 'fa-solid fa-plug-circle-check', tab: 'equipment' }
        ],

        /* ── Services ─────────────────────────────────────────── */
                services: [
    {
        title:       'Макулатура',
        description: 'Приём картонной упаковки, офисной бумаги, архивов, газет, журналов и книжной продукции.',
        icon:        'fa-solid fa-scroll',
        tone:        'tone-green',
        price:       'от 0.15 BYN/кг',
        items: [
            'картон и гофрокартон',
            'офисная бумага и архивы',
            'газеты, журналы, книги',
            'производственная бумажная упаковка'
        ],
        steps: [
            { icon: 'fa-solid fa-layer-group', text: 'Спрессовать' },
            { icon: 'fa-solid fa-droplet-slash', text: 'Сухая' },
            { icon: 'fa-solid fa-magnet', text: 'Убрать металл' }
        ]
    },
    {
        title:       'Стеклобой',
        description: 'Сбор стеклянных бутылок, банок, чистого листового стекла и стеклянной тары по согласованию.',
        icon:        'fa-solid fa-wine-bottle',
        tone:        'tone-blue',
        price:       'договорная',
        items: [
            'бутылки и банки',
            'тарное стекло',
            'чистое оконное стекло',
            'крупные партии для вывоза'
        ],
        steps: [
            { icon: 'fa-solid fa-bottle-water', text: 'Убрать крышки' },
            { icon: 'fa-solid fa-shapes', text: 'Без керамики' },
            { icon: 'fa-solid fa-broom', text: 'Чистое' }
        ]
    },
    {
        title:       'Полимеры',
        description: 'Приём отдельных видов пластикового сырья: ПЭТ, ПВД, стрейч, канистры, ящики и тара.',
        icon:        'fa-solid fa-cubes',
        tone:        'tone-amber',
        price:       'по объёму',
        items: [
            'ПЭТ-бутылка прозрачная и цветная',
            'плёнка ПВД и стрейч',
            'канистры ПНД',
            'пластиковые ящики и тара'
        ],
        steps: [
            { icon: 'fa-solid fa-compress', text: 'Сплющить' },
            { icon: 'fa-solid fa-droplet-slash', text: 'Без жидкостей' },
            { icon: 'fa-solid fa-tag', text: 'Снять этикетки' }
        ]
    },
    {
        title:       'Металл и лом',
        description: 'Отдельные категории металлического лома принимаются по предварительному согласованию.',
        icon:        'fa-solid fa-industry',
        tone:        'tone-metal',
        price:       'по заявке',
        items: [
            'медный лом',
            'производственные остатки',
            'металлические элементы техники',
            'партии от организаций'
        ],
        steps: [
            { icon: 'fa-solid fa-magnet', text: 'Отделить' },
            { icon: 'fa-solid fa-oil-can', text: 'Без масла' },
            { icon: 'fa-solid fa-weight-hanging', text: 'Уточнить вес' }
        ]
    },
    {
        title:       'Вывоз вторсырья',
        description: 'Организуем вывоз с территории предприятия, склада, магазина, офиса или частного адреса.',
        icon:        'fa-solid fa-truck-fast',
        tone:        'tone-green',
        price:       'от объёма',
        items: [
            'вывоз в черте города',
            'работа по области по договорённости',
            'согласование времени',
            'регулярный график для бизнеса'
        ],
        steps: [
            { icon: 'fa-solid fa-camera', text: 'Сфотографировать' },
            { icon: 'fa-solid fa-scale-balanced', text: 'Оценить объём' },
            { icon: 'fa-solid fa-clock', text: 'Согласовать время' }
        ]
    },
    {
        title:       'Самовывоз на склад',
        description: 'Если объём небольшой или вам удобнее привезти сырьё самостоятельно, заранее согласуйте приём.',
        icon:        'fa-solid fa-warehouse',
        tone:        'tone-blue',
        price:       'по факту',
        items: [
            'адрес: ул. 10 лет Октября, 1-2',
            'приём по рабочему графику',
            'предварительный звонок желателен',
            'оценка качества на месте'
        ],
        steps: [
            { icon: 'fa-solid fa-phone', text: 'Позвонить' },
            { icon: 'fa-solid fa-id-card', text: 'Паспорт' },
            { icon: 'fa-solid fa-boxes-packing', text: 'Упаковать' }
        ]
    }
],


        /* ── Service rules ────────────────────────────────────── */
        serviceRules: [
            {
                title: 'Не смешивайте категории',
                text:  'Бумага, пластик, стекло, металл и техника оцениваются по разным правилам.',
                icon:  'fa-solid fa-layer-group'
            },
            {
                title: 'Сырьё должно быть сухим',
                text:  'Влажная макулатура и загрязнённый пластик снижают стоимость или требуют отдельного согласования.',
                icon:  'fa-solid fa-droplet-slash'
            },
            {
                title: 'Сжимайте объёмное сырьё',
                text:  'ПЭТ и картон занимают меньше места, если их заранее прессовать или компактно сложить.',
                icon:  'fa-solid fa-compress'
            },
            {
                title: 'Фото ускоряет расчёт',
                text:  'Несколько снимков партии помогают быстрее определить возможность вывоза и ориентир цены.',
                icon:  'fa-solid fa-camera'
            }
        ],

        /* ── Service conditions ───────────────────────────────── */
        serviceConditions: [
            {
                title: 'Для населения',
                text:  'Можно сдать накопленную макулатуру, пластик, стекло или технику. При крупном объёме обсуждается вывоз.',
                icon:  'fa-solid fa-user-group'
            },
            {
                title: 'Для организаций',
                text:  'Доступны договоры, регулярный график, закрывающие документы и работа с несколькими видами сырья.',
                icon:  'fa-solid fa-building'
            },
            {
                title: 'Для складов и магазинов',
                text:  'Картон, плёнка, тара и упаковочные отходы можно вывозить по накоплению или по согласованному расписанию.',
                icon:  'fa-solid fa-boxes-stacked'
            }
        ],

        /* ── Equipment ────────────────────────────────────────── */
        equipmentItems: [
            {
                title: 'Бытовая техника',
                text:  'Стиральные машины, холодильники, плиты, пылесосы и другая техника по согласованию.',
                icon:  'fa-solid fa-blender-phone',
                badge: 'выкуп / утилизация'
            },
            {
                title: 'Компьютеры и мониторы',
                text:  'Системные блоки, мониторы, периферия и устаревшая офисная техника.',
                icon:  'fa-solid fa-computer',
                badge: 'офисное оборудование'
            },
            {
                title: 'Медный лом',
                text:  'Материалы и лом, содержащие ценные металлы, оцениваются отдельно.',
                icon:  'fa-solid fa-coins',
                badge: 'по заявке'
            },
            {
                title: 'Лампы и отходы',
                text:  'Ртутьсодержащие и специальные отходы требуют предварительного согласования.',
                icon:  'fa-solid fa-lightbulb',
                badge: 'спецусловия'
            }
        ],

        /* ── Equipment timeline ───────────────────────────────── */
        equipmentTimeline: [
            {
                number: '1',
                title:  'Опишите технику',
                text:   'Тип, количество, состояние, наличие крупных габаритов и адрес хранения.'
            },
            {
                number: '2',
                title:  'Согласуйте категорию',
                text:   'Менеджер уточнит, относится ли позиция к выкупу, утилизации или специальным отходам.'
            },
            {
                number: '3',
                title:  'Подготовьте доступ',
                text:   'Важно заранее уточнить этаж, подъезд, грузовой лифт, проезд транспорта и необходимость погрузки.'
            },
            {
                number: '4',
                title:  'Получите условия',
                text:   'После оценки фиксируются цена, график, формат передачи и документы.'
            }
        ],

        /* ── Equipment categories ─────────────────────────────── */
        equipmentCategories: [
            { title: 'Холодильники',       text: 'Крупногабаритная техника требует согласования выноса и погрузки.',        icon: 'fa-solid fa-temperature-low' },
            { title: 'Стиральные машины',  text: 'Подходят для вывоза вместе с другой бытовой техникой или металлом.',       icon: 'fa-solid fa-soap' },
            { title: 'Телевизоры',         text: 'Условия зависят от типа, количества и состояния техники.',                 icon: 'fa-solid fa-tv' },
            { title: 'Компьютеры',         text: 'Офисные партии удобно оформлять через юридическое лицо.',                  icon: 'fa-solid fa-desktop' },
            { title: 'Плиты и пылесосы',   text: 'Принимаются как часть направления по выкупу бытовой техники.',             icon: 'fa-solid fa-plug' },
            { title: 'Лампы',              text: 'Хранятся отдельно, не смешиваются с бытовым мусором и вторсырьём.',        icon: 'fa-solid fa-triangle-exclamation' }
        ],

        /* ── Business features ────────────────────────────────── */
        businessFeatures: [
            {
                title: 'Договорная работа',
                text:  'Сотрудничество с юридическими лицами строится через понятные условия, реквизиты и документы.',
                icon:  'fa-solid fa-file-signature'
            },
            {
                title: 'Регулярный вывоз',
                text:  'Подходит для объектов, где картон, плёнка, тара или отходы появляются постоянно.',
                icon:  'fa-solid fa-calendar-check'
            },
            {
                title: 'Экологический порядок',
                text:  'Сортировка и передача вторсырья помогают не копить отходы на площадке и поддерживать чистоту.',
                icon:  'fa-solid fa-seedling'
            }
        ],

        /* ── Business scenarios ───────────────────────────────── */
        businessScenarios: [
            {
                title: 'Торговые точки и сети',
                text:  'Картон, плёнка, упаковка, стеклянная тара и регулярное накопление вторсырья.',
                badge: 'ритейл'
            },
            {
                title: 'Склады и логистика',
                text:  'Крупные партии упаковочных материалов, паллетные зоны, вывоз по графику.',
                badge: 'склад'
            },
            {
                title: 'Производства',
                text:  'Производственные остатки, тара, пластик, металл и отдельные отходы по согласованию.',
                badge: 'цех'
            },
            {
                title: 'Офисы и учреждения',
                text:  'Архивы, бумага, техника, компьютеры, лампы и разовые акции по сбору.',
                badge: 'офис'
            }
        ],

        /* ── Documents ────────────────────────────────────────── */
        documents: [
            {
                title: 'Договор',
                text:  'Фиксирует условия сотрудничества, график, сырьё и ответственность сторон.',
                icon:  'fa-solid fa-file-contract'
            },
            {
                title: 'Акты и первичка',
                text:  'Набор документов уточняется для конкретного юрлица и вида сырья.',
                icon:  'fa-solid fa-file-invoice'
            },
            {
                title: 'Реквизиты',
                text:  'УНП, счёт, банк и контакты вынесены в отдельную вкладку сайта.',
                icon:  'fa-solid fa-building-columns'
            },
            {
                title: 'Подтверждение условий',
                text:  'Перед вывозом согласуются цена, объём, качество и логистика.',
                icon:  'fa-solid fa-circle-check'
            }
        ],

        /* ── Schedule modes ───────────────────────────────────── */
        scheduleModes: [
            { title: 'По заявке',      text: 'Подходит для нерегулярных партий и разового вывоза.' },
            { title: 'По накоплению',  text: 'Менеджер выезжает, когда сырьё достигает согласованного объёма.' },
            { title: 'По графику',     text: 'Удобно для магазинов, складов и производств с постоянным потоком отходов.' }
        ],

        /* ── Partners ─────────────────────────────────────────── */
        partners: [
            'Евроопт', 'Соседи', 'БМЗ', 'ГомельСтекло',
            'Спартак', 'Коминтерн', 'Милавица', 'Санта',
            'Газель', 'Каравай', 'Приор', 'Домовой'
        ],

        /* ── Partner formats ──────────────────────────────────── */
        partnerFormats: [
            {
                title: 'Разовый вывоз',
                text:  'Для накопившегося архива, партии картона, техники или смешанных материалов.',
                icon:  'fa-solid fa-truck'
            },
            {
                title: 'Постоянный договор',
                text:  'Для площадок, где отходы появляются регулярно и важен прогнозируемый график.',
                icon:  'fa-solid fa-handshake-angle'
            },
            {
                title: 'Комплексный сбор',
                text:  'Несколько категорий: бумага, пластик, стекло, техника и отдельные отходы.',
                icon:  'fa-solid fa-diagram-project'
            },
            {
                title: 'Документы для учёта',
                text:  'Реквизиты, акты и согласованный порядок оформления для юридических лиц.',
                icon:  'fa-solid fa-folder-open'
            }
        ],

        /* ── FAQ ──────────────────────────────────────────────── */
        faqs: [
            {
                question: 'Вы сами вывозите вторсырьё?',
                answer:   'Да, вывоз возможен по согласованию. Обычно ориентируются на объём от 100 кг в городе, но итоговые условия зависят от сырья, адреса и погрузки.'
            },
            {
                question: 'Какие материалы принимаются?',
                answer:   'Макулатура, картон, стеклобой, отдельные виды пластика, металл, бытовая техника, компьютеры, лампы и некоторые отходы по предварительному согласованию.'
            },
            {
                question: 'Почему цена не фиксированная для всех?',
                answer:   'Стоимость зависит от рынка, объёма, загрязнённости, сортировки, расстояния и необходимости погрузки. Поэтому точную цену подтверждают перед вывозом.'
            },
            {
                question: 'Можно ли сдать сырьё самостоятельно?',
                answer:   'Да, но лучше заранее позвонить и уточнить актуальные условия приёма, график и требования к подготовке материала.'
            },
            {
                question: 'Нужно ли сортировать сырьё?',
                answer:   'Да, желательно. Бумагу, пластик, стекло, металл и технику лучше держать отдельно. Это ускоряет приём и помогает сохранить стоимость сырья.'
            },
            {
                question: 'Берёте ли мокрую макулатуру?',
                answer:   'Мокрая или сильно загрязнённая макулатура может приниматься по сниженной стоимости или не приниматься вовсе. Лучше уточнить состояние заранее.'
            },
            {
                question: 'Работаете ли вы с юридическими лицами?',
                answer:   'Да. Для организаций доступны договоры, акты, реквизиты, регулярный вывоз и согласование документов под конкретный вид сырья.'
            },
            {
                question: 'Можно ли вывезти технику из офиса?',
                answer:   'Да, офисную технику и компьютеры можно согласовать отдельно. Важно назвать количество, состояние, адрес и необходимость выноса.'
            },
            {
                question: 'Что делать с лампами?',
                answer:   'Лампы относятся к специальным отходам. Не смешивайте их с обычным мусором или вторсырьём, храните отдельно и заранее согласуйте приём.'
            },
            {
                question: 'Как быстрее получить расчёт?',
                answer:   'Подготовьте фото, примерный вес или объём, адрес, описание доступа к площадке и желаемую дату вывоза.'
            }
        ],

        /* ── Contacts ─────────────────────────────────────────── */
        contacts: [
            {
                title: 'Офис и склад',
                icon:  'fa-solid fa-location-dot',
                type:  'text',
                value: '246042, г. Гомель<br>ул. 10 лет Октября, 1-2'
            },
            {
                title: 'Телефоны',
                icon:  'fa-solid fa-phone',
                type:  'links',
                links: [
                    { label: '+375 (29) 698-92-37', href: 'tel:+375296989237' },
                    { label: '+375 (29) 177-52-28', href: 'tel:+375291775228' },
                    { label: '8 (0232) 32-98-23',   href: 'tel:+375232329823' },
                    { label: '8 (0232) 32-87-07',   href: 'tel:+375232328707' },
                    { label: '8 (0232) 56-87-07',   href: 'tel:+375232568707' }
                ]
            },
            {
                title: 'Электронная почта',
                icon:  'fa-solid fa-envelope',
                type:  'links',
                links: [
                    { label: 'belvtorpererabotka@rambler.ru', href: 'mailto:belvtorpererabotka@rambler.ru' }
                ]
            },
            {
                title: 'Режим работы',
                icon:  'fa-solid fa-clock',
                type:  'text',
                value: 'Пн–Пт: 09:00–17:00<br>Сб–Вс: по согласованию'
            }
        ],

        /* ── Requisites ───────────────────────────────────────── */
        requisites: [
            { label: 'Название',          value: 'ООО «БелВторПереработка»'         },
            { label: 'УНП',               value: '491333347'                         },
            { label: 'Расчётный счёт',    value: 'BY79BAPB30125993100100000000'      },
            { label: 'Банк',              value: 'ОАО «Белагропромбанк»'             },
            { label: 'БИК',               value: 'BAPBBY2X'                          },
            { label: 'Адрес банка',       value: 'пр-т Жукова, 3, г. Минск, 220036' }
        ],

        /* ── Init ─────────────────────────────────────────────── */
                init() {
            /* Restore persisted preferences */
            try {
                const savedTheme  = localStorage.getItem('belvtor-theme');
                const savedAccess = localStorage.getItem('belvtor-accessibility');
                if (savedTheme  === 'dark'       || savedTheme  === 'light')      this.themeMode        = savedTheme;
                if (savedAccess === 'colorblind' || savedAccess === 'normal')     this.accessibilityMode = savedAccess;
            } catch (_) {
                /* localStorage blocked — silent fallback to defaults */
            }

            this.applyDisplayModes();

            /* Hash routing — initial page */
            const initial = window.location.hash.replace('#', '');
            if (this.navItems.some(item => item.id === initial)) {
                this.currentTab = initial;
            }

            /* Hash routing — popstate / back-forward */
            window.addEventListener('hashchange', () => {
                const next = window.location.hash.replace('#', '');
                if (this.navItems.some(item => item.id === next)) {
                    this.currentTab = next;
                    this.mobileMenu  = false;
                }
            });

            /* Close settings panel on Escape (also handled via @keydown in HTML) */
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape' && this.settingsOpen) {
                    this.settingsOpen = false;
                }
            });

            /* Close mobile menu when clicking outside */
            document.addEventListener('click', (e) => {
                const menu = document.getElementById('mobile-menu');
                const toggle = document.querySelector('.mobile-toggle');
                if (this.mobileMenu && menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
                    this.mobileMenu = false;
                }
            });

            /* Close mobile menu on resize to desktop */
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1280 && this.mobileMenu) {
                    this.mobileMenu = false;
                }
            });
        },


        /* ── Navigation ───────────────────────────────────────── */
        setTab(tabId) {
            if (!this.navItems.some(item => item.id === tabId)) return;

            this.currentTab  = tabId;
            this.mobileMenu  = false;
            this.settingsOpen = false;

            /* Reset FAQ open item only when leaving FAQ tab */
            if (tabId !== 'faq') this.activeFaq = 0;

            if (window.location.hash !== `#${tabId}`) {
                history.pushState(null, '', `#${tabId}`);
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        /* ── Theme: explicit setter (used by settings panel cards) */
        setTheme(mode) {
            if (mode !== 'light' && mode !== 'dark') return;
            this.themeMode = mode;
            this.persistDisplayModes();
            this.applyDisplayModes();
        },

        /* ── Theme: toggle (used by mobile menu) */
        toggleTheme() {
            this.themeMode = this.themeMode === 'dark' ? 'light' : 'dark';
            this.persistDisplayModes();
            this.applyDisplayModes();
        },

        /* ── Colorblind: toggle ───────────────────────────────── */
        toggleColorblind() {
            this.accessibilityMode = this.accessibilityMode === 'colorblind' ? 'normal' : 'colorblind';
            this.persistDisplayModes();
            this.applyDisplayModes();
        },

        /* ── Persist to localStorage ──────────────────────────── */
        persistDisplayModes() {
            try {
                localStorage.setItem('belvtor-theme',         this.themeMode);
                localStorage.setItem('belvtor-accessibility', this.accessibilityMode);
            } catch (_) { /* silent */ }
        },

        /* ── Apply classes / meta ─────────────────────────────── */
        applyDisplayModes() {
            document.body.classList.toggle('theme-dark',      this.themeMode        === 'dark');
            document.body.classList.toggle('mode-colorblind', this.accessibilityMode === 'colorblind');
            document.documentElement.style.colorScheme = this.themeMode === 'dark' ? 'dark' : 'light';

            /* Update <meta name="theme-color"> for browser chrome */
            const themeMeta = document.querySelector('meta[name="theme-color"]');
            if (themeMeta) {
                if      (this.themeMode === 'dark')                    themeMeta.setAttribute('content', '#071e15');
                else if (this.accessibilityMode === 'colorblind')      themeMeta.setAttribute('content', '#005f99');
                else                                                   themeMeta.setAttribute('content', '#0f5f3a');
            }
        }
    };
}
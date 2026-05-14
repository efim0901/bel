function siteApp() {
    return {
        currentTab: 'home',
        mobileMenu: false,
        activeFaq: 0,
        themeMode: 'light',
        accessibilityMode: 'normal',

        navItems: [
            { id: 'home', label: 'Главная', icon: 'fa-solid fa-house' },
            { id: 'services', label: 'Услуги и цены', icon: 'fa-solid fa-recycle' },
            { id: 'equipment', label: 'Техника и отходы', icon: 'fa-solid fa-microchip' },
            { id: 'business', label: 'Для бизнеса', icon: 'fa-solid fa-briefcase' },
            { id: 'partners', label: 'Партнеры', icon: 'fa-solid fa-handshake' },
            { id: 'faq', label: 'FAQ', icon: 'fa-solid fa-circle-question' },
            { id: 'contacts', label: 'Контакты', icon: 'fa-solid fa-phone' }
        ],

        processSteps: [
            {
                number: '01',
                icon: 'fa-solid fa-phone-volume',
                title: 'Заявка',
                text: 'Вы звоните или пишете, называете вид сырья, примерный объем, адрес и удобное время связи.'
            },
            {
                number: '02',
                icon: 'fa-solid fa-clipboard-check',
                title: 'Оценка',
                text: 'Менеджер уточняет качество, загрязненность, доступ к площадке и формат расчета.'
            },
            {
                number: '03',
                icon: 'fa-solid fa-truck-ramp-box',
                title: 'Вывоз',
                text: 'Согласованный транспорт приезжает на адрес, сырье взвешивается и передается в работу.'
            },
            {
                number: '04',
                icon: 'fa-solid fa-file-invoice-dollar',
                title: 'Документы',
                text: 'Для организаций оформляются договорные и первичные документы, для населения — понятный расчет.'
            }
        ],

        quickDirections: [
            {
                title: 'Макулатура',
                text: 'картон, архивы, бумага',
                icon: 'fa-solid fa-scroll',
                tab: 'services'
            },
            {
                title: 'Полимеры',
                text: 'ПЭТ, пленка, канистры',
                icon: 'fa-solid fa-bottle-water',
                tab: 'services'
            },
            {
                title: 'Стеклобой',
                text: 'бутылки, банки, стекло',
                icon: 'fa-solid fa-wine-bottle',
                tab: 'services'
            },
            {
                title: 'Техника',
                text: 'выкуп и утилизация',
                icon: 'fa-solid fa-plug-circle-check',
                tab: 'equipment'
            }
        ],

        services: [
            {
                title: 'Макулатура',
                description: 'Прием картонной упаковки, офисной бумаги, архивов, газет, журналов и книжной продукции.',
                icon: 'fa-solid fa-scroll',
                tone: 'tone-green',
                price: 'от 0.15 BYN/кг',
                items: [
                    'картон и гофрокартон',
                    'офисная бумага и архивы',
                    'газеты, журналы, книги',
                    'производственная бумажная упаковка'
                ],
                noteTitle: 'Важно',
                note: 'Макулатура должна быть сухой, без масла и сильных загрязнений.'
            },
            {
                title: 'Стеклобой',
                description: 'Сбор стеклянных бутылок, банок, чистого листового стекла и стеклянной тары по согласованию.',
                icon: 'fa-solid fa-wine-bottle',
                tone: 'tone-blue',
                price: 'договорная',
                items: [
                    'бутылки и банки',
                    'тарное стекло',
                    'чистое оконное стекло',
                    'крупные партии для вывоза'
                ],
                noteTitle: 'Подготовка',
                note: 'Керамику, мусор, металл и пластик лучше отделить заранее.'
            },
            {
                title: 'Полимеры',
                description: 'Прием отдельных видов пластикового сырья: ПЭТ, ПВД, стрейч, канистры, ящики и тара.',
                icon: 'fa-solid fa-cubes',
                tone: 'tone-amber',
                price: 'по объему',
                items: [
                    'ПЭТ-бутылка прозрачная и цветная',
                    'пленка ПВД и стрейч',
                    'канистры ПНД',
                    'пластиковые ящики и тара'
                ],
                noteTitle: 'Рекомендация',
                note: 'Пластик лучше сжать, удалить остатки жидкостей и отделить от бумаги.'
            },
            {
                title: 'Металл и лом',
                description: 'Отдельные категории металлического лома и материалов принимаются по предварительному согласованию.',
                icon: 'fa-solid fa-industry',
                tone: 'tone-metal',
                price: 'по заявке',
                items: [
                    'медный лом',
                    'производственные остатки',
                    'металлические элементы техники',
                    'партии от организаций'
                ],
                noteTitle: 'Проверка',
                note: 'Состав, засоренность и документы уточняются до вывоза.'
            },
            {
                title: 'Вывоз вторсырья',
                description: 'Организуем вывоз с территории предприятия, склада, магазина, офиса или частного адреса.',
                icon: 'fa-solid fa-truck-fast',
                tone: 'tone-green',
                price: 'от объема',
                items: [
                    'вывоз в черте города',
                    'работа по области по договоренности',
                    'согласование времени',
                    'регулярный график для бизнеса'
                ],
                noteTitle: 'Ориентир',
                note: 'Для стандартного вывоза обычно рассматриваются партии от 100 кг.'
            },
            {
                title: 'Самовывоз на склад',
                description: 'Если объем небольшой или вам удобнее привезти сырье самостоятельно, заранее согласуйте прием.',
                icon: 'fa-solid fa-warehouse',
                tone: 'tone-blue',
                price: 'по факту',
                items: [
                    'адрес: ул. 10 лет Октября, 1-2',
                    'прием по рабочему графику',
                    'предварительный звонок желателен',
                    'оценка качества на месте'
                ],
                noteTitle: 'Перед приездом',
                note: 'Позвоните, чтобы уточнить актуальные условия и наличие приемки.'
            }
        ],

        serviceRules: [
            {
                title: 'Не смешивайте категории',
                text: 'Бумага, пластик, стекло, металл и техника оцениваются по разным правилам.',
                icon: 'fa-solid fa-layer-group'
            },
            {
                title: 'Сырье должно быть сухим',
                text: 'Влажная макулатура и загрязненный пластик снижают стоимость или требуют отдельного согласования.',
                icon: 'fa-solid fa-droplet-slash'
            },
            {
                title: 'Сжимайте объемное сырье',
                text: 'ПЭТ и картон занимают меньше места, если их заранее прессовать или компактно сложить.',
                icon: 'fa-solid fa-compress'
            },
            {
                title: 'Фото ускоряет расчет',
                text: 'Несколько снимков партии помогают быстрее определить возможность вывоза и ориентир цены.',
                icon: 'fa-solid fa-camera'
            }
        ],

        serviceConditions: [
            {
                title: 'Для населения',
                text: 'Можно сдать накопленную макулатуру, пластик, стекло или технику. При крупном объеме обсуждается вывоз.',
                icon: 'fa-solid fa-user-group'
            },
            {
                title: 'Для организаций',
                text: 'Доступны договоры, регулярный график, закрывающие документы и работа с несколькими видами сырья.',
                icon: 'fa-solid fa-building'
            },
            {
                title: 'Для складов и магазинов',
                text: 'Картон, пленка, тара и упаковочные отходы можно вывозить по накоплению или по согласованному расписанию.',
                icon: 'fa-solid fa-boxes-stacked'
            }
        ],

        equipmentItems: [
            {
                title: 'Бытовая техника',
                text: 'Стиральные машины, холодильники, плиты, пылесосы и другая техника по согласованию.',
                icon: 'fa-solid fa-blender-phone',
                badge: 'выкуп / утилизация'
            },
            {
                title: 'Компьютеры и мониторы',
                text: 'Системные блоки, мониторы, периферия и устаревшая офисная техника.',
                icon: 'fa-solid fa-computer',
                badge: 'офисное оборудование'
            },
            {
                title: 'Медный лом',
                text: 'Материалы и лом, содержащие ценные металлы, оцениваются отдельно.',
                icon: 'fa-solid fa-coins',
                badge: 'по заявке'
            },
            {
                title: 'Лампы и отходы',
                text: 'Ртутьсодержащие отходы и отдельные категории отходов требуют предварительного согласования.',
                icon: 'fa-solid fa-lightbulb',
                badge: 'спецусловия'
            }
        ],

        equipmentTimeline: [
            {
                number: '1',
                title: 'Опишите технику',
                text: 'Тип, количество, состояние, наличие крупных габаритов и адрес хранения.'
            },
            {
                number: '2',
                title: 'Согласуйте категорию',
                text: 'Менеджер уточнит, относится ли позиция к выкупу, утилизации или специальным отходам.'
            },
            {
                number: '3',
                title: 'Подготовьте доступ',
                text: 'Важно заранее понять этаж, подъезд, грузовой лифт, проезд транспорта и необходимость погрузки.'
            },
            {
                number: '4',
                title: 'Получите условия',
                text: 'После оценки фиксируются цена, график, формат передачи и документы.'
            }
        ],

        equipmentCategories: [
            {
                title: 'Холодильники',
                text: 'Крупногабаритная техника требует согласования выноса и погрузки.',
                icon: 'fa-solid fa-temperature-low'
            },
            {
                title: 'Стиральные машины',
                text: 'Подходят для вывоза вместе с другой бытовой техникой или металлом.',
                icon: 'fa-solid fa-soap'
            },
            {
                title: 'Телевизоры',
                text: 'Условия зависят от типа, количества и состояния техники.',
                icon: 'fa-solid fa-tv'
            },
            {
                title: 'Компьютеры',
                text: 'Офисные партии удобно оформлять через юридическое лицо.',
                icon: 'fa-solid fa-desktop'
            },
            {
                title: 'Плиты и пылесосы',
                text: 'Принимаются как часть направления по выкупу бытовой техники.',
                icon: 'fa-solid fa-plug'
            },
            {
                title: 'Лампы',
                text: 'Хранятся отдельно, не смешиваются с бытовым мусором и вторсырьем.',
                icon: 'fa-solid fa-triangle-exclamation'
            }
        ],

        businessFeatures: [
            {
                title: 'Договорная работа',
                text: 'Сотрудничество с юридическими лицами строится через понятные условия, реквизиты и документы.',
                icon: 'fa-solid fa-file-signature'
            },
            {
                title: 'Регулярный вывоз',
                text: 'Подходит для объектов, где картон, пленка, тара или отходы появляются постоянно.',
                icon: 'fa-solid fa-calendar-check'
            },
            {
                title: 'Экологический порядок',
                text: 'Сортировка и передача вторсырья помогают не копить отходы на площадке и поддерживать чистоту.',
                icon: 'fa-solid fa-seedling'
            }
        ],

        businessScenarios: [
            {
                title: 'Торговые точки и сети',
                text: 'Картон, пленка, упаковка, стеклянная тара и регулярное накопление вторсырья.',
                badge: 'ритейл'
            },
            {
                title: 'Склады и логистика',
                text: 'Крупные партии упаковочных материалов, паллетные зоны, вывоз по графику.',
                badge: 'склад'
            },
            {
                title: 'Производства',
                text: 'Производственные остатки, тара, пластик, металл и отдельные отходы по согласованию.',
                badge: 'цех'
            },
            {
                title: 'Офисы и учреждения',
                text: 'Архивы, бумага, техника, компьютеры, лампы и разовые акции по сбору.',
                badge: 'офис'
            }
        ],

        documents: [
            {
                title: 'Договор',
                text: 'Фиксирует условия сотрудничества, график, сырье и ответственность сторон.',
                icon: 'fa-solid fa-file-contract'
            },
            {
                title: 'Акты и первичка',
                text: 'Набор документов уточняется для конкретного юрлица и вида сырья.',
                icon: 'fa-solid fa-file-invoice'
            },
            {
                title: 'Реквизиты',
                text: 'УНП, счет, банк и контакты вынесены в отдельную вкладку сайта.',
                icon: 'fa-solid fa-building-columns'
            },
            {
                title: 'Подтверждение условий',
                text: 'Перед вывозом согласуются цена, объем, качество и логистика.',
                icon: 'fa-solid fa-circle-check'
            }
        ],

        scheduleModes: [
            {
                title: 'По заявке',
                text: 'Подходит для нерегулярных партий и разового вывоза.'
            },
            {
                title: 'По накоплению',
                text: 'Менеджер выезжает, когда сырье достигает согласованного объема.'
            },
            {
                title: 'По графику',
                text: 'Удобно для магазинов, складов и производств с постоянным потоком отходов.'
            }
        ],

        partners: [
            'Евроопт',
            'Соседи',
            'БМЗ',
            'ГомельСтекло',
            'Спартак',
            'Коминтерн',
            'Милавица',
            'Санта',
            'Газель',
            'Каравай',
            'Приор',
            'Домовой'
        ],

        partnerFormats: [
            {
                title: 'Разовый вывоз',
                text: 'Для накопившегося архива, партии картона, техники или смешанных материалов.',
                icon: 'fa-solid fa-truck'
            },
            {
                title: 'Постоянный договор',
                text: 'Для площадок, где отходы появляются регулярно и важен прогнозируемый график.',
                icon: 'fa-solid fa-handshake-angle'
            },
            {
                title: 'Комплексный сбор',
                text: 'Несколько категорий: бумага, пластик, стекло, техника и отдельные отходы.',
                icon: 'fa-solid fa-diagram-project'
            },
            {
                title: 'Документы для учета',
                text: 'Реквизиты, акты и согласованный порядок оформления для юридических лиц.',
                icon: 'fa-solid fa-folder-open'
            }
        ],

        faqs: [
            {
                question: 'Вы сами вывозите вторсырье?',
                answer: 'Да, вывоз возможен по согласованию. Обычно ориентируются на объем от 100 кг в городе, но итоговые условия зависят от сырья, адреса и погрузки.'
            },
            {
                question: 'Какие материалы принимаются?',
                answer: 'Макулатура, картон, стеклобой, отдельные виды пластика, металл, бытовая техника, компьютеры, лампы и некоторые отходы по предварительному согласованию.'
            },
            {
                question: 'Почему цена не фиксированная для всех?',
                answer: 'Стоимость зависит от рынка, объема, загрязненности, сортировки, расстояния и необходимости погрузки. Поэтому точную цену подтверждают перед вывозом.'
            },
            {
                question: 'Можно ли сдать сырье самостоятельно?',
                answer: 'Да, но лучше заранее позвонить и уточнить актуальные условия приема, график и требования к подготовке материала.'
            },
            {
                question: 'Нужно ли сортировать сырье?',
                answer: 'Да, желательно. Бумагу, пластик, стекло, металл и технику лучше держать отдельно. Это ускоряет прием и помогает сохранить стоимость сырья.'
            },
            {
                question: 'Берете ли мокрую макулатуру?',
                answer: 'Мокрая или сильно загрязненная макулатура может приниматься по сниженной стоимости или не приниматься вовсе. Лучше уточнить состояние заранее.'
            },
            {
                question: 'Работаете ли вы с юридическими лицами?',
                answer: 'Да. Для организаций доступны договоры, акты, реквизиты, регулярный вывоз и согласование документов под конкретный вид сырья.'
            },
            {
                question: 'Можно ли вывезти технику из офиса?',
                answer: 'Да, офисную технику и компьютеры можно согласовать отдельно. Важно назвать количество, состояние, адрес и необходимость выноса.'
            },
            {
                question: 'Что делать с лампами?',
                answer: 'Лампы относятся к специальным отходам. Не смешивайте их с обычным мусором или вторсырьем, храните отдельно и заранее согласуйте прием.'
            },
            {
                question: 'Как быстрее получить расчет?',
                answer: 'Подготовьте фото, примерный вес или объем, адрес, описание доступа к площадке и желаемую дату вывоза.'
            }
        ],

        contacts: [
            {
                title: 'Офис и склад',
                icon: 'fa-solid fa-location-dot',
                type: 'text',
                value: '246042, г. Гомель<br>ул. 10 лет Октября, 1-2'
            },
            {
                title: 'Телефоны',
                icon: 'fa-solid fa-phone',
                type: 'links',
                links: [
                    { label: '+375 (29) 698-92-37', href: 'tel:+375296989237' },
                    { label: '+375 (29) 177-52-28', href: 'tel:+375291775228' },
                    { label: '8 (0232) 32-98-23', href: 'tel:+375232329823' },
                    { label: '8 (0232) 32-87-07', href: 'tel:+375232328707' },
                    { label: '8 (0232) 56-87-07', href: 'tel:+375232568707' }
                ]
            },
            {
                title: 'Электронная почта',
                icon: 'fa-solid fa-envelope',
                type: 'links',
                links: [
                    { label: 'belvtorpererabotka@rambler.ru', href: 'mailto:belvtorpererabotka@rambler.ru' }
                ]
            },
            {
                title: 'Режим работы',
                icon: 'fa-solid fa-clock',
                type: 'text',
                value: 'Пн-Пт: 09:00-17:00<br>Сб-Вс: по согласованию'
            }
        ],

        requisites: [
            { label: 'Название', value: 'ООО «БелВторПереработка»' },
            { label: 'УНП', value: '491333347' },
            { label: 'Расчетный счет', value: 'BY79BAPB30125993100100000000' },
            { label: 'Банк', value: 'ОАО «Белагропромбанк»' },
            { label: 'БИК', value: 'BAPBBY2X' },
            { label: 'Адрес банка', value: 'пр-т Жукова, 3, г. Минск, 220036' }
        ],

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
            this.activeFaq = tabId === 'faq' ? this.activeFaq : 0;

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

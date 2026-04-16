/**
 * Zeitona i18n — client-side internationalisation
 * Supported locales: en-us | en-gb | es | pt-pt | pt-br | de
 */
(function () {
    'use strict';

    // ── Supported locales ────────────────────────────────────────────────────
    var SUPPORTED = ['en-us', 'en-gb', 'es', 'pt-pt', 'pt-br', 'de'];
    var DEFAULT   = 'en-us';

    // HTML lang attribute values
    var LANG_ATTR = {
        'en-us': 'en-US',
        'en-gb': 'en-GB',
        'es':    'es',
        'pt-pt': 'pt-PT',
        'pt-br': 'pt-BR',
        'de':    'de'
    };

    // ── Translation strings ──────────────────────────────────────────────────
    var TRANSLATIONS = {

        // ── English (US) ────────────────────────────────────────────────────
        'en-us': {
            page: {
                title: 'Zeitona - Building the Future Block by Block',
                aboutTitle: 'About | Zeitona',
                whitepaperTitle: 'Whitepaper | Zeitona'
            },
            nav: {
                services:      'Services',
                about:         'About',
                contact:       'Contact',
                getInTouch:    'Get in Touch',
                backToHomepage:'← Back to Homepage'
            },
            hero: {
                badge:         'Construction 5.0',
                title:         'Building the Future',
                titleAccent:   'Block by Block',
                description:   'Zeitona merges BIM, Blockchain, and Smart Contracts to deliver transparent, efficient, and trustworthy construction ecosystems.',
                exploreBtn:    'Explore Our Vision',
                whitepaperBtn: 'Read Whitepaper'
            },
            services: {
                title:       'Three Pillars of',
                titleAccent: 'Innovation',
                description: 'An integrated platform where physical construction meets digital trust.',
                bim: {
                    title: 'BIM Integration',
                    desc:  'Building Information Modeling (BIM) integration for complete management.'
                },
                blockchain: {
                    title: 'Blockchain',
                    desc:  'Immutable and transparent audit trail that securely records every process, asset, and decision throughout the construction lifecycle.'
                },
                smartContracts: {
                    title: 'Smart Contracts',
                    desc:  'Designed to support the enablement of smart contracts for automated milestone payments and other features.'
                }
            },
            about: {
                whyZeitona:          'Why <span class="text-accent">Zeitona</span>?',
                p1: 'The AEC (Architecture, Engineering, and Construction) industry struggles to track and verify the authenticity of tasks performed throughout a construction project, leading to inefficiencies, rework, disputes, and a lack of trust among stakeholders.',
                p2: 'Our mission is to solve this by connecting every stakeholder on a single, verifiable source of truth.',
                p3: 'Zeitona: built by professionals who understand both concrete and code.',
                transparency:        'Transparency',
                automatedCompliance: 'Automated Compliance'
            },
            cta: {
                title:       "Let's Build Together",
                description: "Whether you're a developer, contractor, or innovator — we'd love to explore how Zeitona can transform your next project.",
                btn:         'Request Contact'
            },
            modal: {
                title:                  'Request to be Contacted',
                desc:                   'Please provide your details below and we will reach out to you.',
                email:                  'Email',
                emailPlaceholder:       'your@email.com',
                phone:                  'Phone',
                phonePlaceholder:       '+1 (555) 123-4567',
                optional:               '(optional)',
                subject:                'Subject',
                subjectPlaceholder:     'How can we help you?',
                description:            'Description',
                descriptionPlaceholder: 'Tell us more about your project or inquiry...',
                sendRequest:            'Send Request',
                sending:                'Sending',
                emailError:             'Please enter a valid email address',
                subjectError:           'Please enter a subject',
                successTitle:           'Message Sent!',
                successDesc:            'Thank you for reaching out. We will get back to you soon.',
                errorAlert:             'There was an error sending your message.',
                notProvided:            'Not provided',
                noDescription:          'No description provided'
            },
            footer: {
                tagline: 'Building the future of construction.'
            },
            aboutPage: {
                heading:          'About <strong><span class="text-accent">Zeitona</span></strong>',
                p1: 'Zeitona is a pioneer in Construction 5.0, transforming how the industry builds, manages, and delivers projects through integrated digital technologies.',
                p2: "Founded by engineers and innovators who understand both construction and code, we're committed to solving the industry's greatest challenges: inefficiency, lack of transparency, and contractual disputes.",
                p3: 'Our mission is to create a human-centric, sustainable, and digitally sovereign construction ecosystem where every stakeholder — architects, engineers, suppliers, contractors, and regulators — operates from a single verifiable source of truth. We deliver <strong>full compliance</strong> with regulatory standards, <strong>complete transparency</strong> across the supply chain, <strong>comprehensive auditability</strong> with full audit trails, and <strong>verified trust</strong> through secure, blockchain-backed systems.',
                meetOurFounders:  'Meet Our <span class="text-accent">Founders</span>',
                foundersDesc:     'Innovators combining expertise in construction, engineering, and technology.',
                roleExpertise:    'Role & Expertise',
                founder1Bio:      "Bachelor's in Information Systems (BSIS) with data engineering & analytics experience across diverse industries. Skilled at collaborating with multidisciplinary international teams to deliver actionable, data-driven solutions.",
                founder2Bio:      'Software architect specialized in distributed systems and scalable solutions. Focused on system integration, technical standards, and strategic architecture decisions.<br /> Experienced in international collaboration across Latin America and Europe.',
                founder3Bio:      "Civil engineer (MSc) with experience in contract management, foundation engineering, and structural analysis, complemented by a Bachelor's degree in Mathematics."
            },
            whitepaper: {
                heading:     'The Zeitona <strong>Whitepaper</strong>',
                description: 'Our technical whitepaper is currently in the final stages of refinement.<br />Stay tuned; we will be sharing more updates soon.'
            }
        },

        // ── English (GB) ────────────────────────────────────────────────────
        'en-gb': {
            page: {
                title:          'Zeitona - Building the Future Block by Block',
                aboutTitle:     'About | Zeitona',
                whitepaperTitle:'Whitepaper | Zeitona'
            },
            nav: {
                services:      'Services',
                about:         'About',
                contact:       'Contact',
                getInTouch:    'Get in Touch',
                backToHomepage:'← Back to Homepage'
            },
            hero: {
                badge:         'Construction 5.0',
                title:         'Building the Future',
                titleAccent:   'Block by Block',
                description:   'Zeitona merges BIM, Blockchain, and Smart Contracts to deliver transparent, efficient, and trustworthy construction ecosystems.',
                exploreBtn:    'Explore Our Vision',
                whitepaperBtn: 'Read Whitepaper'
            },
            services: {
                title:       'Three Pillars of',
                titleAccent: 'Innovation',
                description: 'An integrated platform where physical construction meets digital trust.',
                bim: {
                    title: 'BIM Integration',
                    desc:  'Building Information Modelling (BIM) integration for complete management.'
                },
                blockchain: {
                    title: 'Blockchain',
                    desc:  'Immutable and transparent audit trail that securely records every process, asset, and decision throughout the construction lifecycle.'
                },
                smartContracts: {
                    title: 'Smart Contracts',
                    desc:  'Designed to support the enablement of smart contracts for automated milestone payments and other features.'
                }
            },
            about: {
                whyZeitona:          'Why <span class="text-accent">Zeitona</span>?',
                p1: 'The AEC (Architecture, Engineering, and Construction) industry struggles to track and verify the authenticity of tasks performed throughout a construction project, leading to inefficiencies, rework, disputes, and a lack of trust among stakeholders.',
                p2: 'Our mission is to solve this by connecting every stakeholder on a single, verifiable source of truth.',
                p3: 'Zeitona: built by professionals who understand both concrete and code.',
                transparency:        'Transparency',
                automatedCompliance: 'Automated Compliance'
            },
            cta: {
                title:       "Let's Build Together",
                description: "Whether you're a developer, contractor, or innovator — we'd love to explore how Zeitona can transform your next project.",
                btn:         'Request Contact'
            },
            modal: {
                title:                  'Request to be Contacted',
                desc:                   'Please provide your details below and we will reach out to you.',
                email:                  'Email',
                emailPlaceholder:       'your@email.co.uk',
                phone:                  'Phone',
                phonePlaceholder:       '+44 7911 123456',
                optional:               '(optional)',
                subject:                'Subject',
                subjectPlaceholder:     'How can we help you?',
                description:            'Description',
                descriptionPlaceholder: 'Tell us more about your project or enquiry...',
                sendRequest:            'Send Request',
                sending:                'Sending',
                emailError:             'Please enter a valid email address',
                subjectError:           'Please enter a subject',
                successTitle:           'Message Sent!',
                successDesc:            'Thank you for getting in touch. We will get back to you shortly.',
                errorAlert:             'There was an error sending your message.',
                notProvided:            'Not provided',
                noDescription:          'No description provided'
            },
            footer: {
                tagline: 'Building the future of construction.'
            },
            aboutPage: {
                heading:         'About <strong><span class="text-accent">Zeitona</span></strong>',
                p1: 'Zeitona is a pioneer in Construction 5.0, transforming how the industry builds, manages, and delivers projects through integrated digital technologies.',
                p2: "Founded by engineers and innovators who understand both construction and code, we're committed to solving the industry's greatest challenges: inefficiency, lack of transparency, and contractual disputes.",
                p3: 'Our mission is to create a human-centric, sustainable, and digitally sovereign construction ecosystem where every stakeholder — architects, engineers, suppliers, contractors, and regulators — operates from a single verifiable source of truth. We deliver <strong>full compliance</strong> with regulatory standards, <strong>complete transparency</strong> across the supply chain, <strong>comprehensive auditability</strong> with full audit trails, and <strong>verified trust</strong> through secure, blockchain-backed systems.',
                meetOurFounders: 'Meet Our <span class="text-accent">Founders</span>',
                foundersDesc:    'Innovators combining expertise in construction, engineering, and technology.',
                roleExpertise:   'Role & Expertise',
                founder1Bio:     "Bachelor's in Information Systems (BSIS) with data engineering & analytics experience across diverse industries. Skilled at collaborating with multidisciplinary international teams to deliver actionable, data-driven solutions.",
                founder2Bio:     'Software architect specialised in distributed systems and scalable solutions. Focused on system integration, technical standards, and strategic architecture decisions.<br /> Experienced in international collaboration across Latin America and Europe.',
                founder3Bio:     "Civil engineer (MSc) with experience in contract management, foundation engineering, and structural analysis, complemented by a Bachelor's degree in Mathematics."
            },
            whitepaper: {
                heading:     'The Zeitona <strong>Whitepaper</strong>',
                description: 'Our technical whitepaper is currently in the final stages of refinement.<br />Stay tuned; we will be sharing more updates soon.'
            }
        },

        // ── Spanish ──────────────────────────────────────────────────────────
        'es': {
            page: {
                title:          'Zeitona - Construyendo el Futuro Bloque a Bloque',
                aboutTitle:     'Acerca de | Zeitona',
                whitepaperTitle:'Whitepaper | Zeitona'
            },
            nav: {
                services:      'Servicios',
                about:         'Acerca de',
                contact:       'Contacto',
                getInTouch:    'Contáctenos',
                backToHomepage:'← Volver a la Página Principal'
            },
            hero: {
                badge:         'Construcción 5.0',
                title:         'Construyendo el Futuro',
                titleAccent:   'Bloque a Bloque',
                description:   'Zeitona integra BIM, Blockchain y Contratos Inteligentes para ofrecer ecosistemas de construcción transparentes, eficientes y confiables.',
                exploreBtn:    'Explorar Nuestra Visión',
                whitepaperBtn: 'Leer Whitepaper'
            },
            services: {
                title:       'Tres Pilares de la',
                titleAccent: 'Innovación',
                description: 'Una plataforma integrada donde la construcción física se encuentra con la confianza digital.',
                bim: {
                    title: 'Integración BIM',
                    desc:  'Integración de Modelado de Información para la Construcción (BIM) para una gestión completa.'
                },
                blockchain: {
                    title: 'Blockchain',
                    desc:  'Registro de auditoría inmutable y transparente que registra de forma segura cada proceso, activo y decisión a lo largo del ciclo de vida de la construcción.'
                },
                smartContracts: {
                    title: 'Contratos Inteligentes',
                    desc:  'Diseñado para facilitar contratos inteligentes que automatizan pagos por hitos y otras funcionalidades.'
                }
            },
            about: {
                whyZeitona:          '¿Por qué <span class="text-accent">Zeitona</span>?',
                p1: 'La industria AEC (Arquitectura, Ingeniería y Construcción) tiene dificultades para rastrear y verificar la autenticidad de las tareas realizadas a lo largo de un proyecto de construcción, lo que lleva a ineficiencias, reprocesos, disputas y falta de confianza entre las partes interesadas.',
                p2: 'Nuestra misión es resolver esto conectando a cada parte interesada en una única fuente de verdad verificable.',
                p3: 'Zeitona: construida por profesionales que entienden tanto el concreto como el código.',
                transparency:        'Transparencia',
                automatedCompliance: 'Cumplimiento Automatizado'
            },
            cta: {
                title:       'Construyamos Juntos',
                description: 'Tanto si eres desarrollador, contratista o innovador — nos encantaría explorar cómo Zeitona puede transformar tu próximo proyecto.',
                btn:         'Solicitar Contacto'
            },
            modal: {
                title:                  'Solicitar ser Contactado',
                desc:                   'Por favor, proporcione sus datos a continuación y nos pondremos en contacto con usted.',
                email:                  'Correo Electrónico',
                emailPlaceholder:       'su@correo.com',
                phone:                  'Teléfono',
                phonePlaceholder:       '+34 912 345 678',
                optional:               '(opcional)',
                subject:                'Asunto',
                subjectPlaceholder:     '¿Cómo podemos ayudarte?',
                description:            'Descripción',
                descriptionPlaceholder: 'Cuéntenos más sobre su proyecto o consulta...',
                sendRequest:            'Enviar Solicitud',
                sending:                'Enviando',
                emailError:             'Por favor, introduce una dirección de correo válida',
                subjectError:           'Por favor, introduce un asunto',
                successTitle:           '¡Mensaje Enviado!',
                successDesc:            'Gracias por ponerse en contacto. Le responderemos pronto.',
                errorAlert:             'Hubo un error al enviar su mensaje.',
                notProvided:            'No proporcionado',
                noDescription:          'Sin descripción'
            },
            footer: {
                tagline: 'Construyendo el futuro de la construcción.'
            },
            aboutPage: {
                heading:         'Acerca de <strong><span class="text-accent">Zeitona</span></strong>',
                p1: 'Zeitona es pionera en Construcción 5.0, transformando la forma en que la industria construye, gestiona y entrega proyectos mediante tecnologías digitales integradas.',
                p2: 'Fundada por ingenieros e innovadores que entienden tanto la construcción como el código, estamos comprometidos a resolver los mayores desafíos de la industria: ineficiencia, falta de transparencia y disputas contractuales.',
                p3: 'Nuestra misión es crear un ecosistema de construcción centrado en las personas, sostenible y digitalmente soberano donde cada parte interesada — arquitectos, ingenieros, proveedores, contratistas y reguladores — opera desde una única fuente verificable de verdad. Ofrecemos <strong>cumplimiento total</strong> con los estándares regulatorios, <strong>transparencia completa</strong> en la cadena de suministro, <strong>auditabilidad exhaustiva</strong> con registros de auditoría completos, y <strong>confianza verificada</strong> a través de sistemas seguros respaldados por blockchain.',
                meetOurFounders: 'Conoce a Nuestros <span class="text-accent">Fundadores</span>',
                foundersDesc:    'Innovadores que combinan experiencia en construcción, ingeniería y tecnología.',
                roleExpertise:   'Rol y Experiencia',
                founder1Bio:     'Licenciado en Sistemas de Información (BSIS) con experiencia en ingeniería de datos y analítica en diversas industrias. Hábil en la colaboración con equipos internacionales multidisciplinarios para ofrecer soluciones basadas en datos.',
                founder2Bio:     'Arquitecto de software especializado en sistemas distribuidos y soluciones escalables. Enfocado en integración de sistemas, estándares técnicos y decisiones de arquitectura estratégica.<br /> Con experiencia en colaboración internacional en América Latina y Europa.',
                founder3Bio:     'Ingeniera civil (MSc) con experiencia en gestión de contratos, ingeniería de cimentaciones y análisis estructural, complementada con una licenciatura en Matemáticas.'
            },
            whitepaper: {
                heading:     'El <strong>Whitepaper</strong> de Zeitona',
                description: 'Nuestro whitepaper técnico se encuentra actualmente en las etapas finales de refinamiento.<br />Esté atento; pronto compartiremos más actualizaciones.'
            }
        },

        // ── Portuguese (PT) ──────────────────────────────────────────────────
        'pt-pt': {
            page: {
                title:          'Zeitona - A Construir o Futuro Tijolo a Tijolo',
                aboutTitle:     'Sobre | Zeitona',
                whitepaperTitle:'Whitepaper | Zeitona'
            },
            nav: {
                services:      'Serviços',
                about:         'Sobre',
                contact:       'Contacto',
                getInTouch:    'Entrar em Contacto',
                backToHomepage:'← Voltar à Página Inicial'
            },
            hero: {
                badge:         'Construção 5.0',
                title:         'A Construir o Futuro',
                titleAccent:   'Tijolo a Tijolo',
                description:   'A Zeitona integra BIM, Blockchain e Contratos Inteligentes para criar ecossistemas de construção transparentes, eficientes e confiáveis.',
                exploreBtn:    'Explorar a Nossa Visão',
                whitepaperBtn: 'Ler Whitepaper'
            },
            services: {
                title:       'Três Pilares de',
                titleAccent: 'Inovação',
                description: 'Uma plataforma integrada onde a construção física encontra a confiança digital.',
                bim: {
                    title: 'Integração BIM',
                    desc:  'Integração de Modelação de Informação de Construção (BIM) para uma gestão completa.'
                },
                blockchain: {
                    title: 'Blockchain',
                    desc:  'Registo de auditoria imutável e transparente que regista de forma segura cada processo, ativo e decisão ao longo do ciclo de vida da construção.'
                },
                smartContracts: {
                    title: 'Contratos Inteligentes',
                    desc:  'Concebido para suportar a utilização de contratos inteligentes para pagamentos automáticos por marcos e outras funcionalidades.'
                }
            },
            about: {
                whyZeitona:          'Porquê <span class="text-accent">Zeitona</span>?',
                p1: 'A indústria AEC (Arquitetura, Engenharia e Construção) tem dificuldade em rastrear e verificar a autenticidade das tarefas realizadas ao longo de um projeto de construção, conduzindo a ineficiências, retrabalho, disputas e falta de confiança entre os intervenientes.',
                p2: 'A nossa missão é resolver isto ligando todos os intervenientes numa única fonte de verdade verificável.',
                p3: 'Zeitona: construída por profissionais que compreendem tanto o betão como o código.',
                transparency:        'Transparência',
                automatedCompliance: 'Conformidade Automatizada'
            },
            cta: {
                title:       'Vamos Construir Juntos',
                description: 'Seja desenvolvedor, empreiteiro ou inovador — adoraríamos explorar como a Zeitona pode transformar o seu próximo projeto.',
                btn:         'Solicitar Contacto'
            },
            modal: {
                title:                  'Solicitar Ser Contactado',
                desc:                   'Por favor, forneça os seus dados abaixo e entraremos em contacto consigo.',
                email:                  'Email',
                emailPlaceholder:       'o-seu@email.pt',
                phone:                  'Telefone',
                phonePlaceholder:       '+351 912 345 678',
                optional:               '(opcional)',
                subject:                'Assunto',
                subjectPlaceholder:     'Como podemos ajudá-lo?',
                description:            'Descrição',
                descriptionPlaceholder: 'Conte-nos mais sobre o seu projeto ou consulta...',
                sendRequest:            'Enviar Pedido',
                sending:                'A enviar',
                emailError:             'Por favor, introduza um endereço de email válido',
                subjectError:           'Por favor, introduza um assunto',
                successTitle:           'Mensagem Enviada!',
                successDesc:            'Obrigado por entrar em contacto. Responderemos em breve.',
                errorAlert:             'Ocorreu um erro ao enviar a sua mensagem.',
                notProvided:            'Não fornecido',
                noDescription:          'Sem descrição'
            },
            footer: {
                tagline: 'A construir o futuro da construção.'
            },
            aboutPage: {
                heading:         'Sobre <strong><span class="text-accent">Zeitona</span></strong>',
                p1: 'A Zeitona é uma pioneira na Construção 5.0, transformando a forma como a indústria constrói, gere e entrega projetos através de tecnologias digitais integradas.',
                p2: 'Fundada por engenheiros e inovadores que compreendem tanto a construção como o código, estamos empenhados em resolver os maiores desafios da indústria: ineficiência, falta de transparência e disputas contratuais.',
                p3: 'A nossa missão é criar um ecossistema de construção centrado no ser humano, sustentável e digitalmente soberano onde todos os intervenientes — arquitetos, engenheiros, fornecedores, empreiteiros e reguladores — operam a partir de uma única fonte de verdade verificável. Proporcionamos <strong>conformidade total</strong> com os padrões regulatórios, <strong>transparência completa</strong> em toda a cadeia de abastecimento, <strong>auditabilidade abrangente</strong> com registos de auditoria completos e <strong>confiança verificada</strong> através de sistemas seguros suportados por blockchain.',
                meetOurFounders: 'Conheça os Nossos <span class="text-accent">Fundadores</span>',
                foundersDesc:    'Inovadores que combinam experiência em construção, engenharia e tecnologia.',
                roleExpertise:   'Função e Experiência',
                founder1Bio:     'Licenciado em Sistemas de Informação (BSIS) com experiência em engenharia de dados e análise em diversas indústrias. Especializado em colaboração com equipas internacionais multidisciplinares para fornecer soluções baseadas em dados.',
                founder2Bio:     'Arquiteto de software especializado em sistemas distribuídos e soluções escaláveis. Focado em integração de sistemas, padrões técnicos e decisões de arquitetura estratégica.<br /> Com experiência em colaboração internacional na América Latina e Europa.',
                founder3Bio:     'Engenheira civil (MSc) com experiência em gestão de contratos, engenharia de fundações e análise estrutural, complementada com uma licenciatura em Matemática.'
            },
            whitepaper: {
                heading:     'O <strong>Whitepaper</strong> da Zeitona',
                description: 'O nosso whitepaper técnico encontra-se atualmente nas fases finais de refinamento.<br />Fique atento; partilharemos mais atualizações em breve.'
            }
        },

        // ── Portuguese (BR) ──────────────────────────────────────────────────
        'pt-br': {
            page: {
                title:          'Zeitona - Construindo o Futuro Tijolo a Tijolo',
                aboutTitle:     'Sobre | Zeitona',
                whitepaperTitle:'Whitepaper | Zeitona'
            },
            nav: {
                services:      'Serviços',
                about:         'Sobre',
                contact:       'Contato',
                getInTouch:    'Entre em Contato',
                backToHomepage:'← Voltar à Página Inicial'
            },
            hero: {
                badge:         'Construção 5.0',
                title:         'Construindo o Futuro',
                titleAccent:   'Tijolo a Tijolo',
                description:   'A Zeitona integra BIM, Blockchain e Contratos Inteligentes para criar ecossistemas de construção transparentes, eficientes e confiáveis.',
                exploreBtn:    'Explorar Nossa Visão',
                whitepaperBtn: 'Ler Whitepaper'
            },
            services: {
                title:       'Três Pilares de',
                titleAccent: 'Inovação',
                description: 'Uma plataforma integrada onde a construção física encontra a confiança digital.',
                bim: {
                    title: 'Integração BIM',
                    desc:  'Integração de Modelagem da Informação da Construção (BIM) para gerenciamento completo.'
                },
                blockchain: {
                    title: 'Blockchain',
                    desc:  'Trilha de auditoria imutável e transparente que registra com segurança cada processo, ativo e decisão ao longo do ciclo de vida da construção.'
                },
                smartContracts: {
                    title: 'Contratos Inteligentes',
                    desc:  'Projetado para suportar a habilitação de contratos inteligentes para pagamentos automáticos por marcos e outras funcionalidades.'
                }
            },
            about: {
                whyZeitona:          'Por que <span class="text-accent">Zeitona</span>?',
                p1: 'A indústria AEC (Arquitetura, Engenharia e Construção) tem dificuldade em rastrear e verificar a autenticidade das tarefas realizadas ao longo de um projeto de construção, levando a ineficiências, retrabalho, disputas e falta de confiança entre os stakeholders.',
                p2: 'Nossa missão é resolver isso conectando todos os stakeholders em uma única fonte verificável de verdade.',
                p3: 'Zeitona: construída por profissionais que entendem tanto de concreto quanto de código.',
                transparency:        'Transparência',
                automatedCompliance: 'Conformidade Automatizada'
            },
            cta: {
                title:       'Vamos Construir Juntos',
                description: 'Seja você desenvolvedor, empreiteiro ou inovador — adoraríamos explorar como a Zeitona pode transformar seu próximo projeto.',
                btn:         'Solicitar Contato'
            },
            modal: {
                title:                  'Solicitar ser Contatado',
                desc:                   'Por favor, forneça seus dados abaixo e entraremos em contato com você.',
                email:                  'Email',
                emailPlaceholder:       'seu@email.com.br',
                phone:                  'Telefone',
                phonePlaceholder:       '+55 11 98765-4321',
                optional:               '(opcional)',
                subject:                'Assunto',
                subjectPlaceholder:     'Como podemos ajudá-lo?',
                description:            'Descrição',
                descriptionPlaceholder: 'Conte-nos mais sobre seu projeto ou consulta...',
                sendRequest:            'Enviar Pedido',
                sending:                'Enviando',
                emailError:             'Por favor, insira um endereço de email válido',
                subjectError:           'Por favor, insira um assunto',
                successTitle:           'Mensagem Enviada!',
                successDesc:            'Obrigado por entrar em contato. Retornaremos em breve.',
                errorAlert:             'Ocorreu um erro ao enviar sua mensagem.',
                notProvided:            'Não fornecido',
                noDescription:          'Sem descrição'
            },
            footer: {
                tagline: 'Construindo o futuro da construção.'
            },
            aboutPage: {
                heading:         'Sobre <strong><span class="text-accent">Zeitona</span></strong>',
                p1: 'A Zeitona é pioneira na Construção 5.0, transformando como a indústria constrói, gerencia e entrega projetos por meio de tecnologias digitais integradas.',
                p2: 'Fundada por engenheiros e inovadores que entendem tanto de construção quanto de código, estamos comprometidos em resolver os maiores desafios da indústria: ineficiência, falta de transparência e disputas contratuais.',
                p3: 'Nossa missão é criar um ecossistema de construção centrado no ser humano, sustentável e digitalmente soberano, onde todos os stakeholders — arquitetos, engenheiros, fornecedores, empreiteiros e reguladores — operam a partir de uma única fonte verificável de verdade. Entregamos <strong>conformidade total</strong> com os padrões regulatórios, <strong>transparência completa</strong> em toda a cadeia de suprimentos, <strong>auditabilidade abrangente</strong> com trilhas de auditoria completas e <strong>confiança verificada</strong> por meio de sistemas seguros apoiados em blockchain.',
                meetOurFounders: 'Conheça Nossos <span class="text-accent">Fundadores</span>',
                foundersDesc:    'Inovadores que combinam experiência em construção, engenharia e tecnologia.',
                roleExpertise:   'Função e Experiência',
                founder1Bio:     'Bacharel em Sistemas de Informação (BSIS) com experiência em engenharia de dados e análise em diversas indústrias. Habilidoso em colaborar com equipes internacionais multidisciplinares para entregar soluções baseadas em dados.',
                founder2Bio:     'Arquiteto de software especializado em sistemas distribuídos e soluções escaláveis. Focado em integração de sistemas, padrões técnicos e decisões de arquitetura estratégica.<br /> Com experiência em colaboração internacional na América Latina e Europa.',
                founder3Bio:     'Engenheira civil (MSc) com experiência em gestão de contratos, engenharia de fundações e análise estrutural, complementada por uma graduação em Matemática.'
            },
            whitepaper: {
                heading:     'O <strong>Whitepaper</strong> da Zeitona',
                description: 'Nosso whitepaper técnico está atualmente nas etapas finais de refinamento.<br />Fique ligado; em breve compartilharemos mais atualizações.'
            }
        },

        // ── German ───────────────────────────────────────────────────────────
        'de': {
            page: {
                title:          'Zeitona - Die Zukunft Stein für Stein aufbauen',
                aboutTitle:     'Über uns | Zeitona',
                whitepaperTitle:'Whitepaper | Zeitona'
            },
            nav: {
                services:      'Leistungen',
                about:         'Über uns',
                contact:       'Kontakt',
                getInTouch:    'Kontakt aufnehmen',
                backToHomepage:'← Zurück zur Startseite'
            },
            hero: {
                badge:         'Construction 5.0',
                title:         'Die Zukunft aufbauen',
                titleAccent:   'Stein für Stein',
                description:   'Zeitona verbindet BIM, Blockchain und Smart Contracts, um transparente, effiziente und vertrauenswürdige Bauprojekt-Ökosysteme zu schaffen.',
                exploreBtn:    'Unsere Vision erkunden',
                whitepaperBtn: 'Whitepaper lesen'
            },
            services: {
                title:       'Drei Säulen der',
                titleAccent: 'Innovation',
                description: 'Eine integrierte Plattform, auf der physisches Bauen auf digitales Vertrauen trifft.',
                bim: {
                    title: 'BIM-Integration',
                    desc:  'Building Information Modeling (BIM)-Integration für ein vollständiges Projektmanagement.'
                },
                blockchain: {
                    title: 'Blockchain',
                    desc:  'Unveränderliche und transparente Prüfspur, die jeden Prozess, jedes Asset und jede Entscheidung im gesamten Bauprojektzyklus sicher erfasst.'
                },
                smartContracts: {
                    title: 'Smart Contracts',
                    desc:  'Entwickelt zur Unterstützung von Smart Contracts für automatisierte Meilensteinzahlungen und weitere Funktionen.'
                }
            },
            about: {
                whyZeitona:          'Warum <span class="text-accent">Zeitona</span>?',
                p1: 'Die AEC-Branche (Architektur, Ingenieurwesen und Bauwesen) hat Schwierigkeiten, die Authentizität von Aufgaben im Laufe eines Bauprojekts zu verfolgen und zu verifizieren, was zu Ineffizienzen, Nacharbeit, Streitigkeiten und mangelndem Vertrauen unter den Beteiligten führt.',
                p2: 'Unsere Mission ist es, dieses Problem zu lösen, indem wir alle Beteiligten mit einer einzigen, verifizierbaren Quelle der Wahrheit verbinden.',
                p3: 'Zeitona: entwickelt von Fachleuten, die sowohl Beton als auch Code verstehen.',
                transparency:        'Transparenz',
                automatedCompliance: 'Automatisierte Compliance'
            },
            cta: {
                title:       'Gemeinsam bauen',
                description: 'Ob Entwickler, Auftragnehmer oder Innovator — wir würden gerne erkunden, wie Zeitona Ihr nächstes Projekt transformieren kann.',
                btn:         'Kontakt anfragen'
            },
            modal: {
                title:                  'Kontaktanfrage senden',
                desc:                   'Bitte geben Sie Ihre Daten unten ein und wir werden uns bei Ihnen melden.',
                email:                  'E-Mail',
                emailPlaceholder:       'ihre@email.de',
                phone:                  'Telefon',
                phonePlaceholder:       '+49 30 12345678',
                optional:               '(optional)',
                subject:                'Betreff',
                subjectPlaceholder:     'Wie können wir Ihnen helfen?',
                description:            'Beschreibung',
                descriptionPlaceholder: 'Erzählen Sie uns mehr über Ihr Projekt oder Ihre Anfrage...',
                sendRequest:            'Anfrage senden',
                sending:                'Wird gesendet',
                emailError:             'Bitte geben Sie eine gültige E-Mail-Adresse ein',
                subjectError:           'Bitte geben Sie einen Betreff ein',
                successTitle:           'Nachricht gesendet!',
                successDesc:            'Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns in Kürze bei Ihnen melden.',
                errorAlert:             'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten.',
                notProvided:            'Nicht angegeben',
                noDescription:          'Keine Beschreibung'
            },
            footer: {
                tagline: 'Die Zukunft des Bauwesens gestalten.'
            },
            aboutPage: {
                heading:         'Über <strong><span class="text-accent">Zeitona</span></strong>',
                p1: 'Zeitona ist ein Pionier in Construction 5.0 und transformiert die Art und Weise, wie die Branche Projekte baut, verwaltet und realisiert – durch integrierte digitale Technologien.',
                p2: 'Gegründet von Ingenieuren und Innovatoren, die sowohl Bauwesen als auch Code verstehen, sind wir bestrebt, die größten Herausforderungen der Branche zu lösen: Ineffizienz, mangelnde Transparenz und Vertragsstreitigkeiten.',
                p3: 'Unsere Mission ist es, ein menschenzentriertes, nachhaltiges und digital souveränes Bauprojekt-Ökosystem zu schaffen, in dem alle Beteiligten – Architekten, Ingenieure, Lieferanten, Auftragnehmer und Regulierungsbehörden – auf einer einzigen verifizierbaren Quelle der Wahrheit basieren. Wir bieten <strong>vollständige Compliance</strong> mit regulatorischen Standards, <strong>vollständige Transparenz</strong> in der gesamten Lieferkette, <strong>umfassende Prüfbarkeit</strong> mit vollständigen Prüfprotokollen und <strong>verifizierbares Vertrauen</strong> durch sichere, blockchain-gestützte Systeme.',
                meetOurFounders: 'Unsere <span class="text-accent">Gründer</span>',
                foundersDesc:    'Innovatoren, die Expertise in Bauwesen, Ingenieurwesen und Technologie kombinieren.',
                roleExpertise:   'Rolle & Expertise',
                founder1Bio:     'Bachelor in Informationssystemen (BSIS) mit Erfahrung in Datentechnik und Analytik in verschiedenen Branchen. Kompetent in der Zusammenarbeit mit multidisziplinären internationalen Teams zur Bereitstellung datengesteuerter Lösungen.',
                founder2Bio:     'Softwarearchitekt, spezialisiert auf verteilte Systeme und skalierbare Lösungen. Fokussiert auf Systemintegration, technische Standards und strategische Architekturentscheidungen.<br /> Erfahren in internationaler Zusammenarbeit in Lateinamerika und Europa.',
                founder3Bio:     'Bauingenieurin (MSc) mit Erfahrung in Vertragsmanagement, Grundbauingenieurwesen und Strukturanalyse, ergänzt durch einen Bachelor in Mathematik.'
            },
            whitepaper: {
                heading:     'Das Zeitona <strong>Whitepaper</strong>',
                description: 'Unser technisches Whitepaper befindet sich derzeit in den abschließenden Phasen der Fertigstellung.<br />Bleiben Sie dran; wir werden in Kürze weitere Updates teilen.'
            }
        }
    };

    // ── Locale detection ─────────────────────────────────────────────────────
    function detectLocale() {
        var stored = '';
        try { stored = localStorage.getItem('zeitona-locale') || ''; } catch (_) {}
        if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

        var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (lang === 'pt-br' || lang.indexOf('pt-br') === 0) return 'pt-br';
        if (lang.indexOf('pt') === 0) return 'pt-pt';
        if (lang.indexOf('de') === 0) return 'de';
        if (lang.indexOf('es') === 0) return 'es';
        if (lang === 'en-gb' || lang.indexOf('en-gb') === 0) return 'en-gb';
        return DEFAULT;
    }

    // ── Core helpers ─────────────────────────────────────────────────────────
    var currentLocale = detectLocale();

    function t(key) {
        var parts  = key.split('.');
        var result = TRANSLATIONS[currentLocale];
        for (var i = 0; i < parts.length; i++) {
            if (result && typeof result === 'object' && Object.prototype.hasOwnProperty.call(result, parts[i])) {
                result = result[parts[i]];
            } else {
                // fallback to en-us
                var fb = TRANSLATIONS[DEFAULT];
                for (var j = 0; j < parts.length; j++) {
                    if (fb && typeof fb === 'object' && Object.prototype.hasOwnProperty.call(fb, parts[j])) {
                        fb = fb[parts[j]];
                    } else { return key; }
                }
                return typeof fb === 'string' ? fb : key;
            }
        }
        return typeof result === 'string' ? result : key;
    }

    function applyTranslations() {
        // textContent
        var els = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < els.length; i++) {
            els[i].textContent = t(els[i].getAttribute('data-i18n'));
        }
        // innerHTML (mixed HTML — only used for hardcoded trusted translations)
        var htmlEls = document.querySelectorAll('[data-i18n-html]');
        for (var j = 0; j < htmlEls.length; j++) {
            var raw = t(htmlEls[j].getAttribute('data-i18n-html'));
            // Strip script tags and event-handler attributes before setting innerHTML
            var safe = raw
                .replace(/<script[\s\S]*?\/script>/gi, '')
                .replace(/\s+on\w+\s*=\s*"[^"]*"/gi, '')
                .replace(/\s+on\w+\s*=\s*'[^']*'/gi, '');
            htmlEls[j].innerHTML = safe;
        }
        // placeholder
        var phEls = document.querySelectorAll('[data-i18n-placeholder]');
        for (var k = 0; k < phEls.length; k++) {
            phEls[k].placeholder = t(phEls[k].getAttribute('data-i18n-placeholder'));
        }
        // <title>
        var titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) { document.title = t(titleEl.getAttribute('data-i18n')); }
        // html lang attribute
        document.documentElement.lang = LANG_ATTR[currentLocale] || currentLocale;
    }

    function setLocale(locale) {
        if (SUPPORTED.indexOf(locale) === -1) return;
        currentLocale = locale;
        try { localStorage.setItem('zeitona-locale', locale); } catch (_) {}
        applyTranslations();
        // Update lang-switcher UI if present
        var langCurrent = document.getElementById('lang-current');
        if (langCurrent) langCurrent.textContent = locale.toUpperCase();
        document.querySelectorAll('.lang-option').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.locale === locale);
        });
    }

    function getCurrentLocale() { return currentLocale; }

    // Set lang attribute immediately (before full DOM ready)
    document.documentElement.lang = LANG_ATTR[currentLocale] || currentLocale;

    // ── Public API ───────────────────────────────────────────────────────────
    window.i18n = {
        t:                t,
        applyTranslations: applyTranslations,
        setLocale:        setLocale,
        getCurrentLocale: getCurrentLocale
    };
}());

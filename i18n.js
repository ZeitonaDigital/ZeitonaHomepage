/**
 * Zeitona i18n — client-side internationalisation
 * Supported locales: en-us | en-gb | es | pt-pt | pt-br
 */
(function () {
    'use strict';

    // ── Supported locales ────────────────────────────────────────────────────
    var SUPPORTED = ['en-us', 'en-gb', 'es', 'pt-pt', 'pt-br'];
    var DEFAULT   = 'en-us';

    // HTML lang attribute values
    var LANG_ATTR = {
        'en-us': 'en-US',
        'en-gb': 'en-GB',
        'es':    'es',
        'pt-pt': 'pt-PT',
        'pt-br': 'pt-BR'
    };

    // ── Translation strings ──────────────────────────────────────────────────
    var TRANSLATIONS = {

        // ── English (US) ────────────────────────────────────────────────────
        'en-us': {
            page: {
                title: 'Zeitona - Technology for Real Needs',
                description: 'Zeitona creates practical software and digital solutions around real business needs.',
                aboutTitle: 'About | Zeitona',
                aboutDescription: 'Meet Zeitona, a technology company focused on practical software and digital solutions.',
                whitepaperTitle: 'Whitepaper | Zeitona',
                whitepaperDescription: 'The Zeitona technical whitepaper is currently in the final stages of refinement.'
            },
            nav: {
                services:      'Services',
                about:         'About',
                getInTouch:    'Get in Touch',
                backToHomepage:'← Back to Homepage',
                openMenu:       'Open navigation',
                closeMenu:      'Close navigation'
            },
            language: {
                select: 'Select language'
            },
            theme: {
                switchToLight: 'Switch to light mode',
                switchToDark:  'Switch to dark mode'
            },
            hero: {
                badge:         'Technology for Real Needs',
                title:         'Turning Ideas Into',
                titleAccent:   'Practical Technology',
                description:   'Zeitona creates software and digital solutions around real business needs, turning complex challenges into clear, useful technology.',
                exploreBtn:    'Explore Our Vision',
                whitepaperBtn: 'Read Whitepaper'
            },
            services: {
                title:       'Technology Built for',
                titleAccent: 'Real Needs',
                description: 'Practical ways to turn ideas, workflows, and complex requirements into useful digital solutions.',
                bim: {
                    title: 'Digital Products',
                    desc:  'Software shaped around real needs, from early ideas to useful digital experiences.'
                },
                blockchain: {
                    title: 'Systems & Integrations',
                    desc:  'Connected tools, data, and workflows that help technology work as a coherent whole.'
                },
                smartContracts: {
                    title: 'Automation',
                    desc:  'Thoughtful automation that simplifies repeatable work and supports clearer processes.'
                }
            },
            about: {
                whyZeitona:          'Why <span class="text-accent">Zeitona</span>?',
                p1: 'Complex business needs rarely fit neatly into off-the-shelf technology.',
                p2: 'Zeitona approaches those needs with practical thinking, shaping software, systems, and automation around the problem at hand.',
                p3: 'We focus on technology that is clear, useful, and grounded in how people actually work.',
                clearValue:          'Clear',
                transparency:        'Solutions',
                practicalValue:      'Practical',
                automatedCompliance: 'Innovation'
            },
            modal: {
                close:                  'Close contact form',
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
                tagline: 'Technology shaped around real needs.'
            },
            aboutPage: {
                eyebrow:          'Technology shaped around real needs',
                heading:          'About <span class="text-accent">Zeitona</span>',
                intro:            'Zeitona is a technology company that turns ideas and complex needs into practical software and digital solutions.',
                perspectiveEyebrow:'Our perspective',
                perspectiveTitle: 'Technology with a <span class="text-accent">clear purpose</span>',
                p1: 'Technology is most useful when it begins with a clear understanding of the problem.',
                p2: 'Zeitona brings together software, data, systems, and automation to shape solutions around the way people and organisations actually work.',
                p3: 'Our focus is practical innovation: making complex needs clearer and turning them into technology that can create meaningful progress.',
                approachEyebrow:  'How we approach technology',
                approachTitle:    'Start with the problem. <span class="text-accent">Build with purpose.</span>',
                approachIntro:    'Our approach keeps real needs at the centre of every technology decision.',
                principle1Title:  'Understand the context',
                principle1Desc:   'Look closely at the need, the people involved, and the systems already in place.',
                principle2Title:  'Shape the right solution',
                principle2Desc:   'Choose technology in service of the problem, with clarity and integration in mind.',
                principle3Title:  'Keep it useful',
                principle3Desc:   'Focus on practical outcomes and digital experiences that make work simpler and clearer.',
                foundersEyebrow:  'The people behind Zeitona',
                meetOurFounders:  'Meet Our <span class="text-accent">Founders</span>',
                foundersDesc:     'Different areas of technology, brought together by a shared focus on solving real problems.',
                roleExpertise:    'Role & Expertise',
                founder1Focus:    'Data & Technology',
                founder1Bio1:     'Diógenes has a background in Information Systems, with experience in data engineering and analytics across different industries.',
                founder1Bio2:     'His work includes collaboration with multidisciplinary international teams to develop practical, data-informed solutions.',
                founder2Focus:    'Software Architecture',
                founder2Bio1:     'Fabrício is a software architect focused on distributed systems, scalable solutions, systems integration, and technical standards.',
                founder2Bio2:     'His experience includes strategic architecture decisions and international collaboration across Latin America and Europe.',
                viewProfile:      'View LinkedIn profile',
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
                title:          'Zeitona - Technology for Real Needs',
                description:    'Zeitona creates practical software and digital solutions around real business needs.',
                aboutTitle:     'About | Zeitona',
                aboutDescription:'Meet Zeitona, a technology company focused on practical software and digital solutions.',
                whitepaperTitle:'Whitepaper | Zeitona',
                whitepaperDescription:'The Zeitona technical whitepaper is currently in the final stages of refinement.'
            },
            nav: {
                services:      'Services',
                about:         'About',
                getInTouch:    'Get in Touch',
                backToHomepage:'← Back to Homepage',
                openMenu:       'Open navigation',
                closeMenu:      'Close navigation'
            },
            language: {
                select: 'Select language'
            },
            theme: {
                switchToLight: 'Switch to light mode',
                switchToDark:  'Switch to dark mode'
            },
            hero: {
                badge:         'Technology for Real Needs',
                title:         'Turning Ideas Into',
                titleAccent:   'Practical Technology',
                description:   'Zeitona creates software and digital solutions around real business needs, turning complex challenges into clear, useful technology.',
                exploreBtn:    'Explore Our Vision',
                whitepaperBtn: 'Read Whitepaper'
            },
            services: {
                title:       'Technology Built for',
                titleAccent: 'Real Needs',
                description: 'Practical ways to turn ideas, workflows, and complex requirements into useful digital solutions.',
                bim: {
                    title: 'Digital Products',
                    desc:  'Software shaped around real needs, from early ideas to useful digital experiences.'
                },
                blockchain: {
                    title: 'Systems & Integrations',
                    desc:  'Connected tools, data, and workflows that help technology work as a coherent whole.'
                },
                smartContracts: {
                    title: 'Automation',
                    desc:  'Thoughtful automation that simplifies repeatable work and supports clearer processes.'
                }
            },
            about: {
                whyZeitona:          'Why <span class="text-accent">Zeitona</span>?',
                p1: 'Complex business needs rarely fit neatly into off-the-shelf technology.',
                p2: 'Zeitona approaches those needs with practical thinking, shaping software, systems, and automation around the problem at hand.',
                p3: 'We focus on technology that is clear, useful, and grounded in how people actually work.',
                clearValue:          'Clear',
                transparency:        'Solutions',
                practicalValue:      'Practical',
                automatedCompliance: 'Innovation'
            },
            modal: {
                close:                  'Close contact form',
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
                tagline: 'Technology shaped around real needs.'
            },
            aboutPage: {
                eyebrow:          'Technology shaped around real needs',
                heading:          'About <span class="text-accent">Zeitona</span>',
                intro:            'Zeitona is a technology company that turns ideas and complex needs into practical software and digital solutions.',
                perspectiveEyebrow:'Our perspective',
                perspectiveTitle: 'Technology with a <span class="text-accent">clear purpose</span>',
                p1: 'Technology is most useful when it begins with a clear understanding of the problem.',
                p2: 'Zeitona brings together software, data, systems, and automation to shape solutions around the way people and organisations actually work.',
                p3: 'Our focus is practical innovation: making complex needs clearer and turning them into technology that can create meaningful progress.',
                approachEyebrow:  'How we approach technology',
                approachTitle:    'Start with the problem. <span class="text-accent">Build with purpose.</span>',
                approachIntro:    'Our approach keeps real needs at the centre of every technology decision.',
                principle1Title:  'Understand the context',
                principle1Desc:   'Look closely at the need, the people involved, and the systems already in place.',
                principle2Title:  'Shape the right solution',
                principle2Desc:   'Choose technology in service of the problem, with clarity and integration in mind.',
                principle3Title:  'Keep it useful',
                principle3Desc:   'Focus on practical outcomes and digital experiences that make work simpler and clearer.',
                foundersEyebrow:  'The people behind Zeitona',
                meetOurFounders:  'Meet Our <span class="text-accent">Founders</span>',
                foundersDesc:     'Different areas of technology, brought together by a shared focus on solving real problems.',
                roleExpertise:   'Role & Expertise',
                founder1Focus:    'Data & Technology',
                founder1Bio1:     'Diógenes has a background in Information Systems, with experience in data engineering and analytics across different industries.',
                founder1Bio2:     'His work includes collaboration with multidisciplinary international teams to develop practical, data-informed solutions.',
                founder2Focus:    'Software Architecture',
                founder2Bio1:     'Fabrício is a software architect focused on distributed systems, scalable solutions, systems integration, and technical standards.',
                founder2Bio2:     'His experience includes strategic architecture decisions and international collaboration across Latin America and Europe.',
                viewProfile:      'View LinkedIn profile',
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
                title:          'Zeitona - Tecnología para Necesidades Reales',
                description:    'Zeitona crea software y soluciones digitales prácticas en torno a necesidades empresariales reales.',
                aboutTitle:     'Acerca de | Zeitona',
                aboutDescription:'Conoce Zeitona, una empresa tecnológica centrada en software práctico y soluciones digitales.',
                whitepaperTitle:'Whitepaper | Zeitona',
                whitepaperDescription:'El whitepaper técnico de Zeitona se encuentra actualmente en las etapas finales de refinamiento.'
            },
            nav: {
                services:      'Servicios',
                about:         'Acerca de',
                getInTouch:    'Contáctenos',
                backToHomepage:'← Volver a la Página Principal',
                openMenu:       'Abrir navegación',
                closeMenu:      'Cerrar navegación'
            },
            language: {
                select: 'Seleccionar idioma'
            },
            theme: {
                switchToLight: 'Cambiar al modo claro',
                switchToDark:  'Cambiar al modo oscuro'
            },
            hero: {
                badge:         'Tecnología para Necesidades Reales',
                title:         'Convertimos Ideas en',
                titleAccent:   'Tecnología Práctica',
                description:   'Zeitona crea software y soluciones digitales en torno a necesidades empresariales reales, convirtiendo retos complejos en tecnología clara y útil.',
                exploreBtn:    'Explorar Nuestra Visión',
                whitepaperBtn: 'Leer Whitepaper'
            },
            services: {
                title:       'Tecnología Creada para',
                titleAccent: 'Necesidades Reales',
                description: 'Formas prácticas de convertir ideas, flujos de trabajo y requisitos complejos en soluciones digitales útiles.',
                bim: {
                    title: 'Productos Digitales',
                    desc:  'Software adaptado a necesidades reales, desde las primeras ideas hasta experiencias digitales útiles.'
                },
                blockchain: {
                    title: 'Sistemas e Integraciones',
                    desc:  'Herramientas, datos y flujos de trabajo conectados para que la tecnología funcione como un conjunto coherente.'
                },
                smartContracts: {
                    title: 'Automatización',
                    desc:  'Automatización bien pensada que simplifica el trabajo repetitivo y favorece procesos más claros.'
                }
            },
            about: {
                whyZeitona:          '¿Por qué <span class="text-accent">Zeitona</span>?',
                p1: 'Las necesidades empresariales complejas rara vez encajan bien en la tecnología estándar.',
                p2: 'Zeitona aborda esas necesidades con un enfoque práctico, adaptando software, sistemas y automatización al problema concreto.',
                p3: 'Nos centramos en tecnología clara, útil y basada en la forma en que las personas trabajan realmente.',
                clearValue:          'Claras',
                transparency:        'Soluciones',
                practicalValue:      'Práctica',
                automatedCompliance: 'Innovación'
            },
            modal: {
                close:                  'Cerrar formulario de contacto',
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
                tagline: 'Tecnología adaptada a necesidades reales.'
            },
            aboutPage: {
                eyebrow:          'Tecnología adaptada a necesidades reales',
                heading:          'Acerca de <span class="text-accent">Zeitona</span>',
                intro:            'Zeitona es una empresa tecnológica que convierte ideas y necesidades complejas en software práctico y soluciones digitales.',
                perspectiveEyebrow:'Nuestra perspectiva',
                perspectiveTitle: 'Tecnología con un <span class="text-accent">propósito claro</span>',
                p1: 'La tecnología es más útil cuando parte de una comprensión clara del problema.',
                p2: 'Zeitona reúne software, datos, sistemas y automatización para crear soluciones adaptadas a cómo trabajan realmente las personas y las organizaciones.',
                p3: 'Nuestro enfoque es la innovación práctica: aclarar necesidades complejas y convertirlas en tecnología capaz de generar avances significativos.',
                approachEyebrow:  'Cómo abordamos la tecnología',
                approachTitle:    'Empezar por el problema. <span class="text-accent">Crear con propósito.</span>',
                approachIntro:    'Nuestro enfoque mantiene las necesidades reales en el centro de cada decisión tecnológica.',
                principle1Title:  'Entender el contexto',
                principle1Desc:   'Observar de cerca la necesidad, las personas implicadas y los sistemas existentes.',
                principle2Title:  'Diseñar la solución adecuada',
                principle2Desc:   'Elegir la tecnología al servicio del problema, con claridad e integración.',
                principle3Title:  'Mantenerla útil',
                principle3Desc:   'Centrarse en resultados prácticos y experiencias digitales que hagan el trabajo más sencillo y claro.',
                foundersEyebrow:  'Las personas detrás de Zeitona',
                meetOurFounders:  'Conoce a Nuestros <span class="text-accent">Fundadores</span>',
                foundersDesc:     'Diferentes áreas de la tecnología, unidas por el objetivo común de resolver problemas reales.',
                roleExpertise:   'Rol y Experiencia',
                founder1Focus:    'Datos y Tecnología',
                founder1Bio1:     'Diógenes tiene formación en Sistemas de Información y experiencia en ingeniería de datos y analítica en diferentes sectores.',
                founder1Bio2:     'Su trabajo incluye la colaboración con equipos internacionales multidisciplinares para desarrollar soluciones prácticas basadas en datos.',
                founder2Focus:    'Arquitectura de Software',
                founder2Bio1:     'Fabrício es arquitecto de software centrado en sistemas distribuidos, soluciones escalables, integración de sistemas y estándares técnicos.',
                founder2Bio2:     'Su experiencia incluye decisiones estratégicas de arquitectura y colaboración internacional en América Latina y Europa.',
                viewProfile:      'Ver perfil de LinkedIn',
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
                title:          'Zeitona - Tecnologia para Necessidades Reais',
                description:    'A Zeitona cria software e soluções digitais práticas em torno de necessidades empresariais reais.',
                aboutTitle:     'Sobre | Zeitona',
                aboutDescription:'Conheça a Zeitona, uma empresa de tecnologia focada em software prático e soluções digitais.',
                whitepaperTitle:'Whitepaper | Zeitona',
                whitepaperDescription:'O whitepaper técnico da Zeitona encontra-se atualmente nas fases finais de refinamento.'
            },
            nav: {
                services:      'Serviços',
                about:         'Sobre',
                getInTouch:    'Entrar em Contacto',
                backToHomepage:'← Voltar à Página Inicial',
                openMenu:       'Abrir navegação',
                closeMenu:      'Fechar navegação'
            },
            language: {
                select: 'Selecionar idioma'
            },
            theme: {
                switchToLight: 'Mudar para o modo claro',
                switchToDark:  'Mudar para o modo escuro'
            },
            hero: {
                badge:         'Tecnologia para Necessidades Reais',
                title:         'Transformamos Ideias em',
                titleAccent:   'Tecnologia Prática',
                description:   'A Zeitona cria software e soluções digitais em torno de necessidades empresariais reais, transformando desafios complexos em tecnologia clara e útil.',
                exploreBtn:    'Explorar a Nossa Visão',
                whitepaperBtn: 'Ler Whitepaper'
            },
            services: {
                title:       'Tecnologia Criada para',
                titleAccent: 'Necessidades Reais',
                description: 'Formas práticas de transformar ideias, fluxos de trabalho e requisitos complexos em soluções digitais úteis.',
                bim: {
                    title: 'Produtos Digitais',
                    desc:  'Software adaptado a necessidades reais, desde as primeiras ideias até experiências digitais úteis.'
                },
                blockchain: {
                    title: 'Sistemas e Integrações',
                    desc:  'Ferramentas, dados e fluxos de trabalho ligados para que a tecnologia funcione como um todo coerente.'
                },
                smartContracts: {
                    title: 'Automatização',
                    desc:  'Automatização ponderada que simplifica o trabalho repetitivo e apoia processos mais claros.'
                }
            },
            about: {
                whyZeitona:          'Porquê <span class="text-accent">Zeitona</span>?',
                p1: 'As necessidades empresariais complexas raramente se enquadram bem em tecnologia pronta a usar.',
                p2: 'A Zeitona aborda essas necessidades de forma prática, adaptando software, sistemas e automatização ao problema em causa.',
                p3: 'Concentramo-nos em tecnologia clara, útil e baseada na forma como as pessoas realmente trabalham.',
                clearValue:          'Claras',
                transparency:        'Soluções',
                practicalValue:      'Prática',
                automatedCompliance: 'Inovação'
            },
            modal: {
                close:                  'Fechar formulário de contacto',
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
                tagline: 'Tecnologia adaptada a necessidades reais.'
            },
            aboutPage: {
                eyebrow:          'Tecnologia adaptada a necessidades reais',
                heading:          'Sobre a <span class="text-accent">Zeitona</span>',
                intro:            'A Zeitona é uma empresa de tecnologia que transforma ideias e necessidades complexas em software prático e soluções digitais.',
                perspectiveEyebrow:'A nossa perspetiva',
                perspectiveTitle: 'Tecnologia com um <span class="text-accent">propósito claro</span>',
                p1: 'A tecnologia é mais útil quando começa por uma compreensão clara do problema.',
                p2: 'A Zeitona reúne software, dados, sistemas e automatização para criar soluções adaptadas à forma como as pessoas e organizações realmente trabalham.',
                p3: 'O nosso foco é a inovação prática: tornar necessidades complexas mais claras e transformá-las em tecnologia capaz de gerar progresso significativo.',
                approachEyebrow:  'Como abordamos a tecnologia',
                approachTitle:    'Começar pelo problema. <span class="text-accent">Criar com propósito.</span>',
                approachIntro:    'A nossa abordagem mantém as necessidades reais no centro de cada decisão tecnológica.',
                principle1Title:  'Compreender o contexto',
                principle1Desc:   'Observar atentamente a necessidade, as pessoas envolvidas e os sistemas existentes.',
                principle2Title:  'Definir a solução certa',
                principle2Desc:   'Escolher a tecnologia ao serviço do problema, com clareza e integração.',
                principle3Title:  'Manter a utilidade',
                principle3Desc:   'Focar resultados práticos e experiências digitais que tornem o trabalho mais simples e claro.',
                foundersEyebrow:  'As pessoas por detrás da Zeitona',
                meetOurFounders:  'Conheça os Nossos <span class="text-accent">Fundadores</span>',
                foundersDesc:     'Diferentes áreas da tecnologia, unidas pelo objetivo comum de resolver problemas reais.',
                roleExpertise:   'Função e Experiência',
                founder1Focus:    'Dados e Tecnologia',
                founder1Bio1:     'Diógenes tem formação em Sistemas de Informação e experiência em engenharia de dados e análise em diferentes setores.',
                founder1Bio2:     'O seu trabalho inclui colaboração com equipas internacionais multidisciplinares para desenvolver soluções práticas baseadas em dados.',
                founder2Focus:    'Arquitetura de Software',
                founder2Bio1:     'Fabrício é arquiteto de software focado em sistemas distribuídos, soluções escaláveis, integração de sistemas e padrões técnicos.',
                founder2Bio2:     'A sua experiência inclui decisões estratégicas de arquitetura e colaboração internacional na América Latina e Europa.',
                viewProfile:      'Ver perfil no LinkedIn',
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
                title:          'Zeitona - Tecnologia para Necessidades Reais',
                description:    'A Zeitona cria software e soluções digitais práticas para necessidades reais de negócios.',
                aboutTitle:     'Sobre | Zeitona',
                aboutDescription:'Conheça a Zeitona, uma empresa de tecnologia focada em software prático e soluções digitais.',
                whitepaperTitle:'Whitepaper | Zeitona',
                whitepaperDescription:'O whitepaper técnico da Zeitona está atualmente nas etapas finais de refinamento.'
            },
            nav: {
                services:      'Serviços',
                about:         'Sobre',
                getInTouch:    'Entre em Contato',
                backToHomepage:'← Voltar à Página Inicial',
                openMenu:       'Abrir navegação',
                closeMenu:      'Fechar navegação'
            },
            language: {
                select: 'Selecionar idioma'
            },
            theme: {
                switchToLight: 'Mudar para o modo claro',
                switchToDark:  'Mudar para o modo escuro'
            },
            hero: {
                badge:         'Tecnologia para Necessidades Reais',
                title:         'Transformamos Ideias em',
                titleAccent:   'Tecnologia Prática',
                description:   'A Zeitona cria software e soluções digitais para necessidades reais de negócios, transformando desafios complexos em tecnologia clara e útil.',
                exploreBtn:    'Explorar Nossa Visão',
                whitepaperBtn: 'Ler Whitepaper'
            },
            services: {
                title:       'Tecnologia Criada para',
                titleAccent: 'Necessidades Reais',
                description: 'Formas práticas de transformar ideias, fluxos de trabalho e requisitos complexos em soluções digitais úteis.',
                bim: {
                    title: 'Produtos Digitais',
                    desc:  'Software adaptado a necessidades reais, das primeiras ideias a experiências digitais úteis.'
                },
                blockchain: {
                    title: 'Sistemas e Integrações',
                    desc:  'Ferramentas, dados e fluxos de trabalho conectados para que a tecnologia funcione como um todo coerente.'
                },
                smartContracts: {
                    title: 'Automação',
                    desc:  'Automação bem planejada que simplifica o trabalho repetitivo e apoia processos mais claros.'
                }
            },
            about: {
                whyZeitona:          'Por que <span class="text-accent">Zeitona</span>?',
                p1: 'Necessidades complexas de negócios raramente se encaixam bem em tecnologias prontas.',
                p2: 'A Zeitona aborda essas necessidades de forma prática, adaptando software, sistemas e automação ao problema em questão.',
                p3: 'Nosso foco é tecnologia clara, útil e baseada na forma como as pessoas realmente trabalham.',
                clearValue:          'Claras',
                transparency:        'Soluções',
                practicalValue:      'Prática',
                automatedCompliance: 'Inovação'
            },
            modal: {
                close:                  'Fechar formulário de contato',
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
                tagline: 'Tecnologia adaptada a necessidades reais.'
            },
            aboutPage: {
                eyebrow:          'Tecnologia adaptada a necessidades reais',
                heading:          'Sobre a <span class="text-accent">Zeitona</span>',
                intro:            'A Zeitona é uma empresa de tecnologia que transforma ideias e necessidades complexas em software prático e soluções digitais.',
                perspectiveEyebrow:'Nossa perspectiva',
                perspectiveTitle: 'Tecnologia com um <span class="text-accent">propósito claro</span>',
                p1: 'A tecnologia é mais útil quando começa com uma compreensão clara do problema.',
                p2: 'A Zeitona reúne software, dados, sistemas e automação para criar soluções adaptadas à forma como pessoas e organizações realmente trabalham.',
                p3: 'Nosso foco é a inovação prática: tornar necessidades complexas mais claras e transformá-las em tecnologia capaz de gerar avanços significativos.',
                approachEyebrow:  'Como abordamos a tecnologia',
                approachTitle:    'Começar pelo problema. <span class="text-accent">Criar com propósito.</span>',
                approachIntro:    'Nossa abordagem mantém as necessidades reais no centro de cada decisão tecnológica.',
                principle1Title:  'Entender o contexto',
                principle1Desc:   'Observar de perto a necessidade, as pessoas envolvidas e os sistemas existentes.',
                principle2Title:  'Definir a solução certa',
                principle2Desc:   'Escolher a tecnologia a serviço do problema, com clareza e integração.',
                principle3Title:  'Manter a utilidade',
                principle3Desc:   'Focar resultados práticos e experiências digitais que tornem o trabalho mais simples e claro.',
                foundersEyebrow:  'As pessoas por trás da Zeitona',
                meetOurFounders:  'Conheça Nossos <span class="text-accent">Fundadores</span>',
                foundersDesc:     'Diferentes áreas da tecnologia, unidas pelo objetivo comum de resolver problemas reais.',
                roleExpertise:   'Função e Experiência',
                founder1Focus:    'Dados e Tecnologia',
                founder1Bio1:     'Diógenes tem formação em Sistemas de Informação e experiência em engenharia de dados e análise em diferentes setores.',
                founder1Bio2:     'Seu trabalho inclui colaboração com equipes internacionais multidisciplinares para desenvolver soluções práticas baseadas em dados.',
                founder2Focus:    'Arquitetura de Software',
                founder2Bio1:     'Fabrício é arquiteto de software focado em sistemas distribuídos, soluções escaláveis, integração de sistemas e padrões técnicos.',
                founder2Bio2:     'Sua experiência inclui decisões estratégicas de arquitetura e colaboração internacional na América Latina e Europa.',
                viewProfile:      'Ver perfil no LinkedIn',
                founder3Bio:     'Engenheira civil (MSc) com experiência em gestão de contratos, engenharia de fundações e análise estrutural, complementada por uma graduação em Matemática.'
            },
            whitepaper: {
                heading:     'O <strong>Whitepaper</strong> da Zeitona',
                description: 'Nosso whitepaper técnico está atualmente nas etapas finais de refinamento.<br />Fique ligado; em breve compartilharemos mais atualizações.'
            }
        }
    };

    // ── Locale detection ─────────────────────────────────────────────────────
    function detectLocale() {
        var stored = '';
        try { stored = localStorage.getItem('zeitona-locale') || ''; } catch (_) {}
        if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
        if (stored) {
            try { localStorage.removeItem('zeitona-locale'); } catch (_) {}
        }

        var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (lang === 'pt-br' || lang.indexOf('pt-br') === 0) return 'pt-br';
        if (lang.indexOf('pt') === 0) return 'pt-pt';
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

    function updateLanguageSelector() {
        var options = document.querySelectorAll('.lang-option');
        var currentOption = null;
        for (var i = 0; i < options.length; i++) {
            var isActive = options[i].dataset.locale === currentLocale;
            options[i].classList.toggle('active', isActive);
            options[i].setAttribute('aria-selected', isActive ? 'true' : 'false');
            if (isActive) currentOption = options[i];
        }

        if (!currentOption) return;

        var languageName = currentOption.dataset.language;
        var currentFlag = document.getElementById('lang-current-flag');
        var currentLabel = document.getElementById('lang-current-label');
        var langBtn = document.getElementById('lang-btn');
        var langDropdown = document.getElementById('lang-dropdown');
        var selectLabel = t('language.select');

        if (currentFlag) currentFlag.src = currentOption.dataset.flag;
        if (currentLabel) currentLabel.textContent = languageName;
        if (langBtn) {
            langBtn.setAttribute('aria-label', selectLabel + ': ' + languageName);
            langBtn.title = languageName;
        }
        if (langDropdown) langDropdown.setAttribute('aria-label', selectLabel);
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
        // element content attributes (used for localised metadata)
        var contentEls = document.querySelectorAll('[data-i18n-content]');
        for (var l = 0; l < contentEls.length; l++) {
            contentEls[l].setAttribute('content', t(contentEls[l].getAttribute('data-i18n-content')));
        }
        // accessible labels for icon-only and compact controls
        var ariaEls = document.querySelectorAll('[data-i18n-aria-label]');
        for (var m = 0; m < ariaEls.length; m++) {
            ariaEls[m].setAttribute('aria-label', t(ariaEls[m].getAttribute('data-i18n-aria-label')));
        }
        // <title>
        var titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) { document.title = t(titleEl.getAttribute('data-i18n')); }
        // html lang attribute
        document.documentElement.lang = LANG_ATTR[currentLocale] || currentLocale;
        updateLanguageSelector();
    }

    function setLocale(locale) {
        if (SUPPORTED.indexOf(locale) === -1) return;
        currentLocale = locale;
        try { localStorage.setItem('zeitona-locale', locale); } catch (_) {}
        applyTranslations();
        document.dispatchEvent(new CustomEvent('zeitona:locale-changed'));
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

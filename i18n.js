/**
 * Zeitona i18n — client-side internationalisation
 * Supported locales: en-us | en-gb | pt-pt | pt-br
 */
(function () {
    'use strict';

    // ── Supported locales ────────────────────────────────────────────────────
    var SUPPORTED = ['en-us', 'en-gb', 'pt-pt', 'pt-br'];
    var DEFAULT   = 'en-us';

    // HTML lang attribute values
    var LANG_ATTR = {
    "en-us": "en-US",
    "en-gb": "en-GB",
    "pt-pt": "pt-PT",
    "pt-br": "pt-BR"
};

    // ── Translation strings ──────────────────────────────────────────────────
    var TRANSLATIONS = {
    "en-us": {
        "navigation": {
            "home": "Home",
            "company": "Company",
            "collaboration": "Collaboration",
            "innovation": "Innovation",
            "news": "News",
            "contact": "Contact"
        },
        "controls": {
            "skip": "Skip to main content",
            "language": "Language",
            "primaryNav": "Primary navigation",
            "footerNav": "Footer navigation",
            "menu": "Menu",
            "useDarkTheme": "Use dark theme",
            "useLightTheme": "Use light theme",
            "darkTheme": "Dark theme",
            "lightTheme": "Light theme",
            "homeLabel": "Zeitona home",
            "previous": "Previous",
            "next": "Next"
        },
        "footer": {
            "note": "Technology, research, development, and collaboration.",
            "tagline": "Technology shaped around real needs.",
            "colCompany": "Company",
            "about": "About",
            "news": "News",
            "explore": "Explore",
            "colConnect": "Connect",
            "linkedin": "LinkedIn",
            "contact": "Contact",
            "rights": "All rights reserved."
        },
        "home": {
            "metaTitle": "Zeitona — Technology shaped around meaningful work",
            "metaDescription": "Zeitona is a technology company open to complex development, research, innovation, and collaboration across organizational boundaries.",
            "heroEyebrow": "Zeitona · Technology company",
            "heroTitle": "Technology shaped around meaningful work.",
            "heroBody": "We approach technology as a way to understand, develop, test, and connect ideas across organizations—not as a label tied to one market or discipline.",
            "companyLink": "Learn about Zeitona",
            "outlookTitle": "Defined by the capacity to understand and build.",
            "waysTitle": "Independent focus, shared programmes, and the space between.",
            "developmentTitle": "Technology development",
            "researchTitle": "Research and innovation",
            "collaborationTitle": "Collaboration",
            "contextTitle": "A useful conversation can begin before the project shape is fixed.",
            "contextLink": "Explore collaboration",
            "innovationTitle": "Exploration is legitimate work when the answer is not yet known.",
            "innovationLink": "Visit Innovation",
            "peopleTitle": "Meet the people behind Zeitona.",
            "peopleLink": "Meet the founders",
            "contactTitle": "Bring the context, even if the project is still taking shape.",
            "contactLink": "Start a conversation",
            "outlookEyebrow": "A broad technical outlook",
            "outlookBodyLead": "Complex work rarely fits neatly inside a fixed catalogue. Zeitona creates room for careful technical inquiry, practical development, and the exchange of knowledge needed to move an idea forward.",
            "outlookBody": "This outlook allows a conversation to begin with the problem and its context. The appropriate technology, working structure, and level of experimentation can follow from what the work actually requires.",
            "waysEyebrow": "Ways of working",
            "developmentBody": "Work that connects analysis and experimentation with the disciplined process of making technology useful.",
            "researchBody": "Technical exploration can be part of the operating model when the right answer is not yet known.",
            "collaborationBody": "Projects may bring together companies, universities, research organizations, institutions, programmes, and consortia.",
            "contextEyebrow": "Start with context",
            "contextBody": "Organizations do not always arrive with a finished brief. A question may need technical definition, research may need an implementation path, or a multi-party initiative may need a technology company able to contribute across boundaries.",
            "innovationEyebrow": "Research and innovation",
            "innovationBody": "Some technical questions require study before implementation. Others need prototypes, experiments, or dialogue between research and practical constraints. Zeitona gives this work a place without presenting unverified initiatives as completed achievements.",
            "peopleEyebrow": "The company",
            "peopleBody": "Zeitona’s two co-founders are presented with their approved photographs and verified identity information on the Company page.",
            "contactEyebrow": "A restrained invitation",
            "contactBody": "Companies, universities, research organizations, institutions, programmes, and consortium partners can begin with the question they are trying to address."
        },
        "company": {
            "metaTitle": "Company — Zeitona",
            "heroTitle": "A technology company with room to evolve.",
            "outlookTitle": "Begin with the problem, not a predetermined answer.",
            "principlesTitle": "Principles that remain useful as the work changes.",
            "understandTitle": "Understand before defining",
            "evidenceTitle": "Build with evidence",
            "boundariesTitle": "Work across boundaries",
            "foundersTitle": "The founders behind Zeitona.",
            "founderRole": "Co-founder",
            "diogenesAlt": "Portrait of Diógenes Vaz Melo",
            "fabricioAlt": "Portrait of Fabrício Oliveira",
            "workingTitle": "A company can contribute without needing to own every part of the work.",
            "heroBody": "Zeitona is not defined by a single technical field or present-day catalogue. The company’s durable focus is the work of understanding difficult questions, developing technology, and collaborating where different forms of knowledge need to meet.",
            "outlookEyebrow": "Our outlook",
            "outlookLead": "A technical problem is shaped by more than its specification. People, evidence, institutional requirements, practical constraints, and uncertainty all influence what a responsible answer looks like.",
            "outlookBody": "Zeitona’s identity is broad by design. Research, experimentation, engineering, and collaboration can each have a place when they help the work progress. This leaves room for the company to evolve without rewriting its identity around every new project or technical direction.",
            "principlesEyebrow": "How we think",
            "understandBody": "Good technical decisions depend on the context around the question, not only the first description of it.",
            "evidenceBody": "Claims, milestones, and results belong on the site only when they can be supported. The same care should apply to technical work.",
            "boundariesBody": "Companies, universities, researchers, institutions, programmes, and consortia may contribute different knowledge to a shared objective.",
            "peopleEyebrow": "People",
            "foundersBody": "The company is represented here by the two people identified in its approved, site-hosted founder portraits. Personal details beyond the verified names and founder role are intentionally omitted.",
            "workingEyebrow": "Working with others",
            "workingBody": "Some projects are direct and bilateral. Others are shaped by institutional programmes, university relationships, research questions, or multi-party arrangements. Zeitona’s broad technological identity leaves room for each of these structures.",
            "workingLink": "Explore collaboration"
        },
        "collaboration": {
            "metaTitle": "Collaboration — Zeitona",
            "heroTitle": "Different organizations can build useful technology together.",
            "boundariesTitle": "A place for bilateral and multi-party work.",
            "modelsTitle": "Collaboration should fit the question and the people involved.",
            "directTitle": "Direct company projects",
            "universityTitle": "University and company initiatives",
            "researchTitle": "Applied research",
            "institutionalTitle": "Institutional programmes",
            "consortiaTitle": "Consortia and multi-party initiatives",
            "exploratoryTitle": "Exploratory technical work",
            "startTitle": "Let's talk.",
            "contactLink": "Get in touch with",
            "heroBody": "Collaboration may begin as a direct project, a research question, an institutional programme, or a multi-party initiative. The structure should follow the work rather than force every opportunity into the same model.",
            "boundariesEyebrow": "Working across boundaries",
            "boundariesLead": "Zeitona is open to conversations with companies, universities, research organizations, public and private institutions, innovation programmes, consortia, and other technology or engineering organizations.",
            "boundariesBody": "This is not a list of claimed partnerships or completed projects. It describes the kinds of working relationships the company is prepared to consider, whether the work is led by one organization or assembled around a shared programme.",
            "modelsEyebrow": "Possible structures",
            "directBody": "A company may need a technology partner to clarify a technical problem, explore an approach, or contribute to development without forcing the work into a predefined service package.",
            "universityBody": "Academic knowledge and practical development can meet around a shared question, with responsibilities defined by what each organization is equipped to contribute.",
            "researchBody": "Research organizations, laboratories, and technical teams may need a company able to participate in exploration while keeping implementation and real-world constraints in view.",
            "institutionalBody": "Public or private institutions and innovation programme operators may create settings where technology development, research, and organizational objectives need to be coordinated.",
            "consortiaBody": "Consortia can combine complementary capabilities across companies, universities, research organizations, and institutions. Zeitona can be considered where a technology-company contribution is relevant.",
            "exploratoryBody": "A focused initial investigation can help establish the technical question, evidence needs, participants, and next decisions before a broader programme takes shape.",
            "startEyebrow": "A useful beginning",
            "startBody": "A first conversation does not require a finished scope. Share the context, the constraints, and the open question."
        },
        "innovation": {
            "metaTitle": "Innovation and Research — Zeitona",
            "heroTitle": "Make space for questions that do not have settled answers.",
            "disciplineTitle": "Innovation begins with uncertainty, not decoration.",
            "structureTitle": "Different forms of exploration need different evidence.",
            "questionsTitle": "Questions and initiatives",
            "participationTitle": "Institutional participation",
            "publicationsTitle": "Publications and technical work",
            "learningTitle": "Learning through development",
            "recordTitle": "Evidence should be visible before activity is presented as fact.",
            "link": "Explore research collaboration",
            "heroEyebrow": "Innovation and research",
            "heroBody": "Research and experimentation are credible parts of technological work. This page will provide a durable home for verified initiatives, studies, programmes, publications, and technical exploration as that material becomes available.",
            "disciplineEyebrow": "A working discipline",
            "disciplineLead": "A technical question may require study, comparison, experimentation, or a prototype before a responsible development direction becomes clear.",
            "disciplineBody": "Giving that work a defined place allows research and practical development to inform one another. It also makes it possible to record what was examined, what evidence was produced, and which questions remain open.",
            "structureEyebrow": "A durable structure",
            "researchLabel": "Research",
            "questionsBody": "Research initiatives and university relationships belong here when the participating organizations, purpose, and status can be verified.",
            "programmesLabel": "Programmes",
            "participationBody": "Innovation programmes, accelerators, and related institutional activity should be presented with enough context to distinguish participation from partnership or endorsement.",
            "studiesLabel": "Studies",
            "publicationsBody": "Publications, technical studies, and experimental projects can communicate substance when their authorship, scope, and availability are documented.",
            "experimentsLabel": "Experiments",
            "learningBody": "Prototypes and experimental work can show how a question was investigated without overstating a result or treating an early exploration as a finished product.",
            "recordEyebrow": "Current record",
            "recordBody": "No named programme, university relationship, accelerator, publication, experimental project, or research result is supported by the current repository. None has been invented to make this page appear busier.",
            "recordBodyTwo": "As verified material becomes available, this structure can accommodate it without changing Zeitona’s broader identity or implying that one field defines the company."
        },
        "news": {
            "metaTitle": "News and Activity — Zeitona",
            "heroTitle": "Updates should be factual and worth reading.",
            "status": "Current status",
            "emptyTitle": "No verified news items are available yet.",
            "heroEyebrow": "News and activity",
            "heroBody": "This page is reserved for meaningful company developments rather than an artificial publishing schedule. It will use structured static data without a content-management system or social feed.",
            "emptyBody": "We will publish factual company developments here when verified information is available. No placeholder announcements have been created.",
            "unavailableTitle": "News updates are temporarily unavailable.",
            "unavailableBody": "The news data could not be loaded. The rest of the website remains available.",
            "readMore": "Read update"
        },
        "contact": {
            "metaTitle": "Contact — Zeitona",
            "heroTitle": "Begin with the work you want to understand.",
            "messageTitle": "Context matters more than a finished brief.",
            "contextsTitle": "Conversations can begin from several organizational settings.",
            "companies": "Companies",
            "universities": "Universities and researchers",
            "institutions": "Public or private institutions",
            "programmes": "Programmes and consortia",
            "includeTitle": "Four points can make the first conversation more useful.",
            "question": "The question",
            "context": "The context",
            "participants": "The participants",
            "decision": "The next decision",
            "channelTitle": "Verified contact details are not yet available in this repository.",
            "heroBody": "Relevant conversations may involve a company project, a university or research collaboration, an institutional programme, technical exploration, or the formation of a consortium.",
            "messageEyebrow": "A useful first message",
            "messageLead": "It can be enough to explain the question, the organizations involved, what is already known, and where uncertainty remains.",
            "messageBody": "A first exchange can then establish whether the work is a plausible fit, which information is still needed, and whether a direct project, research process, institutional programme, or multi-party structure makes sense.",
            "contextsEyebrow": "Relevant inquiries",
            "companiesBody": "Technical questions, development work, and collaboration with other organizations.",
            "universitiesBody": "Applied research, technical exploration, and routes between knowledge and implementation.",
            "institutionsBody": "Technology contributions within institutional objectives or programmes.",
            "programmesBody": "Proposals and initiatives that require complementary participants across organizational boundaries.",
            "includeEyebrow": "What to include",
            "questionBody": "Describe the problem, opportunity, or area of uncertainty in practical terms.",
            "contextBody": "Explain why the work matters and what has already been investigated or decided.",
            "participantsBody": "Identify the kinds of organizations already involved or expected to contribute.",
            "decisionBody": "State what the conversation, investigation, or project should help determine.",
            "channelEyebrow": "Contact channel",
            "channelBody": "No email address, telephone number, physical address, or social profile has been inferred from the company domain. A direct contact link can be added here when an approved channel is supplied.",
            "privacyBody": "This website does not submit or process contact data and does not depend on a backend service.",
            "emailEyebrow": "Contact email",
            "emailTitle": "Write directly to us.",
            "formEyebrow": "Or send a message",
            "formTitle": "Send a message",
            "formName": "Your name",
            "formEmail": "Your email",
            "formSubject": "Subject",
            "formMessage": "Message",
            "formSubmit": "Send message"
        }
    },
    "en-gb": {
        "navigation": {
            "home": "Home",
            "company": "Company",
            "collaboration": "Collaboration",
            "innovation": "Innovation",
            "news": "News",
            "contact": "Contact"
        },
        "controls": {
            "skip": "Skip to main content",
            "language": "Language",
            "primaryNav": "Primary navigation",
            "footerNav": "Footer navigation",
            "menu": "Menu",
            "useDarkTheme": "Use dark theme",
            "useLightTheme": "Use light theme",
            "darkTheme": "Dark theme",
            "lightTheme": "Light theme",
            "homeLabel": "Zeitona home",
            "previous": "Previous",
            "next": "Next"
        },
        "footer": {
            "note": "Technology, research, development, and collaboration.",
            "tagline": "Technology shaped around real needs.",
            "colCompany": "Company",
            "about": "About",
            "news": "News",
            "explore": "Explore",
            "colConnect": "Connect",
            "linkedin": "LinkedIn",
            "contact": "Contact",
            "rights": "All rights reserved."
        },
        "home": {
            "metaTitle": "Zeitona — Technology shaped around meaningful work",
            "metaDescription": "Zeitona is a technology company open to complex development, research, innovation, and collaboration across organisational boundaries.",
            "heroEyebrow": "Zeitona · Technology company",
            "heroTitle": "Technology shaped around meaningful work.",
            "heroBody": "We approach technology as a way to understand, develop, test, and connect ideas across organisations—not as a label tied to one market or discipline.",
            "companyLink": "Learn about Zeitona",
            "outlookTitle": "Defined by the capacity to understand and build.",
            "waysTitle": "Independent focus, shared programmes, and the space between.",
            "developmentTitle": "Technology development",
            "researchTitle": "Research and innovation",
            "collaborationTitle": "Collaboration",
            "contextTitle": "A useful conversation can begin before the project shape is fixed.",
            "contextLink": "Explore collaboration",
            "innovationTitle": "Exploration is legitimate work when the answer is not yet known.",
            "innovationLink": "Visit Innovation",
            "peopleTitle": "Meet the people behind Zeitona.",
            "peopleLink": "Meet the founders",
            "contactTitle": "Bring the context, even if the project is still taking shape.",
            "contactLink": "Start a conversation",
            "outlookEyebrow": "A broad technical outlook",
            "outlookBodyLead": "Complex work rarely fits neatly inside a fixed catalogue. Zeitona creates room for careful technical inquiry, practical development, and the exchange of knowledge needed to move an idea forward.",
            "outlookBody": "This outlook allows a conversation to begin with the problem and its context. The appropriate technology, working structure, and level of experimentation can follow from what the work actually requires.",
            "waysEyebrow": "Ways of working",
            "developmentBody": "Work that connects analysis and experimentation with the disciplined process of making technology useful.",
            "researchBody": "Technical exploration can be part of the operating model when the right answer is not yet known.",
            "collaborationBody": "Projects may bring together companies, universities, research organisations, institutions, programmes, and consortia.",
            "contextEyebrow": "Start with context",
            "contextBody": "Organisations do not always arrive with a finished brief. A question may need technical definition, research may need an implementation path, or a multi-party initiative may need a technology company able to contribute across boundaries.",
            "innovationEyebrow": "Research and innovation",
            "innovationBody": "Some technical questions require study before implementation. Others need prototypes, experiments, or dialogue between research and practical constraints. Zeitona gives this work a place without presenting unverified initiatives as completed achievements.",
            "peopleEyebrow": "The company",
            "peopleBody": "Zeitona’s two co-founders are presented with their approved photographs and verified identity information on the Company page.",
            "contactEyebrow": "A restrained invitation",
            "contactBody": "Companies, universities, research organisations, institutions, programmes, and consortium partners can begin with the question they are trying to address."
        },
        "company": {
            "metaTitle": "Company — Zeitona",
            "heroTitle": "A technology company with room to evolve.",
            "outlookTitle": "Begin with the problem, not a predetermined answer.",
            "principlesTitle": "Principles that remain useful as the work changes.",
            "understandTitle": "Understand before defining",
            "evidenceTitle": "Build with evidence",
            "boundariesTitle": "Work across boundaries",
            "foundersTitle": "The founders behind Zeitona.",
            "founderRole": "Co-founder",
            "diogenesAlt": "Portrait of Diógenes Vaz Melo",
            "fabricioAlt": "Portrait of Fabrício Oliveira",
            "workingTitle": "A company can contribute without needing to own every part of the work.",
            "heroBody": "Zeitona is not defined by a single technical field or present-day catalogue. The company’s durable focus is the work of understanding difficult questions, developing technology, and collaborating where different forms of knowledge need to meet.",
            "outlookEyebrow": "Our outlook",
            "outlookLead": "A technical problem is shaped by more than its specification. People, evidence, institutional requirements, practical constraints, and uncertainty all influence what a responsible answer looks like.",
            "outlookBody": "Zeitona’s identity is broad by design. Research, experimentation, engineering, and collaboration can each have a place when they help the work progress. This leaves room for the company to evolve without rewriting its identity around every new project or technical direction.",
            "principlesEyebrow": "How we think",
            "understandBody": "Good technical decisions depend on the context around the question, not only the first description of it.",
            "evidenceBody": "Claims, milestones, and results belong on the site only when they can be supported. The same care should apply to technical work.",
            "boundariesBody": "Companies, universities, researchers, institutions, programmes, and consortia may contribute different knowledge to a shared objective.",
            "peopleEyebrow": "People",
            "foundersBody": "The company is represented here by the two people identified in its approved, site-hosted founder portraits. Personal details beyond the verified names and founder role are intentionally omitted.",
            "workingEyebrow": "Working with others",
            "workingBody": "Some projects are direct and bilateral. Others are shaped by institutional programmes, university relationships, research questions, or multi-party arrangements. Zeitona’s broad technological identity leaves room for each of these structures.",
            "workingLink": "Explore collaboration"
        },
        "collaboration": {
            "metaTitle": "Collaboration — Zeitona",
            "heroTitle": "Different organisations can build useful technology together.",
            "boundariesTitle": "A place for bilateral and multi-party work.",
            "modelsTitle": "Collaboration should fit the question and the people involved.",
            "directTitle": "Direct company projects",
            "universityTitle": "University and company initiatives",
            "researchTitle": "Applied research",
            "institutionalTitle": "Institutional programmes",
            "consortiaTitle": "Consortia and multi-party initiatives",
            "exploratoryTitle": "Exploratory technical work",
            "startTitle": "Let's talk.",
            "contactLink": "Get in touch with",
            "heroBody": "Collaboration may begin as a direct project, a research question, an institutional programme, or a multi-party initiative. The structure should follow the work rather than force every opportunity into the same model.",
            "boundariesEyebrow": "Working across boundaries",
            "boundariesLead": "Zeitona is open to conversations with companies, universities, research organisations, public and private institutions, innovation programmes, consortia, and other technology or engineering organisations.",
            "boundariesBody": "This is not a list of claimed partnerships or completed projects. It describes the kinds of working relationships the company is prepared to consider, whether the work is led by one organisation or assembled around a shared programme.",
            "modelsEyebrow": "Possible structures",
            "directBody": "A company may need a technology partner to clarify a technical problem, explore an approach, or contribute to development without forcing the work into a predefined service package.",
            "universityBody": "Academic knowledge and practical development can meet around a shared question, with responsibilities defined by what each organisation is equipped to contribute.",
            "researchBody": "Research organisations, laboratories, and technical teams may need a company able to participate in exploration while keeping implementation and real-world constraints in view.",
            "institutionalBody": "Public or private institutions and innovation programme operators may create settings where technology development, research, and organisational objectives need to be coordinated.",
            "consortiaBody": "Consortia can combine complementary capabilities across companies, universities, research organisations, and institutions. Zeitona can be considered where a technology-company contribution is relevant.",
            "exploratoryBody": "A focused initial investigation can help establish the technical question, evidence needs, participants, and next decisions before a broader programme takes shape.",
            "startEyebrow": "A useful beginning",
            "startBody": "A first conversation does not require a finished scope. Share the context, the constraints, and the open question."
        },
        "innovation": {
            "metaTitle": "Innovation and Research — Zeitona",
            "heroTitle": "Make space for questions that do not have settled answers.",
            "disciplineTitle": "Innovation begins with uncertainty, not decoration.",
            "structureTitle": "Different forms of exploration need different evidence.",
            "questionsTitle": "Questions and initiatives",
            "participationTitle": "Institutional participation",
            "publicationsTitle": "Publications and technical work",
            "learningTitle": "Learning through development",
            "recordTitle": "Evidence should be visible before activity is presented as fact.",
            "link": "Explore research collaboration",
            "heroEyebrow": "Innovation and research",
            "heroBody": "Research and experimentation are credible parts of technological work. This page will provide a durable home for verified initiatives, studies, programmes, publications, and technical exploration as that material becomes available.",
            "disciplineEyebrow": "A working discipline",
            "disciplineLead": "A technical question may require study, comparison, experimentation, or a prototype before a responsible development direction becomes clear.",
            "disciplineBody": "Giving that work a defined place allows research and practical development to inform one another. It also makes it possible to record what was examined, what evidence was produced, and which questions remain open.",
            "structureEyebrow": "A durable structure",
            "researchLabel": "Research",
            "questionsBody": "Research initiatives and university relationships belong here when the participating organisations, purpose, and status can be verified.",
            "programmesLabel": "Programmes",
            "participationBody": "Innovation programmes, accelerators, and related institutional activity should be presented with enough context to distinguish participation from partnership or endorsement.",
            "studiesLabel": "Studies",
            "publicationsBody": "Publications, technical studies, and experimental projects can communicate substance when their authorship, scope, and availability are documented.",
            "experimentsLabel": "Experiments",
            "learningBody": "Prototypes and experimental work can show how a question was investigated without overstating a result or treating an early exploration as a finished product.",
            "recordEyebrow": "Current record",
            "recordBody": "No named programme, university relationship, accelerator, publication, experimental project, or research result is supported by the current repository. None has been invented to make this page appear busier.",
            "recordBodyTwo": "As verified material becomes available, this structure can accommodate it without changing Zeitona’s broader identity or implying that one field defines the company."
        },
        "news": {
            "metaTitle": "News and Activity — Zeitona",
            "heroTitle": "Updates should be factual and worth reading.",
            "heroEyebrow": "News and activity",
            "heroBody": "This page is reserved for meaningful company developments rather than an artificial publishing schedule. It will use structured static data without a content-management system or social feed.",
            "status": "Current status",
            "emptyTitle": "No verified news items are available yet.",
            "emptyBody": "We will publish factual company developments here when verified information is available. No placeholder announcements have been created.",
            "unavailableTitle": "News updates are temporarily unavailable.",
            "unavailableBody": "The news data could not be loaded. The rest of the website remains available.",
            "readMore": "Read update"
        },
        "contact": {
            "metaTitle": "Contact — Zeitona",
            "heroTitle": "Begin with the work you want to understand.",
            "messageTitle": "Context matters more than a finished brief.",
            "contextsTitle": "Conversations can begin from several organisational settings.",
            "companies": "Companies",
            "universities": "Universities and researchers",
            "institutions": "Public or private institutions",
            "programmes": "Programmes and consortia",
            "includeTitle": "Four points can make the first conversation more useful.",
            "question": "The question",
            "context": "The context",
            "participants": "The participants",
            "decision": "The next decision",
            "channelTitle": "Verified contact details are not yet available in this repository.",
            "heroBody": "Relevant conversations may involve a company project, a university or research collaboration, an institutional programme, technical exploration, or the formation of a consortium.",
            "messageEyebrow": "A useful first message",
            "messageLead": "It can be enough to explain the question, the organisations involved, what is already known, and where uncertainty remains.",
            "messageBody": "A first exchange can then establish whether the work is a plausible fit, which information is still needed, and whether a direct project, research process, institutional programme, or multi-party structure makes sense.",
            "contextsEyebrow": "Relevant enquiries",
            "companiesBody": "Technical questions, development work, and collaboration with other organisations.",
            "universitiesBody": "Applied research, technical exploration, and routes between knowledge and implementation.",
            "institutionsBody": "Technology contributions within institutional objectives or programmes.",
            "programmesBody": "Proposals and initiatives that require complementary participants across organisational boundaries.",
            "includeEyebrow": "What to include",
            "questionBody": "Describe the problem, opportunity, or area of uncertainty in practical terms.",
            "contextBody": "Explain why the work matters and what has already been investigated or decided.",
            "participantsBody": "Identify the kinds of organisations already involved or expected to contribute.",
            "decisionBody": "State what the conversation, investigation, or project should help determine.",
            "channelEyebrow": "Contact channel",
            "channelBody": "No email address, telephone number, physical address, or social profile has been inferred from the company domain. A direct contact link can be added here when an approved channel is supplied.",
            "privacyBody": "This website does not submit or process contact data and does not depend on a backend service.",
            "emailEyebrow": "Contact email",
            "emailTitle": "Write directly to us.",
            "formEyebrow": "Or send a message",
            "formTitle": "Send a message",
            "formName": "Your name",
            "formEmail": "Your email",
            "formSubject": "Subject",
            "formMessage": "Message",
            "formSubmit": "Send message"
        }
    },
    "pt-pt": {
        "navigation": {
            "home": "Início",
            "company": "Empresa",
            "collaboration": "Colaboração",
            "innovation": "Inovação",
            "news": "Notícias",
            "contact": "Contacto"
        },
        "controls": {
            "skip": "Saltar para o conteúdo principal",
            "language": "Idioma",
            "primaryNav": "Navegação principal",
            "footerNav": "Navegação do rodapé",
            "menu": "Menu",
            "useDarkTheme": "Usar tema escuro",
            "useLightTheme": "Usar tema claro",
            "darkTheme": "Tema escuro",
            "lightTheme": "Tema claro",
            "homeLabel": "Página inicial da Zeitona",
            "previous": "Anterior",
            "next": "Seguinte"
        },
        "footer": {
            "note": "Tecnologia, investigação, desenvolvimento e colaboração.",
            "tagline": "Tecnologia adaptada a necessidades reais.",
            "colCompany": "Empresa",
            "about": "Sobre",
            "news": "Notícias",
            "explore": "Explorar",
            "colConnect": "Conectar",
            "linkedin": "LinkedIn",
            "contact": "Contacto",
            "rights": "Todos os direitos reservados."
        },
        "home": {
            "metaTitle": "Zeitona — Tecnologia orientada para trabalho relevante",
            "metaDescription": "A Zeitona é uma empresa de tecnologia aberta a desenvolvimento complexo, investigação, inovação e colaboração entre organizações.",
            "heroEyebrow": "Zeitona · Empresa de tecnologia",
            "heroTitle": "Tecnologia orientada para trabalho relevante.",
            "heroBody": "Abordamos a tecnologia como uma forma de compreender, desenvolver, testar e ligar ideias entre organizações — não como um rótulo preso a um único mercado ou disciplina.",
            "companyLink": "Conheça a Zeitona",
            "outlookTitle": "Definida pela capacidade de compreender e construir.",
            "waysTitle": "Foco independente, programas partilhados e o espaço entre ambos.",
            "developmentTitle": "Desenvolvimento tecnológico",
            "researchTitle": "Investigação e inovação",
            "collaborationTitle": "Colaboração",
            "contextTitle": "Uma conversa útil pode começar antes de o projeto ter uma forma definida.",
            "contextLink": "Explore a colaboração",
            "innovationTitle": "Explorar é trabalho legítimo quando a resposta ainda não é conhecida.",
            "innovationLink": "Visite Inovação",
            "peopleTitle": "Conheça as pessoas por detrás da Zeitona.",
            "peopleLink": "Conheça os fundadores",
            "contactTitle": "Traga o contexto, mesmo que o projeto ainda esteja a ganhar forma.",
            "contactLink": "Inicie uma conversa",
            "outlookEyebrow": "Uma perspetiva técnica ampla",
            "outlookBodyLead": "O trabalho complexo raramente cabe num catálogo fixo. A Zeitona cria espaço para investigação técnica cuidada, desenvolvimento prático e troca de conhecimento necessária para fazer avançar uma ideia.",
            "outlookBody": "Esta perspetiva permite que a conversa comece pelo problema e pelo seu contexto. A tecnologia, a estrutura de trabalho e o nível de experimentação adequados podem decorrer do que o trabalho realmente exige.",
            "waysEyebrow": "Formas de trabalhar",
            "developmentBody": "Trabalho que liga análise e experimentação ao processo disciplinado de tornar a tecnologia útil.",
            "researchBody": "A exploração técnica pode integrar o modelo de trabalho quando a resposta adequada ainda não é conhecida.",
            "collaborationBody": "Os projetos podem reunir empresas, universidades, organizações de investigação, instituições, programas e consórcios.",
            "contextEyebrow": "Comece pelo contexto",
            "contextBody": "As organizações nem sempre chegam com um briefing concluído. Uma questão pode precisar de definição técnica, uma investigação pode precisar de um caminho de implementação ou uma iniciativa multiparticipada pode precisar de uma empresa de tecnologia capaz de contribuir entre organizações.",
            "innovationEyebrow": "Investigação e inovação",
            "innovationBody": "Algumas questões técnicas exigem estudo antes da implementação. Outras precisam de protótipos, experiências ou diálogo entre a investigação e as restrições práticas. A Zeitona dá lugar a este trabalho sem apresentar iniciativas não verificadas como realizações concluídas.",
            "peopleEyebrow": "A empresa",
            "peopleBody": "Os dois cofundadores da Zeitona são apresentados na página Empresa com as suas fotografias aprovadas e informações de identidade verificadas.",
            "contactEyebrow": "Um convite com propósito",
            "contactBody": "Empresas, universidades, organizações de investigação, instituições, programas e parceiros de consórcio podem começar pela questão que procuram resolver."
        },
        "company": {
            "metaTitle": "Empresa — Zeitona",
            "heroTitle": "Uma empresa de tecnologia com espaço para evoluir.",
            "outlookTitle": "Comece pelo problema, não por uma resposta predeterminada.",
            "principlesTitle": "Princípios que continuam úteis à medida que o trabalho muda.",
            "understandTitle": "Compreender antes de definir",
            "evidenceTitle": "Construir com evidências",
            "boundariesTitle": "Trabalhar entre organizações",
            "foundersTitle": "Os fundadores da Zeitona.",
            "founderRole": "Cofundador",
            "diogenesAlt": "Retrato de Diógenes Vaz Melo",
            "fabricioAlt": "Retrato de Fabrício Oliveira",
            "workingTitle": "Uma empresa pode contribuir sem ter de dominar todas as partes do trabalho.",
            "heroBody": "A Zeitona não é definida por uma única área técnica nem por um catálogo atual. O foco duradouro da empresa é compreender questões difíceis, desenvolver tecnologia e colaborar quando diferentes formas de conhecimento precisam de se encontrar.",
            "outlookEyebrow": "A nossa perspetiva",
            "outlookLead": "Um problema técnico é moldado por mais do que a sua especificação. Pessoas, evidências, requisitos institucionais, restrições práticas e incerteza influenciam a forma de uma resposta responsável.",
            "outlookBody": "A identidade da Zeitona é ampla por opção. Investigação, experimentação, engenharia e colaboração podem ter lugar quando ajudam o trabalho a avançar. Isto permite que a empresa evolua sem reescrever a sua identidade a cada novo projeto ou direção técnica.",
            "principlesEyebrow": "Como pensamos",
            "understandBody": "Boas decisões técnicas dependem do contexto da questão, não apenas da sua primeira descrição.",
            "evidenceBody": "Afirmações, marcos e resultados só pertencem ao site quando podem ser sustentados. O mesmo cuidado deve orientar o trabalho técnico.",
            "boundariesBody": "Empresas, universidades, investigadores, instituições, programas e consórcios podem oferecer conhecimentos diferentes para um objetivo comum.",
            "peopleEyebrow": "Pessoas",
            "foundersBody": "A empresa é aqui representada pelas duas pessoas identificadas nos retratos de fundadores aprovados e alojados no site. Os detalhes pessoais além dos nomes verificados e da função de fundador foram intencionalmente omitidos.",
            "workingEyebrow": "Trabalho com outras organizações",
            "workingBody": "Alguns projetos são diretos e bilaterais. Outros são moldados por programas institucionais, relações universitárias, questões de investigação ou estruturas multiparticipadas. A identidade tecnológica ampla da Zeitona comporta cada uma destas estruturas.",
            "workingLink": "Explore a colaboração"
        },
        "collaboration": {
            "metaTitle": "Colaboração — Zeitona",
            "heroTitle": "Organizações diferentes podem construir tecnologia útil em conjunto.",
            "boundariesTitle": "Um espaço para trabalho bilateral e com vários participantes.",
            "modelsTitle": "A colaboração deve adequar-se à questão e às pessoas envolvidas.",
            "directTitle": "Projetos diretos com empresas",
            "universityTitle": "Iniciativas entre universidades e empresas",
            "researchTitle": "Investigação aplicada",
            "institutionalTitle": "Programas institucionais",
            "consortiaTitle": "Consórcios e iniciativas multiparticipadas",
            "exploratoryTitle": "Trabalho técnico exploratório",
            "startTitle": "Vamos falar.",
            "contactLink": "Entre em contacto",
            "heroBody": "A colaboração pode começar como um projeto direto, uma questão de investigação, um programa institucional ou uma iniciativa multiparticipada. A estrutura deve acompanhar o trabalho, sem forçar todas as oportunidades ao mesmo modelo.",
            "boundariesEyebrow": "Trabalho entre organizações",
            "boundariesLead": "A Zeitona está aberta a conversas com empresas, universidades, organizações de investigação, instituições públicas e privadas, programas de inovação, consórcios e outras organizações de tecnologia ou engenharia.",
            "boundariesBody": "Esta não é uma lista de parcerias alegadas nem de projetos concluídos. Descreve os tipos de relação de trabalho que a empresa está preparada para considerar, quer o trabalho seja liderado por uma organização quer seja organizado em torno de um programa comum.",
            "modelsEyebrow": "Estruturas possíveis",
            "directBody": "Uma empresa pode precisar de um parceiro tecnológico para esclarecer um problema técnico, explorar uma abordagem ou contribuir para o desenvolvimento sem enquadrar o trabalho num pacote de serviços predefinido.",
            "universityBody": "O conhecimento académico e o desenvolvimento prático podem encontrar-se em torno de uma questão comum, com responsabilidades definidas pelo que cada organização pode contribuir.",
            "researchBody": "Organizações de investigação, laboratórios e equipas técnicas podem precisar de uma empresa capaz de participar na exploração sem perder de vista a implementação e as restrições do mundo real.",
            "institutionalBody": "Instituições públicas ou privadas e operadores de programas de inovação podem criar contextos em que desenvolvimento tecnológico, investigação e objetivos organizacionais precisam de ser coordenados.",
            "consortiaBody": "Os consórcios podem combinar capacidades complementares de empresas, universidades, organizações de investigação e instituições. A Zeitona pode ser considerada quando a contribuição de uma empresa de tecnologia for relevante.",
            "exploratoryBody": "Uma investigação inicial focada pode ajudar a estabelecer a questão técnica, as evidências necessárias, os participantes e as próximas decisões antes de um programa mais amplo ganhar forma.",
            "startEyebrow": "Um começo útil",
            "startBody": "Uma primeira conversa não exige um âmbito final. Partilhe o contexto, as restrições e a questão em aberto."
        },
        "innovation": {
            "metaTitle": "Inovação e investigação — Zeitona",
            "heroTitle": "Abra espaço para questões que ainda não têm respostas estabelecidas.",
            "disciplineTitle": "A inovação começa com a incerteza, não com a decoração.",
            "structureTitle": "Formas diferentes de exploração exigem evidências diferentes.",
            "questionsTitle": "Questões e iniciativas",
            "participationTitle": "Participação institucional",
            "publicationsTitle": "Publicações e trabalho técnico",
            "learningTitle": "Aprender através do desenvolvimento",
            "recordTitle": "As evidências devem estar visíveis antes de uma atividade ser apresentada como facto.",
            "link": "Explore a colaboração em investigação",
            "heroEyebrow": "Inovação e investigação",
            "heroBody": "A investigação e a experimentação são partes legítimas do trabalho tecnológico. Esta página será um espaço duradouro para iniciativas, estudos, programas, publicações e explorações técnicas verificadas à medida que esse material estiver disponível.",
            "disciplineEyebrow": "Uma disciplina de trabalho",
            "disciplineLead": "Uma questão técnica pode exigir estudo, comparação, experimentação ou um protótipo antes de uma direção responsável de desenvolvimento se tornar clara.",
            "disciplineBody": "Dar um lugar definido a este trabalho permite que a investigação e o desenvolvimento prático se informem mutuamente. Também permite registar o que foi examinado, que evidências foram produzidas e quais questões permanecem abertas.",
            "structureEyebrow": "Uma estrutura duradoura",
            "researchLabel": "Investigação",
            "questionsBody": "As iniciativas de investigação e relações universitárias pertencem aqui quando as organizações participantes, a finalidade e o estado puderem ser verificados.",
            "programmesLabel": "Programas",
            "participationBody": "Programas de inovação, aceleradores e atividades institucionais relacionadas devem ser apresentados com contexto suficiente para distinguir participação de parceria ou apoio.",
            "studiesLabel": "Estudos",
            "publicationsBody": "Publicações, estudos técnicos e projetos experimentais podem comunicar substância quando autoria, âmbito e disponibilidade estiverem documentados.",
            "experimentsLabel": "Experiências",
            "learningBody": "Protótipos e trabalhos experimentais podem mostrar como uma questão foi investigada sem exagerar o resultado nem tratar uma exploração inicial como produto concluído.",
            "recordEyebrow": "Registo atual",
            "recordBody": "Nenhum programa identificado, relação universitária, acelerador, publicação, projeto experimental ou resultado de investigação é sustentado pelo repositório atual. Nada foi inventado para fazer esta página parecer mais preenchida.",
            "recordBodyTwo": "Quando existir material verificado, esta estrutura poderá recebê-lo sem alterar a identidade mais ampla da Zeitona nem sugerir que uma área define a empresa."
        },
        "news": {
            "metaTitle": "Notícias e atividade — Zeitona",
            "heroTitle": "As atualizações devem ser factuais e valer a leitura.",
            "heroEyebrow": "Notícias e atividade",
            "heroBody": "Esta página é reservada a desenvolvimentos relevantes da empresa, não a um calendário artificial de publicações. Utiliza dados estáticos estruturados, sem sistema de gestão de conteúdos ou feed social.",
            "status": "Situação atual",
            "emptyTitle": "Ainda não existem notícias verificadas disponíveis.",
            "emptyBody": "Publicaremos aqui desenvolvimentos factuais da empresa quando existirem informações verificadas. Não foram criados anúncios fictícios para preencher a página.",
            "unavailableTitle": "As notícias estão temporariamente indisponíveis.",
            "unavailableBody": "Não foi possível carregar os dados de notícias. O restante site continua disponível.",
            "readMore": "Ler atualização"
        },
        "contact": {
            "metaTitle": "Contacto — Zeitona",
            "heroTitle": "Comece pelo trabalho que pretende compreender.",
            "messageTitle": "O contexto importa mais do que um briefing concluído.",
            "contextsTitle": "As conversas podem começar em diferentes contextos organizacionais.",
            "companies": "Empresas",
            "universities": "Universidades e investigadores",
            "institutions": "Instituições públicas ou privadas",
            "programmes": "Programas e consórcios",
            "includeTitle": "Quatro pontos podem tornar a primeira conversa mais útil.",
            "question": "A questão",
            "context": "O contexto",
            "participants": "Os participantes",
            "decision": "A próxima decisão",
            "channelTitle": "Os dados de contacto verificados ainda não estão disponíveis neste repositório.",
            "heroBody": "Conversas relevantes podem envolver um projeto empresarial, colaboração com uma universidade ou investigação, programa institucional, exploração técnica ou formação de um consórcio.",
            "messageEyebrow": "Uma primeira mensagem útil",
            "messageLead": "Pode bastar explicar a questão, as organizações envolvidas, o que já se sabe e onde permanece a incerteza.",
            "messageBody": "Uma primeira troca pode então estabelecer se o trabalho é compatível, que informações ainda são necessárias e se faz sentido um projeto direto, processo de investigação, programa institucional ou estrutura multiparticipada.",
            "contextsEyebrow": "Contactos relevantes",
            "companiesBody": "Questões técnicas, trabalho de desenvolvimento e colaboração com outras organizações.",
            "universitiesBody": "Investigação aplicada, exploração técnica e caminhos entre conhecimento e implementação.",
            "institutionsBody": "Contribuições tecnológicas no âmbito de objetivos ou programas institucionais.",
            "programmesBody": "Propostas e iniciativas que exigem participantes complementares entre organizações.",
            "includeEyebrow": "O que incluir",
            "questionBody": "Descreva o problema, a oportunidade ou a área de incerteza em termos práticos.",
            "contextBody": "Explique por que razão o trabalho importa e o que já foi investigado ou decidido.",
            "participantsBody": "Identifique os tipos de organização já envolvidos ou que deverão contribuir.",
            "decisionBody": "Indique o que a conversa, investigação ou projeto deverá ajudar a determinar.",
            "channelEyebrow": "Canal de contacto",
            "channelBody": "Nenhum endereço de correio eletrónico, telefone, morada física ou perfil social foi inferido a partir do domínio da empresa. Poderá ser acrescentada uma ligação direta de contacto quando for fornecido um canal aprovado.",
            "privacyBody": "Este site não envia nem processa dados de contacto e não depende de um serviço de backend.",
            "emailEyebrow": "Correio eletrónico de contacto",
            "emailTitle": "Escreva diretamente para nós.",
            "formEyebrow": "Ou envie uma mensagem",
            "formTitle": "Envie uma mensagem",
            "formName": "O seu nome",
            "formEmail": "O seu email",
            "formSubject": "Assunto",
            "formMessage": "Mensagem",
            "formSubmit": "Enviar mensagem"
        }
    },
    "pt-br": {
        "navigation": {
            "home": "Início",
            "company": "Empresa",
            "collaboration": "Colaboração",
            "innovation": "Inovação",
            "news": "Notícias",
            "contact": "Contato"
        },
        "controls": {
            "skip": "Ir para o conteúdo principal",
            "language": "Idioma",
            "primaryNav": "Navegação principal",
            "footerNav": "Navegação do rodapé",
            "menu": "Menu",
            "useDarkTheme": "Usar tema escuro",
            "useLightTheme": "Usar tema claro",
            "darkTheme": "Tema escuro",
            "lightTheme": "Tema claro",
            "homeLabel": "Página inicial da Zeitona"
        },
        "footer": {
            "note": "Tecnologia, pesquisa, desenvolvimento e colaboração.",
            "tagline": "Tecnologia adaptada a necessidades reais.",
            "colCompany": "Empresa",
            "about": "Sobre",
            "news": "Notícias",
            "explore": "Explorar",
            "colConnect": "Conectar",
            "linkedin": "LinkedIn",
            "contact": "Contacto",
            "rights": "Todos os direitos reservados."
        },
        "home": {
            "metaTitle": "Zeitona — Tecnologia orientada por trabalhos relevantes",
            "metaDescription": "A Zeitona é uma empresa de tecnologia aberta a desenvolvimento complexo, pesquisa, inovação e colaboração entre organizações.",
            "heroEyebrow": "Zeitona · Empresa de tecnologia",
            "heroTitle": "Tecnologia orientada por trabalhos relevantes.",
            "heroBody": "Abordamos a tecnologia como uma forma de compreender, desenvolver, testar e conectar ideias entre organizações — não como um rótulo preso a um único mercado ou disciplina.",
            "companyLink": "Conheça a Zeitona",
            "outlookTitle": "Definida pela capacidade de compreender e construir.",
            "waysTitle": "Foco independente, programas compartilhados e o espaço entre eles.",
            "developmentTitle": "Desenvolvimento tecnológico",
            "researchTitle": "Pesquisa e inovação",
            "collaborationTitle": "Colaboração",
            "contextTitle": "Uma conversa útil pode começar antes de o projeto ter uma forma definida.",
            "contextLink": "Explore a colaboração",
            "innovationTitle": "Explorar é um trabalho legítimo quando a resposta ainda não é conhecida.",
            "innovationLink": "Acesse Inovação",
            "peopleTitle": "Conheça as pessoas por trás da Zeitona.",
            "peopleLink": "Conheça os fundadores",
            "contactTitle": "Traga o contexto, mesmo que o projeto ainda esteja tomando forma.",
            "contactLink": "Inicie uma conversa",
            "outlookEyebrow": "Uma visão técnica ampla",
            "outlookBodyLead": "Trabalhos complexos raramente cabem em um catálogo fixo. A Zeitona abre espaço para investigação técnica cuidadosa, desenvolvimento prático e troca de conhecimento para fazer uma ideia avançar.",
            "outlookBody": "Essa visão permite que a conversa comece pelo problema e por seu contexto. A tecnologia, a estrutura de trabalho e o nível de experimentação adequados podem decorrer do que o trabalho realmente exige.",
            "waysEyebrow": "Formas de trabalhar",
            "developmentBody": "Trabalho que conecta análise e experimentação ao processo disciplinado de tornar a tecnologia útil.",
            "researchBody": "A exploração técnica pode integrar o modelo de atuação quando a resposta adequada ainda não é conhecida.",
            "collaborationBody": "Os projetos podem reunir empresas, universidades, organizações de pesquisa, instituições, programas e consórcios.",
            "contextEyebrow": "Comece pelo contexto",
            "contextBody": "As organizações nem sempre chegam com um briefing finalizado. Uma questão pode precisar de definição técnica, uma pesquisa pode precisar de um caminho de implementação ou uma iniciativa multiparticipante pode precisar de uma empresa de tecnologia capaz de contribuir entre organizações.",
            "innovationEyebrow": "Pesquisa e inovação",
            "innovationBody": "Algumas questões técnicas exigem estudo antes da implementação. Outras precisam de protótipos, experimentos ou diálogo entre a pesquisa e as restrições práticas. A Zeitona dá lugar a esse trabalho sem apresentar iniciativas não verificadas como realizações concluídas.",
            "peopleEyebrow": "A empresa",
            "peopleBody": "Os dois cofundadores da Zeitona são apresentados na página Empresa com suas fotografias aprovadas e informações de identidade verificadas.",
            "contactEyebrow": "Um convite com propósito",
            "contactBody": "Empresas, universidades, organizações de pesquisa, instituições, programas e parceiros de consórcio podem começar pela questão que buscam resolver."
        },
        "company": {
            "metaTitle": "Empresa — Zeitona",
            "heroTitle": "Uma empresa de tecnologia com espaço para evoluir.",
            "outlookTitle": "Comece pelo problema, não por uma resposta predeterminada.",
            "principlesTitle": "Princípios que continuam úteis à medida que o trabalho muda.",
            "understandTitle": "Compreender antes de definir",
            "evidenceTitle": "Construir com evidências",
            "boundariesTitle": "Trabalhar entre organizações",
            "foundersTitle": "Os fundadores da Zeitona.",
            "founderRole": "Cofundador",
            "diogenesAlt": "Retrato de Diógenes Vaz Melo",
            "fabricioAlt": "Retrato de Fabrício Oliveira",
            "workingTitle": "Uma empresa pode contribuir sem precisar dominar todas as partes do trabalho.",
            "heroBody": "A Zeitona não é definida por uma única área técnica nem por um catálogo atual. O foco duradouro da empresa é compreender questões difíceis, desenvolver tecnologia e colaborar quando diferentes formas de conhecimento precisam se encontrar.",
            "outlookEyebrow": "Nossa visão",
            "outlookLead": "Um problema técnico é moldado por mais do que sua especificação. Pessoas, evidências, requisitos institucionais, restrições práticas e incerteza influenciam a forma de uma resposta responsável.",
            "outlookBody": "A identidade da Zeitona é ampla por escolha. Pesquisa, experimentação, engenharia e colaboração podem ter lugar quando ajudam o trabalho a avançar. Isso permite que a empresa evolua sem reescrever sua identidade a cada novo projeto ou direção técnica.",
            "principlesEyebrow": "Como pensamos",
            "understandBody": "Boas decisões técnicas dependem do contexto da questão, não apenas de sua primeira descrição.",
            "evidenceBody": "Afirmações, marcos e resultados só pertencem ao site quando podem ser comprovados. O mesmo cuidado deve orientar o trabalho técnico.",
            "boundariesBody": "Empresas, universidades, pesquisadores, instituições, programas e consórcios podem oferecer conhecimentos diferentes para um objetivo comum.",
            "peopleEyebrow": "Pessoas",
            "foundersBody": "A empresa é representada aqui pelas duas pessoas identificadas em seus retratos de fundadores aprovados e hospedados no site. Detalhes pessoais além dos nomes verificados e da função de fundador foram omitidos intencionalmente.",
            "workingEyebrow": "Trabalho com outras organizações",
            "workingBody": "Alguns projetos são diretos e bilaterais. Outros são moldados por programas institucionais, relações universitárias, questões de pesquisa ou arranjos multiparticipantes. A identidade tecnológica ampla da Zeitona comporta cada uma dessas estruturas.",
            "workingLink": "Explore a colaboração"
        },
        "collaboration": {
            "metaTitle": "Colaboração — Zeitona",
            "heroTitle": "Organizações diferentes podem construir tecnologia útil juntas.",
            "boundariesTitle": "Um espaço para trabalhos bilaterais e com vários participantes.",
            "modelsTitle": "A colaboração deve se adequar à questão e às pessoas envolvidas.",
            "directTitle": "Projetos diretos com empresas",
            "universityTitle": "Iniciativas entre universidades e empresas",
            "researchTitle": "Pesquisa aplicada",
            "institutionalTitle": "Programas institucionais",
            "consortiaTitle": "Consórcios e iniciativas multiparticipantes",
            "exploratoryTitle": "Trabalho técnico exploratório",
            "startTitle": "Vamos conversar.",
            "contactLink": "Entre em contato",
            "heroBody": "A colaboração pode começar como um projeto direto, uma questão de pesquisa, um programa institucional ou uma iniciativa multiparticipante. A estrutura deve acompanhar o trabalho, sem forçar todas as oportunidades ao mesmo modelo.",
            "boundariesEyebrow": "Trabalho entre organizações",
            "boundariesLead": "A Zeitona está aberta a conversas com empresas, universidades, organizações de pesquisa, instituições públicas e privadas, programas de inovação, consórcios e outras organizações de tecnologia ou engenharia.",
            "boundariesBody": "Esta não é uma lista de parcerias alegadas nem de projetos concluídos. Ela descreve os tipos de relação de trabalho que a empresa está preparada para considerar, seja o trabalho liderado por uma organização ou organizado em torno de um programa comum.",
            "modelsEyebrow": "Estruturas possíveis",
            "directBody": "Uma empresa pode precisar de um parceiro de tecnologia para esclarecer um problema técnico, explorar uma abordagem ou contribuir com o desenvolvimento sem enquadrar o trabalho em um pacote de serviços predefinido.",
            "universityBody": "O conhecimento acadêmico e o desenvolvimento prático podem se encontrar em torno de uma questão comum, com responsabilidades definidas pelo que cada organização pode contribuir.",
            "researchBody": "Organizações de pesquisa, laboratórios e equipes técnicas podem precisar de uma empresa capaz de participar da exploração sem perder de vista a implementação e as restrições do mundo real.",
            "institutionalBody": "Instituições públicas ou privadas e operadores de programas de inovação podem criar ambientes em que desenvolvimento tecnológico, pesquisa e objetivos organizacionais precisem ser coordenados.",
            "consortiaBody": "Consórcios podem combinar capacidades complementares de empresas, universidades, organizações de pesquisa e instituições. A Zeitona pode ser considerada quando a contribuição de uma empresa de tecnologia for relevante.",
            "exploratoryBody": "Uma investigação inicial focada pode ajudar a estabelecer a questão técnica, as evidências necessárias, os participantes e as próximas decisões antes que um programa mais amplo tome forma.",
            "startEyebrow": "Um começo útil",
            "startBody": "Uma primeira conversa não exige um escopo final. Compartilhe o contexto, as restrições e a questão em aberto."
        },
        "innovation": {
            "metaTitle": "Inovação e pesquisa — Zeitona",
            "heroTitle": "Abra espaço para questões que ainda não têm respostas definidas.",
            "disciplineTitle": "A inovação começa com a incerteza, não com a decoração.",
            "structureTitle": "Formas diferentes de exploração exigem evidências diferentes.",
            "questionsTitle": "Questões e iniciativas",
            "participationTitle": "Participação institucional",
            "publicationsTitle": "Publicações e trabalho técnico",
            "learningTitle": "Aprender por meio do desenvolvimento",
            "recordTitle": "As evidências devem estar visíveis antes que uma atividade seja apresentada como fato.",
            "link": "Explore a colaboração em pesquisa",
            "heroEyebrow": "Inovação e pesquisa",
            "heroBody": "Pesquisa e experimentação são partes legítimas do trabalho tecnológico. Esta página será um espaço duradouro para iniciativas, estudos, programas, publicações e explorações técnicas verificadas conforme esse material estiver disponível.",
            "disciplineEyebrow": "Uma disciplina de trabalho",
            "disciplineLead": "Uma questão técnica pode exigir estudo, comparação, experimentação ou um protótipo antes que uma direção responsável de desenvolvimento fique clara.",
            "disciplineBody": "Dar um lugar definido a esse trabalho permite que pesquisa e desenvolvimento prático se informem mutuamente. Também permite registrar o que foi examinado, quais evidências foram produzidas e quais questões permanecem abertas.",
            "structureEyebrow": "Uma estrutura duradoura",
            "researchLabel": "Pesquisa",
            "questionsBody": "Iniciativas de pesquisa e relações universitárias pertencem aqui quando as organizações participantes, a finalidade e a situação puderem ser verificadas.",
            "programmesLabel": "Programas",
            "participationBody": "Programas de inovação, aceleradoras e atividades institucionais relacionadas devem ser apresentados com contexto suficiente para distinguir participação de parceria ou endosso.",
            "studiesLabel": "Estudos",
            "publicationsBody": "Publicações, estudos técnicos e projetos experimentais podem comunicar conteúdo quando autoria, escopo e disponibilidade estiverem documentados.",
            "experimentsLabel": "Experimentos",
            "learningBody": "Protótipos e trabalhos experimentais podem mostrar como uma questão foi investigada sem exagerar o resultado nem tratar uma exploração inicial como produto concluído.",
            "recordEyebrow": "Registro atual",
            "recordBody": "Nenhum programa nomeado, relação universitária, aceleradora, publicação, projeto experimental ou resultado de pesquisa é comprovado pelo repositório atual. Nada foi inventado para fazer esta página parecer mais movimentada.",
            "recordBodyTwo": "Quando houver material verificado, esta estrutura poderá recebê-lo sem alterar a identidade mais ampla da Zeitona nem sugerir que uma área define a empresa."
        },
        "news": {
            "metaTitle": "Notícias e atividades — Zeitona",
            "heroTitle": "As atualizações devem ser factuais e valer a leitura.",
            "heroEyebrow": "Notícias e atividades",
            "heroBody": "Esta página é reservada a desenvolvimentos relevantes da empresa, não a um calendário artificial de publicações. Ela usa dados estáticos estruturados, sem sistema de gestão de conteúdo ou feed social.",
            "status": "Situação atual",
            "emptyTitle": "Ainda não há notícias verificadas disponíveis.",
            "emptyBody": "Publicaremos aqui desenvolvimentos factuais da empresa quando houver informações verificadas. Nenhum anúncio fictício foi criado para preencher a página.",
            "unavailableTitle": "As notícias estão temporariamente indisponíveis.",
            "unavailableBody": "Não foi possível carregar os dados de notícias. O restante do site continua disponível.",
            "readMore": "Ler atualização"
        },
        "contact": {
            "metaTitle": "Contato — Zeitona",
            "heroTitle": "Comece pelo trabalho que você deseja compreender.",
            "messageTitle": "O contexto importa mais do que um briefing finalizado.",
            "contextsTitle": "As conversas podem começar em diferentes contextos organizacionais.",
            "companies": "Empresas",
            "universities": "Universidades e pesquisadores",
            "institutions": "Instituições públicas ou privadas",
            "programmes": "Programas e consórcios",
            "includeTitle": "Quatro pontos podem tornar a primeira conversa mais útil.",
            "question": "A questão",
            "context": "O contexto",
            "participants": "Os participantes",
            "decision": "A próxima decisão",
            "channelTitle": "Os dados de contato verificados ainda não estão disponíveis neste repositório.",
            "heroBody": "Conversas relevantes podem envolver um projeto empresarial, colaboração com universidade ou pesquisa, programa institucional, exploração técnica ou formação de consórcio.",
            "messageEyebrow": "Uma primeira mensagem útil",
            "messageLead": "Pode ser suficiente explicar a questão, as organizações envolvidas, o que já se sabe e onde permanece a incerteza.",
            "messageBody": "Uma primeira troca pode então estabelecer se o trabalho é compatível, quais informações ainda são necessárias e se faz sentido um projeto direto, processo de pesquisa, programa institucional ou estrutura multiparticipante.",
            "contextsEyebrow": "Consultas relevantes",
            "companiesBody": "Questões técnicas, trabalho de desenvolvimento e colaboração com outras organizações.",
            "universitiesBody": "Pesquisa aplicada, exploração técnica e caminhos entre conhecimento e implementação.",
            "institutionsBody": "Contribuições tecnológicas dentro de objetivos ou programas institucionais.",
            "programmesBody": "Propostas e iniciativas que exigem participantes complementares entre organizações.",
            "includeEyebrow": "O que incluir",
            "questionBody": "Descreva o problema, a oportunidade ou a área de incerteza em termos práticos.",
            "contextBody": "Explique por que o trabalho importa e o que já foi investigado ou decidido.",
            "participantsBody": "Identifique os tipos de organização já envolvidos ou que devem contribuir.",
            "decisionBody": "Indique o que a conversa, investigação ou projeto deve ajudar a determinar.",
            "channelEyebrow": "Canal de contato",
            "channelBody": "Nenhum e-mail, telefone, endereço físico ou perfil social foi inferido a partir do domínio da empresa. Um link direto de contato poderá ser adicionado quando um canal aprovado for fornecido.",
            "privacyBody": "Este site não envia nem processa dados de contato e não depende de um serviço de backend.",
            "emailEyebrow": "E-mail de contato",
            "emailTitle": "Escreva diretamente para nós.",
            "formEyebrow": "Ou envie uma mensagem",
            "formTitle": "Envie uma mensagem",
            "formName": "Seu nome",
            "formEmail": "Seu e-mail",
            "formSubject": "Assunto",
            "formMessage": "Mensagem",
            "formSubmit": "Enviar mensagem"
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
        var selectLabel = t('controls.language');

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

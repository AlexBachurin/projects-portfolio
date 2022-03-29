const projectsData = [
    {
        id: 1,
        name: 'commerce store',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'auth0', 'styled'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1647971256/PortfolioImages/commerce-store_dfxdpj.jpg',
        projectUrl: 'https://bacha-react-commerce-store.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/commerce-store'
    },
    {
        id: 2,
        name: 'github users',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'auth0'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1647971259/PortfolioImages/github-users_hhmqsg.jpg',
        projectUrl: 'https://bacha-coding-github-users.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/search-github-users'
    },
    {
        id: 3,
        name: 'Calculator',
        category: 'javascript',
        tags: ['js', 'html', 'sass'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648146271/PortfolioImages/calc_tjhfc8.jpg',
        projectUrl: 'https://bacha-vanillajs-calc.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Simple-Calculator'
    },
    {
        id: 4,
        name: 'Currency exchange',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'api'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648521932/PortfolioImages/currency-exchanges_uujyhs.jpg',
        projectUrl: 'https://bacha-currency-exchanger.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Currency-exchange-react'
    },
    {
        id: 5,
        name: 'react quiz',
        category: 'react',
        tags: ['react ', 'js', 'html', 'sass', 'api'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648149567/PortfolioImages/react-quiz.jpg',
        projectUrl: 'https://bacha-react-quiz.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-quiz-app'
    },

    {
        id: 6,
        name: 'ИРВАС',
        category: 'javascript',
        tags: ['js', 'html', 'scss'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648147574/PortfolioImages/window-project_qj7zme.jpg',
        projectUrl: 'https://bacha-coding-windowproject.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Project_window'
    },
    {
        id: 7,
        name: 'quiz-js',
        category: 'javascript',
        tags: ['js', 'html', 'sass'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648148021/PortfolioImages/quiz-js_ujxd7y.jpg',
        projectUrl: 'https://bacha-quiz-app.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/quiz-app'
    },
    {
        id: 8,
        name: 'news app',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'api'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648150633/PortfolioImages/hacker-news-react_j12z9z.jpg',
        projectUrl: 'https://bacha-hacker-news-react.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/hacker-news-app'
    },
    {
        id: 9,
        name: 'Color generator',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648153536/PortfolioImages/color-generator_jlpdfz.jpg',
        projectUrl: 'https://bacha-color-generator.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-color-generator'
    },

    {
        id: 10,
        name: 'reminder timer',
        category: 'javascript',
        tags: ['js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648150016/PortfolioImages/reminder-js_gqtvsw.jpg',
        projectUrl: 'https://bacha-js-reminder.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/reminder-timer-project'
    },
    {
        id: 11,
        name: 'redux-cart',
        category: 'redux',
        tags: ['react', 'js', 'html', 'css', 'redux', 'redux toolkit'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648523378/PortfolioImages/redux-cart_kdjnxx.jpg',
        projectUrl: 'https://bacha-coding-redux-cart.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/redux-cart-app'
    },
    {
        id: 12,
        name: 'spotify clone',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1647971261/PortfolioImages/spotify-clone_puaeon.jpg',
        projectUrl: 'https://bacha-spotify.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/spotify-clone-react'
    },

    {
        id: 13,
        name: 'birthday reminder',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648146732/PortfolioImages/birthday-app_bspg6t.jpg',
        projectUrl: 'https://bacha-birthday-reminder.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-birthday-reminder'
    },
    {
        id: 14,
        name: 'Movie app',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'api'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648151274/PortfolioImages/moviedb-react_tiiezr.jpg',
        projectUrl: 'https://bacha-movie-react.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/movie-db-app'
    },
    {
        id: 15,
        name: 'Blog dark mode',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648151540/PortfolioImages/blog-dark-mode_muxghr.jpg',
        projectUrl: 'https://bacha-dark-mode-blog.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/blog-dark-mode-toggle'
    },
    {
        id: 16,
        name: 'Photos infinite scroll',
        category: 'react',
        tags: ['react', 'api', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648152096/PortfolioImages/photos-infinite-scroll_agxriq.jpg',
        projectUrl: 'https://bacha-photos-infinite-scroll.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-photos-infinite-scroll-fetch'
    },
    {
        id: 17,
        name: 'Stripe submenus',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'submenu'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648152314/PortfolioImages/stripe-submenus_najuy0.jpg',
        projectUrl: 'https://bacha-stripe-submenus.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/submenus-hover-app'
    },
    {
        id: 18,
        name: 'Markdown Preview',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'markdown'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648152713/PortfolioImages/markdown-app_s7e5dq.jpg',
        projectUrl: 'https://bacha-markdown-react.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/markdown-preview-app'
    },
    {
        id: 19,
        name: 'Cocktail app',
        category: 'react',
        tags: ['react', 'api', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648152686/PortfolioImages/cocktails-app_jnsya7.jpg',
        projectUrl: 'https://bacha-cocktails.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-cocktail-api'
    },


    {
        id: 20,
        name: 'Global Opt',
        category: 'html-css',
        tags: ['js', 'html', 'sass', 'gulp'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648522227/PortfolioImages/GlobalOpt_ceyhnt.jpg',
        projectUrl: 'https://bacha-global-opt.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/GlobalOpt'
    },
    {
        id: 21,
        name: 'Prengi',
        category: 'html-css',
        tags: ['js', 'html', 'sass', 'gulp'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648522309/PortfolioImages/Prengi_ds5eji.jpg',
        projectUrl: 'https://bacha-coding-prengi-html.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Project_Prengi'
    },
    {
        id: 22,
        name: 'KREA',
        category: 'html-css',
        tags: ['js', 'html', 'sass', 'gulp'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648522409/PortfolioImages/KREA_kpzlfq.jpg',
        projectUrl: 'https://bacha-coding-krea-html.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Project_KREA'
    },
    {
        id: 23,
        name: 'Pulse',
        category: 'html-css',
        tags: ['js', 'html', 'sass', 'gulp'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648522534/PortfolioImages/Pulse_okcdtp.jpg',
        projectUrl: 'https://bacha-coding-pulse-gulp.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Project_Pulse'
    },
    {
        id: 24,
        name: 'UBER',
        category: 'html-css',
        tags: ['js', 'html', 'sass', 'gulp'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648522650/PortfolioImages/UBER_ewffza.jpg',
        projectUrl: 'https://bacha-coding-uber-html.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Project_Uber'
    },
    {
        id: 25,
        name: 'Pagination-js',
        category: 'javascript',
        tags: ['js', 'html', 'sass', 'pagination'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648523844/PortfolioImages/Pagination-js_yboewa.jpg',
        projectUrl: 'https://bacha-pagination-js.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/pagination-v2'
    },

    {
        id: 26,
        name: 'Pagination-react',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'api', 'pagination'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648523981/PortfolioImages/pagination-react_i18t3b.jpg',
        projectUrl: 'https://bacha-pagination-react.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-pagination'
    },
    {
        id: 28,
        name: 'react-lorem-ipsum',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'lorem generator'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648525977/PortfolioImages/lorem-ipsum-react_cfssj8.jpg',
        projectUrl: 'https://bacha-lorem-ipsum.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-lorem-ipsum-app'
    },
    {
        id: 29,
        name: 'Post-edit-delete',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'forms'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648525622/PortfolioImages/post-edit-delete-react_jf3f6q.jpg',
        projectUrl: 'https://post-edit-delete-react.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-post-edit-delete-app'
    },
    {
        id: 30,
        name: 'react-slider',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'slider'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648526573/PortfolioImages/react-slider_lprg5y.jpg',
        projectUrl: 'https://bacha-react-slider.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-slider-app'
    },
    {
        id: 31,
        name: 'react-accordion',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'accordion'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648526996/PortfolioImages/react-accordion_aefojq.jpg',
        projectUrl: 'https://bacha-react-accordion.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-accordion-app'
    },
    {
        id: 32,
        name: 'drag-n-drop',
        category: 'javascript',
        tags: ['js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648527117/PortfolioImages/Drag_and_drop_ek8prk.jpg',
        projectUrl: 'https://bacha-dragndrop-js.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/drag-n-drop'
    },
    {
        id: 33,
        name: 'network-check',
        category: 'javascript',
        tags: ['js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648527238/PortfolioImages/Network_check_nnkxrr.jpg',
        projectUrl: 'https://bacha-network-check.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Network-check-app'
    },
    {
        id: 34,
        name: 'search-autocomplete',
        category: 'javascript',
        tags: ['js', 'html', 'sass'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648527374/PortfolioImages/Search-autocomplete_qheg3p.jpg',
        projectUrl: 'https://bacha-search-autocomplete.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Search-autocomplete'
    },




]

export default projectsData;
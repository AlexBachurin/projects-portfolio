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
        tags: ['js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648146271/PortfolioImages/calc_tjhfc8.jpg',
        projectUrl: 'https://bacha-vanillajs-calc.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Simple-Calculator'
    },
    {
        id: 4,
        name: 'spotify clone',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1647971261/PortfolioImages/spotify-clone_puaeon.jpg',
        projectUrl: 'https://bacha-spotify.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/spotify-clone-react'
    },
    {
        id: 5,
        name: 'birthday reminder',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648146732/PortfolioImages/birthday-app_bspg6t.jpg',
        projectUrl: 'https://bacha-birthday-reminder.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-birthday-reminder'
    },
    {
        id: 6,
        name: 'window glazing',
        category: 'js',
        tags: ['js', 'html', 'scss'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648147574/PortfolioImages/window-project_qj7zme.jpg',
        projectUrl: 'https://bacha-coding-windowproject.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/Project_window'
    },
    {
        id: 7,
        name: 'quiz-js',
        category: 'js',
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
        name: 'react quiz',
        category: 'react',
        tags: ['react ', 'js', 'html', 'sass', 'api'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648149567/PortfolioImages/react-quiz.jpg',
        projectUrl: 'https://bacha-react-quiz.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-quiz-app'
    },
    {
        id: 10,
        name: 'reminder timer',
        category: 'js',
        tags: ['js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648150016/PortfolioImages/reminder-js_gqtvsw.jpg',
        projectUrl: 'https://bacha-js-reminder.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/reminder-timer-project'
    },
    {
        id: 11,
        name: 'Movie app',
        category: 'react',
        tags: ['react', 'js', 'html', 'css', 'api'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648151274/PortfolioImages/moviedb-react_tiiezr.jpg',
        projectUrl: 'https://bacha-movie-react.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/movie-db-app'
    },
    {
        id: 11,
        name: 'Blog dark mode',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648151540/PortfolioImages/blog-dark-mode_muxghr.jpg',
        projectUrl: 'https://bacha-dark-mode-blog.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/blog-dark-mode-toggle'
    },
    {
        id: 12,
        name: 'Photos infinite scroll',
        category: 'react',
        tags: ['react', 'api', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648152096/PortfolioImages/photos-infinite-scroll_agxriq.jpg',
        projectUrl: 'https://bacha-photos-infinite-scroll.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-photos-infinite-scroll-fetch'
    },
    {
        id: 13,
        name: 'Stripe submenus',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648152314/PortfolioImages/stripe-submenus_najuy0.jpg',
        projectUrl: 'https://bacha-stripe-submenus.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/submenus-hover-app'
    },
    {
        id: 14,
        name: 'Markdown Preview',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648152713/PortfolioImages/markdown-app_s7e5dq.jpg',
        projectUrl: 'https://bacha-markdown-react.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/markdown-preview-app'
    },
    {
        id: 15,
        name: 'Cocktail app',
        category: 'react',
        tags: ['react', 'api', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648152686/PortfolioImages/cocktails-app_jnsya7.jpg',
        projectUrl: 'https://bacha-cocktails.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-cocktail-api'
    },
    {
        id: 16,
        name: 'Color generator',
        category: 'react',
        tags: ['react', 'js', 'html', 'css'],
        imgUrl: 'https://res.cloudinary.com/dljezd6qv/image/upload/v1648153536/PortfolioImages/color-generator_jlpdfz.jpg',
        projectUrl: 'https://bacha-color-generator.netlify.app/',
        gitUrl: 'https://github.com/AlexBachurin/react-color-generator'
    }
]

export default projectsData;
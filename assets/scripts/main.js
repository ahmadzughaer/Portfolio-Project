(function () {
    /**
     * selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        if (!header.classList.contains('header-scrolled')) {
            offset -= 16
        }

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    // animation on scroll 
    let selectAnimation = document.querySelectorAll('.progress-bar-70')
    let selectAnimation1 = document.querySelectorAll('.progress-bar-60')
    let selectAnimation2 = select('.progress-bar-80')

    if (selectAnimation) {
        const pageScrolled = () => {
            if (window.scrollY > 150) {
                selectAnimation.forEach((el) => {
                    el.classList.add("animation1")
                })
            } else {
                selectAnimation.forEach((el) => {
                    el.classList.remove("animation1")
                })
            }
        }
        window.addEventListener('load', pageScrolled)
        onscroll(document, pageScrolled)
    }
    if (selectAnimation1) {
        const pageScrolled2 = () => {
            if (window.scrollY > 150) {
                selectAnimation1.forEach((el) => {
                    el.classList.add('animation2');
                })
            } else {
                selectAnimation1.forEach((el) => {
                    el.classList.remove('animation2')
                })
            }
        }
        window.addEventListener('load', pageScrolled2)
        onscroll(document, pageScrolled2)
    }
    if (selectAnimation2) {
        const pageScrolled3 = () => {
            if (window.scrollY > 150) {
                selectAnimation2.classList.add('animation3');

            } else {
                selectAnimation2.classList.remove('animation3')

            }
        }
        window.addEventListener('load', pageScrolled3)
        onscroll(document, pageScrolled3)
    }
    /**
      * Scroll with ofset on links with a class name .scrollto
      */
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    $(window).scroll(function () {
        let wh = $(window).height() - 50;
        if ($(window).scrollTop() > $('.hero').offset().top - wh) {
            $('.skill-mf').addClass('onScroll');
        }
    });


})()


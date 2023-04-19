let clickCount, slideIndex
const hiddenSection = document.getElementById("hidden-section")
const formDiv = document.getElementById("form-div")
clickCount = slideIndex = 0

//Function Calls for Resize Menu
    resizeMenu()
    window.addEventListener('resize', resizeMenu)

    showSlides()

    hiddenSection.addEventListener('click', function(event) {
        if (!formDiv.contains(event.target)) {
            closeHiddenSection()
        }
    })

//Function Initialization Section
    function displayResizeMenu() {
        const resizeSubMenu = document.getElementById('resize-submenu')

        //Condition for Display
        if (clickCount % 2 === 0) resizeSubMenu.style.display = 'block'
        else resizeSubMenu.style.display = 'none'

        clickCount++
    }
    function resizeMenu() {
        //Constant Initialization Section of the Function
            const resizeSubMenu = document.getElementById('resize-submenu')
            const width = window.innerWidth
            const menuBar = document.getElementById('menu-bar')

        //Inner Function
            function displayNone() {

                //Changing of InnerHtml  for resized Menu Bar with display none
                    menuBar.innerHTML = `
                        <!--Menu-->
                            <a class="hover black float-left display-block" href="#">HOME</a>

                        <!--Submenu Displayer-->
                            <div>
                                <a class="black hover float-right display-block" href="#" onclick="displayResizeMenu()"><i class="fa fa-bars"></i></a>
                                        
                                <!--Submenu-->
                                    <div id="resize-submenu" class="width submenu-position position-absolute display-none">
                                        <a class="hover black display-block" href="#band-section">BAND</a>
                                        <a class="hover black display-block" href="#tour-section">TOUR</a>
                                        <a class="hover black display-block" href="#contact-section">CONTACT</a>
                                        <a class="hover black display-block" href="#">MERCH</a>
                                    </div>

                            </div>
                        `

            }
        
        //Complex Conditional Structure

            //If the window size is smaller then 600
                if (width <= 600) {

                    //If the Submenu exist before this function call
                        if (resizeSubMenu != null) {

                            //If the Submenu is displaying as a block
                                if (resizeSubMenu.style.display === 'block') 

                                    //Change of InnerHtml for resized Menu Bar with display block
                                    menuBar.innerHTML = `
                                        <!--Menu-->
                                            <a class="hover black float-left display-block" href="#">HOME</a>

                                        <!--Submenu Displayer-->
                                            <div>
                                                <a class="black hover float-right display-block" href="#" onclick="displayResizeMenu()"><i class="fa fa-bars"></i></a>
                                                
                                                <!--Submenu-->
                                                    <div id="resize-submenu" class="width submenu-position position-absolute">
                                                        <a class="hover black display-block" href="#band-section">BAND</a>
                                                        <a class="hover black display-block" href="#tour-section">TOUR</a>
                                                        <a class="hover black display-block" href="#contact-section">CONTACT</a>
                                                        <a class="hover black display-block" href="#">MERCH</a>
                                                    </div>

                                            </div>
                                        `

                            //If the Submenu has display as none
                                else if (resizeSubMenu.style.display === 'none') displayNone()

                        } else {
                            displayNone()
                        }
            
                } else {

                    //Counts starting from zero because the resized menu bar is gone
                        clickCount = 0

                    //Change of InnerHtml for normal Menu Bar
                        menuBar.innerHTML = `
                            <!--Menus-->
                                <a class="hover black float-left display-block" href="#">HOME</a>
                                <a class="hover black float-left display-block" href="#band-section">BAND</a>
                                <a class="hover black float-left display-block" href="#tour-section">TOUR</a>
                                <a class="hover black float-left display-block" href="#contact-section">CONTACT</a>
                                        
                            <!--Sub-Menu-->
                                <div class="float-left" id="display-submenu">
                                    <a class="black position-relative display-block" id="more-menu" title="More">MORE <i class="fa fa-caret-down"></i></a>
                                        <div id="submenu" class="submenu-position position-absolute display-none">
                                            <a href="#" class="common-padding white black-color display-block">Merchandise</a>
                                            <a href="#" class="common-padding white black-color display-block">Extras</a>
                                            <a href="#" class="common-padding white black-color display-block">Medias</a>
                                        </div>
                                </div>
                                        
                            <!--Search Menu-->
                                <a class="black float-right display-block" id="search-menu" href="#"><i class="fa fa-search"></i></a>
                        
                            `
                }
    }
    function showSlides() {
        const slide = document.getElementsByClassName('img-div')

        for (let key of slide) key.style.display = 'none'
        
        slideIndex++

        if(slideIndex > slide.length) slideIndex = 1

        slide[slideIndex - 1].style.display = 'block'

        setTimeout(showSlides, 3500)
    }
    function closeHiddenSection() {
        hiddenSection.style.display = "none"
    }
    function openHiddenSection() {
        hiddenSection.style.display = "block"
    }



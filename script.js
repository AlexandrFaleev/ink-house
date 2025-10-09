function CreateHeaderBurgerBtn(){
    function OpenOrCloseBurgerBtn(){
        headerBurgerMenu.classList.toggle('active');
    }

    const headerBurgerMenu = document.querySelector('.header__burger-menu');
    document.querySelectorAll('.header__burger-btn').forEach(b_btn => {
        b_btn.addEventListener('click', () => OpenOrCloseBurgerBtn());
    });
    document.querySelectorAll('.header__burger-menu-item a').forEach(b_link => {
        b_link.addEventListener('click', () => OpenOrCloseBurgerBtn());
    });
}

function CreateTabs(selector){
    function GoToTab(selectedTab){
        if( !selectedTab.classList.contains('active') ){
            tabsList.forEach(e => {e.classList.toggle('active', false);});
            contentPanels.forEach(e => {e.classList.toggle('active', false);});
            selectedTab.classList.add('active');
            document.querySelector('[tab="' + selectedTab.getAttribute('data-tab') + '"]').classList.add('active');
        }
    }
    const tabsList = document.querySelectorAll('.' + selector + ' .tab-item');
    const contentPanels = document.querySelectorAll('.' + selector + ' .content-panel');
    tabsList.forEach(tab => {
        tab.addEventListener('click', () => GoToTab(tab));
    });
}

CreateHeaderBurgerBtn();
CreateTabs("reproductions");
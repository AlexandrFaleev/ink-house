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

class shopCart{
	constructor(){
		this.marketCatalog = document.querySelector('[data-js-market]')
		this.cartButton = document.querySelector('[data-js-cart-info]')
		this.cart = new Array()
		this.init()
	}
	
	//Добавление товара в корзину
	addToCart(selectedItem){
		if(this.cart.find(e => e === selectedItem.parentNode.querySelector('[data-js-product-name]').textContent.trim())){
            alert('Товар уже есть в корзине!')
        } else{
            this.cart.push(selectedItem.parentNode.querySelector('[data-js-product-name]').textContent.trim())
            sessionStorage.setItem('shopCart', JSON.stringify(this.cart))
            this.updateCart()
        }
	}
	
	//Обновление статус-бара корзины
	updateCart(){
		if(this.cart.length > 0){
            this.cartButton.style.display = 'flex'
            this.cartButton.innerHTML = this.cart.length
        }
		else{
            this.cartButton.innerHTML = ''
            this.cartButton.style.display = 'none'
        }
	}
	
	//Инициализация и привязка функций
	init(){
		if(sessionStorage.getItem('shopCart'))
			this.cart = JSON.parse(sessionStorage.getItem('shopCart'))
		else{
			sessionStorage.setItem('shopCart', JSON.stringify([]))
			this.cart = JSON.parse(sessionStorage.getItem('shopCart'))
		}
        this.marketCatalog.addEventListener('click', (event) => {
            const clickedItem = event.target
            if(clickedItem.hasAttribute('data-js-add-to-cart'))
                this.addToCart(clickedItem)
        })
		this.updateCart()
	}
}

CreateHeaderBurgerBtn();
CreateTabs("reproductions");
const userCart = new shopCart();
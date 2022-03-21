(function(){"use strict";var a={6336:function(a,e,i){var t=i(9242),n=i(3396);const s={class:"wrapper"};function r(a,e,i,t,r,o){const c=(0,n.up)("Header"),l=(0,n.up)("Page"),u=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(c),(0,n.Wm)(l),(0,n.Wm)(u)])}var o=i(7139),c=i(9574);const l=a=>((0,n.dD)("data-v-0c579897"),a=a(),(0,n.Cn)(),a),u={class:"header"},p={class:"container"},f=l((()=>(0,n._)("a",{class:"header__logo",href:"#"},[(0,n._)("img",{src:c,alt:""})],-1))),d=l((()=>(0,n._)("span",null,null,-1))),g=[d],m={class:"header__menu menu"},h={class:"menu__details"},v=l((()=>(0,n._)("summary",null,"Меню",-1))),_={class:"content"},b={href:"#"},w={class:"menu__list"},y={href:"#"},x=l((()=>(0,n._)("button",{class:"menu__button"},"Регистрация",-1))),D=l((()=>(0,n._)("button",{class:"header__button"},"Регистрация",-1)));function k(a,e,i,t,s,r){return(0,n.wg)(),(0,n.iD)("header",u,[(0,n._)("div",p,[f,(0,n._)("div",{class:"header__burger",onClick:e[0]||(e[0]=(...a)=>r.toggleBurger&&r.toggleBurger(...a))},g),(0,n._)("menu",m,[(0,n._)("details",h,[v,(0,n._)("div",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.menuList,(a=>((0,n.wg)(),(0,n.iD)("a",b,(0,o.zw)(a),1)))),256))])]),(0,n._)("div",w,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.menuList,(a=>((0,n.wg)(),(0,n.iD)("a",y,(0,o.zw)(a),1)))),256))]),x]),D])])}var O={name:"Header",data(){return{menuList:["Главная","Поездки","О нас","Помощь","Путешествия"]}},components:{},methods:{toggleBurger(){let a=document.querySelector(".header__burger"),e=document.querySelector(".header__menu");a.classList.toggle("_active"),e.classList.toggle("_active")}}},j=i(89);const E=(0,j.Z)(O,[["render",k],["__scopeId","data-v-0c579897"]]);var B=E,H=i(550);const Z={class:"page"},L={class:"main-screen"},P=(0,n._)("figure",{class:"bg ibg"},null,-1),W=(0,n._)("figure",{class:"bg dark"},null,-1),C={class:"container"},F=(0,n._)("h1",{class:"main-screen__title"},"Важно то, с кем вы путешествуете",-1),I=(0,n._)("h3",{class:"main-screen__subtitle"},"Мы хотим подарить вам уверенность в путешествиях с нами",-1),q={action:"#",class:"main-screen__application application"},z={class:"application__menu"},K=(0,n._)("hr",null,null,-1),Y=(0,n.uE)('<div class="application__submenu"><div class="radio"><label for="one-way"><input type="radio" id="one-way" name="radioBtn"> В одну сторону</label><label for="return"><input checked type="radio" id="return" name="radioBtn">Возвращение</label><label for="multi-city"><input type="radio" id="multi-city" name="radioBtn">Несколько городов</label></div><div class="list"><select name="ppl"><option>1 человек</option><option>2 человека</option><option>3 человека</option><option>4 человека</option><option>5 человек</option></select><select name="plan"><option>Эконом</option><option>Премиум</option></select></div></div><div class="application__input input"><label for="from"><input name="from" id="from" type="text" placeholder="из"></label><figure class="input__change"><img src="'+H+'" alt="change"></figure><label for="to"><input name="to" id="to" type="text" placeholder="в"></label><div class="input__depart"><div class="button">Вылет<br>Дата</div><div class="calendar"></div></div><div class="input__return"><div class="button">Возвращение<br>Дата</div><div class="calendar"></div></div></div><button class="application__submit" type="submit">Искать</button>',3);function S(a,e,i,t,s,r){const c=(0,n.up)("Destinations"),l=(0,n.up)("Download");return(0,n.wg)(),(0,n.iD)("main",Z,[(0,n._)("section",L,[P,W,(0,n._)("div",C,[F,I,(0,n._)("form",q,[(0,n._)("div",z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.menuItems,(a=>((0,n.wg)(),(0,n.iD)("button",null,(0,o.zw)(a),1)))),256)),K]),Y])])]),(0,n.Wm)(c),(0,n.Wm)(l)])}var T=i(9722),A=i(3689),G=i(3837),M=i(5313),J=i(1974);const N={class:"destinations"},Q=(0,n.uE)('<div class="container"><h2 class="destinations__title">Топ Самых Популярных Мест</h2><div class="destinations__content"><figure class="image"><img src="'+T+'" alt="moraine"><figcaption>озеро Морейн <span>Альберта, Канада</span></figcaption></figure><figure class="image"><img src="'+A+'" alt="hokokuji"><figcaption>Бамбуковый лес <br>Хококужи<span>Камакура, Япония</span></figcaption></figure><figure class="image"><img src="'+G+'" alt="kirkjufell"><figcaption>Киркжуфелл <span>Грундакфжордур, <br>Исландия</span></figcaption></figure><figure class="image"><img src="'+M+'" alt="cappadocia"><figcaption>Каппадоция <span>Анатолия, Турция</span></figcaption></figure><figure class="image"><img src="'+J+'" alt="ubud"><figcaption>Убуд <span>Бали, Индонезия</span></figcaption></figure></div></div>',1),R=[Q];function U(a,e,i,t,s,r){return(0,n.wg)(),(0,n.iD)("section",N,R)}var V={name:"Destinations"};const X=(0,j.Z)(V,[["render",U]]);var $=X,aa=i(2934),ea=i(1273);const ia={class:"download"},ta=(0,n.uE)('<div class="container"><h2 class="download__title">Скачайте <br> приложение Expedia!</h2><div class="download__content"><a class="store" href="#"><img src="'+aa+'" alt="google-play"></a><a class="store" href="#"><img src="'+ea+'" alt="app-store"></a></div></div>',1),na=[ta];function sa(a,e,i,t,s,r){return(0,n.wg)(),(0,n.iD)("section",ia,na)}var ra={name:"Download"};const oa=(0,j.Z)(ra,[["render",sa]]);var ca=oa,la={name:"Page",data(){return{menuItems:["Проживание","Полеты","Машины","Пакеты","Посылки","Чем заняться"]}},components:{Destinations:$,Download:ca}};const ua=(0,j.Z)(la,[["render",S]]);var pa=ua,fa=i(2770),da=i(6179),ga=i(4296);const ma={class:"footer"},ha=(0,n.uE)('<div class="container"><div class="footer__copy"><a class="logo" href="#"><img src="'+c+'" alt=""></a><p class="copyrigth">© 2021 Expedia, Inc., an Expedia Group company. Все права защищены</p></div><div class="footer__menu"><div class="list"><h4 class="caption">Компания</h4><a href="#">О нас</a><a href="#">Работа</a><a href="#">Отзывы</a><a href="#">Партнерство</a><a href="#">Реклама</a></div><details class="list list-details"><summary class="caption">Компания</summary><a href="#">О нас</a><a href="#">Работа</a><a href="#">Отзывы</a><a href="#">Партнерство</a><a href="#">Реклама</a></details><div class="list"><h4 class="caption">Исследования</h4><a href="#">О нас</a><a href="#">Работа</a><a href="#">Отзывы</a><a href="#">Партнерство</a><a href="#">Реклама</a></div><details class="list list-details"><summary class="caption">Исследования</summary><a href="#">О нас</a><a href="#">Работа</a><a href="#">Отзывы</a><a href="#">Партнерство</a><a href="#">Реклама</a></details><div class="list"><h4 class="caption">Политика</h4><a href="#">О нас</a><a href="#">Работа</a><a href="#">Отзывы</a><a href="#">Партнерство</a><a href="#">Реклама</a></div><details class="list list-details"><summary class="caption">Политика</summary><a href="#">О нас</a><a href="#">Работа</a><a href="#">Отзывы</a><a href="#">Партнерство</a><a href="#">Реклама</a></details><div class="list"><h4 class="caption">Помощь</h4><a href="#">О нас</a><a href="#">Работа</a><a href="#">Отзывы</a><a href="#">Партнерство</a><a href="#">Реклама</a></div><details class="list list-details"><summary class="caption">Помощь</summary><a href="#">О нас</a><a href="#">Работа</a><a href="#">Отзывы</a><a href="#">Партнерство</a><a href="#">Реклама</a></details><div class="list list-details"><h4 class="caption">Обратная связь</h4><div class="question"><a href="#">Есть вопросы?<br>Мы будем рады вас услышать</a></div><div class="soc-media"><a href="#"><img src="'+fa+'" alt="instagram"></a><a href="#"><img src="'+da+'" alt="twitter"></a><a href="#"><img src="'+ga+'" alt="linkedin"></a></div></div></div></div>',1),va=[ha];function _a(a,e,i,t,s,r){return(0,n.wg)(),(0,n.iD)("footer",ma,va)}var ba={name:"Footer"};const wa=(0,j.Z)(ba,[["render",_a]]);var ya=wa,xa={name:"App",data(){return{}},components:{Header:B,Page:pa,Footer:ya}};const Da=(0,j.Z)(xa,[["render",r]]);var ka=Da;(0,t.ri)(ka).mount("#app")},550:function(a,e,i){a.exports=i.p+"img/change.edde0782.svg"},2770:function(a,e,i){a.exports=i.p+"img/instagram.fd292788.svg"},4296:function(a,e,i){a.exports=i.p+"img/linkedin.c0de5ec0.svg"},9574:function(a,e,i){a.exports=i.p+"img/logo.7313bc27.svg"},6179:function(a,e,i){a.exports=i.p+"img/twitter.f3218fb1.svg"},1273:function(a,e,i){a.exports=i.p+"img/app-store.0a657a1a.png"},5313:function(a,e,i){a.exports=i.p+"img/cappadocia.cdf206ba.png"},2934:function(a,e,i){a.exports=i.p+"img/google-play.9301ef7b.png"},3689:function(a,e,i){a.exports=i.p+"img/hokokuji.d8f472a8.png"},3837:function(a,e,i){a.exports=i.p+"img/kirkjufell.22d095f0.png"},9722:function(a,e,i){a.exports=i.p+"img/moraine.f381967b.png"},1974:function(a,e,i){a.exports=i.p+"img/ubud.6cfd1027.png"}},e={};function i(t){var n=e[t];if(void 0!==n)return n.exports;var s=e[t]={exports:{}};return a[t](s,s.exports,i),s.exports}i.m=a,function(){var a=[];i.O=function(e,t,n,s){if(!t){var r=1/0;for(u=0;u<a.length;u++){t=a[u][0],n=a[u][1],s=a[u][2];for(var o=!0,c=0;c<t.length;c++)(!1&s||r>=s)&&Object.keys(i.O).every((function(a){return i.O[a](t[c])}))?t.splice(c--,1):(o=!1,s<r&&(r=s));if(o){a.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=a.length;u>0&&a[u-1][2]>s;u--)a[u]=a[u-1];a[u]=[t,n,s]}}(),function(){i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,{a:e}),e}}(),function(){i.d=function(a,e){for(var t in e)i.o(e,t)&&!i.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){i.p="/"}(),function(){var a={143:0};i.O.j=function(e){return 0===a[e]};var e=function(e,t){var n,s,r=t[0],o=t[1],c=t[2],l=0;if(r.some((function(e){return 0!==a[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(c)var u=c(i)}for(e&&e(t);l<r.length;l++)s=r[l],i.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return i.O(u)},t=self["webpackChunkfirst"]=self["webpackChunkfirst"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(6336)}));t=i.O(t)})();
//# sourceMappingURL=app.e485285b.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"2Ica":function(e,t,n){"use strict";var o=n("pVnL"),s=n.n(o),a=n("QILm"),r=n.n(a),c=n("lSNA"),i=n.n(c),l=n("cDcd"),d=n.n(l),u=n("TSYQ"),m=n.n(u),p=n("37OS"),h=n.n(p),f=n("WEWv"),v=n("I53q");const b=["className","children","dropdownContext","element"];class w extends l.PureComponent{constructor(){super(...arguments),i()(this,"handleClick",e=>{if("keydown"===e.type){if(e.key!==v.a.Enter&&e.key!==v.a.Space)return;e.preventDefault()}const t=this.props,n=t.onClick,o=t.dropdownContext,s=o.disabled,a=o.open,r=o.setOpenState;n&&n(e),s||r(!a)})}render(){const e=this.props,t=e.className,n=e.children,o=e.dropdownContext,a=o.open,c=o.as,i=e.element,l=r()(e,b);return d.a.createElement(i,s()({},l,{"aria-haspopup":c,"aria-expanded":a,className:m()("dropdown-handle",t),onClick:this.handleClick,onKeyDown:this.handleClick}),n)}}i()(w,"defaultProps",{onClick:h.a,element:"div"}),t.a=Object(f.c)("DropdownHandle can be only used inside Dropdown scope.")(w)},"2VWb":function(e,t,n){"use strict";var o=n("pVnL"),s=n.n(o),a=n("QILm"),r=n.n(a),c=n("lSNA"),i=n.n(c),l=n("cDcd"),d=n.n(l),u=n("TSYQ"),m=n.n(u),p=n("eHHv"),h=n("3N0A"),f=n("YUK3"),v=n("eOGF"),b=n("Q9J+"),w=n("H59Z"),C=n("vN+2"),g=n.n(C),I=n("TXrv");n("3lgs");const E=["markModalActive","markModalInactive","currentActiveModal","alignment","modalClass","theme","ariaLabelledBy","keyboardActive"];class y extends l.Component{constructor(){super(),i()(this,"modalRef",void 0),i()(this,"lastActiveElement",void 0),i()(this,"setModalRef",e=>{this.modalRef=e}),i()(this,"onClose",()=>{const e=this.props.onClose;e&&(this.cleanUp(),e())}),i()(this,"onOpen",()=>{const e=this.props,t=e.onClose,n=e.markModalActive;this.lastActiveElement||this.setLastActiveElement(document.activeElement),n(this),b.a.hideScrollBars(),w.a.bind(["tab"],this.onTab),t&&w.a.bind(["esc"],this.onClose)}),i()(this,"onTab",e=>{var t;(t=this.modalRef,Object(v.G)()||!t?g.a:function(e){const n=Object(I.b)(t);if(!n)return;const o=[...n.querySelectorAll('a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]')].filter(I.d),s=o.length?o[0]:n,a=o.indexOf(document.activeElement);let r=null;r=-1!==a?e.shiftKey?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=e.length;if(n)return 1===n?e[0]:0===t?e[n-1]:e[t-1]}(o,a):function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=e.length;if(n)return 1===n||t===n-1?e[0]:e[t+1]}(o,a):s,r&&(e.preventDefault(),r.focus())})(e)}),i()(this,"onFocus",e=>{e.stopPropagation()}),this.modalRef=null,this.lastActiveElement=null}componentDidMount(){const e=this.props,t=e.open,n=e.autoFocus;t&&(this.onOpen(),n&&this.focusOnOpen())}componentDidUpdate(e){const t=this.props,n=t.open,o=t.autoFocus;e.open!==n&&(n?(this.onOpen(),o&&this.focusOnOpen()):this.cleanUp())}componentWillUnmount(){this.cleanUp()}setLastActiveElement(e){this.lastActiveElement=e}focusOnOpen(){const e=this.modalRef,t=document.activeElement;if(e&&!e.contains(t)){const t=e.querySelector("input, select, textarea, button:not(.close), a")||e.querySelector("button.close");if(t)return void t.focus();e.focus()}}cleanUp(){b.a.showScrollBars(),w.a.unbind(["esc"],this.onClose),w.a.unbind(["tab"],this.onTab),this.props.markModalInactive(this),this.lastActiveElement&&(this.lastActiveElement.focus(),this.lastActiveElement=null)}renderModal(){const e=this.props,t=(e.markModalActive,e.markModalInactive,e.currentActiveModal,e.alignment),n=e.modalClass,o=e.theme,a=e.ariaLabelledBy,c=e.keyboardActive,i=r()(e,E);return d.a.createElement("div",{className:m()(n,o,"ui-modal modal-wrapper",{"keyboard-active":c})},d.a.createElement("div",{className:"modal-scroll-body"},d.a.createElement("div",{className:m()("modal-aligner","align-"+t)},d.a.createElement("div",{className:"modal-overlay",onClick:this.onClose}),d.a.createElement("section",s()({className:"modal-container",role:"alertdialog","aria-modal":"true",ref:this.setModalRef,onFocus:this.onFocus,"aria-labelledby":a},i),this.props.children))))}render(){const e=this.props,t=e.open,n=e.modalTarget;return t?d.a.createElement(h.a,{target:n},this.renderModal()):null}}i()(y,"defaultProps",{open:!1,alignment:"center",modalClass:"",theme:"dark",autoFocus:!0,markModalActive:v.J,markModalInactive:v.J});t.a=Object(p.b)(f.a,e=>({markModalActive:e.markModalActive,markModalInactive:e.markModalInactive,currentActiveModal:e.currentActiveModal,keyboardActive:e.keyboardActive}))(y)},"3lgs":function(e,t,n){},ECpG:function(e,t,n){},I53q:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",Home:"Home",End:"End",PageUp:"PageUp",PageDown:"PageDown",Tab:"Tab",Space:" ",Enter:"Enter",Escape:"Escape"}},LD1s:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("lSNA"),s=n.n(o),a=n("cDcd"),r=n("TSYQ"),c=n.n(r),i=n("37OS"),l=n.n(i),d=n("WEWv");n("ECpG");const u={LISTBOX:"listbox",MENU:"menu"};class m extends a.PureComponent{static getDerivedStateFromProps(e,t){const n=e.disabled,o=e.open;return n||e.open!==t.openValueFromProps?{open:!n&&o,openValueFromProps:e.open}:null}constructor(e){super(e),s()(this,"setOpenState",e=>{if(this.state.open===e)return;const t=this.props,n=t.onOpen,o=t.onClose;this.setState({open:e},e?n:o)}),this.state={open:e.open,openValueFromProps:e.open}}render(){const e=this.props,t=e.className,n=e.children,o=e.closeHandleSelector,s=e.disabled,r=e.as,i=this.state.open,l={open:i,closeHandleSelector:o,disabled:s,setOpenState:this.setOpenState,as:r};return a.createElement(d.b,{value:l},a.createElement("div",{className:c()("dropdown",t,{open:i})},n))}}s()(m,"defaultProps",{onOpen:l.a,onClose:l.a,open:!1,disabled:!1,as:u.MENU}),t.b=m},O766:function(e,t,n){"use strict";n("rGqo");var o=n("pVnL"),s=n.n(o),a=n("lSNA"),r=n.n(a),c=n("QILm"),i=n.n(c),l=n("cDcd"),d=n("TSYQ"),u=n.n(d),m=n("QU3h"),p=n("/n7Q"),h=n("2VWb");n("wO6G");const f=["open","alignment","modalClass","onClose","className","title","theme","autoFocus","children","size","id","closeButtonText"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){const t=e.open,n=e.alignment,o=e.modalClass,a=e.onClose,c=e.className,d=e.title,p=e.theme,b=e.autoFocus,w=e.children,C=e.size,g=e.id,I=e.closeButtonText,E=i()(e,f),y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({open:t,alignment:n,theme:p,onClose:a,autoFocus:b,ariaLabelledBy:"heading-"+g},a?{role:"dialog"}:{});return l.createElement(h.a,s()({},y,{modalClass:u()("ui-dialog",o,"size-"+C)}),l.createElement("div",s()({className:u()("ui-dialog-container",c)},E),l.createElement("div",{className:"ui-dialog-header"},l.createElement("h1",{className:"ui-dialog-title",id:"heading-"+g},d),a&&l.createElement("button",{className:"close",onClick:a},l.createElement(m.a,null),l.createElement("span",{className:"sr-only"},I))),l.createElement("div",{className:"ui-dialog-body"},w)))}b.defaultProps={open:!1,alignment:"center",modalClass:"",title:"",theme:"dark",autoFocus:!0,size:"medium",closeButtonText:"Close Dialog"},t.a=Object(p.d)("dialog")(b)},"Q9J+":function(e,t,n){"use strict";var o=n("eOGF");let s=0;let a;!function(){if(!Object(o.G)()&&document.head)try{s=function(){const e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);const t=e.offsetWidth;e.style.overflow="scroll";const n=document.createElement("div");n.style.width="100%",e.appendChild(n);const o=n.offsetWidth;return e.parentNode.removeChild(e),t-o}(),window.onpopstate=function(){0===document.getElementsByClassName("modal-wrapper").length&&document.documentElement.classList.remove("scroll-hidden")};const e=document.createElement("style");e.innerHTML=function(e){return`\nhtml.scroll-hidden,html.scroll-hidden body{\n  overflow: hidden;\n  height:100vh;\n}\nhtml.scroll-hidden.pad-adjustment body{\n    padding-right : ${e}px;\n}\nhtml.scroll-hidden.pad-adjustment .fixed-elm{\n    padding-right : ${e}px;\n}`}(s),document.head.appendChild(e)}catch(e){console.error(e)}}();const r={hideScrollBars:function(e){a=function(){const e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}(),document.documentElement.classList.add("scroll-hidden"),document.body.offsetHeight===document.body.scrollHeight||e||document.documentElement.classList.add("pad-adjustment");const t=document.querySelector(".body-wrap");t&&(t.style.marginTop=-a+"px")},showScrollBars:function(){document.documentElement.classList.remove("scroll-hidden"),document.documentElement.classList.remove("pad-adjustment");const e=document.querySelector(".body-wrap");e&&(e.style.marginTop=""),void 0!==a&&window.scrollTo(0,a),a=void 0},getScrollbarWidth:function(){return s}};t.a=r},WEWv:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var o=n("cDcd"),s=n("f/Vi");const a=Object(o.createContext)(),r=a.Provider,c=a.Consumer;function i(e){return Object(s.a)(e,c,"dropdownContext")}},cwrU:function(e,t,n){},e6Ar:function(e,t,n){"use strict";var o=n("pVnL"),s=n.n(o),a=n("QILm"),r=n.n(a),c=n("lSNA"),i=n.n(c),l=n("cDcd"),d=n.n(l),u=n("TSYQ"),m=n.n(u),p=n("Wwog"),h=n("2Ica"),f=n("hF3m"),v=n("LD1s"),b=n("WEWv");const w=Object(l.createContext)(),C=w.Provider,g=w.Consumer;var I=n("f/Vi");n("cwrU");const E=["menuContext","className","children","value","onClick","clickableSelector"],y={[v.a.LISTBOX]:"option",[v.a.MENU]:"menuitem"};class x extends l.PureComponent{constructor(){super(...arguments),i()(this,"wrapperRef",Object(l.createRef)()),i()(this,"onClick",e=>{const t=this.props,n=t.menuContext,o=t.onClick;n.onItemClick(this),o&&o(e)}),i()(this,"onMouseOver",()=>{this.props.menuContext.onFocusItem(this)})}componentDidMount(){this.props.menuContext.register(this)}componentWillUnmount(){this.props.menuContext.unregister(this)}gotoClickableItem(){const e=this.props.clickableSelector,t=this.wrapperRef.current;if(e&&t){const n=t.querySelector(e);n&&n.click()}}render(){const e=this.props,t=e.menuContext,n=t.focussedItem,o=t.as,a=e.className,c=e.children,i=(e.value,e.onClick,e.clickableSelector,r()(e,E)),l=n===this,u=m()("selectable-menu-item",a,{"selectable-menu-item--focussed":l}),p="function"==typeof c?c({isFocussed:l}):c;return d.a.createElement("div",s()({role:y[o]},i,{ref:this.wrapperRef,className:u,onClick:this.onClick,onMouseOver:this.onMouseOver,onFocus:this.onMouseOver,"aria-selected":l,tabIndex:l?0:-1}),p)}}i()(x,"defaultProps",{clickableSelector:"a, button"});var O=Object(I.a)("Menu.Item should be used inside Menu",g,"menuContext")(x),k=n("I53q");n("tfTX");n.d(t,"a",(function(){return A}));const S=["menuClassName","direction","title","handleElement","menuProps","children","as","selectedValue","onSelect"],N=["selectedValue","title","menuClassName","direction","menuProps","className","theme","as"];class D extends l.Component{constructor(){var e;super(...arguments),e=this,i()(this,"isFocussed",!1),i()(this,"menuRef",d.a.createRef()),i()(this,"menuItems",[]),i()(this,"memoizedProvider",Object(p.a)(this.getProviderValue.bind(this))),i()(this,"state",{focussedItemIndex:-1}),i()(this,"focusItem",e=>{this.setState({focussedItemIndex:this.menuItems.indexOf(e)})}),i()(this,"onItemClick",(function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o=e.props.onSelect,s=t.props.value;o&&o(s),n&&t.gotoClickableItem()})),i()(this,"onKeyDown",e=>{if(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)return;const t=this.state.focussedItemIndex,n=this.props.dropdownContext.setOpenState;let o=t;switch(e.key){case k.a.Escape:return e.preventDefault(),void n(!1);case k.a.ArrowUp:case k.a.PageUp:case k.a.Home:{e.preventDefault(),0===t&&(o=this.menuItems.length);const n=this.menuItems[e.key===k.a.ArrowUp?o-1:0];return void this.focusItem(n)}case k.a.ArrowDown:case k.a.PageDown:case k.a.End:{e.preventDefault(),t===this.menuItems.length-1&&(o=-1);const n=this.menuItems[e.key===k.a.ArrowDown?o+1:this.menuItems.length-1];return void this.focusItem(n)}case k.a.Enter:case k.a.Space:{e.preventDefault();(0,this.props.dropdownContext.setOpenState)(!1);const n=this.menuItems[t];return void this.onItemClick(n,!0)}default:return}}),i()(this,"registerMenuItem",e=>{this.menuItems.push(e);this.props.selectedValue===e.props.value&&this.setState({focussedItemIndex:this.menuItems.length-1})}),i()(this,"unregisterMenuItem",e=>{const t=this.props.selectedValue;this.menuItems=this.menuItems.filter(t=>t!==e);const n=this.state.focussedItemIndex,o=this.menuItems.findIndex(e=>e.props.value===t);o!==n&&this.setState({focussedItemIndex:o})})}componentDidMount(){this.focusMenu()}componentDidUpdate(e,t){const n=e.selectedValue,o=e.dropdownContext,s=this.props,a=s.dropdownContext,r=s.selectedValue,c=this.state.focussedItemIndex;if(o.open!==a.open&&this.focusMenu(),t.focussedItemIndex!==c&&this.menuRef.current){const e=this.menuRef.current.querySelector('[aria-selected="true"]');if(e&&e.focus&&e.focus(),e&&e.scrollIntoView)return void e.scrollIntoView({behavior:"smooth",block:"nearest"})}if(n!==r){const e=this.menuItems.find(e=>e.props.value===r);if(!e)return;this.focusItem(e)}}focusMenu(){const e=this.props.dropdownContext.open,t=this.menuRef.current;e&&t&&document.activeElement!==t&&t.focus()}getProviderValue(e){const t=this.props.as;return{focussedItem:e<0||e>=this.menuItems.length?null:this.menuItems[e],register:this.registerMenuItem,unregister:this.unregisterMenuItem,onFocusItem:this.focusItem,onItemClick:this.onItemClick,as:t}}render(){const e=this.state.focussedItemIndex,t=this.props,n=t.menuClassName,o=t.direction,a=void 0===o?"down":o,c=t.title,i=t.handleElement,l=t.menuProps,u=void 0===l?{}:l,p=t.children,v=t.as,b=(t.selectedValue,t.onSelect,r()(t,S)),w=m()("dropdown-menu selectable-dropdown-menu__list",n,"selectable-dropdown-menu__list--"+a);return d.a.createElement(C,{value:this.memoizedProvider(e)},d.a.createElement(h.a,s()({},b,{element:i,className:"selectable-dropdown-menu__toggle"}),c),d.a.createElement(f.a,{role:void 0,tabIndex:void 0},d.a.createElement("div",s()({},u,{ref:this.menuRef,tabIndex:"-1",role:v,className:w,onKeyDown:this.onKeyDown}),p)))}}function A(e){e.selectedValue,e.title,e.menuClassName,e.direction,e.menuProps;const t=e.className,n=e.theme,o=e.as,a=void 0===o?v.a.LISTBOX:o,c=r()(e,N),i="dark"===n?"selectable-dropdown-menu--dark":"";return d.a.createElement(v.b,s()({className:m()("selectable-dropdown-menu",i,t)},c,{closeHandleSelector:".selectable-menu-item",as:a}),d.a.createElement(b.a,null,t=>d.a.createElement(D,s()({},e,{dropdownContext:t}))))}i()(D,"defaultProps",{as:v.a.LISTBOX}),A.Item=O},"f/Vi":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("eHHv");function s(e,t,n){return Object(o.b)(t,t=>{if(!t)throw new Error(e);return{[n]:t}})}},hF3m:function(e,t,n){"use strict";var o=n("pVnL"),s=n.n(o),a=n("QILm"),r=n.n(a),c=n("lSNA"),i=n.n(c),l=n("cDcd"),d=n.n(l),u=n("TSYQ"),m=n.n(u),p=n("dvg7"),h=n.n(p),f=n("WEWv");const v=["className","children","dropdownContext"];class b extends l.PureComponent{constructor(){super(...arguments),i()(this,"containerRef",d.a.createRef()),i()(this,"handleClick",e=>{const t=this.props.dropdownContext,n=t.closeHandleSelector,o=t.setOpenState;n&&e.target.closest(n)&&o(!1)}),i()(this,"closeDropdown",e=>{const t=this.props.dropdownContext.setOpenState;setTimeout(()=>t(!1))})}componentDidMount(){this.props.dropdownContext.open&&this.containerRef.current&&this.containerRef.current.container.focus()}componentDidUpdate(e){let t=e.dropdownContext;const n=this.props.dropdownContext;t.open!==n.open&&n.open&&this.containerRef.current&&this.containerRef.current.container.focus()}render(){const e=this.props,t=e.className,n=e.children,o=e.dropdownContext,a=o.open,c=o.as,i=r()(e,v);return a?d.a.createElement(h.a,s()({role:c,tabIndex:-1},i,{className:m()("dropdown-body",t),ref:this.containerRef,"aria-hidden":a?"false":"true",onClick:this.handleClick,onClickOutside:this.closeDropdown}),n):null}}t.a=Object(f.c)("DropdownBody can be only used inside Dropdown scope.")(b)},tfTX:function(e,t,n){},wO6G:function(e,t,n){}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/modules~hackerrank_r_community~hackerrank_r_testinvite~hackerrank_r_testquestions~hackerrank_r_work-2fb3ad7d.js.map
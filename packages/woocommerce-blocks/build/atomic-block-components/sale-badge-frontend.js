(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[8],{266:function(e,t){},267:function(e,t,r){"use strict";r.r(t);var c=r(15),n=r.n(c),a=(r(4),r(1)),o=r(5),s=r.n(o),l=r(29),p=r(67);r(266);t.default=function(e){var t=e.className,r=e.align,c=n()(e,["className","align"]),o=Object(p.useInnerBlockLayoutContext)().parentClassName,u=Object(p.useProductDataContext)(),b=c.product||u.product;if(!b||!b.on_sale)return null;var i="string"==typeof r?"wc-block-components-product-sale-badge--align".concat(r):"";return React.createElement("div",{className:s()("wc-block-components-product-sale-badge",t,i,"".concat(o,"__product-onsale"))},React.createElement(l.a,{label:Object(a.__)("Sale",'woocommerce'),screenReaderLabel:Object(a.__)("Product on sale",'woocommerce')}))}},29:function(e,t,r){"use strict";var c=r(6),n=r.n(c),a=(r(4),r(3)),o=r(5),s=r.n(o);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t,r=e.label,c=e.screenReaderLabel,n=e.wrapperElement,o=e.wrapperProps,l=null!=r,u=null!=c;return!l&&u?(t=n||"span",o=p(p({},o),{},{className:s()(o.className,"screen-reader-text")}),React.createElement(t,o,c)):(t=n||a.Fragment,l&&u&&r!==c?React.createElement(t,o,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},c)):React.createElement(t,o,r))};u.defaultProps={wrapperProps:{}},t.a=u}}]);
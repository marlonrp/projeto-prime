## PrimeNG configuration

1. Run npm install primeng --save
2. Run npm install primeicons --save
3. Run npm install font-aweseome --save
4. Paste the lines bellow into angular.json, at the architect styles
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/nova-light/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/font-awesome/css/font-awesome.css"
5. Paste the lines bellow into style.sass
    $fa-font-path: "../node_modules/font-awesome/fonts";
    @import "../node_modules/font-awesome/scss/font-awesome.scss";

const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/product-cart/runtime.js',
        './dist/product-cart/polyfills.js',
        //'./dist/product-cart/styles.js',
        './dist/product-cart/scripts.js',
        //'./dist/product-cart/vendor.js',
        './dist/product-cart/main.js',
    ]
    await fs.ensureDir('./dist-npm')
    await fs.ensureDir('./dist-npm/product-cart')
    await concat(files, './dist-npm/product-cart/product-cart.js');
    await fs.copyFile('./dist/product-cart/styles.css', './dist-npm/product-cart/styles.css')
    await fs.copy('./dist/product-cart/assets/', './dist-npm/product-cart/assets/' )
})();
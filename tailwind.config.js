module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "previous": "url('./../assets/icon-previous.svg')",
        "previousHover": "url('./../assets/icon-previous-hover.svg')",
        "next": "url('./../assets/icon-next.svg')",
        "nextHover": "url('./../assets/icon-next-hover.svg')",
        "closeModal": "url('./../assets/icon-close.svg')",
        "closeModalHover": "url('./../assets/icon-close-hover.svg')",
        "iconCartButton": "url('./../assets/icon-cart-white.svg')",
        "minusDisabled": "url('./../assets/icon-minus-disabled.svg')",
        "minus": "url('./../assets/icon-minus.svg')",
        "plus": "url('./../assets/icon-plus.svg')",
        "delete": "url('./../assets/icon-delete.svg')",
        "product": "url('./../assets/image-product-1-thumbnail.jpg')",
      },
      colors: {
        "orange": "hsl(26,100%,55%)",
        "paleOrange": "hsl(25,100%,94%)",
        "veryDarkBlue": "hsl(220,13%,13%)",
        "darkGrayishBlue": "hsl(219,9%,45%)",
        "grayishBlue": "hsl(220,14%,75%)",
        "lightGrayishBlue": "hsl(223,64%,98%)",
        "white": "hsl(0,0%,100%)",
        "black": "hsl(0,0%,50%,50%)"
      },
    },
  },
  plugins: [],
}
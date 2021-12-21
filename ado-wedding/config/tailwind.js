module.exports = {
    content: ["./app/**/*.{html,js, tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-image': "url('https://lh3.googleusercontent.com/pw/AM-JKLXGziij-A_6coEdT-NZg0WSR7PZg4Q93s-fiNfFHTaOCK5eUKmBZLPbifcKhYbtuljxG4kWRhAY2H30nN-j-yJfGCXPvI8S8ah9M39kawMhjPH1ti1qZ-yhjK5xhm8TgdCVNWn2_8ik-9mehtzh1piKKA=w960-h641-no?authuser=0')"
            }
        },
        fontFamily: {
            'display': ['Satisfy'],
            'body': ["Open Sans"]
        }
    },
    mode: "jit", // this will enable Tailwind JIT compiler to make the build faster
    purge: ["./app/**/*.{ts,tsx}"], // Here we are going to tell Tailwind to use any .ts or .tsx file to purge the CSS
    darkMode: "media", // Use media queries for dark mode, customize it as you want
    variants: {}, // activate any variant you want here
    plugins: [], // add any plugin you need here
}
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#090d1f',
                secondary: '#d6dbdc',
            },
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                xxs: '375px',
                xs: '480px',
                sm: '575px',
                md: '768px',
                lg: '991px',
                xl: '1199px',
                '2xl': '1399px',
            },
        },
        screens: {
            xxs: '375px',
            xs: '480px',
            sm: '575px',
            md: '768px',
            lg: '991px',
            xl: '1199px',
            '2xl': '1399px',
        },
	},
	plugins: [],
	darkMode: "class",
};
export default config;

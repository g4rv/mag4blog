import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#090D1F',
                purple: '#6941C6',
                pink: '#C11574',
                red: '#C4320A',
                green: '#027A48',
                blue: '#026AA2',
                drkBlue: '#3538CD',
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
                xl: '1199',
                '2xl': '1399px',
            },
        },
        screens: {
            xxs: '375px',
            xs: '480px',
            sm: '575px',
            md: '768px',
            lg: '991px',
            xl: '1199',
            '2xl': '1399px',
        },
    },
    plugins: [],
};
export default config;

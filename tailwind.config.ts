import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
			custom: {
				primary: '#249f21',
				danger: '#d00b0f',
				info: '#0c3185',
				accent: '#aefbf9',
				highlight: '#f4f553'
			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			danger: '#d00b0f',
  			info: '#0c3185',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			highlight: '#f4f553',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-poppins)',
  				'sans-serif'
  			],
  			poppins: [
  				'var(--font-poppins)',
  				'sans-serif'
  			],
  			montserrat: [
  				'var(--font-montserrat)',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			h1: [
  				'2.25rem',
  				{
  					lineHeight: '2.75rem',
  					fontWeight: '700'
  				}
  			],
  			h2: [
  				'1.875rem',
  				{
  					lineHeight: '2.25rem',
  					fontWeight: '700'
  				}
  			],
  			h3: [
  				'1.5rem',
  				{
  					lineHeight: '2rem',
  					fontWeight: '600'
  				}
  			],
  			h4: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem',
  					fontWeight: '600'
  				}
  			],
  			body1: [
  				'1rem',
  				{
  					lineHeight: '1.5rem',
  					fontWeight: '400'
  				}
  			],
  			body2: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem',
  					fontWeight: '400'
  				}
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

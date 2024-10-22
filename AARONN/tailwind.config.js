const { gray } = require('color-convert/conversions');
const { orange } = require('color-name');
const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   colors:{
    orange:'#FF9142',
    withe:'#FFFFFF',
    black:{
      100:'#1A1A1A',
      200:'rgba(3, 3, 4, 0.5)'
    },
    gray:'#A8A8A8',
    transparent:'transparent',
    
   },
   container:{
    padding:'150px 32px',
   },
   fontFamily:{
    'rubik':['Rubik','sans'],
    'Syne':['Syne','sans'],
    'inter':['Inter','sans']
   },
   
  },
  plugins: [],
}

import eyeshadow1 from "../assets/eyeshadow1.jpeg"
import eyeshadow2 from "../assets/eyeshadow2.jpeg"
import eyeshadow3 from "../assets/eyeshadow3.jpeg"
import eyeshadow4 from "../assets/eyeshadow4.jpeg"
import eyeshadow5 from "../assets/eyeshadow5.jpeg"

import lips1 from "../assets/lips1.jpeg"
import lips2 from "../assets/lips2.jpeg"
import lips3 from "../assets/lips3.jpeg"
import lips4 from "../assets/lips4.jpeg"

import rimel1 from "../assets/rimel1.jpeg"
import rimel2 from "../assets/rimel2.jpeg"

import unas1 from "../assets/unas1.jpeg"
import unas2 from "../assets/unas2.jpeg"
import unas3 from "../assets/unas3.jpeg"
import unas4 from "../assets/unas4.jpeg"
import unas5 from "../assets/unas5.jpeg"
import unas6 from "../assets/unas6.jpeg"
import unas7 from "../assets/unas7.jpeg"
import unas8 from "../assets/unas8.jpeg"
import unas9 from "../assets/unas9.jpeg"

const productos = [
    {
        id: 1,
        name: 'Sombra para ojos tono Azul',
        img: [eyeshadow1],
        description:'',
        price: 200,
        
    },

    {
        id: 2,
        name: 'Sombra para ojos multitono',
        img: [eyeshadow2],
        description:'',
        price: 250,
        
    },

    {
        id: 3,
        name: 'Sombra para ojos tono otoño',
        img: [eyeshadow3],
        description:'',
        price: 200,
        
    },

    {
        id: 4,
        name: 'Sombra para ojos tono invierno frio',
        img: [eyeshadow4],
        description:'',
        price: 200,
        
    },

    {
        id: 5,
        name: 'Sombra para ojos tonos rojos',
        img: [eyeshadow5],
        description:'',
        price: 250,
        
    },

    {
        id: 6,
        name: 'Labial rosa chicle',
        img: [lips1],
        description:'',
        price: 150,
        
    },

    {
        id: 7,
        name: 'Labial rosa pasion',
        img: [lips2],
        description:'',
        price: 150,
        
    },

    {
        id: 8,
        name: 'Labial fucsia interesante',
        img: [lips3],
        description:'',
        price: 150,
        
    },

    {
        id: 9,
        name: 'Labial rojo fuego',
        img: [lips4],
        description:'',
        price: 150,
        
    },

    {
        id: 10,
        name: 'Rimel tono Gris',
        img: [rimel1],
        description:'',
        price: 400,
        
    },

    {
        id: 11,
        name: 'Rimel tono Violeta',
        img: [rimel2],
        description:'',
        price: 400,
        
    },

    {
        id: 12,
        name: 'Pinta Uñas tono Rojo oscuro',
        img: [unas1],
        description:'',
        price: 150,
        
    },

    {
        id: 13,
        name: 'Pinta Uñas multicolor frios oscuros',
        img: [unas2],
        description:'',
        price: 150,
        
    },

    {
        id: 14,
        name: 'Pinta Uñas rosa con detalles',
        img: [unas3],
        description:'',
        price: 150,
        
    },

    {
        id: 15,
        name: 'Pinta Uñas pony azul metalizado',
        img: [unas4],
        description:'',
        price: 200,
        
    },

    {
        id: 16,
        name: 'Pinta Uñas gato cosmico azul metalizado',
        img: [unas5],
        description:'',
        price: 250,
        
    },

    {
        id: 17,
        name: 'Pinta Uñas gato cosmico violeta metalizado',
        img: [unas6],
        description:'',
        price: 250,
        
    },

    {
        id: 18,
        name: 'Pinta Uñas francia naranja',
        img: [unas7],
        description:'',
        price: 150,
        
    },

    {
        id: 19,
        name: 'Pinta Uñas rosa ovni',
        img: [unas8],
        description:'',
        price: 200,
        
    },

    {
        id: 20,
        name: 'Pinta Uñas Supergold',
        img: [unas9],
        description:'',
        price: 400,
        
    },

]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 2000)
})

export default getFetch
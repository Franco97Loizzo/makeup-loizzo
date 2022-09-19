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


export const productos = [
    {
        id: 1,
        name: 'Sombra para ojos tono Azul',
        img: [eyeshadow1],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 200,
        categoria:"sombra",
    },

    {
        id: 2,
        name: 'Sombra para ojos multitono',
        img: [eyeshadow2],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 250,
        categoria: "sombra",
    },

    {
        id: 3,
        name: 'Sombra para ojos tono otoño',
        img: [eyeshadow3],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 200,
        categoria:"sombra",
    },

    {
        id: 4,
        name: 'Sombra para ojos tono invierno frio',
        img: [eyeshadow4],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 200,
        categoria: "sombra",
    },

    {
        id: 5,
        name: 'Sombra para ojos tonos rojos',
        img: [eyeshadow5],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 250,
        categoria: "sombra",
    },

    {
        id: 6,
        name: 'Labial rosa chicle',
        img: [lips1],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 150,
        categoria: "labio",
    },

    {
        id: 7,
        name: 'Labial rosa pasion',
        img: [lips2],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 150,
        categoria: "labio",
    },

    {
        id: 8,
        name: 'Labial fucsia interesante',
        img: [lips3],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 150,
        categoria: "labio",
    },

    {
        id: 9,
        name: 'Labial rojo fuego',
        img: [lips4],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 150,
        categoria: "labio",
    },

    {
        id: 10,
        name: 'Rimel tono Gris',
        img: [rimel1],
        description:'',
        price: 400,
        categoria:"rimel",
    },

    {
        id: 11,
        name: 'Rimel tono Violeta',
        img: [rimel2],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 400,
        categoria: "rimel",
    },

    {
        id: 12,
        name: 'Pinta Uñas tono Rojo oscuro',
        img: [unas1],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 150,
        categoria: "unas",
    },

    {
        id: 13,
        name: 'Pinta Uñas multicolor frios oscuros',
        img: [unas2],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 150,
        categoria: "unas",
    },

    {
        id: 14,
        name: 'Pinta Uñas rosa con detalles',
        img: [unas3],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 150,
        categoria: "unas",
    },

    {
        id: 15,
        name: 'Pinta Uñas pony azul metalizado',
        img: [unas4],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 200,
        categoria: "unas",
    },

    {
        id: 16,
        name: 'Pinta Uñas gato cosmico azul metalizado',
        img: [unas5],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 250,
        categoria: "unas",
    },

    {
        id: 17,
        name: 'Pinta Uñas gato cosmico violeta metalizado',
        img: [unas6],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 250,
        categoria: "unas",
    },

    {
        id: 18,
        name: 'Pinta Uñas francia naranja',
        img: [unas7],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 150,
        categoria: "unas",
    },

    {
        id: 19,
        name: 'Pinta Uñas rosa ovni',
        img: [unas8],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 200,
        categoria: "unas",
    },

    {
        id: 20,
        name: 'Pinta Uñas Supergold',
        img: [unas9],
        description:'Esta es una descripcion un poco default para poder realizar el desafio',
        price: 400,
        categoria: "unas",
    },

]



const getFetch = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 2000)
})

export default getFetch

/*
https://i.ibb.co/CnCcR2y/rimel1.jpg
https://i.ibb.co/6WNpwS5/rimel2.jpg
https://i.ibb.co/z526d86/unas1.jpg
https://i.ibb.co/4jd0Sfn/unas2.jpg
https://i.ibb.co/WymYRdV/unas3.jpg
https://i.ibb.co/WtjGLnv/unas4.jpg
https://i.ibb.co/tD2qDWX/unas5.jpg
https://i.ibb.co/nBLS9SQ/unas6.jpg
https://i.ibb.co/y6bn7fb/unas7.jpg
https://i.ibb.co/0rTV2Qf/unas8.jpg
https://i.ibb.co/7y7GyG4/unas9.jpg */
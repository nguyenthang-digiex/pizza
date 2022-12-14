import Pizza1 from "../asses/pizza1.png";
import Pizza2 from "../asses/pizza2.png";
import Pizza3 from "../asses/pizza3.png";
import Pizza4 from "../asses/pizza4.png";
import Pizza5 from "../asses/pizza5.png";
import Pizza6 from "../asses/pizza6.png";
import Pizza7 from "../asses/pizza7.png";
import Burger1 from "../asses/burger1.png";
import Burger2 from "../asses/burger2.png";
import Burger3 from "../asses/burger3.png";
import Burger4 from "../asses/burger4.png";
import Pasta from "../asses/pasta.png";
import Pasta1 from "../asses/pasta1.png";
import Pasta2 from "../asses/pasta2.png";
import Pasta3 from "../asses/pasta3.png";

export interface obj {
    id?: string;
    image: string
    name: string
    title?: string
    price: string
    oldPrice: string
    status?: string
}

export interface nameCategory {
    id?: string
    name?: string
}

export const pizzaList: obj[] = [
    {
        id: '1',
        image: Pizza1,
        name: 'Hawaii Vegetarian Pizza',
        price: '100.000đ',
        oldPrice: ' 300.000đ',
        status: 'SMALL'
    },
    {
        id: '2',
        image: Pizza2,
        name: 'Hawaii Vegetarian Pizza',
        price: '200.000đ',
        oldPrice: ' 500.000đ',
        status: 'BIG'
    },
    {
        id: '3',
        image: Pizza3,
        name: 'Hawaii Vegetarian Pizza',
        price: '80.000đ',
        oldPrice: ' 400.000đ',
        status: 'BIG'
    },
    {
        id: '4',
        image: Pizza4,
        name: 'Hawaii Vegetarian Pizza',
        price: '150.000đ',
        oldPrice: ' 300.000đ',
        status: 'SMALL'
    },
    {
        id: '5',
        image: Pizza5,
        name: 'Hawaii Vegetarian Pizza',
        price: '200.000đ',
        oldPrice: ' 500.000đ',
        status: 'BIG'
    },
    {
        id: '6',
        image: Pizza6,
        name: 'Hawaii Vegetarian Pizza',
        price: '80.000đ',
        oldPrice: ' 400.000đ',
        status: 'BIG'
    },
    {
        id: '7',
        image: Pizza7,
        name: 'Hawaii Vegetarian Pizza',
        price: '150.000đ',
        oldPrice: ' 300.000đ',
        status: 'SMALL'
    },
    {
        id: '8',
        image: Pizza2,
        name: 'Hawaii Vegetarian Pizza',
        price: '200.000đ',
        oldPrice: ' 500.000đ',
        status: 'BIG'
    },
    {
        id: '9',
        image: Pizza3,
        name: 'Hawaii Vegetarian Pizza',
        price: '80.000đ',
        oldPrice: ' 400.000đ',
        status: 'BIG'
    },
    {
        id: '10',
        image: Pizza4,
        name: 'Hawaii Vegetarian Pizza',
        price: '150.000đ',
        oldPrice: ' 300.000đ',
        status: 'BIG'
    },
    {
        id: '11',
        image: Pizza1,
        name: 'Hawaii Vegetarian Pizza',
        price: '80.000đ',
        oldPrice: ' 400.000đ',
        status: 'BIG'
    },
    {
        id: '12',
        image: Pizza4,
        name: 'Hawaii Vegetarian Pizza',
        price: '150.000đ',
        oldPrice: ' 300.000đ',
        status: 'SMALL'
    },
]
export const burgerList: obj[] = [
    {
        id: '1',
        image: Burger1,
        name: 'Hawaii Vegetarian Burger',
        price: '100.000',
        oldPrice: '300.000',
        status: 'SMALL'
    }, {
        id: '2',
        image: Burger2,
        name: 'Chicken Hawaii',
        price: '100.000',
        oldPrice: '300.000',
        status: 'SMALL'
    }, {
        id: '3',
        image: Burger3,
        name: 'Summer Burger',
        price: '100.000',
        oldPrice: '300.000',
        status: 'SMALL'
    }, {
        id: '4',
        image: Burger1,
        name: 'Hawaii Vegetarian Burger',
        price: '100.000',
        oldPrice: '300.000',
        status: 'SMALL'
    }, {
        id: '5',
        image: Burger2,
        name: 'Chicken Hawaii',
        price: '100.000',
        oldPrice: '400.000',
        status: 'BIG'
    }, {
        id: '6',
        image: Burger3,
        name: 'Summer Burger',
        price: '100.000',
        oldPrice: '700.000',
        status: 'BIG'
    }, {
        id: '7',
        image: Burger1,
        name: 'Hawaii Vegetarian Burger',
        price: '100.000',
        oldPrice: '500.000',
        status: 'BIG'
    }, {
        id: '8',
        image: Burger4,
        name: 'Hawaii Vegetarian Burger',
        price: '100.000',
        oldPrice: '300.000',
        status: 'SMALL'
    }, {
        id: '9',
        image: Burger2,
        name: 'Chicken Hawaii',
        price: '100.000',
        oldPrice: '500.000',
        status: 'BIG'
    }, {
        id: '10',
        image: Burger3,
        name: 'Summer Burger',
        price: '100.000',
        oldPrice: '400.000',
        status: 'BIG'
    }, {
        id: '11',
        image: Burger4,
        name: 'Hawaii Vegetarian Burger',
        price: '100.000',
        oldPrice: '300.000',
        status: 'SMALL'
    },{
        id: '12',
        image: Burger3,
        name: 'Summer Burger',
        price: '100.000',
        oldPrice: '500.000',
        status: 'BIG'
    },
]
export const pastaList: obj[] = [
    {
        id: '1',
        image: Pasta,
        name: 'BBQ Chicken Breast',
        price: '50.000',
        oldPrice: '300.000',
        status: 'BIG'
    },{
        id: '2',
        image: Pasta1,
        name: 'Bolognese Pasta',
        price: '50.000',
        oldPrice: '70.000',
        status: 'BIG'
    },{
        id: '3',
        image: Pasta2,
        name: 'Molto Tagliatelle',
        price: '60.000',
        oldPrice: '80.000',
        status: 'BIG'
    },{
        id: '4',
        image: Pasta3,
        name: 'Pene Salmone',
        price: '30.000',
        oldPrice: '50.000',
        status: 'SMALL'
    },
]
export const saladList: obj[] = []
export const tacosList: obj[] = []
export const wrapsList: obj[] = []

export const categoryList: nameCategory[] = [
    {
        id: '1',
        name: 'Pizza'
    },{
        id: '2',
        name: 'Burger'
    },{
        id: '3',
        name: 'Salas'
    },{
        id: '4',
        name: 'Tacos'
    },{
        id: '5',
        name: 'Wraps'
    },{
        id: '6',
        name: 'Pasta'
    },{
        id: '7',
        name: 'Drinks'
    },
]





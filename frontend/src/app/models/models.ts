export interface AuthToken {
<<<<<<< HEAD
    token: string;
=======
    access: string;
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979
};

export interface SignUpToken {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
};

export enum RecipeCategory {
    salad = "Salad", 
    burger = "Burger", 
    italian = "Italian", 
    soup = "Soup", 
    meat = "Meat", 
};

export interface ICategoriesList {
    id: number;
    category: RecipeCategory;
}

export const CategoriesList: ICategoriesList[] = [
    { id: 1, category: RecipeCategory.salad },
    { id: 2, category: RecipeCategory.burger },
    { id: 3, category: RecipeCategory.italian },
    { id: 4, category: RecipeCategory.soup },
    { id: 5, category: RecipeCategory.meat },
];

export interface ICategory {
    id: number;
    category_id: number;
    imgURL: string;
    title: string;
    category: RecipeCategory;
};

export interface IRecipe {
    id: number;
    category_id: number;
    name: string;
    image: string;
    description: string;
<<<<<<< HEAD
    category: RecipeCategory;
    steps: string[];
=======
    steps: string;
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979
};

export interface IMasterClass {
    id: number;
    name: string;
<<<<<<< HEAD
    date: Date;
=======
    date: string;
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979
    duration: number;
    location: string;
    description: string,
    image: string;
    price: number,
    maxAttendees: number,
    attendees: string[],
}
function cookingStatus (time) {
    switch (time) {
        case 0:
            return 'Lasagna is done.';
        case undefined :
            return 'You forgot to set the timer.';
        default:
            return 'Not done, please wait.';
    }
}

function preparationTime(layers, average) {
    return average === undefined ? layers.length * 2 : layers.length * average;
}

function quantities(layers) {
    let noodles= 0;
    let sauce = 0;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles')
            noodles += 50;
        else if (layers[i] === 'sauce')
            sauce += 0.2;
    }
    return {noodles, sauce};
}

function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

function scaleRecipe(recipe, countYet) {
    if (countYet === undefined || countYet === 0 || countYet === 2)
        return recipe;
    const newRecipe = {...recipe}
    for (let recipeKey in newRecipe) {
        newRecipe[recipeKey] /= 2;
    }
    console.log(newRecipe)
    for (let key in newRecipe) {
        newRecipe[key] *= countYet;
    }
    return newRecipe;
}


//console.log(cookingStatus(2));
//console.log(preparationTime(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'], 3))
//console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));
const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

//addSecretIngredient(friendsList, myList);

//console.log(myList);
//// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']

const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};

console.log(scaleRecipe(recipe, 3));
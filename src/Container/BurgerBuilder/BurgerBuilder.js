import React, { useState } from 'react';
import Aux from '../../hoc/Auxy'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 2,
    meat: 3,
    bacon: 4
};


const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    })
    const [totalPrice, setTotalPrice] = useState(4)

    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;
        setIngredients(updatedIngredients)
        setTotalPrice(newPrice)

    }
    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceDeduction;
        setIngredients(updatedIngredients)
        setTotalPrice(newPrice)
    }
    const disabledInfo = {
        ...ingredients
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
        <Aux>
            <Burger ingredients={ingredients} />
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabled={disabledInfo}
                price={totalPrice}
            />
        </Aux>
    );
}


export default BurgerBuilder;
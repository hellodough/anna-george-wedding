import React, { FormEvent, useEffect } from "react";

export const MealChoice = ({
    mealChoice,
    onMealChoiceChange,
    fieldPrefix = ""
}: {
    mealChoice: string;
    onMealChoiceChange: (mealChoice: string) => void;
    fieldPrefix?: string;
}) => {
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    onMealChoiceChange(e.currentTarget.value);
  };
  return (
    <>
      <div>
        <input
          id={`${fieldPrefix}Meat`}
          name={`${fieldPrefix}Choice`}
          type="radio"
          value="meat"
          checked={mealChoice === "meat"}
          onChange={onChange}
        />
        <label htmlFor={`${fieldPrefix}Meat`} className="m-2">
          Meat
        </label>
      </div>
      <div>
        <input
          id={`${fieldPrefix}Chicken`}
          name={`${fieldPrefix}Choice`}
          type="radio"
          value="chicken"
          checked={mealChoice === "chicken"}
          onChange={onChange}
        />
        <label htmlFor={`${fieldPrefix}Chicken`} className="m-2">
          Chicken
        </label>
      </div>
      <div>
        <input
          id={`${fieldPrefix}Veg`}
          name={`${fieldPrefix}Choice`}
          type="radio"
          value="vegetarian"
          checked={mealChoice === "vegetarian"}
          onChange={onChange}
        />
        <label htmlFor={`${fieldPrefix}Veg`} className="m-2">
          Vegetarian
        </label>
      </div>
    </>
  );
};

import { MealChoice } from "./MealChoice";

const MealChoiceField = ({
  name,
  mealChoice,
  guestMealChoice,
  guestName,
  onMealChoiceChange,
  onGuestMealChoiceChange,
}: {
  name: string;
  mealChoice: string;
  guestMealChoice: string;
  guestName: string;
  onMealChoiceChange: (choice: string) => void;
  onGuestMealChoiceChange: (choice: string) => void;
}) => {
  return (
    <fieldset>
      <label>
        <strong>Meal Options</strong>
      </label>
      <p className="pb-3 text-sm">
        We will update this with specific dishes when we finalize the menu
      </p>
      <div className="flex text-left justify-evenly gap-4">
        <div>
          {guestName && <p>{name}'s meal choice</p>}
          <MealChoice
            fieldPrefix="meal"
            mealChoice={mealChoice}
            onMealChoiceChange={onMealChoiceChange}
          />
        </div>
        {guestName && (
          <div>
            <p>{guestName}'s meal choice</p>
            <MealChoice
              fieldPrefix="guestMeal"
              mealChoice={guestMealChoice}
              onMealChoiceChange={onGuestMealChoiceChange}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default MealChoiceField;

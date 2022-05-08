import { HeaderNav } from "~/components/HeaderNav/HeaderNav";
import { Form, json, useActionData } from "remix";
import React, { FormEvent, useEffect } from "react";
import { prisma } from "~/db.server";
import { createUser } from "~/utils/guests.server";
import { RSVPForm } from "~/utils/types.server";
import { InputField } from "./InputField";
import { formatGuestName } from "./helpers";

async function findUser({ request }) {
  const bodyParams = await request.formData();
  const name = bodyParams.get("name");
  const exists = await prisma.guest.count({
    where: { name: formatGuestName(name) },
  });
  return { exists };
}

export async function action({ request }) {
  const bodyParams = await request.formData();
  const searchUser = bodyParams.get("searchUser");
  const name = bodyParams.get("name");
  const email = bodyParams.get("email");
  const diets = bodyParams.get("dietaryRestrictions");
  const attending = bodyParams.get("attending");
  const guestName = bodyParams.get("guestName");
  const mealChoice = bodyParams.get("mealChoice");

  // search user and return data
  if (searchUser) {
    // const exists = await prisma.guest.count({
    //   where: { name: formatGuestName(name) },
    // });
    const foundUser = await prisma.guest.findUnique({
      where: { name: formatGuestName(name) },
    });

    if (foundUser) {
      console.log(`${name} has already RSVPed, see you in July!`);
      const formData = {
        ...foundUser,
        attending: true ? "attending" : "notAttending",
      };
      console.log(formData);
      return json({ ...formData, exists: true, searched: true });
    }

    console.log("could not find user");

    return json({ exists: false, searched: true });
  }

  if (name && attending !== null) {
    const exists = await prisma.guest.count({
      where: { name: formatGuestName(name) },
    });
    const formData: RSVPForm = {
      name: formatGuestName(name),
      email,
      attending: attending === "attending",
      guestName: guestName && formatGuestName(guestName),
      dietRestrictions: diets,
      mealChoice,
    };

    const guestInfo = await createUser(formData);
    if (!guestInfo) {
      return json(
        {
          error: `Something went wrong trying to create a new user.`,
        },
        { status: 400 }
      );
    }

    return json({ success: true, ...formData, exists });
  }

  return json({
    nameError: !name,
    attendingError: !attending,
  });
}

export default function RSVP() {
  const data = useActionData();

  const userSearched = data?.searched;
  const [name, setName] = React.useState<string | undefined>(
    data?.success || data?.name
  );
  const [showGuestFields, setShowGuestFields] = React.useState(false);
  const [email, setEmail] = React.useState<string | undefined>(undefined);
  const [guestName, setGuestName] = React.useState<string | undefined>(
    undefined
  );
  const [showForm, setShowForm] = React.useState(false);
  const [attending, setAttending] = React.useState<string | undefined>(
    undefined
  );
  const [mealChoice, setMealChoice] = React.useState<string | undefined>(
    undefined
  );
  const onAddClick = () => {
    setShowGuestFields(true);
  };

  const onRemove = () => {
    setShowGuestFields(false);
  };

  const onShowFormClick = () => {
    setShowForm(true);
  };

  const onGuestNameChange = (updatedName: string) => {
    setGuestName(updatedName);
  };

  const onAttendingChange = (e: FormEvent<HTMLInputElement>) => {
    setAttending(e.currentTarget.value);
  };

  const onMealChoiceChange = (e: FormEvent<HTMLInputElement>) => {
    setMealChoice(e.currentTarget.value);
  };

  const onEmailChange = (updatedEmail: string) => {
    setEmail(updatedEmail);
  };

  const onNameChange = (updatedName: string) => {
    setName(updatedName);
  };

  useEffect(() => {
    setShowForm(!!data?.success || data?.exists);
    setAttending(data?.attending);
    setName(data?.name);
    setMealChoice(data?.mealChoice);
    setShowGuestFields(data?.guestName);
    setGuestName(data?.guestName);
    setEmail(data?.email);
  }, [data]);

  return (
    <div className="h-screen">
      <HeaderNav currentPage="RSVP" />
      <div className="lg:px-20 sm:px-4 pt-52 font-body">
        <div className="grid xs:gap-1 gap-6 grid-cols-1 md:grid-cols-2 justify-items-center items-start">
          <div className="hidden md:flex items-baseline">
            <img src="https://github.com/hellodough/anna-george-wedding/blob/main/assets/images/bw_square.jpg?raw=true" />
          </div>
          <div className="flex items-center s:col-span-3 text-center">
            <div>
              <h1 className="text-sky-700 font-display text-4xl lg:text-5xl mb-7">
                RSVP
              </h1>
              {data?.success && !showForm ? (
                <>
                  <p>Submitted! Thanks for sharing!</p>
                  <button
                    className="btn-secondary uppercase mt-8 mr-8"
                    type="button"
                    onClick={onShowFormClick}
                  >
                    Change response
                  </button>
                  <a href="/travel" className="btn-secondary uppercase mt-8">
                    Book a hotel
                  </a>
                </>
              ) : (
                <>
                  {data?.success && (
                    <p className="mb-6 font-body justify-center">
                      Note: you have already replied, but feel free to change
                      any details
                    </p>
                  )}
                  <p className="lg:text-base xs:text-sm mb-6 font-body max-w-sm">
                    Please kindly respond no later than <strong>June 25</strong>
                  </p>
                  <p className="lg:text-base xs:text-sm mb-6 font-body max-w-sm">
                    No need to fill the form out if you already replied by mail
                    unless you want to change your response.
                  </p>
                  <Error showError={data?.nameError || data?.attendingError} />
                  <Form replace method="post">
                    <div className="flex gap-1 justify-around">
                      <InputField
                        text="name"
                        value={name}
                        error={data?.nameError}
                        onFieldChange={onNameChange}
                      />
                      {name && !userSearched && (
                        <>
                          <input type="hidden" name="searchUser" value="true" />
                          <button
                            type="submit"
                            className="btn-secondary uppercase mt-8"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                    {userSearched && (
                      // attendance
                      <div className="flex mt-8 gap-4 justify-center">
                        <div>
                          <label htmlFor="attendingYes" className="mr-2">
                            yes, I will be there
                          </label>
                          <input
                            id="attendingYes"
                            name="attending"
                            type="radio"
                            value="attending"
                            checked={attending === "attending"}
                            onChange={onAttendingChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="attendingNo" className="mr-2">
                            sorry, I can't come
                          </label>
                          <input
                            id="attendingNo"
                            name="attending"
                            type="radio"
                            value="notAttending"
                            checked={attending === "notAttending"}
                            onChange={onAttendingChange}
                          />
                        </div>
                      </div>
                    )}
                    {data?.attendingError && attending == undefined && (
                      <p className="text-red-700">
                        Please let us know if you can come
                      </p>
                    )}
                    {attending === "attending" && (
                      <div>
                        {/* additional guest selection */}
                        {showGuestFields ? (
                          <div className="flex pt-3 gap-5 justify-center">
                            <InputField
                              text="guest name"
                              value={guestName}
                              onFieldChange={onGuestNameChange}
                            />
                            <button
                              type="button"
                              onClick={onRemove}
                              className="btn-secondary uppercase mt-8"
                            >
                              remove
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={onAddClick}
                            className="btn-secondary uppercase mt-8"
                          >
                            add guest
                          </button>
                        )}
                        <div className="flex pt-3 gap-5 justify-center">
                          <InputField
                            text="email"
                            value={email}
                            onFieldChange={onEmailChange}
                          />
                          <InputField
                            text="dietary restrictions"
                            value={data?.success && data.dietaryRestrictions}
                          />
                        </div>
                        {/* meal options */}
                        <div className="pt-3">
                          <fieldset>
                            <label>Meal Options</label>
                            <p className="pb-3">
                              We will update this with specific dishes when we
                              finalize the menu
                            </p>
                            <label htmlFor="mealMeat" className="mr-2">
                              Meat
                            </label>
                            <input
                              id="mealMeat"
                              name="mealChoice"
                              type="radio"
                              value="meat"
                              checked={mealChoice === "meat"}
                              onChange={onMealChoiceChange}
                            />
                            <label htmlFor="mealChicken" className="mr-2">
                              Chicken
                            </label>
                            <input
                              id="mealChicken"
                              name="mealChoice"
                              type="radio"
                              value="chicken"
                              checked={mealChoice === "chicken"}
                              onChange={onMealChoiceChange}
                            />
                            <label htmlFor="mealVeg" className="mr-2">
                              Vegetarian
                            </label>
                            <input
                              id="mealVeg"
                              name="mealChoice"
                              type="radio"
                              value="vegetarian"
                              checked={mealChoice === "vegetarian"}
                              onChange={onMealChoiceChange}
                            />
                          </fieldset>
                        </div>
                      </div>
                    )}
                    {userSearched && (
                      <button
                        className="btn-primary uppercase mt-14"
                        type="submit"
                      >
                        confirm
                      </button>
                    )}
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Error = ({ showError }: { showError?: boolean }) => {
  if (showError) {
    return (
      <div className="px-2 py-3 border-solid rounded-md bg-red-700 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        There were some errors, please make sure you submit a name and
        attendance response
      </div>
    );
  }

  return null;
};

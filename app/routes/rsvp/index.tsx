import { HeaderNav } from "~/components/HeaderNav/HeaderNav";
import { Form, json, useActionData } from "remix";
import React, { useEffect, useImperativeHandle } from "react";
import { prisma } from "~/db.server";
import { submitResponse } from "~/utils/guests.server";
import { RSVPForm } from "~/utils/types.server";
import { InputField } from "./InputField";
import { formatGuestName } from "./helpers";
import MealChoiceField from "./components/MealChoiceField";
import GuestField from "./components/GuestField";
import AttendingField from "./components/AttendingField";
import SearchUser from "./components/SearchUser";
import NextSteps from "./components/NextSteps";
import Error from "./components/Error";

export async function action({ request }) {
  const bodyParams = await request.formData();
  const searchUser = bodyParams.get("searchUser");
  const name = bodyParams.get("name");
  const email = bodyParams.get("email");
  const diets = bodyParams.get("dietaryRestrictions");
  const attending = bodyParams.get("attending");
  const guestName = bodyParams.get("guestName");
  const mealChoice = bodyParams.get("mealChoice");
  const guestMealChoice = bodyParams.get("guestMealChoice");
  const userExists = bodyParams.get("userExists");

  // search user and return data
  if (searchUser) {
    const results = await prisma.guest.findMany({
      where: {
        OR: [
          {
            name: {
              contains: formatGuestName(name),
            },
          },
          {
            guestName: {
              contains: formatGuestName(name),
            },
          },
        ],
      },
    });

    if (results.length > 0) {
      return json({ possibleGuests: results, searched: true });
    }

    return json({ name, exists: false, searched: true });
  }

  if (name && attending !== null) {
    const formData: RSVPForm = {
      name: formatGuestName(name),
      email,
      attending: attending === "attending",
      guestName: guestName && formatGuestName(guestName),
      dietRestrictions: diets,
      mealChoice,
      guestMealChoice,
    };

    const guestInfo = await submitResponse(formData, userExists);
    if (!guestInfo) {
      return json(
        {
          error: `Something went wrong trying to create or update user.`,
        },
        { status: 400 }
      );
    }

    return json({ success: true, ...formData });
  }

  return json({
    nameError: !name,
    attendingError: !attending,
  });
}

export default function RSVP() {
  const data = useActionData();

  const [name, setName] = React.useState(data?.success || data?.name || "");
  const [showGuestFields, setShowGuestFields] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [guestName, setGuestName] = React.useState("");
  const [userExists, setUserExists] = React.useState(0);
  const [attending, setAttending] = React.useState("");
  const [mealChoice, setMealChoice] = React.useState("");
  const [guestMealChoice, setGuestMealChoice] = React.useState("");
  const [diet, setDiet] = React.useState("");
  const [showNextSteps, setShowNextSteps] = React.useState(false);
  const [userSearched, setUserSearched] = React.useState(false);
  const [possibleGuests, setPossibleGuests] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const onAddClick = () => {
    setShowGuestFields(true);
  };

  const onRemove = () => {
    setShowGuestFields(false);
    setGuestName("");
  };

  const onShowFormClick = () => {
    setShowNextSteps(false);
    setShowForm(true);
  };

  const onGuestNameChange = (updatedName: string) => {
    setGuestName(updatedName);
  };

  const onAttendingChange = (attendingChecked: string) => {
    setAttending(attendingChecked);
  };

  const onMealChoiceChange = (updatedMealChoice: string) => {
    setMealChoice(updatedMealChoice);
  };

  const onEmailChange = (updatedEmail: string) => {
    setEmail(updatedEmail);
  };

  const onNameChange = (updatedName: string) => {
    setName(updatedName);
  };

  const onDietChange = (updatedDiet: string) => {
    setDiet(updatedDiet);
  };

  useEffect(() => {
    setShowNextSteps(data?.success);
    setAttending(data?.attending ? "attending" : "notAttending");
    setName(data?.name || "");
    setMealChoice(data?.mealChoice || "");
    setGuestMealChoice(data?.guestMealChoice || "");
    setShowGuestFields(data?.guestName ? true : false);
    setGuestName(data?.guestName || "");
    setEmail(data?.email || "");
    setDiet(data?.dietRestrictions || "");
    setUserSearched(data?.searched || data?.success);
    setPossibleGuests(data?.possibleGuests || []);
  }, [data]);

  useEffect(() => {
    setShowForm(userSearched && possibleGuests.length === 0);
  }, [userSearched, possibleGuests]);

  const setNewForm = () => {
    setUserExists(0);
    setPossibleGuests([]);
  };

  const PossibleGuest = (guest: RSVPForm) => {
    const onClick = () => {
      setAttending(guest.attending ? "attending" : "notAttending");
      setName(guest.name);
      setMealChoice(guest.mealChoice || "");
      setGuestMealChoice(guest.guestMealChoice || "");
      setShowGuestFields(guest.guestName ? true : false);
      setGuestName(guest.guestName || "");
      setEmail(guest.email || "");
      setUserExists(1);
      setDiet(guest.dietRestrictions || "");
      setPossibleGuests([]);
      setUserSearched(true);
    };
    return (
      <button
        type="button"
        onClick={onClick}
        className="block text-blue-600 hover:underline px-4"
      >
        {guest.name}
      </button>
    );
  };

  return (
    <div className="h-screen">
      <HeaderNav currentPage="RSVP" />
      <div className="2xl:px-96 xl:px-40 lg:px-20 sm:px-4 sm:pt-32 pt-10 font-body">
        <div className="grid xs:gap-1 gap-6 grid-cols-1 md:grid-cols-2 justify-items-center items-start">
          <div className="hidden md:flex items-baseline max-w-lg">
            <img src="https://github.com/hellodough/anna-george-wedding/blob/main/assets/images/bw_square.jpg?raw=true" />
          </div>
          <div className="flex items-center text-center max-w-lg px-2">
            <div>
              <h1 className="text-sky-700 font-display text-4xl lg:text-5xl mb-7">
                RSVP
              </h1>

              {showNextSteps ? (
                <NextSteps onShowFormClick={onShowFormClick} />
              ) : (
                <>
                  <p className="lg:text-base xs:text-sm mb-6 font-body max-w-m">
                    Please kindly respond no later than <strong>June 25</strong>
                  </p>
                  <p className="lg:text-base xs:text-sm mb-6 font-body max-w-m italic">
                    No need to fill the form out if you already replied by mail
                    unless you want to change your response.
                  </p>
                  <Error showError={data?.nameError || data?.attendingError} />
                  <Form replace method="post">
                    {possibleGuests?.length === 0 && (
                      <>
                        <SearchUser
                          name={name}
                          onNameChange={onNameChange}
                          userSearched={userSearched}
                          error={data?.nameError}
                        />
                        {showForm && (
                          <div className="flex mt-8 gap-4 justify-center">
                            <AttendingField
                              attending={attending}
                              onAttendingChange={onAttendingChange}
                            />
                          </div>
                        )}
                      </>
                    )}
                    {possibleGuests.length > 0 && (
                      <div>
                        <div>Click the correct name</div>
                        {possibleGuests.map((guest) => (
                          <PossibleGuest {...guest} />
                        ))}
                        <button
                          type="button"
                          onClick={setNewForm}
                          className="block text-blue-600 hover:underline px-4"
                        >
                          New RSVP response
                        </button>
                      </div>
                    )}
                    {data?.attendingError && attending == undefined && (
                      <p className="text-red-700">
                        Please let us know if you can come
                      </p>
                    )}
                    {attending === "attending" && (
                      <div>
                        <GuestField
                          showGuestField={showGuestFields}
                          onGuestNameChange={onGuestNameChange}
                          onRemove={onRemove}
                          onAddClick={onAddClick}
                          guestName={guestName}
                        />
                        <div className="flex pt-3 gap-5 justify-center">
                          <InputField
                            text="email"
                            value={email}
                            onFieldChange={onEmailChange}
                          />
                          <InputField
                            text="dietary restrictions"
                            value={diet}
                            onFieldChange={onDietChange}
                          />
                        </div>
                        <div className="pt-4">
                          <MealChoiceField
                            name={name}
                            guestName={guestName}
                            mealChoice={mealChoice}
                            guestMealChoice={guestMealChoice}
                            onMealChoiceChange={onMealChoiceChange}
                            onGuestMealChoiceChange={setGuestMealChoice}
                          />
                        </div>
                      </div>
                    )}
                    <input type="hidden" name="userExists" value={userExists} />
                    {showForm && (
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

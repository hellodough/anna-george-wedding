import { InputField } from "../InputField";

export const GuestField = ({
  showGuestField,
  onAddClick,
  onGuestNameChange,
  guestName,
  onRemove,
}: {
  showGuestField: boolean;
  onGuestNameChange: (name: string) => void;
  onAddClick: () => void;
  onRemove: () => void;
  guestName: string;
}) => {
  if (showGuestField) {
    return (
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
    );
  }

  return (
    <button
      type="button"
      onClick={onAddClick}
      className="btn-secondary uppercase mt-8"
    >
      add guest
    </button>
  );
};

export default GuestField;

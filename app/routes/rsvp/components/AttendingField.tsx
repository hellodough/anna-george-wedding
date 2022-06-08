import { FormEvent } from "react";

const AttendingField = ({
  attending,
  onAttendingChange,
}: {
  attending: string;
  onAttendingChange: (attending: string) => void;
}) => {

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    onAttendingChange(e.currentTarget.value);
  };

  return (
    <>
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
          onChange={onChange}
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
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default AttendingField;

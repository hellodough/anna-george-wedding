const NextSteps = ({ onShowFormClick }: { onShowFormClick: () => void }) => {
  return (
    <div>
      <p>Submitted! Thanks for sharing!</p>
      <div className="flex gap-4 flex-wrap items-center flex-col mt-8">
        <div className="sm:w-full flex-grow">
          <button
            className="btn-secondary uppercase"
            type="button"
            onClick={onShowFormClick}
          >
            Change response
          </button>
        </div>
        <div className="sm:w-full flex-grow">
          <a href="/travel" className="btn-secondary uppercase">
            Book a hotel
          </a>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;

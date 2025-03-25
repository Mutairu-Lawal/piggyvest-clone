export default function Logo() {
  return (
    <div className="font-semibold text-4xl mb-3 flex justify-center items-center gap-2">
      <a href="/" aria-label="click to go to the piggyvest homepage">
        <img
          src="https://res.cloudinary.com/dymnal33p/image/upload/f_auto,q_auto/v1/piggyvestclone/zmbcjfvfth3koswox7nr"
          alt="piggyvest-logo"
          className="w-16 h-16 object-contain"
        />
      </a>
      <h1 className="font-plus-jakartas font-extrabold">piggyVest</h1>
    </div>
  );
}

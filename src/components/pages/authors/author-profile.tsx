import AuthorAbout from "./author-about";
import AuthorData from "./author-data";

function AuthorProfile() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-[350px_1fr] gap-24">
      <AuthorData />
      <AuthorAbout />
    </div>
  );
}

export default AuthorProfile;

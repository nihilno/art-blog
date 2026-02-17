import AuthorAbout from "./author-about";
import AuthorData from "./author-data";

function AuthorProfile() {
  return (
    <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-24 lg:grid-cols-[350px_1fr]">
      <AuthorData />
      <AuthorAbout />
    </div>
  );
}

export default AuthorProfile;

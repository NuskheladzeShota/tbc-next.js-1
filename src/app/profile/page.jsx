import "./profile.css";

export default function Profile() {
  return (
    <div className="main">
      <form className="form">
        <div className="name">
          <label>
            <span>First Name:</span>
            <input type="text" name="first name" />
          </label>
          <label>
            <span>Last Name:</span>
            <input type="text" name="last name" />
          </label>
        </div>
        <label>
          <span>Image URL:</span>
          <input type="url" name="image" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </form>
    </div>
  );
}

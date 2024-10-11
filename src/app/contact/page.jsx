import './contact.css';

export default function Contact() {
  return (
    <main className="main">
      <h1>Contact Us</h1>
      <p>Phone: +995 555 123 343</p>
      <p>Email: contact@dune.com</p>

      <h2>Send Us a Message</h2>
      <form className="form">
        <div className="name">
          <label>
            <span>First Name:</span>
            <input type="text" name="name" />
          </label>
          <label>
            <span>Last Name:</span>
            <input type="text" name="name" />
          </label>
        </div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Write to us..." />
        </label>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </main>
  );
}

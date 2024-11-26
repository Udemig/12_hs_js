import "../styles/Main.css";

export const Main = () => {
  const user = ["Cihan", "Evrim", "Cebrail", "Aysun", "Hasan"];
  return (
    <main className="bg-success d-flex flex-column p-5">
      <h1>Main İçeriği</h1>
      <label htmlFor="input">İsim:</label>
      <input type="text" className="form-control w-50" id="input" />
      <br />
      <br />
      {/* Herbir kullanıcıyı döndük */}
      {user.map((user) => {
        return <span>{user} </span>;
      })}
    </main>
  );
};

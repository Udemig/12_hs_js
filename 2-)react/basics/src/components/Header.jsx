import "../styles/Header.css";

/*
* Component oluşturulurken yapılması gerekenler

1-) Tıpkı bir fonksiyon tanımlar gibi component oluşturulur.

2-) Bu componentin içerisindeki return() içerisinde ilgili kodlama yapılır.

3-) Bu component export edilir.

4-) İlgili noktada import edilerek kullanılır.


*/

export const Header = () => {
  const name = "Udemig";

  const selamla = () => {
    alert("Evrim ders dinliyor");
  };

  return (
    <>
      {/* Header */}
      <header
        // style={{
        //   backgroundColor: "red",
        //   display: "flex",
        //   justifyContent: "space-between",
        //   padding: 20,
        // }}
        className="d-flex justify-content-between "
      >
        <h1 className="">{name} </h1>

        <ul className="d-flex justify-content-between gap-3 ist-group">
          <li className="list-group-item">Anasayfa</li>
          <li className="list-group-item">Hakkımızda</li>
          <li className="list-group-item">İletişim</li>
          <li className="list-group-item">Eğitimler</li>
        </ul>

        <button className="btn btn-dark btn-sm " onClick={() => selamla()}>
          Uyarı Ver
        </button>
      </header>
      {/* Div */}
      <div></div>
    </>
  );
};

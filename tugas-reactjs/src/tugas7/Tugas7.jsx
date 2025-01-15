const Tugas7 = (props) => {
  return (
    <section id="tugas7">
      <div className="card">
        <h1> Data diri peserta kelas Reactjs </h1>
        <hr />
        <ul>
          <li>
            <b>Nama Lengkap : </b>
            {props.name}
          </li>
          <li>
            <b>Email : </b>
            {props.batch}
          </li>
          <li>
            <b>Batch Pelatihan : </b>
            {props.email}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tugas7;

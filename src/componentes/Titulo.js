


function Titulo() {
  return (

    <div style={styles.container}>
      <h2 style={styles.item}>Nome</h2>
      <h2 style={styles.item}>Email</h2>
      <h2 style={styles.item}>Contato</h2>
    </div>
    
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "15px 15px",
    backgroundColor:"#A19999",
    marginTop:"40px",
    borderRadius:"4px",
    width:"30%",
    margin: "0 auto",
  },
  item: {
    margin: "0",
    color: "#F9F6F6",
  },
};
export default Titulo;

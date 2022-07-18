export function NotFound() {
  const styles = {
    height: "30%",
    width: "50%"
  };
  return (
    <div>
      <img style={styles} src='https://klizos.com/wp-content/uploads/funny-404-error-page-GIF-klizo-solutions.gif' alt='Error' />
      <h1 style={{color:"blue"}}><span style={{fontSize:"70px"}}>404</span> Error...!</h1>
    </div>);
}

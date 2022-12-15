function TabBtn({ active, setActive }) {
  const tabHandler = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <nav>
      <label for="" onClick={tabHandler}>
        React
      </label>
      <label for="" onClick={tabHandler}>
        Angular
      </label>
      <label for="" onClick={tabHandler}>
        VueJS
      </label>
    </nav>
  );
}

export default TabBtn;

function TabList({ btnHead, desc, active }) {
    return <div className="content">{active && <p>{desc}</p>}</div>;
  }
  
  export default TabList;
  
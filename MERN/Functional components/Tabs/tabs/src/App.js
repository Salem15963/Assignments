import "./App.css";
import TabMain from "./Components/TabMain";
export default function App() {
  const tabData = [
    {
      id: 100,
      btnHead: "React",
      desc:
        "React is one of the javascript frameworks developed by Facebook. It provides only view level and some call-back functions for rendering the HTML code. A robust front-end framework, React is used for building rich internet applications by React development companies in India."
    },
    {
      id: 101,
      btnHead: "Angular",
      desc:
        "Angular is an open-source javascript framework designed to create single-page web apps and mobile applications. It uses MVC architectural patterns integrated by top Angular development companies. This front-end framework, though an evolution of AngularJS, is an entirely new web development framework."
    },
    {
      id: 102,
      btnHead: "VueJS",
      desc:
        "Vue.js is a javascript library that provides a ViewModel layer of the MVVM pattern. An open-source framework supported by the developer community, Vue.js provides two-way data binding by linking the model and a view"
    }
  ];

  return (
    <div className="App">
      <TabMain tabData={tabData} />
    </div>
  );
}

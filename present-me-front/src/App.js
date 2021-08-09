import "./App.css";
import { UniqueFeatures } from "./components/UniqueFeatures/UniqueFeatures";
import { Slideshow } from "./components/TopEvent/TopEvent";
import { MainSlideshow } from "./Events/Events";
import { Header } from "./Header/Header";
import Footer from "./Footer/Footer";
import Testimonial from "./Testimonial/Testimonials";
import { Popup } from "./AllCategoriesComponent/Popup/Popup";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";

import { Registration } from "./Registration/Registration";
import { AllEventsSubCategory } from "./allEventsSubCategory/allEventsSubCategory";
import Title from "./titles/Title";
import CreateSubEvent from "./CreateSubEvent /CreateSubEvent";
import { CreateMainEvent } from "./CreateMain/createMain";
import { UpdateSubbEvent } from "./UpdateSub/updateSub";

import { UpdateMainEvent } from "./UpdateMain/updateMain";
import React, { useState, useEffect } from "react";
import { SingleCategory } from "./Dashboard/SubCategory";
import SingleEvent from "./singleEvent/SingleEvent";
import { CreateSubbEvent } from "./CreateSub/createSub";
import { MyContext } from "./Context";
import { Dashback } from "./newDashboard/Popup";
import New from "./NewThreeCate/New";
function App({ history }) {
  const [isAuth, setIsAuth] = useState(false);
  const [singlee, setSinglee] = useState([]);
  const [subid, setSubid] = useState("");
  const [last, setLast] = useState();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);

    if (userInfo) {
      setIsAuth(true);
    }
  }, [history]);

  return (
    <div className="App">
      <MyContext.Provider
        value={{ singlee, setSinglee, last, setLast, subid, setSubid }}
      >
        <Header />
        <Switch>
          <Route path="/" exact>
            <MainSlideshow />
            <Title title="Events Categories" />
            <New />
            <Title title="What Makes Us Unique" />
            <UniqueFeatures />
            <Title title="Top Events" />
            <Slideshow />
            <Title title="Testimonials" />
            <Testimonial />
            <SingleCategory />
          </Route>

          <Route path="/discover" exact component={Popup} />
          <Route path="/single" exact component={UniqueFeatures} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/Registration" exact component={Registration} />
          <Route path="/singles" exact component={SingleCategory} />
          <Route path="/allevent" exact component={AllEventsSubCategory} />
          <Route path="/singleevent" exact component={SingleEvent} />
          <Route path="/dashboard" exact component={Dashback} />
          <Route path="/createsingleevent" exact component={CreateSubEvent} />
          <Route path="/createmainevent" exact component={CreateMainEvent} />
          <Route path="/createsubbevent" exact component={CreateSubbEvent} />
          <Route path="/updatemainevent" exact component={UpdateMainEvent} />
          <Route path="/updatesubevent" exact component={UpdateSubbEvent} />
        </Switch>
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;

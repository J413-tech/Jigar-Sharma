
import './App.css';

// import Like from './Componets/Like'
// import Comment from './Componets/Comment'
// import Share from './Componets/Share'
// import Sub from './Componets/Sub'
//import Counter from './Componets/Counter';
// import Digits from './Componets/Digits'
// import ParentComponent from "./Componets/ParentComponent"
// import Evebinding from "./Componets/Evebinding"
//import UserGreeting from "./File/UserGreeting"
//import Greetings from './File/Greetings'
//import UserGreeting from './File/UserGreeting'
//import Greetingsjsx from './File/Greetingsjsx'
// import NameList from './File/Namelist'
//import Stylesheet from './Styling/Stylesheet'
//import Forms from './Forming/Forms.js'
//import Inline from './Styling/Inline';
//import Lifecycle from './Componets/Lifecycle'
//import ParentComp from './purecomponent/ParentComp'
//import Refsdemo from './purecomponent/Refsdemo'
//import HookCounter2 from './Hooks/HookCounter2';
//import HookCounter3 from './Hooks/HookCounter3';
//import Portaldemo from './Portal/Portaldemo';
//import Portal2 from './Portal/Portal2';
//import ErrorBoundary from './ErrorPage/ErrorBoundary';
//import Hero from './ErrorPage/Hero';
//import ClickCounter2 from './Highorder/ClickCounter2';
import Counter from './Highorder/Counter';
import HoverCounter2 from './Highorder/HoverCounter2';
import ClickCounter2 from './Highorder/ClickCounter2';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter/>
      <HoverCounter/> */}
      <Counter render={(count,increamentCount)=> (<ClickCounter2 count={count} increamentCount={increamentCount}/>)}/>
      <Counter render={(count,increamentCount)=> (<HoverCounter2 count={count} increamentCount={increamentCount}/>)}/>


      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Jokar"></Hero>
      </ErrorBoundary>
       */}
    
      {/* <Portal2/>
      <Portaldemo/> */}
      {/* <HookCounter3/> */}
      {/* <HookCounter2/> */}
      {/* <RegComp/> */}
      {/* <ParentComp/> */}
      {/* <Refsdemo/> */}
      {/* <PureComponent/> */}
    {/* <Lifecycle/> */}
    {/* <UserGreeting/>  */}
    {/* <Greetingsjsx/> */}
    {/* <NameList/> */}
    {/* <Stylesheet/> */}
    {/* <Inline/> */}
      {/* <Counter/> */}
      {/* <Digits/> */}
      {/* <Evebinding/> */}
      {/* <Like/>
      <Comment/>
      <Share/>
      
      <Sub/> */}
      {/* <Forms/> */}

    </div>
  );
}

export default App;
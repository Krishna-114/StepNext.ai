// this is the App.jsx File , the execution starts from this file.
// so whatever is need to shown should be imported and used as an component here.

// app.jsx work is to start the application , nothing else 
import AppRoute from "./Routes/AppRoutes";

function App() {
  return (
    <>
    <h1>StepNext.ai</h1>
    {/*   never forget Routing. */}
    <AppRoute/>
    
    </>
  )
}

export default App;




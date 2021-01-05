import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      
      <div>
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
          <img src={Logo} width="300" height="50"/>
            <a className="btn btn-primary" href="#">Sign In</a>
          </div>
        </nav>
        <header className="masthead text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Demandez Sans Engagement Un Devis !</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        </div>
        </div>
    );



  }   
    



export default App;

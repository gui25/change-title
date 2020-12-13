
import './App.css';
import './wallpaper.jpg'

import TextField from '@material-ui/core/TextField'




function App() {

  

  function changeTitle(Title){
    
    document.title = Title;
  }

  

  return (
    <div className="App">
      <header className="App-header">
      <h1 >Mude o titulo</h1>
      <form noValidate autoComplete="false" onSubmit={e => { e.preventDefault(); }}>
      <TextField  label="Escreva aqui"  className="Input-Title" onChange={(e) => changeTitle(e.target.value)}  variant="outlined" notched="true" />
      </form>
        
        
      </header>
    </div>
  );
}

export default App;

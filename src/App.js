import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Kato">
      <header className="Kato-header">
        <p className = "KatoLogo">Kato</p>
        <p className = "progRep">Progress Report</p>
        
      </header>
      <div className = "history">
      
      <p className ="histTitle">
    
      </p>
      </div>
      
      <div className ="mainView">
          <h1 className = "studentName" >
            studentName's Weekly Summary
          </h1>
      <div className ="metrics">
        <div className = "totalMastery">
           Mastered in Total:
          <p className = "sumValue">
           
          </p>
          of the total required skills.
        </div>
        <div className = "progression">
          Progressed by:
           <p className = "sumValue">
            
          </p>
          this week.
        </div>
        <div className = "studyTime">
          Total study time:
            <p className = "sumValue">
            
            </p>
            +6% compared to the average user.
        </div>
        <div className = "timePerQuestion">
            Average time per question:
            <p className="sumValue">
             
            </p>
            -8% compared to the average user.
         </div>

      </div>
      </div>
      
    </div>
  );
}

export default App;

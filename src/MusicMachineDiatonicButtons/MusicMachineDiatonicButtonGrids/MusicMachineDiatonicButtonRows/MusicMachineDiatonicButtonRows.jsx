import Button from '../../../Buttons/Button.jsx';
import './MusicMachineDiatonicButtonRows.css';
import { useRef,useState } from "react";
import * as Tone from "tone";

function MusicMachineDiatonicButtonRows(props) {
  // const array = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32"];
  const rowRef = useRef(null);
  const [bpmValue, setBpmValue] = useState(60);
  const [stepNumber, setStepNumber] = useState(0);

  if (rowRef.current){
    const rowRefVar = rowRef.current;
  }
  const instrumentSound = new Tone.Player(props.instrumentSound).toDestination();
  Tone.Transport.bpm.value = bpmValue;

  return (
    <div id="row-parent-div">
      <div className="note-name-div">
        <p id="note-name">{props.noteName}</p>
      </div>
    <div ref={rowRef} className={`${props.instrument}${props.rowId}buttons-row`}>
      { props.array.map((index, key) => {
        return <Button scaleQuality={props.scaleQuality} key={key} noteName={props.noteName} stepNumber={stepNumber} button={index} instrumentSound = {props.instrumentSound} instrumentDivNames={props.instrumentDivNames}/>
      })}
    </div></div>
    
    )
}
export default MusicMachineDiatonicButtonRows
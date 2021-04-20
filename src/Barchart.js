import {Bar} from 'react-chartjs-2';

const state = {
  labels:['January','February','March','April','May','June','July','August','September','October','November','December'],
  datasets:[
    {
      label:'RainFall',
      backgroundColor:'rgba(75,192,192,1)',
      borderColor:'rgba(0,0,0,1)',
      borderWidth:2,
      data:[
        69,40,57,82,56,70
      ]
    }
  ]
}

function Barchart() {
  return (
    <div className="bar-chart">
      <Bar  data={state} options={{
        title:{
          display:true,
          text:'Average RainFall Per Month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
      />
    </div>
  );
}

export default Barchart;

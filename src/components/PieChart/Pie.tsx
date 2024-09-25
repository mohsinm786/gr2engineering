import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalUserPieChart = () => {
  const data = {
    labels: ["pms, 28", "Process, 9" ,"Piping, 14" , "Mech, 11", "E&I, 7", "CSA, 13 " ,"SME, 8"],
    datasets: [
      {
        data: [28, 9, 14,11,7,13,8]  ,
        backgroundColor: [
          'rgba(41, 128, 185)',
          'rgba(231, 76, 60)',
          'rgba(204, 209, 209)',
          'rgba(244, 208, 63)',
          'rgba(31, 97, 141)',
          'rgba(46, 204, 113)',
          'rgba(142, 68, 173)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie data={data} />
  )
}

export default TotalUserPieChart
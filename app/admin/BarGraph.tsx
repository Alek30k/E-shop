"use client"

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

<Doughnut data={...} />


const BarGraph = () => {
  return (
    <>BarGraph</>
  )
}

export default BarGraph
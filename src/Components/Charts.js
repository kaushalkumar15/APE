import React, { useState, useEffect } from "react";
import axios from "axios";

import { Pie, Bar, Line, PolarArea } from "react-chartjs-2";

const Charts = () => {
  const [stuChartData, setStuChartData] = useState({});
  useEffect(() => {
    var email = { email: "mcjp@ssipmt.com" };
    axios.post("http://dd4c2c8c6a05.ngrok.io/student/getMarks", email).then(
      response => {
        console.log("get marks data->");
        // const data = {
        //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //   datasets: [
        //     {
        //       label: "# of Votes",
        //       data: [12, 19, 3, 5, 2, 3],
        //       backgroundColor: [
        //         "rgba(255, 99, 132, 0.2)",
        //         "rgba(54, 162, 235, 0.2)",
        //         "rgba(255, 206, 86, 0.2)",
        //         "rgba(75, 192, 192, 0.2)",
        //         "rgba(153, 102, 255, 0.2)",
        //         "rgba(255, 159, 64, 0.2)",
        //       ],
        //       borderColor: [
        //         "rgba(255, 99, 132, 1)",
        //         "rgba(54, 162, 235, 1)",
        //         "rgba(255, 206, 86, 1)",
        //         "rgba(75, 192, 192, 1)",
        //         "rgba(153, 102, 255, 1)",
        //         "rgba(255, 159, 64, 1)",
        //       ],
        //       borderWidth: 1,
        //     },
        //   ],
        // };

        var stuDetails = response.data;

        var ChartsData = {
          labels: stuDetails.map(stud => {
            return stud.name;
          }),
          datasets: [
            {
              label: "Marks of Each Subjects",
              data: stuDetails.map(stud => {
                return stud.marks;
              }),
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        };
        setStuChartData(ChartsData);
        console.log(ChartsData);
      },
      error => {
        console.log(error);
        console.log("failed");
      }
    );
  }, []);
  return (
    <div className="container">
      <h2>Charts</h2>
      <div>
        <Pie
          data={stuChartData ? stuChartData : []}
          width={400}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div>
        <Bar
          data={stuChartData ? stuChartData : []}
          width={400}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div>
        <Line
          data={stuChartData ? stuChartData : []}
          width={400}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div>
        <PolarArea
          data={stuChartData ? stuChartData : []}
          width={400}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default Charts;

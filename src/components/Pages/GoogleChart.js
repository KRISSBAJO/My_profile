import React, { useEffect } from 'react';
import './GoogleChart.css';

function GoogleChart(props) {
    useEffect(() => {
        // Load the Visualization API and the corechart package
        window.google.charts.load('current', {'packages':['corechart']});

        // Set a callback to run when the Google Visualization API is loaded
        window.google.charts.setOnLoadCallback(() => {
            drawPieChart();
            drawBarChart();
        });
    }, []);

    function drawPieChart() {
        // Create the data table for Pie Chart
        const dataPie = new window.google.visualization.DataTable();
        dataPie.addColumn('string', 'Skill');
        dataPie.addColumn('number', 'Proficiency');
        dataPie.addRows([
            ['Python', 90],
            ['JavaScript', 80],
            ['Java', 70],
            ['CSS', 60],
            ['HTML', 70],
            ['React', 50],
        ]);

        // Set chart options
        const optionsPie = {'title':'Skill Proficiency Pie Chart',
                            'width':400,
                            'height':300};

        // Instantiate and draw the Pie Chart
        const pieChart = new window.google.visualization.PieChart(document.getElementById('pie_chart_div'));
        pieChart.draw(dataPie, optionsPie);
    }

    function drawBarChart() {
        // Create the data table for Bar Chart
        const dataBar = new window.google.visualization.DataTable();
        dataBar.addColumn('string', 'Skill');
        dataBar.addColumn('number', 'Proficiency');
        dataBar.addRows([
            ['Python', 90],
            ['JavaScript', 80],
            ['Java', 70],
            ['CSS', 60],
            ['HTML', 70],
            ['React', 50],
            
        ]);

        // Set chart options
        const optionsBar = {'title':'Skill Proficiency Bar Chart',
                            'width':400,
                            'height':300};

        // Instantiate and draw the Bar Chart
        const barChart = new window.google.visualization.BarChart(document.getElementById('bar_chart_div'));
        barChart.draw(dataBar, optionsBar);
    }

    return (
        <div className="google-chart-container">
            <div id="pie_chart_div" className="chart"></div>
            <div id="bar_chart_div" className="chart"></div>
        </div>
    );
}

export default GoogleChart;


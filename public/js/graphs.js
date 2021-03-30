
/*Engine RPM*/
		am4core.useTheme(am4themes_dark);
		am4core.useTheme(am4themes_animated);
		// Themes end

		var chart = am4core.create("chartdiv", am4charts.XYChart);
		


		var data = [];
		var value = 50;
		for(let i = 0; i < 300; i++){
		let date = new Date();
		date.setHours(0,0,0,0);
		date.setDate(i);
		value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
		data.push({date:date, value: value});
		}

		chart.data = data;

		// Create axes
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 60;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

		// Create series
		var series = chart.series.push(new am4charts.LineSeries());
		series.dataFields.valueY = "value";
		series.dataFields.dateX = "date";
		series.tooltipText = "{value}"

		series.tooltip.pointerOrientation = "vertical";

		chart.cursor = new am4charts.XYCursor();
		chart.cursor.snapToSeries = series;
		chart.cursor.xAxis = dateAxis;

		//chart.scrollbarY = new am4core.Scrollbar();
		chart.scrollbarX = new am4core.Scrollbar();

/*Fuel Consumed*/
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
		// Themes end

		var chart1 = am4core.create("chartdiv1", am4charts.XYChart);
		


		var data = [];
		var value = 50;
		for(let i = 0; i < 300; i++){
		let date = new Date();
		date.setHours(0,0,0,0);
		date.setDate(i);
		value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
		data.push({date:date, value: value});
		}

		chart1.data = data;

		// Create axes
		var dateAxis = chart1.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 60;

		var valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());

		// Create series
		var series = chart1.series.push(new am4charts.LineSeries());
		series.dataFields.valueY = "value";
		series.dataFields.dateX = "date";
		series.tooltipText = "{value}"

		series.tooltip.pointerOrientation = "vertical";

		chart1.cursor = new am4charts.XYCursor();
		chart1.cursor.snapToSeries = series;
		chart1.cursor.xAxis = dateAxis;

		//chart.scrollbarY = new am4core.Scrollbar();
		chart1.scrollbarX = new am4core.Scrollbar();

/*MAF Sensor Air Flow Rate*/
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
		// Themes end

		var chart2 = am4core.create("chartdiv2", am4charts.XYChart);
		


		var data = [];
		var value = 50;
		for(let i = 0; i < 300; i++){
		let date = new Date();
		date.setHours(0,0,0,0);
		date.setDate(i);
		value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
		data.push({date:date, value: value});
		}

		chart2.data = data;

		// Create axes
		var dateAxis = chart2.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 60;

		var valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());

		// Create series
		var series = chart2.series.push(new am4charts.LineSeries());
		series.dataFields.valueY = "value";
		series.dataFields.dateX = "date";
		series.tooltipText = "{value}"

		series.tooltip.pointerOrientation = "vertical";

		chart2.cursor = new am4charts.XYCursor();
		chart2.cursor.snapToSeries = series;
		chart2.cursor.xAxis = dateAxis;

		//chart.scrollbarY = new am4core.Scrollbar();
		chart2.scrollbarX = new am4core.Scrollbar();
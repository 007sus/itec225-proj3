var d1 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/france/fra_case_data_rev.csv"
    
  Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "line",
      data: data,
      name: 'fra case',
      x: unpack(rows, 'Dates'),
      y: unpack(rows, 'Case'),
      line: {color: '#21A216'}
    }
   
    var data = [t1];
    var layout = {
      title: {
        text : 'Custom: France COVID-19 Cases'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Cases'
        }
      }
    };    
    Plotly.newPlot('myplot', data, layout);
  })



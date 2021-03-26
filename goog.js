var d1 = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/goog/goog_close_data.csv"
    
  Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'goog CLose',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'close'),
      line: {color: '#21A216'}
    }
   
    var data = [t1];
    var layout = {
      title: {
        text : 'Custom: Google Close Price'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Close Price'
        }
      }
    };    
    Plotly.newPlot('myplot', data, layout);
  })
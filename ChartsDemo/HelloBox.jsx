// import React,{Component} from 'react';

function HelloBox(){
  const colorMap = {
    'A': '#3182bd',
    'A-': '#9ecae1',
    'B+': '#deebf7',
    'B': '#bdbdbd',
    'B-': '#ffeda0',
    'C': '#feb24c',
    'F': '#f03b20'
  }
  $.getJSON('/static/data/dv-grades.json',function(data){
    var Stat = G2.Stat;
    var chart = new G2.Chart({
      id: 'c1',
      width : 1000,
      height : 500,
      plotCfg: {
        margin: [80, 200],
        background: {
          stroke: '#ccc'
        }
      }
    });
    chart.source(data);
    // 去除y轴的栅格线
    chart.axis('Score',{
      grid: null
    });
    // x轴的栅格线居中
    chart.axis('Class',{
      position: 'top',
      tickLine: null,    
      grid: {
        line: {
          stroke: '#d9d9d9',
          lineWidth: 2,
          lineDash: [4, 2]
        }
      },
      gridAlign: 'middle'
    });
    chart.pointJitter().position('Class*Score').color('Grade', function(val) {
      return colorMap[val];
    }).shape('circle').size(4);
    chart.schema().position(Stat.bin.quantile.letter('Class*Score')).color('#000').shape('box');
    chart.render();
  });
}

export default HelloBox;
(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{361:function(e,t,n){e.exports=n(981)},365:function(e,t,n){},367:function(e,t,n){},490:function(e,t){},492:function(e,t){},502:function(e,t){},504:function(e,t){},529:function(e,t){},531:function(e,t){},532:function(e,t){},538:function(e,t){},540:function(e,t){},558:function(e,t){},561:function(e,t){},577:function(e,t){},580:function(e,t){},585:function(e,t){},587:function(e,t){},610:function(e,t){},981:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(24),i=n.n(o),c=(n(365),n(366),n(109)),s=n.n(c),u=n(203),l=n(104),h=n(105),p=n(108),d=n(106),f=(n(367),n(984)),m=n(350),v=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"getValues",value:function(){for(var e=[],t=[],n=0;n<10;n++)e.push(n.toString()),t.push(50*Math.random());return[e,t]}},{key:"getData",value:function(){var e=this.getValues();return{labels:e[0],datasets:[{label:"",data:e[1],fill:!1,backgroundColor:"#2279B5",borderColor:"#2279B5",borderWidth:2,pointRadius:0,hitRadius:20,cubicInterpolationMode:"monotone"}]}}},{key:"render",value:function(){return r.a.createElement(f.a,{style:{width:"94%",marginTop:"15px",marginLeft:"3%"}},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,this.props.title),r.a.createElement(f.a.Text,null,this.props.text),r.a.createElement(m.a,{data:this.getData(),height:150,options:{legend:{display:!1},scales:{xAxes:[{gridLines:{drawBorder:!0,drawOnChartArea:!0,lineWidth:0,zeroLineWidth:.5}}],yAxes:[{gridLines:{drawOnChartArea:!0,lineWidth:.2,zeroLineWidth:.5}}]}}})))}}]),n}(r.a.Component),g=n(983),y=(n(460),n(706),n(961),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={data:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.jonghyunho.com/v1/chartGetHousePrice");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({data:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getValues",value:function(){var e=[],t=[],n=this.state.data;for(var a in n.prices)e.push(n.prices[a][0]),t.push(n.prices[a][1]);return[e,t]}}]),n}(v)),b=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={data:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("componentDidMount"),"https://cors-anywhere.herokuapp.com/","https://query1.finance.yahoo.com/v8/finance/chart/%5EKS11?period1=1546268400&period2=1589587200&interval=1d",(t=new XMLHttpRequest).open("GET","https://cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v8/finance/chart/%5EKS11?period1=1546268400&period2=1589587200&interval=1d"),n=this,t.onload=t.onerror=function(){var e=JSON.parse(t.responseText);e=e.chart.result[0],n.setState({data:e})},t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send("");case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"formatDate",value:function(e){var t=new Date(1e3*e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("-")}},{key:"getValues",value:function(){var e=[],t=[],n=this.state.data;if(0==n.length)return[e,t];for(var a in n.timestamp)a%3==0?e.push(this.formatDate(n.timestamp[a])):e.push("");return[e,t=n.indicators.adjclose[0].adjclose]}}]),n}(v);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(g.a,{expand:"lg"},r.a.createElement(g.a.Brand,{href:"#"},r.a.createElement("h4",null,"\uc7a1\ub3d9\uc0ac\ub2c8"))),r.a.createElement(b,{title:"\ucf54\uc2a4\ud53c \uc9c0\uc218",text:"\ucf54\uc2a4\ud53c \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),r.a.createElement(y,{title:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4\uac00\uaca9\uc9c0\uc218",text:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4 \uac00\uaca9\uc758 \ub4f1\ub77d\uc744 \uc2dc\uac01\ud654\ud55c\ub2e4."}),r.a.createElement(v,{title:"\uacbd\uc81c \uc9c0\ud45c\uc758 \uc0c1\uad00\uad00\uacc4",text:"\uacbd\uc81c \uc9c0\ud45c\ub97c \uc0c1\uad00\uad00\uacc4\uc9c0\uc218\ub97c \ud1b5\ud574 \uc2dc\uac01\ud654\ud55c\ub2e4."}),r.a.createElement(v,{title:"\uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0",text:"\uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 \uc5b4\ub290 \uac83\uc774 \ud22c\uc790\uc5d0 \ub354 \uc720\ub9ac\ud55c\uac00?"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[361,1,2]]]);
//# sourceMappingURL=main.4cb9683b.chunk.js.map
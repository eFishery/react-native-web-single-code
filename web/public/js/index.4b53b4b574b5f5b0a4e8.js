webpackJsonp([0],{20:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),l=a(n),o=r(0),i=a(o),u=function(e){var t=e.onPress,r=e.checked;return l.default.createElement("input",{type:"checkbox",onClick:t,checked:r})};u.propTypes={onPress:i.default.func.isRequired,checked:i.default.bool},u.defaultProps={checked:!1},t.default=u},60:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),u=r(1),c=a(u),f=r(0),d=a(f),s=r(3),y=a(s),b=r(134),h=a(b),p=r(11),g=(a(p),r(62)),k=a(g),v=r(20),A=(a(v),r(80)),C=a(A),m=y.default.create({viewMargin:{marginTop:15},inputMargin:{marginTop:20,fontSize:20}}),S=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));setInterval(function(){k.default.head("https://www.google.com/").then(function(e){return console.log(e)}).error(function(e){return console.log(e)})},5e3);var r=["Aaren","Aarika","Abagael","Abagail","Abbe","Abbey","Abbi","Abbie","Abby","Abbye","Abigael","Abigail","Abigale","Abra","Ada","Adah","Adaline","Adan","Adara","Adda"],a=["Aaberg","Aalst","Aara","Aaren","Aarika","Aaron","Aaronson","Ab","Aba","Abad","Abagael","Abagail","Abana","Abate","Abba","Abbate","Abbe","Abbey","Abbi","Abbie"];e.headerJSON=[{key:"checkbox",title:"Checkbox",checkbox:!0},{key:"name",title:"Name",sortable:!0,filterable:!0},{key:"score",title:"Score",sortable:!0}],e.bodyJSON=[];for(var o=0;o<50;o+=1){var i=Math.floor(20*Math.random()),u=Math.floor(20*Math.random());e.bodyJSON.push({name:r[i]+" "+a[u],score:Math.floor(101*Math.random()),_checkable:0===Math.floor(2*Math.random())})}return e.headingCellStyle={padding:5,backgroundColor:"#DDD"},e.bodyCellStyle={padding:5},e.filterTextStyle={height:40},e.onChangeScreen=e.onChangeScreen.bind(e),e.state={isOnline:!0},e}return o(t,e),i(t,[{key:"onChangeScreen",value:function(){(0,this.props.navigation.navigate)("ScheduleManipulator")}},{key:"render",value:function(){return c.default.createElement(h.default,{style:m.viewMargin},c.default.createElement(C.default,{tableHeader:this.headerJSON,tableBody:this.bodyJSON,keyName:"test-table",colFlexArray:[5,5,5],rowsPerPageOption:[5,10,15,20],hasFirstLast:!0,headingCellStyle:this.headingCellStyle,bodyCellStyle:this.bodyCellStyle,filterTextStyle:this.filterTextStyle}))}}]),t}(c.default.Component);S.propTypes={navigation:d.default.object.isRequired},t.default=S},80:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),f=r(1),d=a(f),s=r(3),y=a(s),b=r(137),h=a(b),p=r(5),g=a(p),k=r(0),v=a(k),A=r(85),C=a(A),m=r(86),S=a(m),O=r(84),P=a(O),w=function(e){function t(e){l(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));j.call(r);var a=e.tableHeader,n=e.defaultSort,i=e.defaultRowsPerPage,u=e.rowsPerPageOption,c=n;if(""===c.key||void 0===c.key){var f=(a.length,a.findIndex(function(e){return e.sortable}));-1!==f&&(c={key:a[f].key,isAscending:!0})}var d=u.length?{currentPage:1,rowsPerPage:i}:{};return r.state={sort:c,filterText:"",pagination:d,isAllChecked:!1,checkedObjects:[]},r}return i(t,e),c(t,[{key:"filterData",value:function(e,t,r){var a=e.filter(function(e){return e.filterable}),n=t;if(0!==a.length){var l=a.length;n=n.filter(function(e){for(var t=!1,n=0;!t&&n<l;){e[a[n].key].toLowerCase().includes(r.toLowerCase())?t=!0:n+=1}return t})}return n}},{key:"sortData",value:function(e,t,r){var a=r.key,n=r.isAscending,l=t;if(""!==a){var o=n?[1,-1]:[-1,1];l=t.sort(function(e,t){return e[a]>t[a]?o[0]:o[1]})}return l}},{key:"paginateData",value:function(e){var t=this.state.pagination,r=t.currentPage,a=t.rowsPerPage,n=e;return r&&(n=n.slice((r-1)*a,r*a)),n}},{key:"render",value:function(){var e=this.props,t=e.tableHeader,r=e.tableBody,a=e.keyName,n=e.hasFirstLast,l=e.colFlexArray,o=e.stripedColors,i=e.buttonWrapperStyle,u=e.buttonActiveStyle,c=e.buttonStyle,f=e.headingCellStyle,s=e.bodyCellStyle,y=e.filterTextStyle,b=this.state,p=b.sort,k=b.filterText,v=b.pagination,A=b.checkedObjects,m=l.length,O=t.length,w=m===O?l:Array.from(t,function(){return 1}),j=this.filterData(t,r,k),_=this.sortData(t,j,p),R=this.paginateData(_),E=j.filter(function(e){return e._checkable}),M=E.length===A.length;return d.default.createElement(g.default,{style:x.viewMargin},d.default.createElement(P.default,{arrayOfRows:_,pagination:v,onChangePage:this.onChangePage,hasFirstLast:n,keyName:a,buttonWrapperStyle:i,buttonActiveStyle:u,buttonStyle:c}),d.default.createElement(h.default,{style:y,placeholder:"Search text...",onChangeText:this.onFilterText}),d.default.createElement(S.default,{colFlexArray:w,sort:p,headings:t,onSort:this.onSort,onCheckAll:this.onCheckAll,checkableFilteredData:E,isAllChecked:M,headingCellStyle:f}),d.default.createElement(C.default,{colFlexArray:w,headings:t,arrayOfRows:R,stripedColors:o,onCheckSingle:this.onCheckSingle,checkedObjects:A,bodyCellStyle:s}))}}]),t}(d.default.Component),j=function(){var e=this;this.onSort=function(t){return function(){var r=e.state.sort,a={};a=r.key===t?u({},r,{isAscending:!r.isAscending}):{key:t,isAscending:!0},e.setState({sort:a})}},this.onFilterText=function(t){e.setState({pagination:u({},e.state.pagination,{currentPage:1}),filterText:t,isAllChecked:!1,checkedObjects:[]})},this.onChangePage=function(t){return function(){var r=(e.props.hasFirstLast,u({},e.state.pagination,{currentPage:t}));e.setState({pagination:r})}},this.onCheckAll=function(t,r){return function(){var a=t?[]:r.filter(function(e){return e._checkable});e.setState({isAllChecked:!t,checkedObjects:a})}},this.onCheckSingle=function(t){return function(){var r=e.state.checkedObjects,a=r.findIndex(function(e){return e===t}),l=r.length;if(-1===a)e.setState({checkedObjects:[].concat(n(r),[t])});else{var o=r.slice(0,a).concat(r.slice(a+1,l));e.setState({checkedObjects:o})}}}};w.propTypes={tableHeader:v.default.array.isRequired,tableBody:v.default.array.isRequired,keyName:v.default.string.isRequired,stripedColors:v.default.array,colFlexArray:v.default.array,defaultSort:v.default.object,rowsPerPageOption:v.default.array,defaultRowsPerPage:v.default.number,hasFirstLast:v.default.bool,headingCellStyle:v.default.object,bodyCellStyle:v.default.object,filterTextStyle:v.default.object},w.defaultProps={colFlexArray:[],stripedColors:["#F4F4F6","#CACFD8"],headingCellStyle:{},bodyCellStyle:{},defaultSort:{key:""},defaultRowsPerPage:10,rowsPerPageOption:[],hasFirstLast:!1,buttonWrapperStyle:{marginLeft:1,marginRight:1,flex:1},buttonActiveStyle:{backgroundColor:"#eee",color:"#bbb"},buttonStyle:{backgroundColor:"#bbb",color:"#fff"}};var x=y.default.create({viewMargin:{marginTop:15}});t.default=w},81:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=r(1),o=a(l),i=r(0),u=a(i),c=r(5),f=a(c),d=r(11),s=a(d),y=r(20),b=a(y),h=function(e,t,r){return"key-"+e+"-"+t+"-"+r},p=function(e){var t=e.rowObject,r=e.colFlexArray,a=e.headings,l=e.trIndex,i=e.rowColor,u=e.checked,c=e.onCheckSingle,d=e.bodyCellStyle,y={containerStyle:{backgroundColor:d.backgroundColor,padding:0,margin:0},size:16,uncheckedColor:"#000",onPress:c(t),checked:u},p=a.map(function(e,a){var i=e.key,u=void 0,c=void 0;return"checkbox"===i?(u=t._checkable?o.default.createElement(b.default,y):o.default.createElement(s.default,null),c=h("checkbox",l,"*")):(u=o.default.createElement(s.default,null,t[i]),c=h("datatable",l,a)),o.default.createElement(f.default,{key:c,style:n({},d,{flex:r[a]})},u)});return o.default.createElement(f.default,{style:{flex:1,flexDirection:"row",backgroundColor:i}},p)};p.propTypes={rowObject:u.default.object.isRequired,colFlexArray:u.default.array.isRequired,trIndex:u.default.number.isRequired,rowColor:u.default.string.isRequired,onCheckSingle:u.default.func.isRequired,checked:u.default.bool.isRequired,bodyCellStyle:u.default.object.isRequired},t.default=p},82:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),l=a(n),o=r(0),i=a(o),u=function(e){var t=e.onPress,r=e.style,a=e.title;return l.default.createElement("button",{onClick:t,style:r},a)};u.propTypes={onPress:i.default.func.isRequired,style:i.default.object,title:i.default.string},u.defaultProps={style:{},title:""},t.default=u},83:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var l=r(1),o=a(l),i=r(0),u=a(i),c=r(88),f=a(c),d=function(e){var t=e.name,r=e.size,a=e.color,l="fa-"+t,i=(0,f.default)(n({fa:!0},""+l,!0)),u={className:i,"aria-hidden":!0,style:{color:""+a,"font-size":r+"px"}};return o.default.createElement("i",u)};d.propTypes={name:u.default.string.isRequired,size:u.default.number,color:u.default.string},d.defaultProps={size:12,color:"#000"},t.default=d},84:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=r(1),i=a(o),u=r(0),c=a(u),f=r(5),d=a(f),s=r(11),y=(a(s),r(82)),b=a(y),h=function(e){var t=e.arrayOfRows,r=e.pagination,a=e.onChangePage,o=e.hasFirstLast,u=e.keyName,c=e.buttonWrapperStyle,f=e.buttonActiveStyle,s=e.buttonStyle,y=r.currentPage,h=r.rowsPerPage,p=i.default.createElement(d.default,null);if(void 0!==y){var g=Math.ceil(t.length/h),k=[],v=void 0;v=1===y?1:y===g&&1!==g?g-2>0?y-2:1:y-1;for(var A=0;A<3&&v<=g;){var C=v===y?f:s,m=i.default.createElement(b.default,l({key:u+"-paginate-"+v,containerViewStyle:c,title:""+v,onPress:a(v),raised:y!==v},C));k.push(m),v+=1,A+=1}if(o){var S=i.default.createElement(b.default,l({key:u+"-paginate-first",containerViewStyle:c,title:"First",onPress:a(1),disabled:0===g||1===y,raised:!0},s)),O=i.default.createElement(b.default,l({key:u+"-paginate-last",containerViewStyle:c,title:"Last",onPress:a(g),disabled:0===g||y===g,raised:!0},s));k=[S].concat(n(k),[O])}p=i.default.createElement(d.default,{style:{flex:1,flexDirection:"row"}},k)}return p};h.propTypes={arrayOfRows:c.default.array.isRequired,pagination:c.default.object.isRequired,onChangePage:c.default.func.isRequired,buttonWrapperStyle:c.default.object.isRequired,buttonActiveStyle:c.default.object.isRequired,buttonStyle:c.default.object.isRequired,hasFirstLast:c.default.bool},h.defaultProps={hasFirstLast:!1},t.default=h},85:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),l=a(n),o=r(0),i=a(o),u=r(5),c=a(u),f=r(11),d=(a(f),r(81)),s=a(d),y=function(e){var t=e.colFlexArray,r=e.headings,a=e.arrayOfRows,n=e.stripedColors,o=e.onCheckSingle,i=e.checkedObjects,u=e.bodyCellStyle,f=n.length,d=a.map(function(e,a){var c=n[a%f],d=i.includes(e);return l.default.createElement(s.default,{key:"key-datatable-"+a,headings:r,rowObject:e,colFlexArray:t,trIndex:a,rowColor:c,onCheckSingle:o,bodyCellStyle:u,checked:d})});return l.default.createElement(c.default,null,d)};y.propTypes={colFlexArray:i.default.array.isRequired,headings:i.default.array.isRequired,arrayOfRows:i.default.array.isRequired,stripedColors:i.default.array.isRequired,checkedObjects:i.default.array.isRequired,onCheckSingle:i.default.func.isRequired,bodyCellStyle:i.default.object.isRequired},t.default=y},86:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=r(1),i=a(o),u=r(0),c=a(u),f=r(5),d=a(f),s=r(11),y=a(s),b=r(140),h=a(b),p=r(83),g=a(p),k=r(20),v=a(k),A=function(e){var t=e.colFlexArray,r=e.sort,a=e.headings,o=e.checkableFilteredData,u=e.onSort,c=e.onCheckAll,f=e.isAllChecked,s=e.headingCellStyle,b=r.key,p=r.isAscending,k=a.map(function(e,r){var a=e.title,k=e.key,A=e.sortable,C=e.checkbox,m=s.padding,S=n(s,["padding"]),O=l({flexDirection:"row",flex:t[r]},S),P=l({},O,{padding:m});if(A){var w="sort";return k===b&&(w=p?"sort-asc":"sort-desc"),i.default.createElement(h.default,{onPress:u(k),key:"key-heading-"+r,style:O},i.default.createElement(d.default,{style:P},i.default.createElement(d.default,{style:{flexDirection:"row",flex:1,justifyContent:"flex-start"}},i.default.createElement(y.default,null,a)),i.default.createElement(d.default,{style:{flexDirection:"row",flex:1,justifyContent:"flex-end"}},i.default.createElement(y.default,null,i.default.createElement(g.default,{name:w,size:15,color:"#900"})))))}if(!A&&C){var j={containerStyle:{backgroundColor:P.backgroundColor,borderColor:P.backgroundColor,padding:0,margin:0},size:16,uncheckedColor:"#000",onPress:c(f,o),checked:f};return i.default.createElement(d.default,{style:P,key:"key-heading-"+r},i.default.createElement(d.default,{style:{flexDirection:"row",flex:1,justifyContent:"flex-start"}},i.default.createElement(v.default,j)))}return i.default.createElement(d.default,{style:P,key:"key-heading-"+r},i.default.createElement(d.default,{style:{flexDirection:"row",flex:1,justifyContent:"flex-start"}},i.default.createElement(y.default,null,a)))});return i.default.createElement(d.default,{style:{flex:1,flexDirection:"row"}},k)};A.propTypes={colFlexArray:c.default.array.isRequired,headings:c.default.array.isRequired,checkableFilteredData:c.default.array.isRequired,sort:c.default.object.isRequired,onSort:c.default.func.isRequired,onCheckAll:c.default.func.isRequired,isAllChecked:c.default.bool.isRequired,headingCellStyle:c.default.object.isRequired},t.default=A},87:function(e,t,r){function a(e){return e&&e.__esModule?e:{default:e}}var n=r(61),l=a(n),o=r(60),i=a(o);l.default.registerComponent("MyApp",function(){return i.default}),l.default.runApplication("MyApp",{rootTag:document.getElementById("react-root")})}},[87]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),o=a(9),i=a(2),s=a(3),u=a(5),m=a(4),f=a(1);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var d=function(e){Object(u.a)(a,e);var t=v(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={willWatch:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.deleteMovie,r=t.addMovieToWillWatch,l=t.deleteMovieFromWillWatch;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),this.state.willWatch?c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),l(a)}},"Remove From Will Watch"):c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),r(a)}},"Add To Will Watch")),c.a.createElement("div",null,c.a.createElement("p",null,a.title),c.a.createElement("button",{onClick:n.bind(this,a)},"Delete movie"))))}}]),a}(c.a.Component),p="https://api.themoviedb.org/3",h="3f4ca4f3a9750da53450646ced312397",b=a(6),g=a.n(b);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var E=function(e){Object(u.a)(a,e);var t=y(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(t){a(e)}},r=function(e){return g()("nav-link",{active:t===e})};return console.log("MovieTabs render"),c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("popularity.desc"),onClick:n("popularity.desc")},"Popularity desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("revenue.desc"),onClick:n("revenue.desc")},"Revenue desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("vote_average.desc"),onClick:n("vote_average.desc")},"Vote average desc")))}}]),a}(c.a.Component);function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var N=function(e){Object(u.a)(a,e);var t=W(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentPage,a=e.total_pages,n=e.updateCurrentPage;return c.a.createElement("nav",{"aria-label":"...",className:"toggle mt-md-2 mr-md-2"},c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",{className:"page-item",onClick:function(e){n(1)}},c.a.createElement("a",{className:"page-link",href:"#"},"First")),c.a.createElement("li",{className:g()("page-item",{disabled:1===t}),onClick:function(e){var a=Math.max(1,t-1);n(a)}},c.a.createElement("a",{className:"page-link",href:"#"},"Previous")),c.a.createElement("li",{className:"page-item disabled"},c.a.createElement("a",{className:"page-link",href:"#",tabIndex:"-1"},"Page: ",t," of ",a," pages")),c.a.createElement("li",{className:g()("page-item",{disabled:t===a}),onClick:function(e){var c=Math.min(a,t+1);n(c)}},c.a.createElement("a",{className:"page-link",href:"#"},"Next")),c.a.createElement("li",{className:"page-item",onClick:function(e){n(a)}},c.a.createElement("a",{className:"page-link",href:"#"},"Last"))))}}]),a}(c.a.Component);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var j=function(e){Object(u.a)(a,e);var t=k(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getMovies=function(){fetch("".concat(p,"/discover/movie?api_key=").concat(h,"&sort_by=").concat(n.state.sort_by,"&page=").concat(n.state.currentPage)).then(function(e){return console.log("then",e),e.json()}).then(function(e){console.log("then",e),n.total_pages=e.total_pages,n.setState({movies:e.results})}).catch(function(e){n.setState({movies:[]})})},n.deleteMovie=function(e){var t=n.state.movies.filter(function(t){return t.id!==e.id});n.setState({movies:t}),n.deleteMovieFromWillWatch(e)},n.addMovieToWillWatch=function(e){var t=[].concat(Object(o.a)(n.state.moviesWillWatch),[e]);n.setState({moviesWillWatch:t})},n.deleteMovieFromWillWatch=function(e){var t=n.state.moviesWillWatch.filter(function(t){return t.id!==e.id});n.setState({moviesWillWatch:t})},n.updateSortBy=function(e){n.setState({sort_by:e})},n.updateCurrentPage=function(e){console.log("updateCurrentPage",e),n.setState({currentPage:e})},n.total_pages=1,n.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",currentPage:1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t,a){t.sort_by===this.state.sort_by&&t.currentPage===this.state.currentPage||this.getMovies()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-info"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},c.a.createElement(E,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}),c.a.createElement(N,{currentPage:this.state.currentPage,total_pages:this.total_pages,updateCurrentPage:this.updateCurrentPage}),c.a.createElement("div",{className:"toggle mr-md-2 text-white"},"Will Watch: ",this.state.moviesWillWatch.length))),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"row"},this.state.movies.map(function(t){return c.a.createElement("div",{className:"col-4 mb-4",key:t.id},c.a.createElement(d,{movie:t,deleteMovie:e.deleteMovie,addMovieToWillWatch:e.addMovieToWillWatch,deleteMovieFromWillWatch:e.deleteMovieFromWillWatch}))}))))))}}]),a}(c.a.Component);a(15),a(16);l.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0fcf1903.chunk.js.map
(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={Overlay:"modal_Overlay__2pZMn",Modal:"modal_Modal__2Nscn"}},15:function(e,t,a){e.exports={Button:"button_Button__2hEFy"}},40:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(10),c=a.n(n),o=a(3),s=a(4),i=a(6),u=a(5),l=a(14),m=a.n(l),h=(a(40),a(13));function p(){var e=this;this.setState({status:"pending"}),fetch("".concat("https://pixabay.com/api/","?q=").concat(this.state.query,"&page=").concat(this.state.pageNumber,"&key=").concat("23129863-59f8a41eed57593cb3097b5c2","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){return e.setState((function(e){return{pictures:[].concat(Object(h.a)(e.pictures),Object(h.a)(t.hits)),status:"resolved"}}))})).catch((function(t){return e.setState({error:t,status:"rejected"})}))}var d=a(7),b=a.n(d),g=a(0),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchInputValue:""},e.formSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchInputValue)},e.handleInputChange=function(t){e.setState({searchInputValue:t.currentTarget.value})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.searchInputValue,t=this.formSubmit,a=this.handleInputChange;return Object(g.jsx)("header",{className:b.a.Searchbar,children:Object(g.jsxs)("form",{className:b.a.SearchForm,onSubmit:t,children:[Object(g.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(g.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:b.a.SearchFormInput,type:"text",value:e,onChange:a,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),f=a(8),O=a.n(f),v=function(e){var t=e.webformatURL,a=e.tags;return Object(g.jsx)("img",{src:t,alt:a,className:O.a.ImageGalleryItemImage})},y=v;v.defaultProps={tags:"picture"};var I=function(e){var t=e.pictures,r=e.openLargeImg,n=a(42);return Object(g.jsx)("ul",{className:O.a.ImageGallery,children:t&&t.map((function(e){return Object(g.jsx)("li",{className:O.a.ImageGalleryItem,onClick:function(){return r(e.id)},children:Object(g.jsx)(y,{webformatURL:e.webformatURL,tags:e.tags})},n.generate())}))})},S=a(15),x=a.n(S),_=function(e){var t=e.setPageNumber;return Object(g.jsx)("button",{type:"button",className:x.a.Button,onClick:function(){return t()},children:"Load more"})},N=a(12),w=a.n(N),k=document.querySelector("#modal-root"),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.pictureData;return Object(n.createPortal)(Object(g.jsx)("div",{className:w.a.Overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:w.a.Modal,children:Object(g.jsx)("img",{src:e.largeImageURL,alt:e.tags})})}),k)}}]),a}(r.Component),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={pictures:[],status:"idle",showModal:!1,largeImg:null,query:"",pageNumber:1,error:"Nothing found"},e.scrollDown=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.setPageNumber=function(){e.setState((function(e){return{pageNumber:e.pageNumber+1}}))},e.openLargeImg=function(t){var a=e.state.pictures.find((function(e){return e.id===t}));e.setState({largeImg:a}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onSubmit=function(t){e.setState({pictures:[],pageNumber:1,query:t})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query===this.state.query&&t.pageNumber===this.state.pageNumber||p.call(this),this.state.pageNumber>1&&this.scrollDown()}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.pictures,r=e.showModal,n=e.largeImg,c=e.error,o=this.onSubmit,s=this.toggleModal,i=this.openLargeImg,u=this.setPageNumber;return"idle"===t?Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(j,{onSubmit:o})}):"pending"===t?Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(j,{onSubmit:o}),Object(g.jsx)(I,{pictures:a,openLargeImg:i}),Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)(m.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80})})]}):"resolved"===t?Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(j,{onSubmit:o}),Object(g.jsx)(I,{pictures:a,openLargeImg:i}),Object(g.jsx)(_,{setPageNumber:u}),r&&Object(g.jsx)(B,{closeModal:s,pictureData:n})]}):"rejected"===t?Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(j,{onSubmit:o}),Object(g.jsxs)("h1",{children:["Warning: ",c]})]}):void 0}}]),a}(r.Component);a(51);c.a.render(Object(g.jsx)(M,{}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"searchBar_Searchbar__1CT8p",SearchForm:"searchBar_SearchForm__12HEv",SearchFormButton:"searchBar_SearchFormButton__XMKPv",SearchFormButtonLabel:"searchBar_SearchFormButtonLabel__3OJkF",SearchFormInput:"searchBar_SearchFormInput__3eRbX"}},8:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__2zUSl",ImageGalleryItem:"imageGallery_ImageGalleryItem__2OEkA",ImageGalleryItemImage:"imageGallery_ImageGalleryItemImage__1NTQo"}}},[[52,1,2]]]);
//# sourceMappingURL=main.32aa13e0.chunk.js.map
"use strict";(self["webpackChunkcasino_project"]=self["webpackChunkcasino_project"]||[]).push([[649],{6101:function(e,t,i){i(7658);t.Z={data(){return{filterGames:[],provider:[]}},methods:{filterProvider(){this.filterGames=[],this.games.forEach((e=>{e.gameProvider===this.provider[0]&&this.filterGames.push(e)}))}},created(){this.emitter.on("sendProvider",(e=>{""===e?(this.filter(),this.provider=[]):(this.filter(),this.provider=[],this.provider.push(e),this.filterProvider(),this.games=this.filterGames)}))},inject:["emitter"],beforeMount(){this.emitter.off("sendProvider",(e=>{""===e?(this.filter(),this.provider=[]):(this.filter(),this.provider=[],this.provider.push(e),this.filterProvider(),this.games=this.filterGames)}))}}},2550:function(e,t){t.Z={data(){return{gamesCount:28,increment:28}},computed:{displayedGames:function(){return this.games.slice(0,this.gamesCount)},showMoreBtnVisible:function(){return this.gamesCount<this.games.length}},methods:{showMore:function(){this.gamesCount+=this.increment}}}},9649:function(e,t,i){i.r(t),i.d(t,{default:function(){return M}});var s=i(3396),a=i(7139);const r={key:0,class:"loading-latout position-fixed top-0 start-0"},o={class:"games-filter-title"},l={key:0},n={class:"games-catalog"},d={class:"catalog"},m={class:"catalog-subtitle"},c={class:"catalog-list"},h={class:"game"},g={class:"game-top"},v={class:"game-block-img"},p=["src","alt"],u=(0,s._)("div",{class:"game-action"},[(0,s._)("div",{class:"game-btn"},[(0,s._)("div",{class:"game-play"},[(0,s._)("button",{class:"btn"},"Play")])])],-1),f={class:"game-bottom"},_={class:"game-title"},w={href:"",class:"link-no-styles"},b={class:"catalog-more"};function k(e,t,i,k,y,C){const G=(0,s.up)("semipolar-spinner");return(0,s.wg)(),(0,s.iD)(s.HY,null,[e.isLoading?((0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(G,{"animation-duration":2e3,size:80,color:"#b41f23",class:"loading"})])):(0,s.kq)("",!0),(0,s._)("div",o,[(0,s.Uk)("Card games"),e.provider[0]?((0,s.wg)(),(0,s.iD)("span",l,"("+(0,a.zw)(e.provider[0])+")",1)):(0,s.kq)("",!0)]),(0,s._)("div",n,[(0,s._)("div",d,[(0,s._)("div",m," Total games: "+(0,a.zw)(y.games.length),1),(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.displayedGames,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"catalog-item",key:t},[(0,s._)("div",h,[(0,s._)("div",g,[(0,s._)("div",v,[(0,s._)("img",{src:e.imgUrl,alt:e.name,class:"game-img"},null,8,p)]),u]),(0,s._)("div",f,[(0,s._)("div",_,[(0,s._)("a",w,(0,a.zw)(e.name),1)])])])])))),128))]),(0,s._)("div",b,[e.showMoreBtnVisible?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn btn-primary",onClick:t[0]||(t[0]=(...t)=>e.showMore&&e.showMore(...t))},"Show more")):(0,s.kq)("",!0)])])])],64)}i(7658);var y=i(2259),C=i(2550),G=i(6101),P={data(){return{games:[],providersFilter:[],catagory:"card"}},mixins:[C.Z,y.Z,G.Z],methods:{filter(){this.games=[],this.tempGames.forEach((e=>{"card"===e.catagory&&this.games.push(e)}))},providerFilter(){this.providersFilter=[...new Set(this.games.map((e=>e.gameProvider)))]},sendData(){this.emitter.emit("sendProvidersFilter",this.providersFilter),this.emitter.emit("sendCatagory",this.catagory)}},created(){this.filter(),this.providerFilter(),this.sendData()},inject:["tempGames"]},D=i(89);const F=(0,D.Z)(P,[["render",k]]);var M=F}}]);
//# sourceMappingURL=649.b9073f8e.js.map
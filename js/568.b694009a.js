"use strict";(self["webpackChunkcasino_project"]=self["webpackChunkcasino_project"]||[]).push([[568],{6101:function(e,s,t){t(7658);s.Z={data(){return{filterGames:[],provider:[]}},methods:{filterProvider(){this.filterGames=[],this.games.forEach((e=>{e.gameProvider===this.provider[0]&&this.filterGames.push(e)}))}},created(){this.emitter.on("sendProvider",(e=>{""===e?(this.filter(),this.provider=[]):(this.filter(),this.provider=[],this.provider.push(e),this.filterProvider(),this.games=this.filterGames)}))},inject:["emitter"]}},2550:function(e,s){s.Z={data(){return{gamesCount:28,increment:28}},computed:{displayedGames:function(){return this.games.slice(0,this.gamesCount)},showMoreBtnVisible:function(){return this.gamesCount<this.games.length}},methods:{showMore:function(){this.gamesCount+=this.increment}}}},2568:function(e,s,t){t.r(s),t.d(s,{default:function(){return F}});var i=t(3396),a=t(7139);const r={key:0,class:"loading-latout position-fixed top-0 start-0"},o=(0,i._)("div",{class:"games-filter-title"},"Jackpot games",-1),l={class:"games-catalog"},n={class:"catalog"},c={class:"catalog-subtitle"},m={class:"catalog-list"},d={class:"game"},g={class:"game-top"},h={class:"game-block-img"},u=["src","alt"],v=(0,i._)("div",{class:"game-action"},[(0,i._)("div",{class:"game-btn"},[(0,i._)("div",{class:"game-play"},[(0,i._)("button",{class:"btn"},"Play")])])],-1),p={class:"game-bottom"},f={class:"game-title"},_={href:"",class:"link-no-styles"},w={class:"catalog-more"};function b(e,s,t,b,k,y){const G=(0,i.up)("semipolar-spinner");return(0,i.wg)(),(0,i.iD)(i.HY,null,[e.isLoading?((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(G,{"animation-duration":2e3,size:80,color:"#b41f23",class:"loading"})])):(0,i.kq)("",!0),o,(0,i._)("div",l,[(0,i._)("div",n,[(0,i._)("div",c," Total games: "+(0,a.zw)(k.games.length),1),(0,i._)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.displayedGames,((e,s)=>((0,i.wg)(),(0,i.iD)("div",{class:"catalog-item",key:s},[(0,i._)("div",d,[(0,i._)("div",g,[(0,i._)("div",h,[(0,i._)("img",{src:e.imgUrl,alt:e.name,class:"game-img"},null,8,u)]),v]),(0,i._)("div",p,[(0,i._)("div",f,[(0,i._)("a",_,(0,a.zw)(e.name),1)])])])])))),128))]),(0,i._)("div",w,[e.showMoreBtnVisible?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn btn-primary",onClick:s[0]||(s[0]=(...s)=>e.showMore&&e.showMore(...s))},"Show more")):(0,i.kq)("",!0)])])])],64)}t(7658);var k=t(2259),y=t(2550),G=t(6101),C={data(){return{games:[],providersFilter:[]}},mixins:[y.Z,k.Z,G.Z],methods:{filter(){this.games=[],this.tempGames.forEach((e=>{"jackpot"===e.catagory&&this.games.push(e)}))},providerFilter(){this.providersFilter=[...new Set(this.games.map((e=>e.gameProvider)))]},sendData(){this.emitter.emit("sendProvidersFilter",this.providersFilter)}},created(){this.filter(),this.providerFilter(),this.sendData()},inject:["tempGames"]},D=t(89);const P=(0,D.Z)(C,[["render",b]]);var F=P}}]);
//# sourceMappingURL=568.b694009a.js.map
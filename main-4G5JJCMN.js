import{F as n,G as r,H as f,N as i,ha as l,ia as d,ka as C,ma as u,na as g,x as o}from"./chunk-AKFCLDHP.js";var a=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=o({type:e,selectors:[["app-header"]],decls:11,vars:0,consts:[[1,"navbar"],["routerLink","/",1,"logo"],[1,"nav-links"],["routerLink","/home"],["routerLink","/search"]],template:function(t,c){t&1&&(n(0,"header")(1,"nav",0)(2,"a",1),i(3,"Pokedex"),r(),n(4,"ul",2)(5,"li")(6,"a",3),i(7,"Home"),r()(),n(8,"li")(9,"a",4),i(10,"Pesquisar"),r()()()()())},dependencies:[u],styles:["header[_ngcontent-%COMP%]{background-color:#ff4d4d;padding:15px 20px;width:100%;position:fixed;top:0;left:0;z-index:1000}.navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto}.logo[_ngcontent-%COMP%]{font-size:24px;color:#fff;font-weight:700;text-decoration:none}.nav-links[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;gap:2vw;padding:0;margin:0;list-style:none}.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:18px;transition:color .3s ease}.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffcb05}"]})};var m=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=o({type:e,selectors:[["app-footer"]],decls:4,vars:0,consts:[[1,"footer-content"]],template:function(t,c){t&1&&(n(0,"footer")(1,"div",0)(2,"p"),i(3,"\xA9 2025 Pokedex. Todos os direitos reservados."),r()()())},styles:["footer[_ngcontent-%COMP%]{background-color:#ff4d4d;color:#fff;padding:15px;width:100%;position:fixed;bottom:0;left:0}.footer-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin:0}"]})};var s=class e{title="pokedex";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=o({type:e,selectors:[["app-root"]],decls:3,vars:0,template:function(t,c){t&1&&f(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[C,a,m],encapsulation:2})};var v=[{path:"",loadComponent:()=>import("./chunk-AUO6LZNX.js").then(e=>e.PokemonListComponent)},{path:"pokemon/:name",loadComponent:()=>import("./chunk-LKKLIMDG.js").then(e=>e.PokemonDetailComponent)},{path:"search",loadComponent:()=>import("./chunk-W5SPSCY2.js").then(e=>e.PokemonSearchComponent)},{path:"**",redirectTo:""}];d(s,{providers:[g(v),l()]}).catch(e=>console.error(e));

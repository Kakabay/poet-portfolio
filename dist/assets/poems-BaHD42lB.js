import{r as p,d as j,j as o,c as C,p as u}from"./index-DUSLFOFJ.js";import{P as z}from"./page-layout-Dt7vodBQ.js";import{P as b}from"./pagination-DFrKeg6J.js";import{P as N}from"./poems-item-PG9J0jaZ.js";import{S as L}from"./sort-modal-_V7zgTBc.js";import{u as _}from"./use-get-pin-poems-Dk2tk-Xp.js";import{u as D}from"./use-get-poems-O2sswUBB.js";import"./useQuery-B-FtTTmS.js";const I=()=>{var g;const[r,h]=p.useState(1),[s,x]=p.useState(""),[m,y]=p.useState({id:"new",view:"Snaçala nowye"}),{data:a}=D(),{data:n}=_(),P=(n==null?void 0:n.pinned_poems)||[],i=10,v=e=>{h(e)},t=a==null?void 0:a.filter(e=>e.poem_name.toLowerCase().includes(s.toLowerCase())),l=t==null?void 0:t.slice((r-1)*i,r*i),f=l&&[...l].reverse(),S=()=>m.id==="old"?f:l,k=j(),w=async(e,c)=>{try{c?await u.unPinPoem({poem_id:e}):await u.postPoem({poem_id:e}),k.invalidateQueries({queryKey:["pinPoems"]})}catch(d){console.log(d)}};return o.jsxs(z,{title:"Täze goşgular",text:"Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.",className:"xl:gap-[64px] gap-8",children:[o.jsx(L,{search:s,setSearch:x,sort:m,setSort:y}),o.jsxs("div",{className:"flex flex-col gap-8 relative",children:[s.length>0&&t&&o.jsx("div",{className:C("w-full mx-auto text-[18px]  xl:text-[24px] text-center pb-4 h-[50px]",t.length!==0&&"border-b border-OUTLINE"),children:t.length>0?`Po «${s}» zaprosy naýdeno:`:"Niçego ne naýdeno!"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:gap-8 gap-6 md:w-[768px] xl:w-[948px] mx-auto",children:(g=S())==null?void 0:g.map((e,c)=>o.jsx(N,{link:`/poems/${e.id}`,active:P.some(d=>d.id===e.id),onFavoriteChange:w,...e},c))}),a&&a.length>10&&o.jsx(b,{perPage:i,currentPage:r,totalPages:(a==null?void 0:a.length)||1,onChangePage:v})]})]})};export{I as default};

import{_ as d}from"./index.ad2e83ab.js";import{d as p,a as n,q as a,s as E,y as _,o as x,c as P,j as b,b as s,u as e}from"./vendor.ca3c6b03.js";const h={class:"container",id:"cards-dashboard"},v={class:"row"},C=p({setup(f){const t=n(()=>d(()=>import("./DashboardCardPesquisaPronta.d68cfe20.js"),["assets/DashboardCardPesquisaPronta.d68cfe20.js","assets/DashboardCardPesquisaPronta.0a26bbb5.css","assets/vendor.ca3c6b03.js","assets/DashboardView.6cadef7f.js","assets/index.ad2e83ab.js","assets/index.b7fe7564.css","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"])),i=n(()=>d(()=>import("./DashboardCardPesquisaParametrizada.4d49291f.js"),["assets/DashboardCardPesquisaParametrizada.4d49291f.js","assets/DashboardCardPesquisaParametrizada.670858cb.css","assets/vendor.ca3c6b03.js","assets/DashboardView.6cadef7f.js","assets/index.ad2e83ab.js","assets/index.b7fe7564.css","assets/proposicaoService.8f275e90.js","assets/plugin-vue_export-helper.21dcd24c.js"])),u=a({titulo:"Minhas Emendas",subtitulo:"Acesse as emendas que voc\xEA est\xE1 trabalhando",totalItens:5,icone:"person-workspace",tipo:"MinhasEmendas"}),c=a({titulo:"Proposi\xE7\xF5es com prazo de emendamento aberto",subtitulo:"Veja as proposi\xE7\xF5es que est\xE3o com prazo de emendamento aberto",totalItens:34,icone:"hourglass-split",tipo:"PrazoEmendaAberto"}),m=a({titulo:"Proposi\xE7\xF5es em tramita\xE7\xE3o",subtitulo:"Lista com todas as proposi\xE7\xF5es em tramita\xE7\xE3o",totalItens:587,icone:"arrow-left-right",tipo:"EmTramitacao"}),r=a(),l=E();return _(()=>{const{query:o}=l;o.tipoPesquisa==="Parametrizada"&&(r.value={sigla:o.sigla,numero:o.numero,ano:o.ano})}),(o,q)=>(x(),P("div",h,[b("div",v,[s(e(t),{dados:u.value},null,8,["dados"]),s(e(t),{dados:c.value},null,8,["dados"]),s(e(t),{dados:m.value},null,8,["dados"]),s(e(i),{dados:r.value},null,8,["dados"])])]))}});export{C as default};
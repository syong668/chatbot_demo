import{A as e,I as t,J as n,N as r,O as i,W as a,a as o,b as s,dt as c,f as l,g as u,gt as d,h as f,j as p,m,p as h,pt as g,q as _,rt as v,v as y,y as b}from"./vue.runtime.esm-bundler-CP9fp17o.js";import{a as x,i as S,r as C,t as w}from"./index-D8Pab2ZE.js";import{t as T}from"./button-B4wC2VIw.js";import{n as E,t as D}from"./ai-chat-input-vMQup-bu.js";var O={},k={class:`inline-flex w-fit items-center rounded-[50px] bg-gray-700 px-2.5 py-1.5 text-sm leading-5 text-white hover:bg-secondary cursor-pointer`};function A(e,n){return r(),u(`span`,k,[t(e.$slots,`default`)])}var j=x(O,[[`render`,A]]),M={class:`flex w-full flex-col items-end gap-4`},N={class:`inline-flex max-w-[800px] items-start gap-1 self-end rounded-[28px] bg-gray-100 px-5 py-3`},P={class:`break-words text-lg leading-7 text-foreground`},F={class:`w-full`,"aria-live":`polite`,"aria-atomic":`true`},I={key:0,class:`flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-3 text-blue-800`},L={class:`text-sm`},R={key:1,class:`rounded-2xl border border-amber-300 bg-amber-50 p-4 text-amber-950`},z={class:`mt-1 text-sm`},B={key:2,class:`flex flex-col gap-2`},V={class:`whitespace-pre-wrap break-words text-lg leading-7 text-foreground`},H={key:0,class:`ml-0.5 inline-block h-5 border-l-2 border-blue-500 align-middle animate-pulse`,"aria-label":`AI 正在輸入`},U={class:`w-fit rounded-full bg-gray-50 px-2.5 py-1 text-sm leading-5 text-gray-600`},W={key:0,class:`w-full border-t border-gray-300 pt-4`},G={class:`flex flex-wrap gap-2`},K={key:0,class:`mt-3 text-sm text-gray-600`},q=s({__name:`AiChatConversation`,props:{question:{},answer:{},source:{},status:{},errorMessage:{default:``}},emits:[`retry`,`selectTopic`],setup(e,{emit:t}){let n=e,i=t,o=v(!1),s=v(``),p=l(()=>n.status===`thinking`?`正在理解您的問題並搜尋相關資料…`:`正在整理回覆…`);a(()=>n.question,()=>{o.value=!1,s.value=``});async function x(){if(n.answer)try{await navigator.clipboard.writeText(n.answer),o.value=!0,window.setTimeout(()=>{o.value=!1},1800)}catch{}}function S(e){s.value=e,i(`selectTopic`,e)}return(t,n)=>(r(),u(`div`,M,[h(`div`,N,[h(`p`,P,d(e.question),1),e.status===`idle`?(r(),m(c(E),{key:0,align:`end`},{trigger:_(()=>[b(c(T),{type:`button`,variant:`iconLink`,size:`icon-sm`,class:`shrink-0`,"aria-label":`進階篩選`},{default:_(()=>[...n[4]||=[h(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`23`,height:`20`,viewBox:`0 0 23 20`,fill:`none`,"aria-hidden":`true`},[h(`path`,{d:`M.07 3.08A.94.94 0 0 1 .94 2.5h13.12a.94.94 0 0 1 .87 1.6L9.69 9.14v7.43a.94.94 0 0 1-1.6.66l-2.5-2.5a.94.94 0 0 1-.28-.66V9.14L.27 4.1a.94.94 0 0 1-.2-1.02ZM17.5 3.75c0-.69.56-1.25 1.25-1.25H20a1.25 1.25 0 1 1 0 2.5h-1.25c-.69 0-1.25-.56-1.25-1.25Zm-5 6.25c0-.69.56-1.25 1.25-1.25H20a1.25 1.25 0 1 1 0 2.5h-6.25c-.69 0-1.25-.56-1.25-1.25Zm0 6.25c0-.69.56-1.25 1.25-1.25H20a1.25 1.25 0 1 1 0 2.5h-6.25c-.69 0-1.25-.56-1.25-1.25Z`,fill:`currentColor`})],-1)]]),_:1})]),_:1})):f(``,!0)]),h(`section`,F,[e.status===`thinking`?(r(),u(`div`,I,[n[5]||=h(`span`,{class:`flex gap-1`,"aria-hidden":`true`},[h(`i`,{class:`size-1.5 animate-bounce rounded-full bg-blue-500`}),h(`i`,{class:`size-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:150ms]`}),h(`i`,{class:`size-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:300ms]`})],-1),h(`span`,L,d(p.value),1)])):e.status===`error`?(r(),u(`div`,R,[n[7]||=h(`p`,{class:`font-medium`},`暫時無法取得回覆`,-1),h(`p`,z,d(e.errorMessage||`連線可能不穩定，您的問題已保留。`),1),b(c(T),{type:`button`,variant:`secondary`,size:`sm`,rounded:`full`,class:`mt-3`,onClick:n[0]||=e=>i(`retry`)},{default:_(()=>[...n[6]||=[h(`i`,{class:`fa-solid fa-rotate-right`,"aria-hidden":`true`},null,-1),y(` 重新嘗試 `,-1)]]),_:1})])):e.answer?(r(),u(`article`,B,[h(`p`,V,[y(d(e.answer),1),e.status===`streaming`?(r(),u(`span`,H)):f(``,!0)]),h(`p`,U,`來源：`+d(e.source),1),b(c(T),{type:`button`,variant:`iconLink`,size:`icon-sm`,"aria-label":o.value?`已複製`:`複製回覆`,onClick:x},{default:_(()=>[h(`i`,{class:g(o.value?`fa-solid fa-check text-green-600`:`fa-regular fa-copy`),"aria-hidden":`true`},null,2)]),_:1},8,[`aria-label`])])):f(``,!0)]),e.status===`idle`&&e.answer?(r(),u(`section`,W,[n[11]||=h(`p`,{class:`mb-2 text-base`},`延伸提問`,-1),h(`div`,G,[b(c(j),{onClick:n[1]||=e=>S(`請說明工程的配置內容`)},{default:_(()=>[...n[8]||=[y(`工程配置內容`,-1)]]),_:1}),b(c(j),{onClick:n[2]||=e=>S(`請整理工程期程與重要里程碑`)},{default:_(()=>[...n[9]||=[y(`期程與重要里程碑`,-1)]]),_:1}),b(c(j),{onClick:n[3]||=e=>S(`有哪些相關來源文件可參考？`)},{default:_(()=>[...n[10]||=[y(`相關來源文件`,-1)]]),_:1})]),s.value?(r(),u(`p`,K,`已帶入「`+d(s.value)+`」，正在為您整理資料。`,1)):f(``,!0)])):f(``,!0)]))}}),J={class:`flex flex-col justify-between h-full`},Y={class:`flex items-start justify-end gap-3 border-b border-gray-100 pb-[10px]`},X={class:`relative grow h-[40dvh] min-h-0`},Z={class:`w-full pt-3 sticky bottom-0 bg-white`},Q=4,$=s({__name:`AiChatResult`,setup(t){let s=S(),l=C(),d=v(``),f=v([]),m=v(`某文化公園第三期的工程進度？`),g=v(``),x=v(``),E=v(`thinking`),O=v(``),k=v(null),A=v(!1),j,M=[{keywords:[`配置內容`,`工程配置`],response:{answer:`某文化公園第三期工程以「生態滯洪、親水休憩、環湖串聯」為主軸，主要配置如下：

• 湖岸與水工：整修 420 公尺湖岸護坡、新設 1 處生態緩坡與雨水導流溝。
• 步行系統：新增 680 公尺環湖步道、2 處無障礙緩坡及 3 座休憩平台。
• 景觀設施：設置遮蔭座椅 24 組、導覽牌 8 面與低照度步道燈 86 盞。
• 生態植栽：規劃 32 種原生植物，包含喬木 186 株與水生植栽 2,100 株。

設計原則為保留既有大樹與排水功能，並以分區施工降低對園區使用者的影響。`,source:`示範資料｜某文化公園第三期細部設計說明書｜115 年 6 月｜P.14–19`}},{keywords:[`里程碑`,`期程`],response:{answer:`某文化公園第三期工程的關鍵里程碑如下：

• 114 年 11 月：完成基本設計與地方說明會。
• 115 年 2 月：完成細部設計審查及工程發包。
• 115 年 4 月：開工，優先施作排水箱涵與湖岸基礎工程。
• 115 年 8 月：主體工程進度達 68%，完成第一階段步道鋪面。
• 115 年 10 月：完成機電、照明與植栽工程，啟動功能測試。
• 115 年 12 月：預計驗收完成並分區開放。

目前整體進度較原訂排程提前約 12 天；若遇連續豪雨，將優先調整湖岸與土方作業。`,source:`示範資料｜某文化公園第三期工程管制月報｜115 年 8 月｜P.4–6`}},{keywords:[`相關來源`,`來源文件`,`文件可參考`],response:{answer:`目前可參考的相關文件共 9 份。以下依「快速掌握現況、確認數字、追溯決策」三個目的整理，方便您依工作情境查閱。

一、快速掌握工程整體脈絡

• 〈某文化公園第三期細部設計說明書〉｜115 年 6 月｜P.1–42
  說明工程範圍、設計理念與主要設施配置；若需快速了解工程為何施作，建議先閱讀 P.4–12 的計畫目標與配置圖。

• 〈某文化公園第三期工程管制月報〉｜115 年 8 月｜P.1–18
  提供本月累計進度、已完成工項、現場照片及次月預定工作。P.4 的 S 曲線與 P.8–11 的工項照片最適合用於會議簡報。

• 〈施工階段交通與園區動線維持計畫〉｜115 年 7 月｜P.3–16
  說明施工圍設範圍、行人替代動線及臨時告示配置；可用來回覆園區使用者或跨單位對施工影響的提問。

二、確認預算、進度與執行數字

• 〈115 年度公園建設預算執行摘要〉｜115 年 8 月｜P.9–11
  包含核定經費、契約金額、估驗計價與執行率。對外說明經費時，請以 P.10 的「截至當月底」數字為準。

• 〈第三期工程估驗計價彙整表（第 1–4 期）〉｜115 年 8 月更新｜P.1–7
  可比對各工項實際完成數量與請款金額；適合承辦人釐清工程進度與經費落差原因。

• 〈工程品質督導缺失改善追蹤表〉｜115 年 8 月｜P.2–9
  記錄湖岸護坡、鋪面平整度與排水設施等改善事項。若被問及工程品質或缺失處理情形，可優先查閱本文件。

三、追溯設計決策與跨單位協調

• 〈生態植栽配置檢討報告〉｜115 年 6 月｜P.6–27
  說明原生樹種選擇、既有大樹保留與水生植栽配置依據；P.18–23 收錄各植栽區的數量與維護建議。

• 〈工程協調會議紀錄（第 3 次）〉｜115 年 7 月｜P.1–12
  彙整工務、景觀、交通與養護單位的協調結論，包括施工時段、排水介面與園區開放原則。

• 〈民眾意見與回應彙整表〉｜115 年 8 月｜P.1–15
  整理步道封閉、夜間照明與植栽選擇等 26 件意見及辦理情形；適合準備首長詢答或地方說明會資料。

建議查閱順序：若要在短時間內掌握案件，先看「工程管制月報」的進度與照片，再以「預算執行摘要」核對數字；若需要回覆設計合理性或跨單位決策，接續查閱「細部設計說明書」與「工程協調會議紀錄」。

`,source:`示範資料｜內部文件索引清單｜115 年 8 月更新`}},{keywords:[`中央公園`,`第三期`,`工程進度`],response:{answer:`摘要：截至 115 年 8 月，某文化公園第三期工程整體進度約 68%，目前正進行湖岸護坡、親水步道及景觀平台施作。

• 用地整備：3.02 公頃，已完成 96% 協議價購與點交。
• 工程進度：主體工程已完成 68%；滯洪池與排水箱涵預計 10 月完成。
• 後續期程：115 年 10 月辦理植栽與照明測試，預計 115 年 12 月完成驗收並分區開放。

目前進度較原排程提前約 12 天；惟雨季期間將持續檢視湖岸工區的施工安全與排水情形。`,source:`示範資料｜115 年第 2 季公園建設工程月報｜P.18–21`}},{keywords:[`道路綠化`,`綠化改善`,`植栽`],response:{answer:`本年度道路綠化改善以「補植、修剪與路口視距改善」為主，已完成 12 條主要道路的盤點與分段施作。

• 新植與補植喬木：1,286 株，其中原生與適生樹種占 74%。
• 灌木及地被更新：9,450 平方公尺，優先處理中央分隔島與學校周邊。
• 行道樹健檢：完成 2,145 株；列管高風險樹木 37 株，均已完成修剪或支撐。

下一階段將針對通學步道與公車轉運節點增加遮蔭植栽，並於年底前完成民眾滿意度回訪。`,source:`示範資料｜115 年道路景觀維護成果彙整｜P.7–10`}},{keywords:[`映月湖`,`湖景觀`,`景觀改善`],response:{answer:`映月湖景觀改善工程目前已完成基本設計與跨單位審查，重點為改善環湖動線、提升夜間安全並強化滯洪功能。

• 第一階段（115 年 9–11 月）：湖岸步道整修、無障礙坡道與欄杆更新。
• 第二階段（115 年 12 月至 116 年 3 月）：景觀照明、解說牌及親水平台施作。
• 預期效益：環湖步行動線由 780 公尺延伸至 1.12 公里；夜間照明覆蓋率提升至 92%。

施工期間將保留東側主要出入口與晨運時段通行，局部封閉資訊會於工程前 7 日公告。`,source:`示範資料｜映月湖景觀改善基本設計報告｜115 年 7 月｜P.32–36`}}],N=null;function P(){d.value.trim()&&(m.value=d.value.trim(),d.value=``,F())}function F(){window.clearTimeout(j),g.value=``,x.value=``,O.value=``,E.value=`thinking`;let e=I(m.value);x.value=e.source,j=window.setTimeout(()=>{E.value=`streaming`;let t=0,n=()=>{g.value=e.answer.slice(0,t),t+=2,z(),t<=e.answer.length?j=window.setTimeout(n,22):E.value=`idle`};n()},650)}function I(e){let t=e.replace(/\s/g,``),n=M.find(({keywords:e})=>e.some(e=>t.includes(e)));return n?n.response:{answer:`已依「${e}」整理示範查詢結果。

• 本次比對到 6 份相關計畫文件與 3 則最新工作紀錄。
• 建議優先查看近期工程月報、預算執行摘要與各單位工作報告。
• 若您希望取得更精準的內容，可補充行政區、年度或計畫名稱。

提醒：目前頁面展示的是情境化的示範資料，正式上線後應以實際檢索結果與原始文件為準。`,source:`示範資料｜AI 問答檢索結果預覽｜非正式資料來源`}}function L(){F()}function R(e){d.value=e,P()}function z(){i(()=>{let e=k.value;e&&B(e)&&(e.scrollTop=e.scrollHeight)})}function B(e){return e.scrollTop+e.clientHeight>=e.scrollHeight-Q}function V(){let e=k.value;e&&(A.value=e.scrollHeight>e.clientHeight&&!B(e))}function H(){k.value?.scrollTo({top:k.value.scrollHeight,behavior:`smooth`})}function U(){let e=k.value;if(!e)return;N?.disconnect(),N=new ResizeObserver(()=>{V()}),N.observe(e);let t=e.firstElementChild;t instanceof HTMLElement&&N.observe(t),e.addEventListener(`scroll`,V,{passive:!0}),V()}function W(){let e=k.value;N?.disconnect(),N=null,e?.removeEventListener(`scroll`,V)}return e(()=>{U();let e=l.query.question;typeof e==`string`&&e.trim()&&(m.value=e.trim()),F()}),p(()=>{W(),window.clearTimeout(j)}),a(()=>l.query.question,e=>{typeof e==`string`&&e.trim()&&e!==m.value&&(m.value=e.trim(),F())}),(e,t)=>(r(),u(`div`,J,[h(`div`,Y,[b(c(T),{type:`button`,variant:`primary`,size:`md`,rounded:`full`,class:`gap-1`,"aria-label":`問答紀錄`,onClick:t[0]||=e=>c(s).push(c(w).aiChatHistory.path)},{default:_(()=>[...t[4]||=[h(`i`,{class:`fa-solid fa-list text-[16px] leading-none`,"aria-hidden":`true`},null,-1),y(` 問答紀錄 `,-1)]]),_:1}),b(c(T),{type:`button`,variant:`primary`,size:`md`,rounded:`full`,class:`gap-1`,onClick:t[1]||=e=>c(s).push(c(w).aichat.path)},{default:_(()=>[...t[5]||=[h(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`},[h(`g`,{"clip-path":`url(#clip0_22_353)`},[h(`path`,{d:`M8 15C12.4187 15 16 11.6406 16 7.5C16 3.35938 12.4187 0 8 0C3.58125 0 0 3.35938 0 7.5C0 9.19687 0.6 10.7594 1.6125 12.0156L0.0875 14.9C-0.0625 15.1812 -0.015625 15.525 0.2 15.7594C0.415625 15.9937 0.75625 16.0656 1.04688 15.9406L4.74687 14.3562C5.74062 14.7688 6.84062 15 8 15ZM8 4.5C8.41562 4.5 8.75 4.83437 8.75 5.25V6.75H10.25C10.6656 6.75 11 7.08437 11 7.5C11 7.91563 10.6656 8.25 10.25 8.25H8.75V9.75C8.75 10.1656 8.41562 10.5 8 10.5C7.58437 10.5 7.25 10.1656 7.25 9.75V8.25H5.75C5.33437 8.25 5 7.91563 5 7.5C5 7.08437 5.33437 6.75 5.75 6.75H7.25V5.25C7.25 4.83437 7.58437 4.5 8 4.5Z`,fill:`#ffffff`})]),h(`defs`,null,[h(`clipPath`,{id:`clip0_22_353`},[h(`rect`,{width:`16`,height:`16`,fill:`white`})])])],-1),y(` 新對話 `,-1)]]),_:1})]),h(`div`,X,[h(`div`,{ref_key:`conversationScrollRef`,ref:k,class:`h-full overflow-y-auto py-4 pr-4`},[b(c(q),{question:m.value,answer:g.value,source:x.value,status:E.value,"error-message":O.value,onRetry:L,onSelectTopic:R},null,8,[`question`,`answer`,`source`,`status`,`error-message`])],512),n(b(c(T),{type:`button`,variant:`secondary`,size:`icon-lg`,rounded:`full`,class:`absolute bottom-4 left-1/2 z-10 -translate-x-1/2 gap-1`,"aria-label":`滑動至底部`,onClick:H},{default:_(()=>[...t[6]||=[h(`i`,{class:`fa-solid fa-angle-down`,"aria-hidden":`true`},null,-1)]]),_:1},512),[[o,A.value]])]),h(`div`,Z,[b(c(D),{class:`w-full`,modelValue:d.value,"onUpdate:modelValue":t[2]||=e=>d.value=e,files:f.value,"onUpdate:files":t[3]||=e=>f.value=e,disabled:E.value===`thinking`||E.value===`streaming`,onSend:P},null,8,[`modelValue`,`files`,`disabled`])])]))}});export{$ as default};
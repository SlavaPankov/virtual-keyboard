(()=>{"use strict";const e=function(e){const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild},t=[{code:"Backquote",key:"`",shiftKeyEN:"~",keyRu:"ё",shiftKeyRu:"Ё"},{code:"Digit1",key:"1",shiftKeyEN:"!",keyRu:"1",shiftKeyRu:"!"},{code:"Digit2",key:"2",shiftKeyEN:"@",keyRu:"2",shiftKeyRu:'"'},{code:"Digit3",key:"3",shiftKeyEN:"#",keyRu:"3",shiftKeyRu:"№"},{code:"Digit4",key:"4",shiftKeyEN:"$",keyRu:"4",shiftKeyRu:";"},{code:"Digit5",key:"5",shiftKeyEN:"%",keyRu:"5",shiftKeyRu:"%"},{code:"Digit6",key:"6",shiftKeyEN:"^",keyRu:"6",shiftKeyRu:":"},{code:"Digit7",key:"7",shiftKeyEN:"&",keyRu:"7",shiftKeyRu:"?"},{code:"Digit8",key:"8",shiftKeyEN:"*",keyRu:"8",shiftKeyRu:"*"},{code:"Digit9",key:"9",shiftKeyEN:"(",keyRu:"9",shiftKeyRu:"("},{code:"Digit0",key:"0",shiftKeyEN:")",keyRu:"0",shiftKeyRu:")"},{code:"Minus",key:"-",shiftKeyEN:"_",keyRu:"-",shiftKeyRu:"_"},{code:"Equal",key:"=",shiftKeyEN:"+",keyRu:"=",shiftKeyRu:"+"},{code:"Backspace",key:"⟵",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"Tab",key:"⇥ Tab",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"KeyQ",key:"q",shiftKeyEN:"Q",keyRu:"й",shiftKeyRu:"Й"},{code:"KeyW",key:"w",shiftKeyEN:"W",keyRu:"ц",shiftKeyRu:"Ц"},{code:"KeyE",key:"e",shiftKeyEN:"E",keyRu:"у",shiftKeyRu:"У"},{code:"KeyR",key:"r",shiftKeyEN:"R",keyRu:"к",shiftKeyRu:"К"},{code:"KeyT",key:"t",shiftKeyEN:"T",keyRu:"е",shiftKeyRu:"Е"},{code:"KeyY",key:"y",shiftKeyEN:"Y",keyRu:"н",shiftKeyRu:"Н"},{code:"KeyU",key:"u",shiftKeyEN:"U",keyRu:"г",shiftKeyRu:"Г"},{code:"KeyI",key:"i",shiftKeyEN:"I",keyRu:"ш",shiftKeyRu:"Ш"},{code:"KeyO",key:"o",shiftKeyEN:"O",keyRu:"щ",shiftKeyRu:"Щ"},{code:"KeyP",key:"p",shiftKeyEN:"P",keyRu:"з",shiftKeyRu:"З"},{code:"BracketLeft",key:"[",shiftKeyEN:"{",keyRu:"х",shiftKeyRu:"Х"},{code:"BracketRight",key:"]",shiftKeyEN:"}",keyRu:"ъ",shiftKeyRu:"Ъ"},{code:"Backslash",key:"\\",shiftKeyEN:"|",keyRu:"\\",shiftKeyRu:"/"},{code:"Delete",key:"Del",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"CapsLock",key:"Caps",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"KeyA",key:"a",shiftKeyEN:"A",keyRu:"ф",shiftKeyRu:"Ф"},{code:"KeyS",key:"s",shiftKeyEN:"S",keyRu:"ы",shiftKeyRu:"Ы"},{code:"KeyD",key:"d",shiftKeyEN:"D",keyRu:"в",shiftKeyRu:"В"},{code:"KeyF",key:"f",shiftKeyEN:"F",keyRu:"а",shiftKeyRu:"А"},{code:"KeyG",key:"g",shiftKeyEN:"G",keyRu:"п",shiftKeyRu:"П"},{code:"KeyH",key:"h",shiftKeyEN:"H",keyRu:"р",shiftKeyRu:"Р"},{code:"KeyJ",key:"j",shiftKeyEN:"J",keyRu:"о",shiftKeyRu:"О"},{code:"KeyK",key:"k",shiftKeyEN:"K",keyRu:"л",shiftKeyRu:"Л"},{code:"KeyL",key:"l",shiftKeyEN:"L",keyRu:"д",shiftKeyRu:"Д"},{code:"Semicolon",key:";",shiftKeyEN:":",keyRu:"ж",shiftKeyRu:"Ж"},{code:"Quote",key:"'",shiftKeyEN:'"',keyRu:"э",shiftKeyRu:"э"},{code:"Enter",key:"Enter",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"ShiftLeft",key:"Shift",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"KeyZ",key:"z",shiftKeyEN:"Z",keyRu:"я",shiftKeyRu:"Я"},{code:"KeyX",key:"x",shiftKeyEN:"X",keyRu:"ч",shiftKeyRu:"Ч"},{code:"KeyC",key:"c",shiftKeyEN:"C",keyRu:"с",shiftKeyRu:"С"},{code:"KeyV",key:"v",shiftKeyEN:"V",keyRu:"м",shiftKeyRu:"М"},{code:"KeyB",key:"b",shiftKeyEN:"B",keyRu:"и",shiftKeyRu:"И"},{code:"KeyN",key:"n",shiftKeyEN:"N",keyRu:"т",shiftKeyRu:"Т"},{code:"KeyM",key:"m",shiftKeyEN:"M",keyRu:"ь",shiftKeyRu:"Ь"},{code:"Comma",key:",",shiftKeyEN:"<",keyRu:"б",shiftKeyRu:"Б"},{code:"Period",key:".",shiftKeyEN:">",keyRu:"ю",shiftKeyRu:"Ю"},{code:"Slash",key:"/",shiftKeyEN:"?",keyRu:".",shiftKeyRu:","},{code:"ShiftRight",key:"Shift",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"ControlLeft",key:"Ctrl",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"AltLeft",key:"Alt",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"Space",key:" ",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"AltRight",key:"Alt",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"ControlRight",key:"Ctrl",shiftKeyEN:"",keyRu:"",shiftKeyRu:"",mode:"additional"},{code:"ArrowLeft",key:"◄",shiftKeyEN:"◄",keyRu:"◄",shiftKeyRu:"◄",mode:"additional"},{code:"ArrowUp",key:"▲",shiftKeyEN:"▲",keyRu:"▲",shiftKeyRu:"▲",mode:"additional"},{code:"ArrowDown",key:"▼",shiftKeyEN:"▼",keyRu:"▼",shiftKeyRu:"▼",mode:"additional"},{code:"ArrowRight",key:"►",shiftKeyEN:"►",keyRu:"►",shiftKeyRu:"►",mode:"additional"}];new class{constructor(e=30,t=30,i="",s=!1){this.rows=e,this.cols=t,this.resize=s,this.placeholder=i,this.init()}init(){const t=`\n      <section class="comment">\n        <form class="comment__form" action="">\n          <textarea class='comment__area ${this.resize?"":"no-resize"}'\n                    name="comment" \n                    id="comment" \n                    cols="${this.cols}" \n                    rows="${this.rows}" \n                    placeholder="${this.placeholder}"\n          ></textarea>\n        </form>\n      </section>\n    `;document.body.append(e(t))}}(20,100,"Ваш комментарий..."),new class{constructor(e,t){this.model=e,this.view=t,this.initialState()}initialState(){this.view.displayKeyboard(),this.initialButtonsState(),this.view.displayNotification(),document.addEventListener("keydown",(e=>{this.model.data.find((t=>t.code===e.code))&&("CapsLock"!==e.code&&this.view.addActiveClass(this.view.getKeyBiId(e.code)),"CapsLock"===e.code&&(this.view.addActiveClass(this.view.getKeyBiId(e.code)),this.handleCapsClick()),e.altKey&&(e.preventDefault(),this.view.altClick=!0),"ShiftLeft"===e.code&&(this.handleShiftClick(e.type),this.view.addActiveClass(this.view.getKeyBiId(e.code))),"ControlLeft"!==e.code&&"ControlRight"!==e.code||(this.handleCtrlClick(),this.view.addActiveClass(this.view.getKeyBiId(e.code))),"Tab"===e.code&&(e.preventDefault(),this.handleTabClick()))})),document.addEventListener("keyup",(e=>{this.model.data.find((t=>t.code===e.code))&&("CapsLock"!==e.code&&this.view.removeActiveClass(this.view.getKeyBiId(e.code)),"ShiftLeft"===e.code&&(this.handleShiftClick(e.type),this.view.removeActiveClass(this.view.getKeyBiId(e.code))),"ControlLeft"!==e.code&&"ControlRight"!==e.code||this.view.removeActiveClass(this.view.getKeyBiId(e.code)))}))}initialButtonsState(){this.view.displayButtons(this.model.data,this.model.dataValues),this.view.bindHandleButtonsClick(this.handleButtonClick),this.view.bindCapsClick(this.handleCapsClick),this.view.bindShiftClick(this.handleShiftClick),this.view.bindBackspaceClick(this.handleBackspaceClick),this.view.bindDeleteClick(this.handleDeleteClick),this.view.bindEnterClick(this.handleEnterClick),this.view.bindSpaceClick(this.handleSpaceClick),this.view.bindTabClick(this.handleTabClick),this.view.bindAltClick(this.handleAltClick),this.view.bindCtrlClick(this.handleCtrlClick),this.view.bindArrowClick(this.handleArrowClick),this.model.capsed&&this.view.addActiveClass(this.view.keyboard.querySelector("#CapsLock"))}handleButtonClick=e=>{const t=this.view.area.selectionStart,i=this.view.area.value.slice(0,t),s=this.view.area.value.slice(t,this.view.area.value.length);this.view.area.value=i+e+s,this.view.area.setSelectionRange(t+1,t+1)};handleCapsClick=()=>{this.model.changeCapsed(),this.initialButtonsState()};handleShiftClick=e=>{!this.view.altClick||"mousedown"!==e&&"keydown"!==e?(this.model.changeShifted(),this.initialButtonsState()):(this.model.changeLanguage(),this.model.changeShifted(),this.initialButtonsState())};handleBackspaceClick=()=>{const e=this.view.area.selectionStart,t=this.view.area.selectionEnd,i=this.view.area.value.split("");e===t?(i.splice(e-1,1),this.view.area.value=i.join(""),this.view.area.setSelectionRange(e-1,e-1)):(i.splice(e,t-e),this.view.area.value=i.join(""),this.view.area.setSelectionRange(e,e))};handleDeleteClick=()=>{const e=this.view.area.selectionStart,t=this.view.area.selectionEnd,i=this.view.area.value.split("");i.splice(e,t-e==0?1:t-e),this.view.area.value=i.join(""),this.view.area.setSelectionRange(e,e)};handleSpaceClick=()=>{const e=this.view.area.selectionStart,t=this.view.area.value.slice(0,e),i=this.view.area.value.slice(e,this.view.area.value.length);this.view.area.value=t+" "+i,this.view.area.setSelectionRange(e+1,e+1)};handleEnterClick=()=>{this.view.area.value+="\n"};handleTabClick=()=>{const e=this.view.area.selectionStart,t=this.view.area.value.slice(0,e),i=this.view.area.value.slice(e,this.view.area.value.length);this.view.area.value=t+"  "+i,this.view.area.setSelectionRange(e+2,e+2)};handleAltClick=()=>{this.view.altClick=!0};handleCtrlClick=()=>{this.view.altClick&&(this.model.changeLanguage(),this.initialButtonsState(),this.view.altClick=!1)};handleArrowClick=e=>{const t=this.view.area.selectionStart;switch(e.id){case"ArrowLeft":this.view.area.setSelectionRange(t-1,t-1);break;case"ArrowUp":case"ArrowDown":const i=this.view.area.value.slice(0,t),s=this.view.area.value.slice(t,this.view.area.value.length);this.view.area.value=i+e.textContent.trim()+s,this.view.area.setSelectionRange(t+1,t+1);break;case"ArrowRight":this.view.area.setSelectionRange(t+1,t+1)}}}(new class{constructor(){this.data=t,this.engKeys=["key","shiftKeyEN"],this.ruKeys=["keyRu","shiftKeyRu"],this.shifted=!1,this.capsed=!1,this.language=!!localStorage.getItem("language")&&JSON.parse(localStorage.getItem("language")),this.dataValues=this.language?this.getValueByKey("keyRu"):this.getValueByKey("key")}saveLanguageToLS(){localStorage.setItem("language",this.language)}getValueByKey(e){return this.data.map((t=>t.mode?"additional"===t.mode&&t.key:t[e]))}updateDataValues(){const e=this.language?this.ruKeys:this.engKeys;this.capsed&&!this.shifted?(this.dataValues=this.getValueByKey(e[0]),this.dataValues=this.dataValues.map((e=>1===e.length?e.toUpperCase():e))):!this.capsed&&this.shifted?this.dataValues=this.getValueByKey(e[1]):this.capsed&&this.shifted?(this.dataValues=this.getValueByKey(e[1]),this.dataValues=this.dataValues.map((e=>1===e.length?e.toLowerCase():e))):this.dataValues=this.getValueByKey(e[0])}changeCapsed(){this.capsed=!this.capsed,this.updateDataValues()}changeShifted(){this.shifted=!this.shifted,this.updateDataValues()}changeLanguage(){this.language=!this.language,this.saveLanguageToLS(),this.updateDataValues()}},new class{constructor(e){this.container=document.body,this.area=document.querySelector(`${e}`),this.keyboard=this.createKeyboard(),this.altClick=!1}createKeyboard(){return e('\n      <section class="">\n        <ul class="buttons-list list-reset"></ul>\n      </section>\n    ')}displayKeyboard(){this.container.append(this.keyboard),this.area.focus()}createButtons(t,i){const s=[];for(let a=0;a<t.length;a++){const h=`\n        <button class="buttons-list__button" id="${t[a].code}" data-mode="${t[a].mode?t[a].mode:""}">\n          ${i[a]}\n        </button>\n      `;s.push(e(h))}return s}displayButtons(e,t){this.keyboard.querySelector(".buttons-list").innerHTML="",this.createButtons(e,t).forEach((e=>{this.keyboard.querySelector(".buttons-list").append(e)}))}createNotification(){return e('\n      <div class="notification">\n        <p class="notification__paragraph">Клавиатура создана на основе системы Windows 11</p>\n        <p class="notification__paragraph">Для смены языка используется сочетание левых Alt+Shift или Alt+Ctrl</p>\n      </div>\n    ')}displayNotification(){this.container.append(this.createNotification())}bindHandleButtonsClick(e){this.keyboard.querySelectorAll(".buttons-list__button").forEach((t=>{t.dataset.mode||(t.addEventListener("mousedown",(t=>{e(t.target.textContent.trim())})),t.addEventListener("mouseup",(()=>{this.area.focus()}))),t.addEventListener("mousedown",(e=>{this.addActiveClass(e.target)})),t.addEventListener("mouseup",(e=>{this.removeActiveClass(e.target)}))}))}bindCapsClick(e){this.getKeyBiId("CapsLock").addEventListener("click",(()=>{this.area.focus(),e()}))}bindShiftClick(e){[this.getKeyBiId("ShiftLeft"),this.getKeyBiId("ShiftRight")].forEach((t=>{t.addEventListener("mousedown",(t=>{e(t.type)})),t.addEventListener("mouseup",(()=>{this.area.focus(),e()}))}))}bindBackspaceClick(e){this.getKeyBiId("Backspace").addEventListener("click",(()=>{this.area.focus(),e()}))}bindDeleteClick(e){this.getKeyBiId("Delete").addEventListener("click",(()=>{this.area.focus(),e()}))}bindEnterClick(e){this.getKeyBiId("Enter").addEventListener("click",(()=>{this.area.focus(),e()}))}bindSpaceClick(e){this.getKeyBiId("Space").addEventListener("click",(()=>{this.area.focus(),e()}))}bindTabClick(e){this.getKeyBiId("Tab").addEventListener("click",(()=>{this.area.focus(),e()}))}bindAltClick(e){this.getKeyBiId("AltLeft").addEventListener("click",(()=>{e()}))}bindCtrlClick(e){this.getKeyBiId("ControlLeft").addEventListener("click",(()=>{e()}))}bindArrowClick(e){[this.getKeyBiId("ArrowLeft"),this.getKeyBiId("ArrowUp"),this.getKeyBiId("ArrowRight"),this.getKeyBiId("ArrowDown")].forEach((t=>{t.addEventListener("click",(t=>{this.area.focus(),e(t.target)}))}))}getKeyBiId(e){return this.keyboard.querySelector(`#${e}`)}addActiveClass(e){e.classList.add("active")}removeActiveClass(e){e.classList.remove("active")}}(".comment__area"))})();
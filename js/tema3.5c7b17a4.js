(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"0b49":function(t,e,a){"use strict";a("e8fb")},1640:function(t,e,a){t.exports=a.p+"img/img9.cf03db45.svg"},"40e5":function(t,e,a){t.exports=a.p+"media/audio2.75e5434a.wav"},"65f2":function(t,e,a){t.exports=a.p+"img/img3.c5bd959f.png"},7306:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"traduccion"},[a("div",{staticClass:"row justify-content-center align-items-center g-0"},[a("div",{staticClass:"col-12 traduccion"},t._l(t.dialogoComputed,(function(e,s){return a("div",{staticClass:"row g-0 flex-nowrap traduccion__chat__item mb-3"},[a("div",{staticClass:"col traduccion__chat__item__message__container"},[a("div",{staticClass:"traduccion__chat__item__message"},[a("div",{staticClass:"row g-0 align-items-center traduccion__chat__item__message__bubble"},[a("div",{staticClass:"col traduccion__chat__item__message__text me-2"},[a("div",{staticClass:"traduccion__chat__item__message__text__eng text__ing mb-0"},[t._l(e.textoIng,(function(s,i){return["*"===s?a("div",{staticClass:"d-inline traduccion__chat__item__message__text__drop"},[t.answers[e.id]?a("span",{staticClass:"traduccion__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[e.id].palabra)}}):a("span",{staticClass:"traduccion__chat__item__message__text__drop__default"})]):a("span",{key:"phrase-"+e.id+"-"+i,domProps:{innerHTML:t._s(s)}})]}))],2),t.translations.includes(e.id)?a("div",{staticClass:"traduccion__chat__item__message__text__esp text__esp"},[a("hr",{staticClass:"color my-2"}),t._l(e.textoEsp,(function(e){return["*"===e?a("div",{staticClass:"d-inline traduccion__chat__item__message__text__drop"},[a("span",{staticClass:"traduccion__chat__item__message__text__drop__default"})]):a("span",{domProps:{innerHTML:t._s(e)}})]}))],2):t._e()])]),a("div",{staticClass:"d-flex justify-content-end me-3"},[a("button",{staticClass:"traduccion__chat__item__message__translate-btn text-small",on:{click:function(a){return t.toggleTranslate(e.id)}}},[t._v("Ver traducción")])])])])])})),0)])])},i=[],o=a("5530"),r=(a("d81d"),a("caad"),a("2532"),a("4de4"),a("07ac"),a("ac1f"),a("1276"),a("5319"),a("af8b")),n={name:"Traduccion",components:{Audio:r["a"]},props:{dialogo:{type:Object,default:function(){return{}}}},data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10)),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}},computed:{dialogoComputed:function(){var t=this;return this.dialogo.dialogo?this.dialogo.dialogo.map((function(e,a){return Object(o["a"])(Object(o["a"])({},e),{},{id:t.uid+a+1,textoIng:t.splitPhrase(e.textoIng),textoEsp:t.splitPhrase(e.textoEsp)})})):[]}},methods:{toggleTranslate:function(t){this.translations.includes(t)?this.translations=this.translations.filter((function(e){return e!==t})):this.translations.push(t)},onCheck:function(){var t=Object.values(this.answers).every((function(t){return t.dragId===t.dropId}));this.score=t?"approved":"disapproved"},reset:function(){this.answers={},this.score=null},shuffle:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),s=[t[a],t[e]];t[e]=s[0],t[a]=s[1]}return t},splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}},c=n,l=(a("0b49"),a("2877")),d=Object(l["a"])(c,s,i,!1,null,null,null);e["a"]=d.exports},"8ea2":function(t,e,a){t.exports=a.p+"img/img6.2c410f82.svg"},"9ace":function(t,e,a){t.exports=a.p+"img/img5.6756300d.svg"},a77c:function(t,e,a){"use strict";a("c62e")},af8b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?s("button",{staticClass:"audio__btn",on:{click:t.play}},[s("img",{attrs:{src:a("5ccd")}})]):s("button",{staticClass:"audio__btn",on:{click:t.pause}},[s("img",{attrs:{src:a("f034")}})]):s("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},i=[],o={props:{audio:{type:String,default:""}},data:function(){return{audioElement:null,audioCanPlay:!1,state:"pause"}},computed:{audioDuration:function(){if(this.audioElement){var t=this.audioElement.buffered;return t.end(t.length-1)}}},mounted:function(){var t=this;this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=function(){t.audioCanPlay=!0},this.audioElement.onloadedmetadata=function(){t.audioCanPlay=!0},this.audioElement.onended=function(){t.audioElement.currentTime=0,t.state="pause"}},beforeDestroy:function(){this.audioElement.remove()},methods:{createAudioElement:function(){var t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play:function(){this.state="play",this.audioElement.play()},pause:function(){this.state="pause",this.audioElement.pause()},stop:function(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}},r={name:"Audio",mixins:[o]},n=r,c=a("2877"),l=Object(c["a"])(n,s,i,!1,null,null,null);e["a"]=l.exports},b021:function(t,e,a){t.exports=a.p+"img/img3.06b3691f.svg"},b58d:function(t,e,a){t.exports=a.p+"img/img7.4c92384a.svg"},c62e:function(t,e,a){},ca52:function(t,e,a){t.exports=a.p+"img/img4.c71c75a6.svg"},cf7f:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogoChat p-5"},[a("div",{staticClass:"row justify-content-center align-items-center g-0"},[a("div",{staticClass:"col-md-12"},t._l(t.dialogoComputed,(function(e,s){return a("div",{staticClass:"row g-0 flex-nowrap dialogoChat__chat__item mb-3"},[a("div",{staticClass:"col-auto dialogoChat__chat__item__person"},[a("img",{attrs:{src:e.personaje.img}}),a("span",{staticClass:"text-small",domProps:{innerHTML:t._s(e.personaje.nombre)}})]),a("div",{staticClass:"col dialogoChat__chat__item__message__container"},[a("div",{staticClass:"dialogoChat__chat__item__message"},[a("div",{staticClass:"row g-0 align-items-center dialogoChat__chat__item__message__bubble"},[a("div",{staticClass:"col dialogoChat__chat__item__message__text me-2"},[a("div",{staticClass:"dialogoChat__chat__item__message__text__eng h5 mb-0"},[t._l(e.textoIng,(function(s,i){return["*"===s?a("div",{staticClass:"d-inline dialogoChat__chat__item__message__text__drop"},[t.answers[e.id]?a("span",{staticClass:"dialogoChat__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[e.id].palabra)}}):a("span",{staticClass:"dialogoChat__chat__item__message__text__drop__default"})]):a("span",{key:"phrase-"+e.id+"-"+i,domProps:{innerHTML:t._s(s)}})]}))],2),t.translations.includes(e.id)?a("div",{staticClass:"dialogoChat__chat__item__message__text__esp text-small"}):t._e()])])])])])})),0)])])},i=[],o=a("5530"),r=(a("d81d"),a("7db0"),a("4de4"),a("ac1f"),a("1276"),a("5319"),a("af8b")),n={name:"Chat",components:{Audio:r["a"]},props:{dialogo:{type:Object,default:function(){return{}}}},data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10)),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}},computed:{dialogoComputed:function(){var t=this;return this.dialogo.dialogo?this.dialogo.dialogo.map((function(e,a){return Object(o["a"])(Object(o["a"])({},e),{},{id:t.uid+a+1,textoIng:t.splitPhrase(e.textoIng),personaje:t.dialogo.personajes.find((function(t){return t.nombre===e.personaje}))})})):[]}},methods:{splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}},c=n,l=(a("a77c"),a("2877")),d=Object(l["a"])(c,s,i,!1,null,null,null);e["a"]=d.exports},e183:function(t,e,a){t.exports=a.p+"img/img1.cb264b7b.png"},e3fb:function(t,e,a){t.exports=a.p+"media/audio1.fe135e89.wav"},e8fb:function(t,e,a){},eb46:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t._m(0),s("div",{staticClass:"row bg-c29 mb-5"},[s("div",{staticClass:"col-12 px-5"},[s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-lg-7 mb-4 mb-lg-0",attrs:{"data-aos":"fade-right"}},[s("Traduccion",{staticClass:"color-primario",attrs:{dialogo:t.traduccion1}})],1),t._m(1)]),t._m(2),t._m(3),t._m(4)])]),s("div",{staticClass:"row mb-5"},[t._m(5),s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"fade-left"}},[s("Traduccion",{staticClass:"color-primario",attrs:{dialogo:t.traduccion2}})],1)]),s("div",{staticClass:"row bg-c30 mb-5"},[s("div",{staticClass:"col-12 p-5"},[s("div",{staticClass:"tarjeta tarjeta--blanca p-4 mb-5",attrs:{"data-aos":"fade-down"}},[s("SlyderA",{attrs:{tipo:"b"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 p-4"},[s("h4",{staticClass:"text-center txt-c1 mb-5"},[s("i",[t._v("Indirect reporting statements")])]),s("Traduccion",{staticClass:"color-primario mb-4",attrs:{dialogo:t.traduccion3}}),s("Audio",{staticClass:"color-secundario mb-4 mx-auto",attrs:{audio:a("e3fb")},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 p-0 d-none d-lg-block"},[s("figure",[s("img",{attrs:{src:a("b021")}})])]),s("div",{staticClass:"col-lg-6 p-0 d-none d-lg-block"},[s("figure",[s("img",{attrs:{src:a("ca52")}})])])])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 p-4"},[s("h4",{staticClass:"text-center txt-c1 mb-5"},[s("i",[t._v("Indirect speech: reporting questions")])]),s("Traduccion",{staticClass:"color-primario mb-4",attrs:{dialogo:t.traduccion4}}),s("Audio",{staticClass:"color-secundario mb-4 mx-auto",attrs:{audio:a("40e5")},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 p-0 d-none d-lg-block"},[s("figure",[s("img",{attrs:{src:a("9ace")}})])]),s("div",{staticClass:"col-lg-4 p-0 d-none d-lg-block"},[s("figure",[s("img",{attrs:{src:a("8ea2")}})])]),s("div",{staticClass:"col-lg-4 p-0 d-none d-lg-block"},[s("figure",[s("img",{attrs:{src:a("b58d")}})])])])],1)])])],1)])]),s("div",{staticClass:"row bg-c31"},[s("div",{staticClass:"col-12 p-5"},[s("div",{staticClass:"row align-items-center mb-4"},[t._m(6),s("div",{staticClass:"col-lg-7",attrs:{"data-aos":"fade-left"}},[s("Traduccion",{staticClass:"color-primario mb-4",attrs:{dialogo:t.traduccion5}}),t._m(7)],1)]),s("div",{staticClass:"row",attrs:{"data-aos":"fade-right"}},[s("div",{staticClass:"col-12"},[s("Traduccion",{staticClass:"color-primario mb-4",attrs:{dialogo:t.traduccion6}})],1)])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titulo-principal color-acento-contenido",attrs:{"data-aos":"flip-up"}},[a("div",{staticClass:"titulo-principal__numero"},[a("span",{staticStyle:{color:"#FFF"}},[t._v("3")])]),a("h1",[a("i",[t._v("Reported speech - indirect")]),t._v(" (Reporte de frases - indirecto)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-5",attrs:{"data-aos":"fade-left"}},[s("figure",[s("img",{staticClass:"m-auto",staticStyle:{width:"500px"},attrs:{src:a("e183")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"mb-5",attrs:{"data-aos":"fade-up"}},[a("div",{staticClass:"video"},[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/K3B4LsxubB0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titulo-sexto color-primario mb-4",attrs:{"data-aos":"fade-right"}},[a("p",{staticClass:"mb-0"},[a("b",[t._v("Tabla 2")]),t._v(". "),a("i",[t._v("Direct and indirect speech")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabla-b color-acento-contenido borde1 mb-5",attrs:{"data-aos":"fade-left"}},[a("div",{staticClass:"tabla-b__header fondo2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"p-5"},[a("br"),a("br"),a("br"),a("br")])])])]),a("table",[a("tr",{staticStyle:{"background-color":"#3C3FA7"}},[a("th",{staticClass:"text-white text-center"}),a("th",{staticClass:"border3 text-white text-center"},[a("i",[t._v("Direct")])]),a("th",{staticClass:"border3 text-white text-center"},[a("i",[t._v("Indirect")])]),a("th",{staticClass:"text-white text-center"},[a("i",[t._v("Reported clause")])])]),a("tr",{staticClass:"borde5",staticStyle:{"background-color":"#FFF"}},[a("td",{staticClass:"mb-0 text-center"},[a("i",[t._v("Statement")])]),a("td",{staticClass:"border3 mb-0 text-center"},[a("i",[t._v("‘I’m tired’, I said.")])]),a("td",{staticClass:"border3 mb-0 text-center",staticStyle:{"background-color":"#D6E0FD"}},[a("i",[t._v("I told them (that) I was tired.")])]),a("td",{staticClass:"mb-0 text-center"},[a("i",[t._v("that-clause")])])]),a("tr",{staticClass:"borde5",staticStyle:{"background-color":"#FFF"}},[a("td",{staticClass:"mb-0 text-center"},[a("i",[t._v("Question")])]),a("td",{staticClass:"border3 mb-0 text-center"},[a("p",[a("i",[t._v("‘Are you ready?’, the nurse asked Joel.")])]),a("p",{staticClass:"mb-0"},[a("i",[t._v("‘Who are you?’, she asked.")])])]),a("td",{staticClass:"border3 mb-0 text-center",staticStyle:{"background-color":"#D6E0FD"}},[a("p",[a("i",[t._v("The nurse asked Joel if/whether he was ready.")])]),a("p",{staticClass:"mb-0"},[a("i",[t._v("She asked me who I was.")])])]),a("td",{staticClass:"mb-0 text-center"},[a("p",[a("i",[t._v("if-clause/whether-clause")])]),a("p",{staticClass:"mb-0"},[a("i",[t._v("wh-clause")])])])]),a("tr",{staticClass:"borde5",staticStyle:{"background-color":"#FFF"}},[a("td",{staticClass:"mb-0 text-center"},[a("i",[t._v("Command")])]),a("td",{staticClass:"border3 mb-0 text-center"},[a("i",[t._v("‘Leave at once!’, they ordered.")])]),a("td",{staticClass:"border3 mb-0 text-center",staticStyle:{"background-color":"#D6E0FD"}},[a("i",[t._v("They ordered us to leave at once.")])]),a("td",{staticClass:"mb-0 text-center"},[a("i",[t._v("to-infinitive clause")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-4 mb-4 mb-lg-0",attrs:{"data-aos":"fade-right"}},[s("figure",[s("img",{staticClass:"m-auto",staticStyle:{width:"450px"},attrs:{src:a("65f2")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-5 mb-4 mb-lg-0",attrs:{"data-aos":"fade-right"}},[s("p",{staticClass:"mb-5"},[s("i",[t._v("Let’s practice: speaking")])]),s("figure",[s("img",{staticClass:"m-auto",staticStyle:{width:"450px"},attrs:{src:a("1640")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 bg-c32 px-5 py-4"},[a("ul",{staticClass:"lista-ul"},[a("li",[a("i",{staticClass:"fas fa-angle-right",staticStyle:{color:"#FC5F65"}}),a("p",{staticClass:"mb-0"},[a("i",[t._v("What is your favorite sport and how long have you been playing/doing it?")])])]),a("li",[a("i",{staticClass:"fas fa-angle-right",staticStyle:{color:"#FC5F65"}}),a("p",{staticClass:"mb-0"},[a("i",[t._v("What kind of music do you like? Have you always listened to that kind of music?")])])]),a("li",[a("i",{staticClass:"fas fa-angle-right",staticStyle:{color:"#FC5F65"}}),a("p",{staticClass:"mb-0"},[a("i",[t._v("What did you use to do when you were younger that you don't do anymore?")])])]),a("li",[a("i",{staticClass:"fas fa-angle-right",staticStyle:{color:"#FC5F65"}}),a("p",{staticClass:"mb-0"},[a("i",[t._v("What were you doing yesterday at this time?")])])]),a("li",[a("i",{staticClass:"fas fa-angle-right",staticStyle:{color:"#FC5F65"}}),a("p",{staticClass:"mb-0"},[a("i",[t._v("Which two promises will you make concerning learning English?")])])])])])])}],o=a("cf7f"),r=a("7306"),n={name:"Tema3",components:{Traduccion:r["a"],DialogoChat:o["a"]},data:function(){return{traduccion1:{dialogo:[{textoIng:"<em>Indirect speech focuses more on the content of what someone said rather than their exact words. In indirect speech, the structure of the reported clause depends on whether the speaker is reporting a statement, a question, or a command. <span>First, check the next video, then check the chart:</span></em>",textoEsp:"El estilo indirecto se enfoca más en el contenido de lo que alguien dijo que en sus palabras exactas. En el estilo indirecto, la estructura de la cláusula informada depende de si el hablante informa una oración, una pregunta o un mandato. Primero revise el siguiente video y, luego, la gráfica."}]},traduccion2:{dialogo:[{textoIng:"<em>According to the direct reported speech, we have two reports for statements and questions. Listen and read:</em>",textoEsp:"De acuerdo con el estilo de reporte directo, tenemos dos reportes para oraciones y preguntas. Escuche y lea:"}]},traduccion3:{dialogo:[{textoIng:"<em>Indirect reporting of statements consists of a reporting clause and a that-clause:<br><br><ol><li>• The pilot commented <span>that</span> the weather had been extremely bad as the plane came in to land. (The pilot’s words were: ‘The weather was extremely bad as the plane came in to land.’)</li><li>• I told my wife I didn’t want a party on my 50th birthday. (that-clause without that) (or I told my wife that I didn’t want a party on my 50th birthday.)</li></em>",textoEsp:"El reporte indirecto de declaraciones consiste en una cláusula de reporte y una cláusula ‘that’:<br><br><ol><li>• The pilot commented that the weather had been extremely bad as the plane came in to land. (Las palabras del piloto fueron: ‘The weather was extremely bad as the plane came in to land.’).</li><li>• I told my wife I didn’t want a party on my 50th birthday. (cláusula that sin that) (o I told my wife that I didn’t want a party on my 50th birthday.)</li>"}]},traduccion4:{dialogo:[{textoIng:"<em><b>Reporting yes-no questions and alternative questions.</b><br>Indirect reports of yes-no questions and questions with or consist of a reporting clause and a reported clause introduced by if or whether. If is more common than whether. The reported clause is in statement form (subject & verb), not question form:<br><br><ol><li>• She asked if I was Scottish. (original yes-no question: ‘Are you Scottish?’)</li><li>• The waiter asked <b>whether</b> we wanted a table near the window. (original yes-no question: ‘Do you want a table near the window?’)</li><li>• He asked me if I had come by train or by bus. (original alternative question: ‘Did you come by train or by bus?’)</li></em>",textoEsp:"<b>Reporte de preguntas sí-no y preguntas alternativas</b><br><i>Indirect speech</i> de preguntas sí-no y preguntas con o que consisten en una cláusula de informe y una cláusula informada introducida por <i>if</i> o <i>whether</i>. <i>if</i> es más común que <i>whether</i>. La cláusula informada está en forma de una oración afirmativa (sujeto y verbo), no en forma de pregunta:<br><br><ol><li>• <i>She asked if I was Scottish</i>. (pregunta de sí-no original: <i>‘Are you Scottish?’</i>)</li><li>• <i>The waiter asked whether we wanted a table near the window</i>. (pregunta de sí-no original: <i>‘Do you want a table near the window?’</i>)</li><li>• <i>He asked me if I had come by train or by bus</i>. (pregunta alternativa original: <i>‘Did you come by train or by bus?’</i>)</li>"}]},traduccion5:{dialogo:[{textoIng:"<em>Ask your partner the following questions making sure to take good notes. After you have finished the questions, find a new partner and report what you have learned about your first partner using reported speech.</em>",textoEsp:"Realice a su compañero las siguientes preguntas, asegurándose de tomar buenas notas. Una vez haya terminado las preguntas, busque un nuevo compañero e informe lo que ha aprendido sobre su primer compañero utilizando el estilo indirecto."}]},traduccion6:{dialogo:[{textoIng:"<em>Remember to use different virtual channels, such as Messenger, WhatsApp, Telegram, or if you have the possibility to practice with a member of your family or a friend, it will be nice. <b>¡Let&apos;s do it!</b></em>",textoEsp:"Recuerde usar diferentes canales virtuales, como Messenger, WhatsApp, Telegram, o si tiene la posibilidad de practicar con un familiar o un amigo, será lindo. ¡Vamos a hacerlo!"}]}}},mounted:function(){var t=this;this.$nextTick((function(){t.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},c=n,l=a("2877"),d=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=tema3.5c7b17a4.js.map
<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 3
      h1 #[i Reported speech] (Discurso indirecto)
    .row.bg-c29.mb-5
      .col-12.px-5
        .row.mb-5
          .col-lg-7.mb-4.mb-lg-0
            Traduccion.color-primario(:dialogo="traduccion1")
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/img1.png", style="width:500px").m-auto
        .titulo-sexto.color-primario.mb-4
          p.mb-0 #[b Tabla 2]. #[i Direct and indirect speech]
        .tabla-b.color-acento-contenido.borde1.mb-5
          .tabla-b__header.fondo2
            .row
              .col-12
                .p-5
                  br
                  br
                  br
                  br
          table
            tr(style="background-color: #3C3FA7")
              th.text-white.text-center 
              th.border3.text-white.text-center #[i Direct]
              th.border3.text-white.text-center #[i Indirect]
              th.text-white.text-center #[i Reported clause]
            tr.borde5(style="background-color: #FFF")
              td.mb-0.text-center #[i Statement]
              td.border3.mb-0.text-center #[i ‘I’m tired’, I said.]
              td.border3.mb-0.text-center(style="background-color: #D6E0FD") #[i I told them (that) I was tired.]
              td.mb-0.text-center #[i that-clause]
            tr.borde5(style="background-color: #FFF")
              td.mb-0.text-center #[i Question]
              td.border3.mb-0.text-center
                p #[i ‘Are you ready?’, the nurse asked Joel.]
                p.mb-0 #[i ‘Who are you?’, she asked.]
              td.border3.mb-0.text-center(style="background-color: #D6E0FD")
                p #[i The nurse asked Joel if/whether he was ready.]
                p.mb-0 #[i She asked me who I was.]
              td.mb-0.text-center
                p #[i if-clause/whether-clause]
                p.mb-0 #[i wh-clause]
            tr.borde5(style="background-color: #FFF")
              td.mb-0.text-center #[i Command]
              td.border3.mb-0.text-center #[i ‘Leave at once!’, they ordered.]
              td.border3.mb-0.text-center(style="background-color: #D6E0FD") #[i They ordered us to leave at once.]
              td.mb-0.text-center #[i to-infinitive clause]
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img3.png", style="width:450px").m-auto
      .col-lg-8
        Traduccion.color-primario(:dialogo="traduccion2")
    .row.bg-c30.mb-5
      .col-12.p-5
        .tarjeta.tarjeta--blanca.p-4.mb-5
          SlyderA(tipo="b")
            .row
              .col-12.p-4
                h4.text-center.txt-c1.mb-5 #[i Indirect reporting statements]
                Traduccion.color-primario.mb-4(:dialogo="traduccion3")
                Audio.color-secundario.mb-4.mx-auto(
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                .row
                  .col-lg-6.p-0.d-none.d-lg-block
                    figure
                      img(src="@/assets/curso/tema3/img3.svg")
                  .col-lg-6.p-0.d-none.d-lg-block
                    figure
                      img(src="@/assets/curso/tema3/img4.svg")
            .row
              .col-12.p-4
                h4.text-center.txt-c1.mb-5 #[i Indirect speech: reporting questions]
                Traduccion.color-primario.mb-4(:dialogo="traduccion4")
                Audio.color-secundario.mb-4.mx-auto(
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                .row
                  .col-lg-4.p-0.d-none.d-lg-block
                    figure
                      img(src="@/assets/curso/tema3/img5.svg")
                  .col-lg-4.p-0.d-none.d-lg-block
                    figure
                      img(src="@/assets/curso/tema3/img6.svg")
                  .col-lg-4.p-0.d-none.d-lg-block
                    figure
                      img(src="@/assets/curso/tema3/img7.svg")
    .row.bg-c31
      .col-12.p-5
        .row.align-items-center.mb-4
          .col-lg-5.mb-4.mb-lg-0
            p.mb-5 #[i Let’s practice: speaking]
            figure
              img(src="@/assets/curso/tema3/img9.svg", style="width:450px").m-auto
          .col-lg-7
            Traduccion.color-primario.mb-4(:dialogo="traduccion5")
            .row
              .col-12.bg-c32.px-5.py-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right(style="color:#FC5F65")
                    |
                    p.mb-0 #[i What is your favorite sport and how long have you been playing/doing it?]
                  li 
                    i.fas.fa-angle-right(style="color:#FC5F65")
                    |
                    p.mb-0 #[i What kind of music do you like? Have you always listened to that kind of music?]
                  li 
                    i.fas.fa-angle-right(style="color:#FC5F65")
                    |
                    p.mb-0 #[i What did you use to do when you were younger that you don't do anymore?]
                  li 
                    i.fas.fa-angle-right(style="color:#FC5F65")
                    |
                    p.mb-0 #[i What were you doing yesterday at this time?]
                  li 
                    i.fas.fa-angle-right(style="color:#FC5F65")
                    |
                    p.mb-0 #[i Which two promises will you make concerning learning English?]
        .row
          .col-12
            Traduccion.color-primario.mb-4(:dialogo="traduccion6")

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema3',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>Indirect speech focuses more on the content of what someone said rather than their exact words. In indirect speech, the structure of the reported clause depends on whether the speaker is reporting a statement, a question, or a command. <span>First, check the next video, then check the chart:</span></em>',
          textoEsp:
            'El estilo indirecto se enfoca más en el contenido de lo que alguien dijo que en sus palabras exactas. En el estilo indirecto, la estructura de la cláusula informada depende de si el hablante informa una oración, una pregunta o un mandato. Primero revise el siguiente video y, luego, la gráfica.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>According to the direct reported speech, we have two reports for statements and questions. Listen and read:</em>',
          textoEsp:
            'De acuerdo con el estilo de reporte directo, tenemos dos reportes para oraciones y preguntas. Escuche y lea:',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em>Indirect reporting of statements consists of a reporting clause and a that-clause:<br><br><ol><li>• The pilot commented <span>that</span> the weather had been extremely bad as the plane came in to land. (The pilot’s words were: ‘The weather was extremely bad as the plane came in to land.’)</li><li>• I told my wife I didn’t want a party on my 50th birthday. (that-clause without that) (or I told my wife that I didn’t want a party on my 50th birthday.)</li></em>',
          textoEsp:
            'El reporte indirecto de declaraciones consiste en una cláusula de reporte y una cláusula ‘that’:<br><br><ol><li>• The pilot commented that the weather had been extremely bad as the plane came in to land. (Las palabras del piloto fueron: ‘The weather was extremely bad as the plane came in to land.’).</li><li>• I told my wife I didn’t want a party on my 50th birthday. (cláusula that sin that) (o I told my wife that I didn’t want a party on my 50th birthday.)</li>',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em><b>Reporting yes-no questions and alternative questions.</b><br>Indirect reports of yes-no questions and questions with or consist of a reporting clause and a reported clause introduced by if or whether. If is more common than whether. The reported clause is in statement form (subject & verb), not question form:<br><br><ol><li>• She asked if I was Scottish. (original yes-no question: ‘Are you Scottish?’)</li><li>• The waiter asked <b>whether</b> we wanted a table near the window. (original yes-no question: ‘Do you want a table near the window?)</li><li>• He asked me if I had come by train or by bus. (original alternative question: ‘Did you come by train or by bus?’)</li></em>',
          textoEsp:
            '<b>Reporte de preguntas sí-no y preguntas alternativas</b><br><i>Indirect speech</i> de preguntas sí-no y preguntas con o que consisten en una cláusula de informe y una cláusula informada introducida por <i>if</i> o <i>whether</i>. <i>if</i> es más común que <i>whether</i>. La cláusula informada está en forma de una oración afirmativa (sujeto y verbo), no en forma de pregunta:<br><br><ol><li>• <i>She asked if I was Scottish</i>. (pregunta de sí-no original: <i>‘Are you Scottish?’</i>)</li><li>• <i>The waiter asked whether we wanted a table near the window</i>. (pregunta de sí-no original: <i>‘Do you want a table near the window?</i>)</li><li>• <i>He asked me if I had come by train or by bus</i>. (pregunta alternativa original: <i>‘Did you come by train or by bus?’</i>)</li>',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>Ask your partner the following questions making sure to take good notes. After you have finished the questions, find a new partner and report what you have learned about your first partner using reported speech.</em>',
          textoEsp:
            'Realice a su compañero las siguientes preguntas, asegurándose de tomar buenas notas. Una vez haya terminado las preguntas, busque un nuevo compañero e informe lo que ha aprendido sobre su primer compañero utilizando el estilo indirecto.',
        },
      ],
    },
    traduccion6: {
      dialogo: [
        {
          textoIng:
            '<em>Remember to use different virtual channels, such as Messenger, WhatsApp, Telegram, or if you have the possibility to practice with a member of your family or a friend, it will be nice. <b>¡Let&apos;s do it!</b></em>',
          textoEsp:
            'Recuerde usar diferentes canales virtuales, como Messenger, WhatsApp, Telegram, o si tiene la posibilidad de practicar con un familiar o un amigo, será lindo. ¡Vamos a hacerlo!',
        },
      ],
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

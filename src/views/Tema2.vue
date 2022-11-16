<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 2
      h1 #[i Verb tenses] (Tiempos verbales)
    .row.bg-c7.mb-5
      .col-12.px-5.pb-5
        .row.mb-5
          .col-lg-7.mb-4.mb-lg-0
            Traduccion.color-primario(:dialogo="traduccion1")
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/img1.png", style="width:500px").m-auto
        .titulo-sexto.color-primario.mb-4
          p.mb-0 #[b Tabla 1]. #[i Verb tenses]
        .tabla-b.color-acento-contenido.borde1.mb-5
          .tabla-b__header.fondo1
            .row.justify-content-end
              .col-auto.my-5.me-4.p-4
                .bg-c27.p-3
                  Audio.color-secundario(
                    :audio="require('@/assets/curso/tema2/audio1.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                  )
                .indicador--click(v-if="mostrarIndicadorAudio")
          table
            tr.borde2(style="background-color: #ACADE1")
              th(colspan="4").text-center  VERBS TENSES CONSIDERING PAST, PRESENT, AND FUTURE
            tr(style="background-color: #C2C4EA")
              th.text-center #[i ENGLISH VERB TENSE]
              th.border3.text-center #[i PAST]
              th.border3.text-center #[i PRESENT]
              th.text-center #[i FUTURE]
            tr.borde5(style="background-color: #FFF")
              td.mb-0.text-center #[i.txt-color1 SIMPLE]
              td.border3.mb-0.text-center #[i.txt-color1 I worked there in 1990.]
              td.border3.mb-0.text-center #[i.txt-color1 I work in a factory.]
              td.mb-0.text-center #[i.txt-color1 I will work when I turn 18.]
            tr.borde5(style="background-color: #FFF")
              td.mb-0.text-center #[i.txt-color1 CONTINUOUS]
              td.border3.mb-0.text-center #[i.txt-color1 I was working when you came.]
              td.border3.mb-0.text-center #[i.txt-color1 I am working right now.]
              td.mb-0.text-center #[i.txt-color1 I will be working in December.]
            tr.borde5(style="background-color: #FFF")
              td.mb-0.text-center #[i.txt-color1 PERFECT]
              td.border3.mb-0.text-center #[i.txt-color1 I had worked with him before.]
              td.border3.mb-0.text-center #[i.txt-color1 I have worked on several projects.]
              td.mb-0.text-center #[i.txt-color1 I will have worked on that by the time you get here.]
            tr.borde5(style="background-color: #FFF")
              td.mb-0.text-center #[i.txt-color1 PERFECT CONTINUOUS]
              td.border3.mb-0.text-center #[i.txt-color1 I had been working with him for a long time.]
              td.border3.mb-0.text-center #[i.txt-color1 I have been working on several projects.]
              td.mb-0.text-center #[i.txt-color1 I will have been working with several people in 2028]
        .row
          .col-lg-7.mb-4.mb-lg-0
            Traduccion.color-primario(:dialogo="traduccion2")
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/img2.png", style="width:500px").m-auto
    .row.mb-5
      .col-12
        TabsA.color-acento-botones
          .tarjeta.color-acento-contenido.p-4(titulo="<em>Present</em>")
            .row
              .col-lg-7.mb-4.mb-lg-0
                Traduccion.color-primario.mb-4(:dialogo="traduccion3")
                Audio.color-secundario.mb-4.mx-auto(
                  :audio="require('@/assets/curso/tema2/audio2.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
              .col-lg-5
                .tabla-a.color-acento-botones
                  table
                    thead(style="border-top: 0px")
                      tr
                        th.text-white #[i English verb tense]
                        th.text-white #[i Present]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b #[i Simple]]
                        td.text-center #[i I work in a Factory.]
                      tr
                        td.text-center #[b #[i Continuous]]
                        td.text-center #[i I am working right now.]
                      tr
                        td.text-center #[b #[i Perfect]]
                        td.text-center #[i I have worked on several projects.]
                      tr
                        td.text-center #[b #[i Perfect continuous]]
                        td.text-center #[i I have been working on several projects.]
          .tarjeta.color-acento-contenido.p-4(titulo="<em>Past</em>")
            .row
              .col-lg-7.mb-4.mb-lg-0
                Traduccion.color-primario.mb-4(:dialogo="traduccion4")
                Audio.color-secundario.mb-4.mx-auto(
                  :audio="require('@/assets/curso/tema2/audio3.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
              .col-lg-5
                .tabla-a.color-acento-botones
                  table
                    thead(style="border-top: 0px")
                      tr
                        th.text-white #[i English verb tense]
                        th.text-white #[i Past]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b #[i Simple]]
                        td.text-center #[i I worked there in 1990.]
                      tr
                        td.text-center #[b #[i Continuous]]
                        td.text-center #[i I was working when you came.]
                      tr
                        td.text-center #[b #[i Perfect]]
                        td.text-center #[i I had worked with him before.]
                      tr
                        td.text-center #[b #[i Perfect continuous]]
                        td.text-center #[i I had been working with him for a long time.]
          .tarjeta.color-acento-contenido.p-4(titulo="<em>Future</em>")
            .row
              .col-lg-7.mb-4.mb-lg-0
                Traduccion.color-primario.mb-4(:dialogo="traduccion5")
                Audio.color-secundario.mb-4.mx-auto(
                  :audio="require('@/assets/curso/tema2/audio3.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
              .col-lg-5
                .tabla-a.color-acento-botones
                  table
                    thead(style="border-top: 0px")
                      tr
                        th.text-white #[i English verb tense]
                        th.text-white #[i Past]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b #[i Simple]]
                        td.text-center #[i I will work when I turn 18.]
                      tr
                        td.text-center #[b #[i Continuous]]
                        td.text-center #[i I will be working in December.]
                      tr
                        td.text-center #[b #[i Perfect]]
                        td.text-center #[i I will have worked on that by the time you get here.]
                      tr
                        td.text-center #[b #[i Perfect continuous]]
                        td.text-center #[i I will have been working with several people in 2028.]
    .row.bg-c28
      figure.fig-p7.d-none.d-xl-block
        img(src="@/assets/curso/tema2/img4.svg", style="width:50px")
      .col-12.p-5
        .row.align-items-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img3.png", style="width:350px").m-auto
          .col-lg-9
            p #[i After seeing the tenses in detail, on your notebook, put the correct answer, then check:]
            p.txt-c2.mb-5 Después de ver los tiempos en detalle, en su cuaderno, coloque la respuesta correcta y verifique:
            .row
              .col-12.d-none.d-lg-block
                .tabla-a.color-acento-botones
                  table
                    thead
                      tr
                        th #[i The doctor said: “I have been working there for years.”]
                        th #[i She said: “I will work.”]
                        th #[i They said: “I will have been walking around the store.”]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b a.] #[i Past perfect]
                        td.text-center #[b a.] #[i Simple future]
                        td.text-center #[b a.] #[i Future perfect progressive]
                      tr
                        td.text-center #[b b.] #[i Present perfect progressive]
                        td.text-center #[b b.] #[i Perfect progressive]
                        td.text-center #[b b.] #[i Present perfect progressive]
              .col-12.d-block.d-lg-none
                .tabla-a.color-acento-botones.mb-4
                  table
                    thead(style="border-top: 0px")
                      tr
                        th #[i The doctor said: “I have been working there for years.”]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b a.] #[i Past perfect]
                      tr
                        td.text-center #[b b.] #[i Present perfect progressive]
                .tabla-a.color-acento-botones.mb-4
                  table
                    thead(style="border-top: 0px")
                      tr
                        th #[i She said: “I will work.”]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b a.] #[i Simple future]
                      tr
                        td.text-center #[b b.] #[i Perfect progressive]
                .tabla-a.color-acento-botones.mb-4
                  table
                    thead(style="border-top: 0px")
                      tr
                        th #[i They said: “I will have been walking around the store.”]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b a.] #[i Future perfect progressive]
                      tr
                        td.text-center #[b b.] #[i Present perfect progressive]
      figure.fig-p8.d-none.d-xl-block
        img(src="@/assets/curso/tema2/img5.svg", style="width:60px")

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema2',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>A verb tense shows a time reference, or when and how a verb occurred. We conjugate verbs differently depending on the verb tense and the time reference we need to explain. When reporting an action, it is mandatory to know the verb tense of the sentence that was said originally.<br>There are in total 12 English verb tenses. Simple definitions and examples of the different sentences can help you make sense of using verbs properly. So listen and read:</em>',
          textoEsp:
            'Un tiempo verbal muestra una referencia de tiempo, o cuándo y cómo ocurrió un verbo. Conjugamos los verbos de forma diferente según el tiempo verbal y la referencia temporal que necesitemos explicar. Al informar una acción, es obligatorio conocer el tiempo verbal de la oración que se dijo originalmente.<br>Hay un total de 12 tiempos verbales en inglés. Las definiciones simples y los ejemplos de los diferentes tiempos pueden ayudarlo a comprender el uso correcto de los verbos. Escuche y lea:',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>The three main verb tenses can each be further broken down to include the four aspects of verb tenses: simple, progressive, perfect, and perfect progressive:<br><br><ol><li>1. Simple tenses are the basic versions of past, present, and future tense verbs. They describe either one event or all events of one action.</li><li>2. Progressive tenses discuss an ongoing (or progressing) action.</li><li>3. Perfect tenses discuss a future action that will be completed (or perfected).</li><li>4. Perfect progressive tenses discuss a future action that will be ongoing.</li></ol>Now check each tense and then practice:</em>',
          textoEsp:
            'Los tres tiempos verbales principales se pueden dividir para incluir los cuatro aspectos de los tiempos verbales: simple, progresivo, perfecto y perfecto progresivo.<br><br><ol><li>1. Los tiempos simples son las versiones básicas de los verbos en tiempo pasado, presente y futuro. Describen un evento o todos los eventos de una acción.</li><li>2. Los tiempos progresivos hablan de una acción en curso (o progresiva).</li><li>3. Los tiempos perfectos hablan de una acción futura que será completada (o perfeccionada).</li><li>4. Los tiempos progresivos perfectos hablan de una acción futura que estará en curso.</li></ol>Ahora, revise cada tiempo y, luego, practique:',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em>Let&apos;s look at the present simple, continuous, perfect, and perfect continuous. You will find other names for it but, in general terms, you will need to pay attention to four possibilities as the image shows. Remember the function of each tense as it has been seen in previous English courses and contents.</em>',
          textoEsp:
            'Veamos el presente simple, continuo, perfecto y perfecto continuo. Encontrará otros nombres para él, pero, en términos generales, deberá prestar atención a cuatro posibilidades, como muestra la imagen. Recuerde la función de cada tiempo, como se ha visto en cursos y contenidos anteriores de inglés.',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em>Let&apos;s look at the past simple, continuous, perfect, and perfect continuous. You will find other names for it but, in general terms, you will need to pay attention to four possibilities as the image shows. Remember the function of each tense as it has been seen in previous English courses and contents.</em>',
          textoEsp:
            'Veamos el pasado simple, continuo, perfecto y perfecto continuo. Encontrará otros nombres para él, pero, en términos generales, deberá prestar atención a cuatro posibilidades, como muestra la imagen. Recuerde la función de cada tiempo, como se ha visto en cursos y contenidos anteriores de inglés.',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>Let&apos;s look at the future simple, continuous, perfect, and perfect continuous. You will find other names for it but, in general terms, you will need to pay attention to four possibilities as the image shows. Remember the function of each tense as it has been seen in previous English courses and contents.</em>',
          textoEsp:
            'Veamos el futuro simple, continuo, perfecto y perfecto continuo. Encontrará otros nombres para él, pero, en términos generales, deberá prestar atención a cuatro posibilidades, como muestra la imagen. Recuerde la función de cada tiempo, como se ha visto en cursos y contenidos anteriores de inglés.',
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

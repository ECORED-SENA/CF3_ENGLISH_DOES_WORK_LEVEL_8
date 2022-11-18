<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF")
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12.p-5
        .row.align-items-center
          .col-lg-8.bg-c2.px-5.mb-4.mb-lg-0
            .row
              figure.fig-p1
                img(src="@/assets/curso/intro/img4.svg")
              .col-12
                p.mb-0 Le damos la bienvenida al componente formativo denominado #[span.txt-c1 “#[i Things that were done] / Cosas que fueron realizadas...”], en el cual se desarrollan temáticas sobre reported speech, estructuras afirmativas, negativas e interrogativas y rutinas laborales, lo cual brindará un conocimiento de la manera ideal para el aprendizaje de un segundo idioma. Comencemos con la siguiente información:
              figure.fig-p2
                img(src="@/assets/curso/intro/img3.svg")
          .col-lg-4
            figure
              img(src="@/assets/curso/intro/img1.png", style="width:300px").m-auto
    .row.bg-c3
      .col-12.px-5.pb-5
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/x8fd26PBfHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row
          .col-lg-4.mb-4.mb-lg-0
            p Puede repasar el contenido visto en el video a través de la siguiente ventana:
            figure
              img(src="@/assets/curso/intro/img2.png", style="width:300px").m-auto
          .col-lg-8
            Traduccion.color-primario(:dialogo="traduccion1")

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Introduccion',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>In order to transmit the information received in daily and work situations, taking into account the functions and forms of the language, it is important to consult and master the reported speech, the different verb tenses, and, of course, the related vocabulary.<br>To communicate in English and discuss the activities of daily life with our friends and family, it is essential to have a large vocabulary.<br>In this component, you will learn how to manage verb tenses to spontaneously narrate topics such as “Let&apos;s talk about the work and social routines I used to have.”</em>',
          textoEsp:
            'Con el fin de transmitir la información recibida de situaciones cotidianas y laborales, teniendo en cuenta las funciones y formas del lenguaje, es importante consultar y tener dominio del <em>reported speech</em> (reporte de frases), los diferentes tiempos verbales y, por supuesto, el vocabulario relacionado.<br>Para comunicarnos en inglés y comentar acerca de las actividades de la vida diaria con nuestros amigos y familiares, es indispensable tener un amplio vocabulario.<br>En este componente inicial, usted aprenderá cómo manejar los tiempos verbales con el fin de narrar de manera espontánea temáticas tales como <em>“Let&apos;s talk about the work and social routines I used to have”</em> (Hablemos de las rutinas laborales y sociales que solía tener).',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>

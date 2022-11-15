<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 4
      h1 #[i Let's talk about the work and social routines I used to have] (Hablemos de las rutinas laborales y sociales que solía tener)
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion1")
      .col-lg-5
        figure
          img(src="@/assets/curso/tema4/img1.png", style="width:450px").m-auto
    .row.mb-5
      .col-lg.bg-c33.m-2
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema4/img2.png", style="width:450px").m-auto
          .row
            .col-12.bg-c34
              .p-4
                p.mb-0.text-center #[i I #[span.txt-c1 used to] have long hair (but now I have short hair).]
      .col-lg.bg-c33.m-2
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema4/img3.png", style="width:450px").m-auto
          .row
            .col-12.bg-c34
              .p-4
                p.mb-0.text-center #[i He #[span.txt-c1 used to] smoke (but now he doesn't smoke).]
      .col-lg.bg-c33.m-2
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema4/img4.png", style="width:450px").m-auto
          .row
            .col-12.bg-c34
              .p-4
                p.mb-0.text-center #[i They #[span.txt-c1 used to] live in Medellin (but now they live in Bogota).]
    p.mb-5 #[i We use used to + infinitive to talk about a past situation that is no longer true. It tells us that there was a repeated action or state in the past which has now changed. So check the grammar:] / #[span.txt-c2 Usamos used to + infinitivo para hablar de una situación pasada que ya no es cierta. Nos dice que hubo una acción o estado repetido en el pasado que ahora ha cambiado. Así que revise la gramática:]
    .row.mb-5
      .col-12.bg-c35.p-4
        .row.align-items-center
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/img1.svg", style="width:70px").m-auto
          .col
            p.mb-0.txt-c4 #[i #[b #[span.txt-c5 Used to] + infinitive and be/get #[span.txt-c5 used to] + -ing look similar but they have very different uses.]] / #[i.txt-c5 Used to] + infinitivo y #[i be/get #[span.txt-c5 used to] + -ing] parecen similares pero tienen usos muy diferentes.
    .row.bg-c36.mb-5
      .col-12.p-5
        p.mb-5 #[i For example:]
        .row.mb-5
          .col-lg.bg-c33.m-2
            .row
              .col-12.p-5
                figure.mb-4
                  img(src="@/assets/curso/tema4/img5.png")
                .row
                  .col-12.bg-c34
                    .p-4
                      p.mb-0.text-center #[i She #[b.txt-c1 used to] work in a bank but she left and got a job as a gardener.]
          .col-lg.bg-c33.m-2
            .row
              .col-12.p-5
                figure.mb-4
                  img(src="@/assets/curso/tema4/img6.png")
                .row
                  .col-12.bg-c34
                    .p-4
                      p.mb-0.text-center #[i When we were at university, we #[b.txt-c1 used to] have to write an essay a week.]
        .row.justify-content-center
          .col-lg-10
            .row.align-items-center
              .col-lg-4.fig-p10.mb-4.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img7.png", style="width: 250px").m-auto
              .col-lg-7.bg-c37.fig-p9
                .row.justify-content-end
                  .col-lg-11.p-5
                    .row.align-items-center
                      .col-lg.mb-4.mb-lg-0
                        p.mb-0 #[i #[b Let’s watch the next video. Listen, practice, and remember:]] #[span.txt-2 / Observe el siguiente video. Escuche, practique y recuerde.]
                      .col-lg-auto
                        a.boton.color-acento-botones(href="https://youtu.be/hQZcRq22IFw" target="_blank" type="application/pdf")
                          span Ver video
                          i.fas.fa-video
    p.mb-5 #[i Now, we are going to practice. Listen each audio and complete:]
    Dialogo.color-acento-contenido.mb-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[i Used to]
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema4',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>When we use expressions to talk about routines or repeated actions in the past which we don&apos;t do in the present or we talk about states in the past which are no longer true, it is necessary to refer to <span>“used to”</span>:</em>',
          textoEsp:
            'Cuando usamos expresiones para hablar de rutinas o acciones repetidas en el pasado que no hacemos en el presente o hablamos de estados del pasado que ya no son ciertos, es necesario referirse a “used to”:',
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Joseph',
          img: require('@/assets/curso/tema4/img3.svg'),
        },
        {
          nombre: 'Isa',
          img: require('@/assets/curso/tema4/img4.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Joseph',
          textoIng: 'Are you coming to the ***?',
          textoEsp: '¿Vendrás a la fiesta?',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'party',
        },
        {
          personaje: 'Isa',
          textoIng: 'No, I *** to work.',
          textoEsp: 'No, tengo que trabajar.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'have',
        },
        {
          personaje: 'Joseph',
          textoIng: 'Work! What happened? You used to never miss a party!',
          textoEsp: '¡Trabajar! ¿Qué sucedió? ¡Nunca te perdías una fiesta!',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: '',
        },
        {
          personaje: 'Isa',
          textoIng: 'True, but I also didn’t use to have a stressful job.',
          textoEsp: 'Cierto, pero no solía tener un trabajo estresante.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: '',
        },
        {
          personaje: 'Joseph',
          textoIng: 'Yeah, and you *** to be poor - but you were fun!',
          textoEsp: 'Cierto, y solías ser pobre - pero eras divertida.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'used',
        },
        {
          personaje: 'Isa',
          textoIng: 'Yep! I used to be fun!',
          textoEsp: 'Si, solía ser divertida.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: '',
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

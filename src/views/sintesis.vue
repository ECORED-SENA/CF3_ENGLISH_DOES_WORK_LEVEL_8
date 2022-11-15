<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-12.bg-c38.p-5
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/sinte/img1.png", style="width:450px").m-auto
          .col-lg-8
            p.mb-4 #[i Up to this point, we have been able to review the twelve verb tenses that are present, present simple, present continuous, present perfect, present perfect continuous, past simple, past continuous, past perfect, and past perfect continuous, future with will, going to and -ing. We have also worked with reporting phrases, regular and irregular verbs, phrase verbs and some work vocabulary. ]
            p.mb-0.txt-c2 Hasta este punto, hemos podido repasar los doce tiempos verbales, que son: presente, presente simple, presente continuo, presente perfecto, presente perfecto continuo, pasado simple, pasado continuo, pasado perfecto y pasado perfecto continuo, futuro con will, going to e -ing. También hemos trabajado con reporte de frases, verbos regulares e irregulares, verbos frase y vocabulario del trabajo:
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sinte/img1.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

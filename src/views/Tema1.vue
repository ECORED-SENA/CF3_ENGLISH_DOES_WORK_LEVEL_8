<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 1
      h1 #[i Reported speech] (Reporte de frases)
    .row
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img1.png", style="width:500px").m-auto
      .col-lg-7
        Traduccion.color-primario(:dialogo="traduccion1")
    .row.bg-c7.mb-5
      .col-12.p-5
        .row.bg-c4.mb-5
          .col-12.px-4.pt-4
            .titulo-sexto.color-acento-contenido.mb-5
              p.mb-0 #[b Figura 1]. #[i Reported speech direct]
            figure
              img(src="@/assets/curso/tema1/img2.svg", style="width:600px").m-auto
        .row.mb-5
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img3.svg", style="width:180px").m-auto
          .col-lg-10
            Traduccion.color-primario(:dialogo="traduccion2")
        .row.justify-content-center.mb-5
          .col-md-8.col-lg-4.bg-c5
            .row.justify-content-center
              .col-12.p-0
                figure
                  img(src="@/assets/curso/tema1/img2.png")
              .col-10.m-4.p-4.bg-c6
                p.mb-0.text-center.txt-c1 #[i I am hungry.]
                p.text-center.txt-c2 Tengo hambre.
                p.mb-0.text-center.txt-c1 #[i Reported]
                p.text-center.txt-c2 Reporte
                p.mb-0.text-center.txt-c1 #[i He said: He is hungry]
                p.text-center.txt-c2.mb-0 Él dijo: él tiene hambre.
          .col-md-8.col-lg-4.bg-c5
            .row.justify-content-center
              .col-12.p-0
                figure
                  img(src="@/assets/curso/tema1/img3.png")
              .col-10.m-4.p-4.bg-c6
                p.mb-0.text-center.txt-c1 #[i I don't like Peter.]
                p.text-center.txt-c2 No me gusta Peter.
                p.mb-0.text-center.txt-c1 #[i Reported]
                p.text-center.txt-c2 Reporte
                p.mb-0.text-center.txt-c1 #[i She said: “She doesn’t like him”.]
                p.text-center.txt-c2.mb-0 Ella dijo: a ella no le gusta él.
          .col-md-8.col-lg-4.bg-c5
            .row.justify-content-center
              .col-12.p-0
                figure
                  img(src="@/assets/curso/tema1/img4.png")
              .col-10.m-4.p-4.bg-c6
                p.mb-0.text-center.txt-c1 #[i My dog comes with me.]
                p.text-center.txt-c2 Mi perro viene conmigo.
                p.mb-0.text-center.txt-c1 #[i Reported]
                p.text-center.txt-c2 Reporte
                p.mb-0.text-center.txt-c1 #[i He said: “The dog comes with him”]
                p.text-center.txt-c2.mb-0 Él dijo: el perro viene con él.
        .row
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img5.png", style="width:550px").m-auto
          .col-lg-6
            Traduccion.color-primario(:dialogo="traduccion3")
    .row.bg-c8.mb-5
      .col-12.p-5
        .row.align-items-center
          .col-lg-3.mb-4.mb-lg-0(style="z-index:2")
            figure
              img(src="@/assets/curso/tema1/img6.svg", style="width:250px").m-auto
          .col-lg-9(style="z-index:1")
            .bg-c10.p-5
              .row.justify-content-end
                .col-lg-10.bg-c9.p-4.shadow
                  p.txt-c1 A terrible situation with my sister!
                  p #[i I remember when my sister lost her job, #[b she said: “I do not know what to do” and I said: “we are going to find something to do”]. That was when the business started.]
                  p #[i At the beginning, a bunch of ideas came to my mind. I wanted to have a café but that was not a choice, as my #[b mom says: a business like a restaurant or related to food needs too much time”]. Then it came to my mind the idea of opening a language center and I said to myself: “I am going to do it” and that was when the difficult times came.]
                  p #[i At the beginning, we had to do every single task, we did not have time, and there was no chance to hire someone because there was no money. My sister used to repeat: “There is no money”.]
    .row.bg-c12
      .col-12.p-5
        figure.d-none.d-lg-block.fig-p3
          img(src="@/assets/curso/tema1/img8.svg", style="width:70px")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img6.png", style="width:270px").m-auto
          .col-lg-8
            p.mb-5 Now, let's answer some questions, based on the story. Try to write in your notebook the correct answer and then check: #[span.txt-c2 / Ahora, respondamos algunas preguntas, con base en la historia. Trate de escribir en su cuaderno la respuesta correcta y luego verifique:]
            .tabla-a.color-acento-botones.d-none.d-lg-block
              table
                thead
                  tr
                    th #[i When the sister said “I do not know what to do”, what did she mean?]
                    th #[i When the person who writes the story said: “we are going to find something to do”, what happened?]
                tbody(style="background-color: #FFF")
                  tr
                    td.text-center #[b a.] #[i She was lost.]
                    td.text-center #[b a.] #[i A new business started.]
                  tr
                    td.text-center #[b b.] #[i She was fired.]
                    td.text-center #[b b.] #[i They closed the previous store.]
                  tr
                    td.text-center #[b c.] #[i She did not know where to live.]
                    td.text-center #[b c.] #[i A new written project began.]
                  tr
                    td.text-center #[b d.] #[i She had money.]
                    td.text-center #[b d.] #[i The mobile rang.]
            .tabla-a.color-acento-botones.d-block.d-lg-none.mb-4
              table
                thead
                  tr
                    th #[i When the sister said “I do not know what to do”, what did she mean?]
                tbody(style="background-color: #FFF")
                  tr
                    td.text-center #[b a.] #[i She was lost.]
                  tr
                    td.text-center #[b b.] #[i She was fired.]
                  tr
                    td.text-center #[b c.] #[i She did not know where to live.]
                  tr
                    td.text-center #[b d.] #[i She had money.]
            .tabla-a.color-acento-botones.d-block.d-lg-none
              table
                thead
                  tr
                    th #[i When the person who writes the story said: “we are going to find something to do”, what happened?]
                tbody(style="background-color: #FFF")
                  tr
                    td.text-center #[b a.] #[i A new business started.]
                  tr
                    td.text-center #[b b.] #[i They closed the previous store.]
                  tr
                    td.text-center #[b c.] #[i A new written project began.]
                  tr
                    td.text-center #[b d.] #[i The mobile rang.]
        figure.d-none.d-lg-block.fig-p4
          img(src="@/assets/curso/tema1/img9.svg", style="width:70px")
    Separador
    #t_1_1
    .titulo-segundo.color-primario
      h2 1.1 #[i Job] (Empleo)
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img10.svg", style="width:450px").m-auto
      .col-lg-7
        Traduccion.color-primario(:dialogo="traduccion4")
    .row.bg-c13.mb-5
      .col-12.p-5
        .row.justify-content-center
          .col-lg-11.p-4
            SlyderF(columnas="col-9 col-lg-6 col-xl-4")
              .tarjeta.bg-c14.p-4
                .row.justify-content-center.mb-3
                  .col-10.pos1.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio1.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c3.mb-0 #[i #[b Job]]
                    p.text-center.txt-c1.mb-0 #[i #[b What do they do?]]
                    p.text-center.txt-c1.mb-0 #[i #[b Where do they work?]]
                    p.text-center.mb-0 #[i He said: “ I work in the office”]
              .tarjeta.bg-c15.p-4
                .row.justify-content-center.mb-3
                  .col-10.pos1.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio2.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c3.mb-0 #[i #[b Accountants]]
                    p.text-center.txt-c1.mb-0 #[i #[b Look after the finances in an organization.]]
                    p.text-center.txt-c1.mb-0 #[i #[b They work in an office.]]
                    p.text-center.mb-0 He said: “I look after finances.”
              .tarjeta.bg-c16.p-4
                .row.justify-content-center.mb-3
                  .col-10.pos1.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio3.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c3.mb-0 #[i #[b Bakers]]
                    p.text-center.txt-c1.mb-0 #[i #[b Bake bread.]]
                    p.text-center.txt-c1.mb-0 #[i #[b They work in a bakery.]]
                    p.text-center.mb-0 He said: “I bake bread.”
              .tarjeta.bg-c17.p-4
                .row.justify-content-center.mb-3
                  .col-10.pos1.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio4.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c3.mb-0 #[i #[b Barbers]]
                    p.text-center.txt-c1.mb-0 #[i #[b Shave men's beards and cut men's hair.]]
                    p.text-center.txt-c1.mb-0 #[i #[b They work in a barber shop.]]
                    p.text-center.mb-0 He said: “I shave people’s beards.”
              .tarjeta.bg-c18.p-4
                .row.justify-content-center.mb-3
                  .col-10.pos1.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio5.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c3.mb-0 #[i #[b Barmen/women]]
                    p.text-center.txt-c1.mb-0 #[i #[b Serve drinks.]]
                    p.text-center.txt-c1.mb-0 #[i #[b They work in a bar, pub or restaurant.]]
                    p.text-center.mb-0 He said: “I serve drinks.”
              .tarjeta.bg-c19.p-4
                .row.justify-content-center.mb-3
                  .col-10.pos1.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio6.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c3.mb-0 #[i #[b Butchers]]
                    p.text-center.txt-c1.mb-0 #[i #[b Prepare and sell meat.]]
                    p.text-center.txt-c1.mb-0 #[i #[b They work in a butcher’s shop.]]
                    p.text-center.mb-0 He said: “I sell meat.”
              .tarjeta.bg-c20.p-4
                .row.justify-content-center.mb-3
                  .col-10.pos1.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio7.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c3.mb-0 #[i #[b Chambermaids]]
                    p.text-center.txt-c1.mb-0 #[i #[b Clean and tidy rooms.]]
                    p.text-center.txt-c1.mb-0 #[i #[b They work in a hotel.]]
                    p.text-center.mb-0 They said: “They work in hotels.”
              .tarjeta.bg-c21.p-4
                .row.justify-content-center.mb-3
                  .col-10.pos1.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio8.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center.txt-c3.mb-0 #[i #[b Fishmongers]]
                    p.text-center.txt-c1.mb-0 #[i #[b Prepare and sell fish.]]
                    p.text-center.txt-c1.mb-0 #[i #[b They work in a fishmonger’s.]]
                    p.text-center.mb-0 They said: “They work in rivers selling fish.”
    .row.bg-c22
      .col-12.p-5
        Traduccion.color-primario.mb-5(:dialogo="traduccion5")
        .row
          .col-lg-8.mb-4.mb-lg-0
            .row
              .col-lg-12.d-none.d-lg-block
                .tabla-a.color-acento-botones
                  table
                    thead(style="border-top: 0px")
                      tr
                        td.p-0
                          figure
                            img(src="@/assets/curso/tema1/img16.png")
                        td.p-0
                          figure
                            img(src="@/assets/curso/tema1/img17.png")
                      tr
                        th #[i A male dancer said after the show they danced with two girls.]
                        th #[i He says he always does his homework.]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b a.] #[i They said they danced with two girls.]
                        td.text-center #[b a.] #[i A student said: "I always do my homework."]
                      tr
                        td.text-center #[b b.] #[i We said we danced with two girls.]
                        td.text-center #[b b.] #[i A student said: "They always do my homework."]
                      tr
                        td.text-center #[b c.] #[i We danced with two girls.]
                        td.text-center #[b c.] #[i A student said: "She always does my homework."]
                      tr
                        td.text-center #[b d.] #[i He said: "We danced with two girls."]
                        td.text-center #[b d.] #[i A student said: "I always did my homework."]
              .col-lg-12.d-block.d-lg-none
                .tabla-a.color-acento-botones.mb-4
                  table
                    thead(style="border-top: 0px")
                      tr
                        td.p-0
                          figure
                            img(src="@/assets/curso/tema1/img16.png")
                      tr
                        th #[i A male dancer said after the show they danced with two girls.]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b a.] #[i They said they danced with two girls.]
                      tr
                        td.text-center #[b b.] #[i We said we danced with two girls.]
                      tr
                        td.text-center #[b c.] #[i We danced with two girls.]
                      tr
                        td.text-center #[b d.] #[i He said: "We danced with two girls."]
                .tabla-a.color-acento-botones
                  table
                    thead(style="border-top: 0px")
                      tr
                        td.p-0
                          figure
                            img(src="@/assets/curso/tema1/img17.png")
                      tr
                        th #[i He says he always does his homework.]
                    tbody(style="background-color: #FFF")
                      tr
                        td.text-center #[b a.] #[i A student said: "I always do my homework."]
                      tr
                        td.text-center #[b b.] #[i A student said: "They always do my homework."]
                      tr
                        td.text-center #[b c.] #[i A student said: "She always does my homework."]
                      tr
                        td.text-center #[b d.] #[i A student said: "I always did my homework."]
          .col-lg-4.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/img15.png", style="width:350px").m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-primario
      h2 1.2 #[i Affirmative, negative, and interrogative structures] (Estructuras afirmativas, negativas e interrogativas)
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        Traduccion.color-primario.mb-5(:dialogo="traduccion6")
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/img18.png", style="width:450px").m-auto
    .row.bg-c23.mb-5
      .col-12.p-5
        .row.justify-content-center
          figure.fig-p5.d-none.d-xl-block
            img(src="@/assets/curso/tema1/img17.svg", style="width:50px")
          .col-11.bg-c24.p-5
            .row
              .col-lg.m-2.bg-c25.p-4
                figure.mb-4
                  img(src="@/assets/curso/tema1/img14.svg", style="width:200px").m-auto
                .row.justify-content-center
                  .col-11.bg-c24.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio9.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center #[b #[i.txt-c1 Sam said:] #[i.txt-c3 “I do not have any homework.”]]
                    p.text-center #[b #[i.txt-c1 Sam asked:] #[i.txt-c3 “Do we have any homework?”]]
                    p.text-center #[b #[i.txt-c1 Sam denied:] #[i.txt-c3 “I do not have any homework.”]]
              .col-lg.m-2.bg-c25.p-4
                figure.mb-4
                  img(src="@/assets/curso/tema1/img15.svg", style="width:200px").m-auto
                .row.justify-content-center
                  .col-11.bg-c24.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio10.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center #[b #[i.txt-c1 Elisa:] #[i.txt-c3 “It is time to work.”]]
                    p.text-center #[b #[i.txt-c1 Affirmative:] #[i.txt-c3 Elisa assured: “It is time to work.”]]
                    p.text-center #[b #[i.txt-c1 Negative:] #[i.txt-c3 Elisa denied: “It is not time to work.”]]
                    p.text-center #[b #[i.txt-c1 Question:] #[i.txt-c3 Elisa asked: “Is it time to work?”]]
              .col-lg.m-2.bg-c25.p-4
                figure.mb-4
                  img(src="@/assets/curso/tema1/img16.svg", style="width:200px").m-auto
                .row.justify-content-center
                  .col-11.bg-c24.p-4
                    Audio.color-secundario.mb-4.mx-auto(
                      :audio="require('@/assets/curso/tema1/audio11.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    p.text-center #[b #[i.txt-c1 Teacher:] #[i.txt-c3 “You are ok.”]]
                    p.text-center #[b #[i.txt-c1 Affirmative:] #[i.txt-c3 Teacher said: “You are ok.”]]
                    p.text-center #[b #[i.txt-c1 Negative:] #[i.txt-c3 Teacher denied: “You are not ok.”]]
                    p.text-center #[b #[i.txt-c1 Question:] #[i.txt-c3 Teacher asked: “Are you ok?”]]
          figure.fig-p6.d-none.d-xl-block
            img(src="@/assets/curso/tema1/img8.svg", style="width:80px")
    .row.align-items-center.mb-5
      .col-lg-6.bg-c26.p-5.mb-4.mb-lg-0
        p.my-4.mx-5 #[i Now listen and complete with the missing words]. #[span.txt-c3 Ahora escuche y complete con las palabras faltantes.]
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/img19.png", style="width:670px")
    Dialogo.color-acento-contenido.mb-5(:dialogo="dialogo")
      template(#nombre-actividad) Escuche los audios y complete los espacios en blanco de cada una de las frases arrastrando el término correcto.
      template(#titulo-actividad) #[i Direct speech]
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
          
  
</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema1',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>The reported speech is used to report something somebody has said, it can be done in two different ways, the first one is called direct and it implies we must say what the speaker said in highlights. That sentence does not suffer any change, so the only thing that needs to be added is the expression <span>somebody said, somebody told...</span></em>',
          textoEsp:
            'El reported speech se utiliza para informar algo que alguien ha dicho, se puede hacer de dos maneras diferentes, la primera se llama directa e implica que debemos resaltar lo que dijo el hablante. Esa oración no sufre ningún cambio, por lo que solo falta agregar la expresión <b>“alguien dijo...”</b>.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>Direct speech is a representation of the real words someone said; it usually has a reporting verb in the past simple and the most common reporting verb is “said”. The reporting clause may come first or second. Let&apos;s practice with some examples:</em>',
          textoEsp:
            'El estilo directo es una representación de las palabras reales que alguien dijo; por lo general, tiene un verbo informador en pasado simple, y el verbo informador más común es <i>“said”</i>. La cláusula de informe puede ir primera o segunda. Vamos a practicar con algunos ejemplos:',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em>Now we are going to read this text in which direct speech is used. Bear in mind that in all circumstances, as we said before, it is important to keep the highlights and the words as the speaker spoke. Do not change the tense of the verb nor the pronoun:</em>',
          textoEsp:
            'Ahora, vamos a leer el siguiente texto, en el que se utiliza el estilo directo. Tenga en cuenta que en todas las circunstancias, como dijimos antes, es importante mantener los puntos destacados y las palabras tal como habló el orador. No cambie el tiempo del verbo ni el pronombre.',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em>To talk about jobs, it is important to know the name of the job, the meaning of it along with the place and the activity the person does. Please, see how the meaning is articulated in here:</em>',
          textoEsp:
            'Para hablar de trabajos, es importante saber el nombre del trabajo, el significado del mismo, junto con el lugar y la actividad que realiza la persona. Por favor, vea cómo se articula el significado:',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>Trying to continue working with the direct speech and the vocabulary learned about jobs, please, see the images and read the sentences to be able to select one of the options that shows the direct speech.</em>',
          textoEsp:
            'Intentando seguir trabajando con el estilo directo y el vocabulario aprendido sobre los trabajos, por favor, observe las imágenes y lea las frases, para luego seleccionar una de las opciones que muestra el estilo directo.',
        },
      ],
    },
    traduccion6: {
      dialogo: [
        {
          textoIng:
            '<em>We can report every single thing somebody says, we just need to identify whether that is a question, an affirmative or a negative sentence. In the following examples, we are going to see how to report every single speech. <br>Look at the examples and the changes that need to be done. Also, take into account that if it is direct speech, just write it down with highlights. The following verbs can be used: advised, assured, convinced, informed, notified, persuaded, promised, reassured, reminded, and warned:</em>',
          textoEsp:
            'Podemos reportar cada cosa que alguien dice, solo necesitamos identificar si es una pregunta, una oración afirmativa o negativa. En los siguientes ejemplos, vamos a ver cómo reportar cada uno de los discursos.<br>Mire los ejemplos y los cambios que deben hacerse. Además, tome en cuenta que si es un discurso directo, solo anótelo con resaltados. Se pueden utilizar los siguientes verbos: aconsejado, asegurado, convencido, informado, notificado, persuadido, prometido, tranquilizado, recordado y advertido.',
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Peter',
          img: require('@/assets/curso/tema1/img19.svg'),
        },
        {
          nombre: 'Laura',
          img: require('@/assets/curso/tema1/img20.svg'),
        },
        {
          nombre: 'Joseph',
          img: require('@/assets/curso/tema1/img21.svg'),
        },
        {
          nombre: 'Charlie',
          img: require('@/assets/curso/tema1/img22.svg'),
        },
        {
          nombre: 'Ivy',
          img: require('@/assets/curso/tema1/img23.svg'),
        },
        {
          nombre: 'Sally',
          img: require('@/assets/curso/tema1/img24.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Peter',
          textoIng: 'She says: "I *** ill."',
          textoEsp: 'Ella dice: “Yo estoy enferma”.',
          audio: require('@/assets/curso/tema1/audio12.mp3'),
          palabra: 'am',
        },
        {
          personaje: 'Laura',
          textoIng: '"I will ***", said Mary.',
          textoEsp: '“Yo estudiaré”, dijo Mary.',
          audio: require('@/assets/curso/tema1/audio13.mp3'),
          palabra: 'study',
        },
        {
          personaje: 'Joseph',
          textoIng: 'She said: "The *** is difficult."',
          textoEsp: 'Ella dijo: “El examen está difícil”.',
          audio: require('@/assets/curso/tema1/audio14.mp3'),
          palabra: 'exam',
        },
        {
          personaje: 'Charlie',
          textoIng: 'They said: "They have *** exercise."',
          textoEsp: 'Ellos dijeron: “Ellos han hecho ejercicio”.',
          audio: require('@/assets/curso/tema1/audio15.mp3'),
          palabra: 'taken',
        },
        {
          personaje: 'Ivy',
          textoIng: 'She said: "They have not *** their meals."',
          textoEsp: 'Ella dijo: “Ellos no han comido sus comidas”.',
          audio: require('@/assets/curso/tema1/audio16.mp3'),
          palabra: 'eaten',
        },
        {
          personaje: 'Sally',
          textoIng: 'He said: "Do you *** with me?"',
          textoEsp: 'Él dijo: “¿Estás de acuerdo conmigo?”',
          audio: require('@/assets/curso/tema1/audio17.mp3'),
          palabra: 'agree',
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

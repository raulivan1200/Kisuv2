import React from 'react'
import ExpandCollapseSection from '../Expand'
import styles from "../../styles/Faq.module.css"
function Spfaq() {
  return (
    <div className={styles.faqcontainer}>
    <div className={styles.centerfaq}>
    <h1 className={styles.faqbt}>FREQUENTLY ASKED QUESTIONS ✨</h1>
        <p>Here are some of our most frequently answered Web Design questions and answers.</p>
    </div>
    <div className={styles.pcent}>
    <ExpandCollapseSection
        toggleText="💰 ¿Cuánto cobran por construir un sitio web?"
        contentText="No hay una respuesta única para esta pregunta. El diseño de un sitio web se cotiza según las necesidades de cada proyecto individual. Cada sitio web es único y requiere diferentes componentes; diseñamos y desarrollamos sitios web personalizados específicamente para su negocio. Haremos muchas preguntas, evaluaremos sus necesidades y le daremos un presupuesto en función de esa evaluación. Nuestro paquete más pequeño comienza en $500. ¡Por favor contáctenos en kisucontacto@gmail.com para comenzar el proceso de cotización!"
    />

    <ExpandCollapseSection
        toggleText="⏳ ¿Cuánto tiempo tomará completar mi sitio web?"
        contentText="Nuestro plazo estándar es de 3 a 6 semanas para completar un sitio web, pero esto depende del proyecto, ya que el tamaño y el ritmo de cualquier proyecto los establece cada cliente. La cantidad de aportes que pueda proporcionar durante las etapas iniciales, sus comentarios y cuán pronto se proporcione el contenido: todo esto afecta la velocidad de finalización. La funcionalidad y las revisiones requeridas también juegan un papel en su cronograma."
    />

    <ExpandCollapseSection
        toggleText="🌍 ¿Tengo que ir a su oficina?"
        contentText="¡No! Trabajamos con clientes de todo el mundo y podemos comunicarnos por correo electrónico, llamadas programadas y reuniones por Zoom."
    />

    <ExpandCollapseSection
        toggleText="🔧 ¿Podré actualizar el sitio yo mismo una vez que esté terminado?"
        contentText="¡Sí! Nos encanta cuando nuestros clientes toman el control de su sitio web y aprenden a administrar el contenido por sí mismos. Tendrá acceso completo al backend de su nuevo sitio web de WordPress una vez migrado para realizar actualizaciones de texto simples, cambios de fotografías, nuevos productos y ajustes de precios que se pueden realizar fácilmente por su cuenta. Sin embargo, recomendamos a un profesional (desarrollador) para completar cambios y mantenimiento más complejos, como actualizaciones de complementos, cambios de diseño o estructura y requisitos de funcionalidad complejos."
    />

    <ExpandCollapseSection
        toggleText="📦 ¿Cuál es la diferencia entre sus diferentes paquetes de sitios web?"
        contentText="Por favor, contáctenos en kisucontacto@gmail.com para obtener información sobre los diferentes paquetes de sitios web que ofrecemos. Estaremos encantados de proporcionarle información detallada basada en sus requisitos específicos."
    />

    <ExpandCollapseSection
        toggleText="🔧 ¿Mantendrán nuestro sitio web por nosotros?"
        contentText="Podemos ayudar a mantener su sitio web, o pueden hacerlo ustedes mismos para cambios menores. La elección es 100% suya. Brindamos soporte continuo a muchos de nuestros clientes, pero no es obligatorio y no se le cobrará una tarifa mensual. Puede contactarnos cuando necesite actualizaciones en su sitio web, y le proporcionaremos un presupuesto por hora basado en sus solicitudes."
    />

    <ExpandCollapseSection
        toggleText="🌐 ¿Proporcionan alojamiento web y dominio?"
        contentText="Sí, utilizamos Vercel con 100 GB gratis. Tendrá acceso completo a su sitio web si desea migración. Sin embargo, podemos recomendarle paquetes de alojamiento (SiteGround, GoDaddy y Bluehost) y completaremos la migración a su nuevo alojamiento, incluido en el precio de nuestro paquete de diseño de sitios web."
    />

    <ExpandCollapseSection
        toggleText="📱 ¿Mi sitio web será compatible con dispositivos móviles?"
        contentText="¡Absolutamente! ¡Tener un sitio web compatible con dispositivos móviles es más importante que nunca! Trabajamos arduamente para garantizar que su sitio web sea receptivo en dispositivos y navegadores modernos."
    />

    <ExpandCollapseSection
        toggleText="🎨 ¿Cuánta participación tengo en el proceso de diseño del sitio web?"
        contentText="¡Absolutamente! Su aporte y comentarios son esenciales durante todo el proceso de diseño y desarrollo del sitio web. Comenzaremos haciéndole preguntas sobre sus necesidades, preferencias y deseos, trabajando juntos para crear el aspecto y la funcionalidad perfectos. Si tiene algún sitio web que admire, no dude en compartirlo con nosotros. Alternativamente, podemos usar muestras generadas por inteligencia artificial para ofrecerle varias opciones, lo que simplificará el proceso de selección y lo ajustará más a sus preferencias."
    />

    <ExpandCollapseSection
        toggleText="📝 ¿Quién redacta el texto / contenido del sitio web?"
        contentText="Requerimos que usted proporcione todo el contenido de texto para su sitio web. Usted es el experto en su negocio, por lo que siempre es mejor que provenga de usted. Si necesita ayuda, tenemos un redactor en nuestro equipo que puede ayudar a mejorar o redactar contenido original para usted sin costo adicional."
    />

    <ExpandCollapseSection
        toggleText="🖥️ ¿Solo crean sitios web?"
        contentText="No, también desarrollamos software y aplicaciones móviles para Android e iOS."
    />

    <ExpandCollapseSection
        toggleText="🔍 ¿Qué sucede si necesito ayuda con mi sitio en el futuro?"
        contentText="¡Estamos a solo un correo electrónico de distancia! Estamos aquí para ayudarlo tanto o tan poco como necesite, y estaremos disponibles incluso después del lanzamiento de su nuevo sitio web. Nuestro equipo se enorgullece de construir relaciones comerciales a largo plazo con nuestros clientes, y esperamos tener la oportunidad de trabajar en sus proyectos futuros o hacer crecer aún más su sitio web. Hemos estado haciendo esto desde 2006, así que no vamos a desaparecer pronto. No dude en enviarnos un correo electrónico a kisucontacto@gmail.com para solicitar un presupuesto o hacer una pregunta sobre su proyecto."
    />

    <ExpandCollapseSection
        toggleText="🔎 ¿El SEO está incluido en la construcción de mi sitio web?"
        contentText="Sí, la construcción de su sitio web incluye SEO. Todo lo que agregamos a su sitio web, incluido texto, fotos y videos, puede ser indexado por Google, pero eso no garantiza que se clasifique en el primer lugar. Sin embargo, ofrecemos servicios de SEO mensuales de primera clase con nuestro equipo de especialistas listos para ayudarlo con sus necesidades de SEO."
    />

    <ExpandCollapseSection
        toggleText="🤝 ¿Trabajan con empresas nuevas y pequeñas?"
        contentText="¡Sí! Trabajamos con todo tipo de empresas, desde nuevas y pequeñas hasta grandes corporaciones. Estamos emocionados de trabajar y guiar a nuevas empresas que están entusiasmadas por dar sus primeros pasos hacia una presencia en línea y hacer realidad su visión."
    />

    <ExpandCollapseSection
        toggleText="📷 ¿Qué es la obtención de fotos?"
        contentText="Si es necesario, lo ayudaremos a encontrar imágenes de stock gratuitas de sitios web como Pixels y Unsplash. Se requerirá su ayuda y dirección para encontrar las imágenes, fotografías, gráficos y vectores perfectos para su sitio web y su marca."
    />

    <ExpandCollapseSection
        toggleText="💳 ¿Qué formas de pago aceptan?"
        contentText="Una vez que acordemos el presupuesto presentado, aceptaremos tarjetas de débito, Visa, MasterCard, Amex, cheques, giros postales, efectivo y transferencias electrónicas de dinero (EMT)."
    />

    <ExpandCollapseSection
        toggleText="🚀 ¿Cómo empezamos?"
        contentText="Contáctenos por correo electrónico en kisucontacto@gmail.com con los detalles de su sitio web (proyecto actual o nuevo), desglose de páginas y cualquier sitio web de muestra para referencias. Después de revisar la información, le proporcionaremos un estimado para su proyecto o programaremos una llamada para discutirlo en detalle."
    />
</div>
  </div>
  )
}

export default Spfaq
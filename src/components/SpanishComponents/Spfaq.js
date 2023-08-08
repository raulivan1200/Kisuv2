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
        contentText="Su aporte y comentarios son esenciales durante todo el proceso de diseño y desarrollo del sitio web. Comenzaremos haciéndole preguntas sobre sus necesidades, preferencias y deseos, trabajando juntos para crear el aspecto y la funcionalidad perfectos. Si tiene algún sitio web que admire, no dude en compartirlo con nosotros. Alternativamente, podemos usar muestras generadas por inteligencia artificial para ofrecerle varias opciones, lo que simplificará el proceso de selección y lo ajustará más a sus preferencias."
    />

    <ExpandCollapseSection
        toggleText="🖥️ ¿Solo crean sitios web?"
        contentText="No, también desarrollamos software y aplicaciones móviles para Android e iOS."
    />

    <ExpandCollapseSection
        toggleText="💳 ¿Qué formas de pago aceptan?"
        contentText="Una vez que acordemos el presupuesto presentado, aceptaremos tarjetas de débito, Visa, MasterCard, Amex, cheques, giros postales, efectivo y transferencias electrónicas de dinero (EMT)."
    />

</div>
  </div>
  )
}

export default Spfaq
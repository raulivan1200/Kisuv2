import React from 'react'
import ExpandCollapseSection from './Expand'
import styles from "../styles/Faq.module.css"
function Faq() {
  return (
    <div className={styles.faqcontainer}>
    <div className={styles.centerfaq}>
    <h1 className={styles.faqbt}>FREQUENTLY ASKED QUESTIONS ✨</h1>
        <p>Here are some of our most frequently answered Web Design questions and answers.</p>
    </div>
    <div className={styles.pcent}>

<ExpandCollapseSection
toggleText="⏳ How long will it take to complete my website?"
contentText="Our standard timeline is 3-6 weeks to complete a website, but this depends on the project since the size and pace of any project are set by each client. How much input you can provide during the initial stages, your feedback, how soon the content is provided – all this affects the speed of completion. The functionality and revisions required will also play a role in your timeline."
/>

<ExpandCollapseSection
toggleText="🌍 Geographical Flexibility"
contentText=" We work with clients all over the world and can communicate by email, scheduled calls, and Zoom meetings."
/>

<ExpandCollapseSection
toggleText="🔧 Will I be able to update the site myself when it’s finished?"
contentText="Yes! We love it when our clients take control of their website and learn to manage the content on their own website. You will have full access to the backend of your new WordPress website upon migration to make simple text updates, photograph changes, new products, and pricing can easily be changed on your own. However, we do recommend a professional (developer) to complete more complex changes and maintenance such as plugin updates, design or structure changes, and complex functionality requirements."
/>


<ExpandCollapseSection
toggleText="🔧 Will you maintain our website for us?"
contentText="We can help maintain your website, or you can do so yourself with the more minor changes. The choice is 100% up to you. We provide ongoing support for many of our clients, but it is not mandatory, and you will not be charged a monthly fee. You can contact us as you require updates to your website, and we will provide an hourly quote based on your requests."
/>

<ExpandCollapseSection
toggleText="🌐 Do you provide website hosting and domain?"
contentText="Yes, we use Vercel with 100 free gb, you will have full access to your website if you want migration. However, we can recommend hosting packages to you (SiteGround, GoDaddy, and Bluehost), and we will complete the migration to your new hosting, including in our website design package pricing."
/>

<ExpandCollapseSection
toggleText="📱 Will my website be mobile-friendly?"
contentText="Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website is responsive on modern devices and browsers."
/>

<ExpandCollapseSection
toggleText="🎨 How much input do I have in the website design process?"
contentText="Your input and feedback are essential throughout the website design and development process. We'll begin by asking you questions about your needs, preferences, and desires, working together to create the perfect look and functionality. If you have any websites you admire, feel free to share them with us. Alternatively, we can use AI-generated samples to offer you various options, making the selection process simpler and more tailored to your preferences."
/>

<ExpandCollapseSection
toggleText="🖥️ Do you only create websites?"
contentText="No, we also do software, mobile apps for android and iOS."
/>

<ExpandCollapseSection
toggleText="💳 What forms of payments do you accept?"
contentText="Upon agreement of the quote presented, we will accept Debit, Visa, MasterCard, Amex, Cheque, Money Order, Cash, and EMT."
/>

</div>
  </div>
  )
}

export default Faq
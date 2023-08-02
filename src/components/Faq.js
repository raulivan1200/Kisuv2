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
toggleText="💰 How much do you charge to build a website?"
contentText="There’s not one single answer to this question. A website design is quoted based on the needs of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your business. We’ll ask a lot of questions, assess your needs, and give you a price quote based on that assessment. Our smallest package starts at $500. Please contact us at kisucontacto@gmail.com
 to begin the quote process started!"
/>

<ExpandCollapseSection
toggleText="⏳ How long will it take to complete my website?"
contentText="Our standard timeline is 3-6 weeks to complete a website, but this depends on the project since the size and pace of any project are set by each client. How much input you can provide during the initial stages, your feedback, how soon the content is provided – all this affects the speed of completion. The functionality and revisions required will also play a role in your timeline."
/>

<ExpandCollapseSection
toggleText="🌍 Do I have to be in Toronto to work with you?"
contentText="No! We work with clients all over the world and can communicate by email, scheduled calls, and Zoom meetings."
/>

<ExpandCollapseSection
toggleText="🔧 Will I be able to update the site myself when it’s finished?"
contentText="Yes! We love it when our clients take control of their website and learn to manage the content on their own website. You will have full access to the backend of your new WordPress website upon migration to make simple text updates, photograph changes, new products, and pricing can easily be changed on your own. However, we do recommend a professional (developer) to complete more complex changes and maintenance such as plugin updates, design or structure changes, and complex functionality requirements."
/>

<ExpandCollapseSection
toggleText="📦 What is the difference in your various website packages?"
contentText="Please contact us at kisucontacto@gmail.com
 to inquire about the different website packages we offer. We'll be happy to provide you with detailed information based on your specific requirements."
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
contentText="Absolutely! Your input and feedback are essential throughout the website design and development process. We'll begin by asking you questions about your needs, preferences, and desires, working together to create the perfect look and functionality. If you have any websites you admire, feel free to share them with us. Alternatively, we can use AI-generated samples to offer you various options, making the selection process simpler and more tailored to your preferences."
/>

<ExpandCollapseSection
toggleText="📝 Who writes the text/content for the website?"
contentText="We require that you provide all of the text content for your website. You are the expert on your business, so it’s always best if it comes from you. If you need assistance, we have a copywriter on our team who can help clean up or write original content for you with no additional cost."
/>

<ExpandCollapseSection
toggleText="🖥️ Do you only create websites?"
contentText="No, we also do software, mobile apps android and ios."
/>

<ExpandCollapseSection
toggleText="🔍 What if I need help on my site down the road?"
contentText="We are only an email away! We’re here to help you as much or as little as you need, and we’ll be available even beyond the launch of your new website. Our team takes pride in building a long-term business relationship with our clients, and we look forward to the opportunity to work on your future projects or growing your website further. We’ve been doing this since 2006, so we aren’t going anywhere anytime soon. Feel free to email us at kisucontacto@gmail.com
 to request a quote or ask a question about your project."
/>

<ExpandCollapseSection
toggleText="🔎 Is SEO included in my website build?"
contentText="Yes, the build of your website include SEO. All items that we add to your website, including text, photos, and video, can be seen by Google, but that doesn’t mean you will rank #1. We do, however, provide top-notch monthly SEO services with our team of specialists who are ready to assist with your SEO needs!"
/>

<ExpandCollapseSection
toggleText="🤝 Do you work with new and small businesses?"
contentText="Yes! we work with all types of businesses – new, small, to big corporations. We are excited to work and guide new businesses who are passionate about taking their first steps into an online presence and making their vision come to life."
/>

<ExpandCollapseSection
toggleText="📷 What is photo sourcing?"
contentText="If required, we will assist you in finding free stock images from websites such as Pixels and Unsplash. Your assistance and direction will be required to find the perfect images, photographs, graphics, vectors for your website and your brand."
/>

<ExpandCollapseSection
toggleText="💳 What forms of payments do you accept?"
contentText="Upon agreement of the quote presented, we will accept Debit, Visa, MasterCard, Amex, Cheque, Money Order, Cash, and EMT."
/>

<ExpandCollapseSection
toggleText="🚀 How do we get started?"
contentText="Contact us by email at kisucontacto@gmail.com
with your website details (current or new project), page breakdown, and any sample websites to reference. Upon review, we will provide an estimate for your project or schedule a call to discuss further."
/>
</div>
  </div>
  )
}

export default Faq
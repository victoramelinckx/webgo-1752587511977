
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Llevamos tu negocio a la web en un día con soporte 24/7 para aumentar tus ventas sin complicaciones." cta1="Digitaliza Hoy" />
<How step1Title="Agenda una llamada" step1Desc="Explora cómo digitalizar tus ventas rápidamente." step2Title="Creamos tu web" step2Desc="Diseñamos una tienda online en 24 horas." step3Title="Lanza y crece" step3Desc="Empieza a vender online con soporte 24/7." />
<Aboutus headline="WebGo: Digitaliza y Crece Fácilmente" subheadline="Transformamos recomendaciones en ventas online, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Fácil Implementación" beneficio1="Inicia ventas online rápidamente." beneficiotitulo2="Gestión Simplificada" beneficio2="Nosotros manejamos tu sitio web." />
<Services heading="Transforma Recomendaciones en Ventas Online" description="Creamos sitios optimizados para generar ventas online sin esfuerzo." services={[{"name":"Diseño Express","icon":"rocket","description":"Webs listas en menos de 24 horas."},{"name":"SEO Optimizado","icon":"search","description":"Aparece primero en búsquedas relevantes."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración eCommerce","icon":"cart","description":"Vende productos fácilmente online."},{"name":"Análisis de Tráfico","icon":"chart","description":"Conoce y entiende a tus visitantes."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualiza tu web sin preocupaciones."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web de impacto y calidad." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender online si solo he vendido por recomendaciones?","respuesta":"WebGo crea sitios web fáciles de usar y optimizados para atraer clientes nuevos. No necesitas experiencia previa; nosotros nos encargamos de todo para que puedas empezar a vender online rápidamente."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo puede WebGo facilitarme esto?","respuesta":"Con WebGo, nos encargamos del diseño, mantenimiento y actualizaciones de tu sitio web, liberando tu tiempo para que puedas enfocarte en lo que mejor haces: dirigir tu negocio."},{"pregunta":"¿Qué beneficios obtengo al digitalizar mis ventas con WebGo?","respuesta":"Al digitalizar tus ventas con WebGo, puedes alcanzar más clientes, aumentar tus ingresos y establecer una presencia en línea profesional, todo mientras mantenemos tu sitio funcionando sin problemas."},{"pregunta":"¿Cómo optimiza WebGo mi sitio web para atraer más clientes?","respuesta":"WebGo utiliza estrategias de SEO avanzadas para mejorar la visibilidad de tu sitio web en buscadores, asegurando que más personas encuentren y compren tus productos o servicios."},{"pregunta":"Tengo miedo de invertir en algo que no entiendo, ¿cómo me guiará WebGo en este proceso?","respuesta":"En WebGo, te guiamos paso a paso y te explicamos todo de manera sencilla. Nuestro objetivo es hacer que te sientas cómodo y seguro mientras transformamos tu negocio para el éxito en línea."}]} />
<BookAppointment 
                      heading="Revoluciona Tus Ventas: Digitaliza Ahora" 
                      description="Con WebGo, transforma tu negocio en línea sin complicaciones. Deja que los expertos gestionen tu venta digital mientras te enfocas en lo que amas hacer."
                      formPostUrl="api/contact-us"
                      projectId="q4xmyKeAHQbFxTzaxy3aezCTBqr1"
                    />
<Footer />
    </main>
  );
}

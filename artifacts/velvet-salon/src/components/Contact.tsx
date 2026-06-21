import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Instagram, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(5, { message: "Valid phone is required" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const lines = [
      "🌸 *طلب حجز موعد - Velvet Momentum Salon*",
      "",
      `👤 *الاسم / Name:* ${data.name}`,
      `📞 *رقم الهاتف / Phone:* ${data.phone}`,
      `💅 *الخدمة / Service:* ${data.service}`,
      data.message ? `💬 *ملاحظات / Message:* ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/966558666543?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");

    toast({
      title: "جاري فتح واتساب / Opening WhatsApp…",
      description: "سيتم فتح واتساب مع تفاصيل حجزك.",
    });
    form.reset();
  };

  const servicesList = [
    "Hair Styling / تسريح الشعر",
    "Hair Coloring / صباغة الشعر",
    "Hair Treatments / علاجات الشعر",
    "Makeup / ميكاب",
    "Nail Care / العناية بالأظافر",
    "Manicure & Pedicure / مانيكير وباديكير",
    "Facial Treatments / علاجات البشرة",
    "Eyebrow & Lash Services / الحواجب والرموش",
    "Bridal Packages / باقات العرائس",
    "Spa & Relaxation / سبا واسترخاء"
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Get In Touch</h2>
            <h3 className="text-2xl font-cairo text-primary font-bold mb-10" dir="rtl">تواصل معنا</h3>

            <div className="space-y-8">
              <a href="tel:+966558666543" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground uppercase text-sm mb-1">Phone</h4>
                  <p className="font-sans text-muted-foreground">+966 55 866 6543</p>
                </div>
              </a>

              <a href="https://www.instagram.com/velvet.momentum.salon/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground uppercase text-sm mb-1">Instagram</h4>
                  <p className="font-sans text-muted-foreground">@velvet.momentum.salon</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground uppercase text-sm mb-1">Address</h4>
                  <p className="font-cairo text-muted-foreground leading-relaxed" dir="rtl">
                    الفلاح، طريق أبو علي، مخطط عبد اللطيف جميل، الجبيل 35514، المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 rounded-xl overflow-hidden border border-border">
              <iframe 
                src="https://maps.google.com/maps?q=Jubail,Saudi+Arabia&z=13&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon Location"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
            <h4 className="text-2xl font-serif text-foreground mb-2">Book an Appointment</h4>
            <h5 className="font-cairo text-primary mb-8" dir="rtl">احجزي موعداً</h5>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="flex justify-between text-sm font-medium text-foreground mb-2">
                  <span>Your Name</span>
                  <span className="font-cairo" dir="rtl">اسمك</span>
                </label>
                <input 
                  type="text" 
                  {...form.register("name")}
                  className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
                {form.formState.errors.name && <p className="text-destructive text-xs mt-1">{form.formState.errors.name.message}</p>}
              </div>

              <div>
                <label className="flex justify-between text-sm font-medium text-foreground mb-2">
                  <span>Phone</span>
                  <span className="font-cairo" dir="rtl">رقم هاتفك</span>
                </label>
                <input 
                  type="tel" 
                  {...form.register("phone")}
                  className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
                {form.formState.errors.phone && <p className="text-destructive text-xs mt-1">{form.formState.errors.phone.message}</p>}
              </div>

              <div>
                <label className="flex justify-between text-sm font-medium text-foreground mb-2">
                  <span>Service</span>
                  <span className="font-cairo" dir="rtl">الخدمة</span>
                </label>
                <select 
                  {...form.register("service")}
                  className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select a service / اختاري خدمة</option>
                  {servicesList.map((srv, i) => (
                    <option key={i} value={srv}>{srv}</option>
                  ))}
                </select>
                {form.formState.errors.service && <p className="text-destructive text-xs mt-1">{form.formState.errors.service.message}</p>}
              </div>

              <div>
                <label className="flex justify-between text-sm font-medium text-foreground mb-2">
                  <span>Message (Optional)</span>
                  <span className="font-cairo" dir="rtl">رسالة (اختياري)</span>
                </label>
                <textarea 
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground py-4 rounded-md font-bold hover:bg-primary/90 transition-colors flex flex-col items-center justify-center gap-1"
              >
                <span className="font-cairo uppercase" dir="rtl">إرسال</span>
                <span className="font-sans text-xs font-normal tracking-widest uppercase">Send</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

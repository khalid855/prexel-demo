import { z } from "zod";

export const projectRequestSchema = z.object({
  name: z.string().min(2, "اكتب الاسم الكامل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  discord: z.string().min(2, "اكتب اسم Discord"),
  service: z.string().min(1, "اختر نوع الخدمة"),
  budget: z.string().min(1, "اختر الميزانية"),
  deadline: z.string().min(1, "حدد موعد التسليم"),
  description: z.string().min(20, "اكتب وصفًا لا يقل عن 20 حرفًا"),
  agreement: z.literal(true, { message: "يجب الموافقة على شروط العرض التجريبي" }),
});

export type ProjectRequest = z.infer<typeof projectRequestSchema>;

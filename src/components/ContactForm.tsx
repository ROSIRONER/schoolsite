
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "消息已发送 / Сообщение отправлено",
      description: "我们会尽快回复您 / Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="姓名 / Имя"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="电子邮箱 / Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="留言内容 / Сообщение"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-[100px]"
        />
      </div>
      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
        发送消息 / Отправить сообщение
      </Button>
    </form>
  );
};

export default ContactForm;

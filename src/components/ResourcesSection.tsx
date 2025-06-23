
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      name: "БКРС (Большой русско-китайский словарь)",
      url: "https://bkrs.info/",
      description: "Наиболее полный онлайн словарь русско-китайский и китайско-русский"
    },
    {
      name: "Словарь Джонга.ру",
      url: "https://www.zhonga.ru/",
      description: "Удобный онлайн словарь с примерами использования"
    },
    {
      name: "Китайская поисковая система 'БайДу'",
      url: "https://www.baidu.com/",
      description: "Самая популярная поисковая система в Китае"
    },
    {
      name: "Информационное агентство КНР Синьхуа",
      url: "https://russian.news.cn/",
      description: "Новости из Китая на русском языке"
    },
    {
      name: "Общество российско-китайской дружбы",
      url: "http://orkd.ifes-ras.ru/",
      description: "Организация, способствующая развитию российско-китайских отношений"
    },
    {
      name: "Синология.Ру: история и культура Китая",
      url: "https://www.synologia.ru/",
      description: "Портал о китайской истории, культуре и традициях"
    },
    {
      name: "Институт Конфуция (НГТУ, Новосибирск)",
      url: "https://confucius.nstu.ru/",
      description: "Местный центр изучения китайского языка и культуры"
    }
  ];

  return (
    <Card className="border-red-200 shadow-lg">
      <CardHeader className="bg-red-600 text-white">
        <CardTitle className="text-2xl">Полезные ресурсы для изучения китайского языка</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700 mb-6">
          Для изучения китайского языка и культуры тебе могут помочь следующие ресурсы:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="bg-red-50 p-4 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-800 mb-2">
                {index + 1}. {resource.name}
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                {resource.description}
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-red-300 text-red-700 hover:bg-red-100"
                onClick={() => window.open(resource.url, '_blank')}
              >
                Перейти на сайт
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-yellow-700 text-center">
            <strong>Совет:</strong> Используйте различные ресурсы в комплексе для более эффективного изучения языка. 
            Сочетайте работу со словарями, чтение новостей и изучение культурных материалов.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RadicalsSection = () => {
  const commonRadicals = [
    { radical: "人", strokes: 2, meaning: "человек" },
    { radical: "水", strokes: 4, meaning: "вода" },
    { radical: "火", strokes: 4, meaning: "огонь" },
    { radical: "木", strokes: 4, meaning: "дерево" },
    { radical: "土", strokes: 3, meaning: "земля" },
    { radical: "金", strokes: 8, meaning: "металл" },
    { radical: "日", strokes: 4, meaning: "солнце" },
    { radical: "月", strokes: 4, meaning: "луна" },
    { radical: "心", strokes: 4, meaning: "сердце" },
    { radical: "手", strokes: 4, meaning: "рука" },
    { radical: "口", strokes: 3, meaning: "рот" },
    { radical: "目", strokes: 5, meaning: "глаз" }
  ];

  return (
    <Card className="border-red-200 shadow-lg">
      <CardHeader className="bg-red-600 text-white p-4 sm:p-6">
        <CardTitle className="text-xl sm:text-2xl">Иероглифические ключи</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
          Важной структурной составляющей практически любого иероглифа в китайском языке является ключ. 
          Он может выступать в качестве смыслового или фонетического показателя, выражает основное его значение, 
          указывает на принадлежность предмета, обозначенного этим иероглифом, к определенному предметному классу. 
          В современном китайском языке их используется от 201 до 214.
        </p>
        
        <div className="mb-6 text-center">
          <h4 className="text-base sm:text-lg font-semibold text-red-800 mb-4">
            Таблица 214 ключей китайского языка
          </h4>
          <img 
            src="/lovable-uploads/be820e3f-5637-4459-aa6c-0abbeab55a38.png" 
            alt="214 ключей китайского языка" 
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
          />
        </div>
        
        <div className="mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-red-800 mb-4">
            Наиболее распространенные ключи:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {commonRadicals.map((item, index) => (
              <div key={index} className="bg-red-50 p-3 rounded-lg text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-800 mb-1">
                  {item.radical}
                </div>
                <div className="text-xs sm:text-sm text-red-600 font-medium">
                  {item.meaning}
                </div>
                <div className="text-xs text-gray-600">
                  {item.strokes} черт
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-xs sm:text-sm text-yellow-700 text-center leading-relaxed">
            <strong>Справочно:</strong> В России при изучении китайского языка используется 
            традиционная таблица из 214 ключей. Знание ключей помогает понимать структуру 
            и значение сложных иероглифов.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RadicalsSection;

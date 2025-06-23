
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TonesSection = () => {
  const tones = [
    {
      tone: "第一声 (1-й тон)",
      character: "妈",
      pinyin: "mā",
      meaning: "мама",
      description: "высокий ровный тон"
    },
    {
      tone: "第二声 (2-й тон)",
      character: "麻",
      pinyin: "má",
      meaning: "конопля, кунжут",
      description: "восходящий тон"
    },
    {
      tone: "第三声 (3-й тон)",
      character: "马",
      pinyin: "mǎ",
      meaning: "лошадь",
      description: "нисходяще-восходящий тон"
    },
    {
      tone: "第四声 (4-й тон)",
      character: "骂",
      pinyin: "mà",
      meaning: "ругать",
      description: "нисходящий тон"
    }
  ];

  return (
    <Card className="border-red-200 shadow-lg">
      <CardHeader className="bg-red-600 text-white p-4 sm:p-6">
        <CardTitle className="text-xl sm:text-2xl">Тональность китайского языка</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
          Важной фонетической особенностью китайского языка является его тональность. 
          Один и тот же набор звуков, произнесенный с разной интонацией (первым, вторым, 
          третьим и четвертым тоном), может изменить значение слова. Например, слог "ma" 
          может принимать разные значения:
        </p>
        
        <div className="mb-6 text-center">
          <img 
            src="/lovable-uploads/0d2ae85f-ea3a-46a6-8a81-d81f6231c6b4.png" 
            alt="Тоны китайского языка" 
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tones.map((tone, index) => (
            <div key={index} className="bg-red-50 p-4 rounded-lg text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-800 mb-2">
                {tone.character}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-red-600 mb-1">
                {tone.pinyin}
              </div>
              <div className="text-sm font-medium text-gray-700 mb-2">
                {tone.meaning}
              </div>
              <div className="text-xs text-gray-600">
                {tone.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-block bg-yellow-100 p-4 rounded-lg">
            <div className="text-base sm:text-lg font-semibold text-yellow-800 mb-2">
              Схема тонов китайского языка
            </div>
            <div className="text-4xl sm:text-6xl font-bold text-red-600">
              ¯ ˊ ˇ ˋ
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-2">
              1-й → 2-й → 3-й → 4-й тон
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TonesSection;

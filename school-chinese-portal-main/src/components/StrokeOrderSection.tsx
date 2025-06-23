
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StrokeOrderSection = () => {
  const rules = [
    {
      rule: "Сверху вниз",
      example: "三",
      description: "Горизонтальные черты пишутся сверху вниз"
    },
    {
      rule: "Слева направо",
      example: "川",
      description: "Вертикальные черты пишутся слева направо"
    },
    {
      rule: "Сначала горизонтальная, потом вертикальная",
      example: "十",
      description: "При пересечении горизонтальная черта пишется первой"
    },
    {
      rule: "Сначала откидная влево, потом вправо",
      example: "人",
      description: "Откидные черты пишутся в определенном порядке"
    },
    {
      rule: "Сначала центр, потом стороны",
      example: "小",
      description: "Центральная черта пишется перед боковыми"
    },
    {
      rule: "Рамка до содержимого",
      example: "国",
      description: "Внешние элементы пишутся перед внутренними"
    }
  ];

  return (
    <Card className="border-yellow-200 shadow-lg">
      <CardHeader className="bg-yellow-600 text-white">
        <CardTitle className="text-2xl">Правила написания иероглифов</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700 mb-6">
          Китайцы уделяют особое внимание написанию иероглифов. Для носителей этой древней 
          культуры очень важно соблюдать правила написания черт (ключей и графем в иероглифах). 
          От правильной последовательности написания черт зависит и глубинное понимание самой сути иероглифа.
        </p>
        
        <div className="mb-6 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">
              Правила написания иероглифов:
            </h4>
            <img 
              src="/lovable-uploads/e776158a-dbe4-4d73-b2ae-48e30206edd2.png" 
              alt="Правила написания иероглифов" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">
              Основные иероглифические черты:
            </h4>
            <img 
              src="/lovable-uploads/210647ab-8b2b-4ab4-a48d-51b3aff02e65.png" 
              alt="Основные иероглифические черты" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <div key={index} className="bg-yellow-50 p-4 rounded-lg">
              <div className="text-center mb-3">
                <div className="text-4xl font-bold text-yellow-800 mb-2">
                  {rule.example}
                </div>
                <div className="text-sm font-semibold text-yellow-700">
                  {rule.rule}
                </div>
              </div>
              <p className="text-xs text-gray-600 text-center">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-red-700 text-center">
            <strong>Важно:</strong> Существует несколько наиболее общих правил написания иероглифа. 
            Правильная последовательность написания черт помогает лучше запомнить иероглиф и понять его структуру.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrokeOrderSection;

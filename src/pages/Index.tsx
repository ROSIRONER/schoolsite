
import { Link } from "react-router-dom";
import { ChevronRight, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 mb-4 px-2">
            МБОУ СОШ №47
          </h1>
          <p className="text-lg sm:text-xl text-red-700 mb-2 px-2">
            Изучение китайского языка и культуры
          </p>
          <p className="text-base sm:text-lg text-yellow-700 px-2">
            汉语学习与中国文化体验
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-t-4 border-red-600 hover:shadow-xl transition-shadow">
              <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-red-600 mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-4">
                中文版本 / Китайская версия
              </h2>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Информация о школе, истории, традициях и контактах на китайском языке
              </p>
              <Link to="/chinese">
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full text-sm sm:text-base">
                  进入中文版 / Перейти к китайской версии
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-t-4 border-yellow-600 hover:shadow-xl transition-shadow">
              <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-600 mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-800 mb-4">
                В помощь обучающемуся
              </h2>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Справочная информация для изучающих китайский язык: тоны, иероглифы, ключи и полезные ресурсы
              </p>
              <Link to="/study-guide">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white w-full text-sm sm:text-base">
                  Перейти к справочным материалам
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-red-800 mb-4">
              О нашей программе
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
              В школе №47 мы предлагаем комплексное изучение китайского языка для учащихся 7-9 классов 
              с планами расширения программы на начальную школу с 2026 года. Наши ученики не только 
              изучают язык, но и погружаются в богатую китайскую культуру.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

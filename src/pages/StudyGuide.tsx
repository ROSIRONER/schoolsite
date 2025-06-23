
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TonesSection from "@/components/TonesSection";
import StrokeOrderSection from "@/components/StrokeOrderSection";
import RadicalsSection from "@/components/RadicalsSection";
import FactsSection from "@/components/FactsSection";
import ResourcesSection from "@/components/ResourcesSection";

const StudyGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              На главную
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 text-center mb-4">
            В помощь обучающемуся
          </h1>
          <p className="text-xl text-yellow-700 text-center max-w-3xl mx-auto">
            Дорогие обучающиеся! На данной странице мы подобрали несколько важных советов 
            для успешного освоения китайского языка! Надеемся, что материал окажется важным и полезным!
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-8">
          <TonesSection />
          <StrokeOrderSection />
          <RadicalsSection />
          <FactsSection />
          <ResourcesSection />
          
          <Card className="border-red-200 shadow-lg text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Желаем успехов в изучении китайского языка!
              </h3>
              <p className="text-3xl font-bold text-yellow-700">
                好好学习汉语！
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyGuide;

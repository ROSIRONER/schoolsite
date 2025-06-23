
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChineseVersion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <header className="mb-6 sm:mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4 text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回首页 / На главную
            </Button>
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800 text-center mb-2 px-2">
            欢迎访问МБОУ СОШ №47中文官网！
          </h1>
          <p className="text-lg sm:text-xl text-red-700 text-center px-2">
            我们诚挚欢迎您的到来！
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-600 text-white p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">我们的汉语课程特色</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                多年来，我校为7-9年级学生开设汉语课程，并计划自2026学年起将汉语教学扩展至小学部。
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>语言与文化并重：</strong>学生不仅学习汉语语法和词汇基础，还深入体验中国文化，了解当代中国的发展、经济及关键领域动态。
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>实践与创新：</strong>通过商业汉语模拟、创意项目和国际活动，提升学生的实际应用能力。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 shadow-lg">
            <CardHeader className="bg-yellow-600 text-white p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">传统活动与成就</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-yellow-800 mb-2">中俄儿童艺术节</h4>
                  <p className="text-gray-700 text-sm sm:text-base">
                    学生常年参与《俄罗斯与中国：文化交响曲》艺术节，通过绘画、音乐和表演展现跨文化理解。
                  </p>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-yellow-800 mb-2">商业汉语实践</h4>
                  <p className="text-gray-700 text-sm sm:text-base">
                    在《开放经济：可持续发展》论坛中，学生设计公司名称、学习中式商务礼仪，获得真实商业场景体验。
                  </p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <img 
                  src="/lovable-uploads/3c28c2ed-4be4-4996-987f-6dacd59e7bc4.png" 
                  alt="学生活动" 
                  className="rounded-lg shadow-md w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
                <img 
                  src="/lovable-uploads/92397b00-3198-4768-8c35-29067a2712ce.png" 
                  alt="学生演讲" 
                  className="rounded-lg shadow-md w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
                <img 
                  src="/lovable-uploads/37397c89-e3b0-456c-91eb-c6ecc60b6dea.png" 
                  alt="论坛活动" 
                  className="rounded-lg shadow-md w-full h-32 sm:h-40 lg:h-48 object-cover sm:col-span-2 lg:col-span-1"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-600 text-white p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">未来计划</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                我们将组织更多竞赛、文化论坛和交流活动，为学生提供展示平台，深化中俄教育合作。
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 text-sm sm:text-base">
                诚挚邀请所有来自中华人民共和国的朋友和合作伙伴与我们携手合作！
              </p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 shadow-lg">
            <CardHeader className="bg-yellow-600 text-white p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">联系方式</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base break-all">s_47@edu54.ru</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">630024新西伯利亚, 和平街1号</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-700 text-sm sm:text-base">
                  <div>+7 (383) 353-57-72</div>
                  <div>+7 (383) 353-42-10</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChineseVersion;

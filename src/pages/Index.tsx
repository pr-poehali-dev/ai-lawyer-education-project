import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const documentTypes = [
    { title: 'Положение об оплате труда', category: 'Трудовые отношения', icon: 'FileText' },
    { title: 'Положение о персональных данных', category: 'Защита данных', icon: 'Shield' },
    { title: 'Правила внутреннего распорядка', category: 'Организационные', icon: 'BookOpen' },
    { title: 'Положение о приёме учащихся', category: 'Образовательный процесс', icon: 'GraduationCap' },
    { title: 'Положение об электронном обучении', category: 'Образовательный процесс', icon: 'Monitor' },
    { title: 'Положение о комиссии по урегулированию споров', category: 'Организационные', icon: 'Scale' },
  ];

  const instructions = [
    { step: 1, title: 'Выберите тип документа', description: 'Определите, какой локальный акт вам необходим' },
    { step: 2, title: 'Заполните параметры', description: 'Укажите данные вашего учреждения и особенности' },
    { step: 3, title: 'Получите проект документа', description: 'ИИ-ассистент сформирует проект на основе актуального законодательства' },
    { step: 4, title: 'Проверьте и доработайте', description: 'Внесите необходимые корректировки с учётом специфики учреждения' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={32} className="text-primary" />
              <h1 className="text-xl font-bold text-foreground">ИИ-Юрист для общеобразовательных учреждений</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'assistant', label: 'ИИ-ассистент', icon: 'Brain' },
                { id: 'documents', label: 'Локальные акты', icon: 'FileText' },
                { id: 'instructions', label: 'Инструкции', icon: 'BookOpen' },
                { id: 'knowledge', label: 'База знаний', icon: 'Database' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <Badge className="mb-4" variant="outline">
                Автоматизация юридической работы
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                <span className="text-primary">ИИ-Юрист</span>
                <br />
                для общеобразовательных учреждений
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Современный инструмент для образовательных учреждений. Создавайте юридически корректные документы
                на основе актуального законодательства РФ
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => setActiveSection('assistant')} className="gap-2">
                  <Icon name="Sparkles" size={20} />
                  Начать работу
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('documents')} className="gap-2">
                  <Icon name="FileText" size={20} />
                  Каталог актов
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Быстрая генерация</CardTitle>
                  <CardDescription>
                    Создание проекта документа за минуты вместо часов ручной работы
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="ShieldCheck" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Юридическая точность</CardTitle>
                  <CardDescription>
                    Соответствие актуальному законодательству и нормативным актам в сфере образования
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Settings" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Гибкая настройка</CardTitle>
                  <CardDescription>
                    Адаптация документов под специфику конкретного учреждения
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'assistant' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="text-center space-y-4 mb-8">
              <Icon name="Brain" size={48} className="text-primary mx-auto" />
              <h2 className="text-3xl font-bold">ИИ-Юрист для общеобразовательных учреждений</h2>
              <p className="text-muted-foreground">
                Опишите требования к документу, и система создаст проект с учётом законодательства
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Параметры документа</CardTitle>
                <CardDescription>Заполните данные для генерации локального акта</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тип документа</label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option>Выберите тип документа</option>
                    <option>Положение об оплате труда</option>
                    <option>Положение о персональных данных</option>
                    <option>Правила внутреннего распорядка</option>
                    <option>Положение о приёме учащихся</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Наименование учреждения</label>
                  <Input placeholder="МБОУ СОШ №..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Особые требования и условия</label>
                  <Textarea
                    placeholder="Укажите специфические требования, особенности учреждения, дополнительные разделы..."
                    rows={6}
                  />
                </div>

                <Button className="w-full gap-2" size="lg">
                  <Icon name="Sparkles" size={20} />
                  Сгенерировать документ
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'documents' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4 mb-8">
              <Icon name="FolderOpen" size={48} className="text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Каталог локальных актов</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Типовые документы для общеобразовательных учреждений
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="labor">Трудовые</TabsTrigger>
                <TabsTrigger value="educational">Образовательные</TabsTrigger>
                <TabsTrigger value="organizational">Организационные</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {documentTypes.map((doc, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name={doc.icon} size={20} className="text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {doc.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mt-4">{doc.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full gap-2">
                          <Icon name="Download" size={16} />
                          Использовать шаблон
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'instructions' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-8">
              <Icon name="BookOpen" size={48} className="text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Инструкции по работе</h2>
              <p className="text-muted-foreground">
                Пошаговое руководство по созданию локальных актов
              </p>
            </div>

            <div className="space-y-6">
              {instructions.map((instruction) => (
                <Card key={instruction.step} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                        {instruction.step}
                      </div>
                      <div>
                        <CardTitle className="mb-2">{instruction.title}</CardTitle>
                        <CardDescription className="text-base">{instruction.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <div className="flex gap-4 items-start">
                  <Icon name="Lightbulb" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <CardTitle>Совет</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Перед утверждением локального акта обязательно проконсультируйтесь с юристом учреждения
                      и согласуйте документ с профсоюзной организацией (при необходимости)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        )}

        {activeSection === 'knowledge' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="text-center space-y-4 mb-8">
              <Icon name="Database" size={48} className="text-primary mx-auto" />
              <h2 className="text-3xl font-bold">База знаний</h2>
              <p className="text-muted-foreground">
                Нормативные акты и методические материалы
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-4 items-start">
                    <Icon name="Book" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Федеральный закон № 273-ФЗ</CardTitle>
                      <CardDescription className="mt-2">Об образовании в Российской Федерации</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-4 items-start">
                    <Icon name="Book" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Трудовой кодекс РФ</CardTitle>
                      <CardDescription className="mt-2">Нормы трудового права для образовательных учреждений</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-4 items-start">
                    <Icon name="Book" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Методические рекомендации</CardTitle>
                      <CardDescription className="mt-2">По разработке локальных нормативных актов</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-4 items-start">
                    <Icon name="Book" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">ФГОС</CardTitle>
                      <CardDescription className="mt-2">Федеральные государственные образовательные стандарты</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <div className="text-center space-y-4 mb-8">
              <Icon name="Mail" size={48} className="text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Контакты</h2>
              <p className="text-muted-foreground">
                Свяжитесь с нами для получения консультации
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Мы ответим в течение 1 рабочего дня</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Наименование учреждения</label>
                  <Input placeholder="МБОУ СОШ №..." />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Контактное лицо</label>
                    <Input placeholder="ФИО" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="email@school.ru" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Опишите ваш вопрос..." rows={6} />
                </div>

                <Button className="w-full gap-2" size="lg">
                  <Icon name="Send" size={20} />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex gap-3 items-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <CardTitle className="text-lg">Телефон</CardTitle>
                      <CardDescription className="mt-1">+7 (800) 123-45-67</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex gap-3 items-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <CardTitle className="text-lg">Email</CardTitle>
                      <CardDescription className="mt-1">support@ai-lawyer.edu</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 ИИ-юрист для образовательных учреждений</p>
            <p className="mt-2">
              Инструмент создан для автоматизации работы с локальными актами на основе законодательства РФ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchCity, setSearchCity] = useState('');
  const [searchType, setSearchType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const popularProperties = [
    {
      id: 1,
      title: '2-комнатная квартира в центре',
      price: '45 000 ₽/мес',
      location: 'Центральный район',
      area: '65 м²',
      rooms: 2,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      features: ['WiFi', 'Мебель', 'Кондиционер']
    },
    {
      id: 2,
      title: 'Студия в новостройке',
      price: '25 000 ₽/мес',
      location: 'Деловой центр',
      area: '35 м²',
      rooms: 1,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      features: ['WiFi', 'Парковка', 'Охрана']
    },
    {
      id: 3,
      title: '3-комнатная квартира с балконом',
      price: '65 000 ₽/мес',
      location: 'Парковая зона',
      area: '95 м²',
      rooms: 3,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      features: ['WiFi', 'Мебель', 'Балкон']
    }
  ];

  const blogPosts = [
    {
      title: 'Как правильно снимать квартиру',
      excerpt: 'Полное руководство для арендаторов',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
      date: '15 сентября 2024'
    },
    {
      title: 'Топ-5 районов для аренды',
      excerpt: 'Лучшие локации в городе',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop',
      date: '10 сентября 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" size={32} className="text-primary" />
              <h1 className="text-2xl font-display font-bold text-primary">RENT&LIVE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#favorites" className="text-muted-foreground hover:text-primary transition-colors">Избранное</a>
              <a href="#profile" className="text-muted-foreground hover:text-primary transition-colors">Профиль</a>
              <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Блог</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display font-bold text-card-foreground mb-6">
            Найдите идеальное жилье
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональная аренда недвижимости с проверенными объектами и надежными арендодателями
          </p>
          
          {/* Search Form */}
          <Card className="max-w-4xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Город</label>
                <Input 
                  placeholder="Выберите город" 
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Тип жилья</label>
                <Input 
                  placeholder="Квартира, студия..." 
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Бюджет</label>
                <Input 
                  placeholder="До 50 000 ₽" 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full" size="lg">
                  <Icon name="Search" size={20} className="mr-2" />
                  Поиск
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Popular Properties */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-display font-bold text-center mb-12">Популярные предложения</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-card text-card-foreground">
                    {property.rooms} комн.
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{property.title}</h4>
                  <p className="text-muted-foreground mb-3">{property.location}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{property.price}</span>
                    <span className="text-muted-foreground">{property.area}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-display font-bold text-center mb-12">Как это работает</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-lg mb-3">1. Поиск</h4>
              <p className="text-muted-foreground">Используйте фильтры для поиска идеального жилья</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" size={24} className="text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-lg mb-3">2. Просмотр</h4>
              <p className="text-muted-foreground">Изучите детали и забронируйте показ</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={24} className="text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-lg mb-3">3. Оформление</h4>
              <p className="text-muted-foreground">Подпишите договор онлайн и получите ключи</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="favorites" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="favorites">Избранное</TabsTrigger>
              <TabsTrigger value="profile">Профиль</TabsTrigger>
              <TabsTrigger value="blog">Блог</TabsTrigger>
              <TabsTrigger value="contacts">Контакты</TabsTrigger>
            </TabsList>
            
            <TabsContent value="favorites" className="mt-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Icon name="Heart" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Ваши избранные объекты</h3>
                  <p className="text-muted-foreground mb-6">Сохраняйте понравившиеся варианты для быстрого доступа</p>
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить в избранное
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Личный кабинет</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input placeholder="Введите ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Фамилия</label>
                      <Input placeholder="Введите вашу фамилию" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="example@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  <Button className="mt-6">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blog" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
                      <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <Button variant="outline" size="sm">
                          Читать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contacts" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Свяжитесь с нами</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" size={20} className="text-primary" />
                        <span>+7 (495) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" size={20} className="text-primary" />
                        <span>info@rentlive.ru</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" size={20} className="text-primary" />
                        <span>Москва, ул. Примерная, д. 123</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <span>Пн-Пт: 9:00-19:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Обратная связь</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                        <Input placeholder="Введите имя" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <Input placeholder="Ваше сообщение..." />
                      </div>
                      <Button className="w-full">
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" size={24} className="text-primary" />
                <span className="font-display font-bold text-lg">RENT&LIVE</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональная аренда недвижимости с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Аренда квартир</li>
                <li>Аренда домов</li>
                <li>Коммерческая недвижимость</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Частые вопросы</li>
                <li>Служба поддержки</li>
                <li>Договоры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@rentlive.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RENT&LIVE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
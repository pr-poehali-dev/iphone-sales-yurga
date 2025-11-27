import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import iPhone3D from '@/components/iPhone3D';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: '119 990',
    condition: 'new',
    storage: '256GB',
    color: 'Титановый черный',
    image: 'https://cdn.poehali.dev/projects/bbce6d25-a3cd-4806-a43b-d0e7f87ffdf0/files/1c5c4128-aa3f-4057-888d-7cfc86570a23.jpg',
    features: ['A17 Pro', 'Титановый корпус', 'USB-C']
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    price: '99 990',
    condition: 'new',
    storage: '128GB',
    color: 'Натуральный титан',
    image: 'https://cdn.poehali.dev/projects/bbce6d25-a3cd-4806-a43b-d0e7f87ffdf0/files/1c5c4128-aa3f-4057-888d-7cfc86570a23.jpg',
    features: ['A17 Pro', 'Titanium', 'Dynamic Island']
  },
  {
    id: 3,
    name: 'iPhone 14',
    price: '45 990',
    condition: 'used',
    storage: '128GB',
    color: 'Черный',
    image: 'https://cdn.poehali.dev/projects/bbce6d25-a3cd-4806-a43b-d0e7f87ffdf0/files/05105e75-992d-4cd7-8ec9-2ee91405f456.jpg',
    features: ['Состояние 9/10', 'Полный комплект', 'Гарантия 3 месяца']
  },
  {
    id: 4,
    name: 'iPhone 13 Pro',
    price: '52 990',
    condition: 'used',
    storage: '256GB',
    color: 'Graphite',
    image: 'https://cdn.poehali.dev/projects/bbce6d25-a3cd-4806-a43b-d0e7f87ffdf0/files/05105e75-992d-4cd7-8ec9-2ee91405f456.jpg',
    features: ['ProMotion 120Hz', '10/10', 'Как новый']
  },
  {
    id: 5,
    name: 'iPhone 15',
    price: '79 990',
    condition: 'new',
    storage: '128GB',
    color: 'Розовый',
    image: 'https://cdn.poehali.dev/projects/bbce6d25-a3cd-4806-a43b-d0e7f87ffdf0/files/1c5c4128-aa3f-4057-888d-7cfc86570a23.jpg',
    features: ['Dynamic Island', 'A16 Bionic', '48MP камера']
  },
  {
    id: 6,
    name: 'iPhone 12 Pro',
    price: '38 990',
    condition: 'used',
    storage: '128GB',
    color: 'Pacific Blue',
    image: 'https://cdn.poehali.dev/projects/bbce6d25-a3cd-4806-a43b-d0e7f87ffdf0/files/05105e75-992d-4cd7-8ec9-2ee91405f456.jpg',
    features: ['LiDAR', '8/10', 'Гарантия']
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('all');
  const [tradeInValue, setTradeInValue] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);
    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.condition === activeTab);

  return (
    <div className="min-h-screen bg-background">
      {showWelcome && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
          <div className={`bg-card border border-primary/50 rounded-2xl p-8 max-w-md mx-4 shadow-2xl shadow-primary/20 transition-all duration-500 ${fadeOut ? 'opacity-0 scale-95' : 'opacity-100 animate-slide-up'}`}>
            <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed glass-text">
              Пока Адам искушается Яблоком, - <span className="text-primary glass-text">Я им владею</span>
            </p>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 hidden lg:block">
                <iPhone3D />
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Smartphone" className="text-primary lg:hidden" size={28} />
                <h1 className="text-2xl font-bold glass-text">iPhone Юрга</h1>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
              <a href="#new" className="text-sm hover:text-primary transition-colors">Новые</a>
              <a href="#used" className="text-sm hover:text-primary transition-colors">Б/У</a>
              <a href="#trade-in" className="text-sm hover:text-primary transition-colors">Trade-in</a>
              <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="gap-2" asChild>
              <a href="https://t.me/iphoneyurga" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={16} />
                Написать в Telegram
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Официальный магазин в Юрге
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight glass-text">
                Новые и б/у iPhone<br />
                <span className="text-primary glass-text">с гарантией</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Широкий выбор iPhone всех моделей. Trade-in вашего старого устройства. Доставка по Юрге бесплатно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="ShoppingCart" size={20} />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="ArrowRightLeft" size={20} />
                  Оценить Trade-in
                </Button>
              </div>
            </div>
            
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-full h-[500px] animate-fade-in" style={{ animationDelay: '300ms' }}>
                <iPhone3D />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent blur-3xl -z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: 'Shield', title: 'Гарантия качества', desc: 'До 1 года на новые, до 6 месяцев на б/у' },
              { icon: 'Truck', title: 'Доставка по Юрге', desc: 'Бесплатная доставка в день заказа' },
              { icon: 'BadgeCheck', title: 'Проверка при получении', desc: 'Полная диагностика перед покупкой' }
            ].map((item, i) => (
              <Card key={i} className="border-border/50 bg-card hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 glass-text">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 glass-text">Каталог iPhone</h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="new">Новые</TabsTrigger>
              <TabsTrigger value="used">Б/У</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <Card key={product.id} className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="aspect-square bg-secondary/50 relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90 backdrop-blur">
                    {product.condition === 'new' ? 'Новый' : 'Б/У'}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2 glass-text">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <span>{product.storage}</span>
                    <span>•</span>
                    <span>{product.color}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                    </div>
                    <Button className="gap-2" asChild>
                      <a href={`https://t.me/iphoneyurga?text=Здравствуйте! Интересует ${product.name} ${product.storage}`} target="_blank" rel="noopener noreferrer">
                        <Icon name="MessageCircle" size={16} />
                        Купить
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trade-in" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Trade-in программа
              </Badge>
              <h2 className="text-3xl font-bold mb-4 glass-text">Обменяйте старый iPhone</h2>
              <p className="text-muted-foreground">
                Получите до 50 000 ₽ за ваш iPhone в зачет покупки нового
              </p>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Модель iPhone</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                      onChange={(e) => setTradeInValue(e.target.value)}
                    >
                      <option value="">Выберите модель</option>
                      <option value="35000">iPhone 14 Pro Max - до 35 000 ₽</option>
                      <option value="30000">iPhone 14 Pro - до 30 000 ₽</option>
                      <option value="25000">iPhone 14 - до 25 000 ₽</option>
                      <option value="20000">iPhone 13 Pro - до 20 000 ₽</option>
                      <option value="15000">iPhone 13 - до 15 000 ₽</option>
                    </select>
                  </div>

                  {tradeInValue && (
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 animate-slide-up">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Оценочная стоимость:</span>
                        <span className="text-3xl font-bold text-primary">до {tradeInValue} ₽</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Итоговая цена зависит от состояния устройства. Принесите iPhone в магазин для точной оценки.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[
                      'Полная диагностика',
                      'Моментальная оценка',
                      'Честная цена',
                      'Без скрытых условий'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full gap-2" size="lg" asChild>
                    <a href="https://t.me/iphoneyurga?text=Здравствуйте! Хочу оценить мой iPhone по Trade-in" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={20} />
                      Написать в Telegram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center glass-text">Контакты</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 glass-text">Магазин в Юрге</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Icon name="MapPin" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-muted-foreground">г. Юрга, Кемеровская область</p>
                        <p className="text-muted-foreground">ул. Ленинградская, 1</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Icon name="Clock" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                        <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Icon name="MessageCircle" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium">Telegram</p>
                        <a href="https://t.me/iphoneyurga" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          @iphoneyurga
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Icon name="Phone" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <a href="tel:+79991234567" className="text-primary hover:underline">
                          +7 (999) 123-45-67
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Icon name="Mail" className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@iphoneyurga.ru" className="text-primary hover:underline">
                          info@iphoneyurga.ru
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 glass-text">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Телефон"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Сообщение"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <Button className="w-full gap-2" size="lg" asChild>
                      <a href="https://t.me/iphoneyurga" target="_blank" rel="noopener noreferrer">
                        <Icon name="MessageCircle" size={20} />
                        Написать в Telegram
                      </a>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Smartphone" className="text-primary" size={24} />
              <span className="font-semibold">iPhone Юрга</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 iPhone Юрга. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/iphoneyurga" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
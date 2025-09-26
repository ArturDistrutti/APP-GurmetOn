import { Button } from '@/components/ui/button';
import { useFoodData } from '@/hooks/useFoodData';

const HeroSection = () => {
  const { featuredDishes, isLoading } = useFoodData();

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Sabor que chega até você!
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
            Descubra os melhores pratos da cidade com o <strong>GourmetOn</strong>. 
            Entrega rápida, qualidade garantida e sabores incríveis a um clique de distância.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              📱 Baixar para iOS
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              🤖 Baixar para Android
            </Button>
          </div>

          {!isLoading && featuredDishes.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {featuredDishes.slice(0, 4).map((dish) => (
                <div key={dish.id} className="bg-white/20 backdrop-blur-md rounded-lg p-4 hover:bg-white/30 transition-all duration-300">
                  <img 
                    src={dish.image} 
                    alt={dish.title}
                    className="w-full h-20 object-cover rounded-md mb-2"
                  />
                  <p className="text-white text-sm font-medium truncate">{dish.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;
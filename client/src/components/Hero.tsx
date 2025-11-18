import { Button } from "@/components/ui/button";
import heroImage from '@assets/generated_images/Hero_lifestyle_couple_photo_8c493c80.png';

interface HeroProps {
  onGenderChange?: (gender: string) => void;
}

export default function Hero({ onGenderChange }: HeroProps) {
  const handleScroll = (gender: string) => {
    onGenderChange?.(gender);
    // Scroll to products section
    const productsSection = document.querySelector('main');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium ThreadCraft Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <div className="max-w-2xl text-white">
          <p className="text-sm md:text-base uppercase tracking-widest mb-4 font-medium">
            Limited Time Offer
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Premium Collection Sale
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Take an Extra 30% Off | Code: CRAFT30
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="uppercase tracking-wider font-semibold"
              onClick={() => handleScroll("mens")}
              data-testid="button-shop-mens"
            >
              Shop Mens
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="uppercase tracking-wider font-semibold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground"
              onClick={() => handleScroll("womens")}
              data-testid="button-shop-womens"
            >
              Shop Womens
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import image1 from '@assets/stock_images/light_green_t-shirt__e96eea4e.jpg';
import image2 from '@assets/stock_images/white_t-shirt_hangin_b5f77178.jpg';
import image3 from '@assets/stock_images/beige_neutral_t-shir_02e0ef07.jpg';
import image4 from '@assets/stock_images/person_wearing_casua_a6a781e1.jpg';
import image5 from '@assets/stock_images/premium_cotton_t-shi_0f7931e1.jpg';

export default function LifestyleGallery() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" data-testid="text-gallery-title">
            Crafted for Everyday Life
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From morning coffee to evening adventures, our essentials move with you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <div className="relative h-full min-h-[400px] rounded-md overflow-hidden">
              <img 
                src={image1} 
                alt="Premium cotton t-shirt with natural elements" 
                className="w-full h-full object-cover hover-elevate transition-all"
                data-testid="img-gallery-1"
              />
            </div>
          </div>

          <div className="col-span-1 row-span-1">
            <div className="relative h-full min-h-[195px] rounded-md overflow-hidden">
              <img 
                src={image2} 
                alt="Minimalist white t-shirt hanging" 
                className="w-full h-full object-cover hover-elevate transition-all"
                data-testid="img-gallery-2"
              />
            </div>
          </div>

          <div className="col-span-1 row-span-1">
            <div className="relative h-full min-h-[195px] rounded-md overflow-hidden">
              <img 
                src={image3} 
                alt="Folded neutral tone t-shirt" 
                className="w-full h-full object-cover hover-elevate transition-all"
                data-testid="img-gallery-3"
              />
            </div>
          </div>

          <div className="col-span-1 row-span-1">
            <div className="relative h-full min-h-[195px] rounded-md overflow-hidden">
              <img 
                src={image4} 
                alt="Lifestyle photo of person wearing casual t-shirt" 
                className="w-full h-full object-cover hover-elevate transition-all"
                data-testid="img-gallery-4"
              />
            </div>
          </div>

          <div className="col-span-1 row-span-1">
            <div className="relative h-full min-h-[195px] rounded-md overflow-hidden">
              <img 
                src={image5} 
                alt="Close up of premium cotton fabric texture" 
                className="w-full h-full object-cover hover-elevate transition-all"
                data-testid="img-gallery-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

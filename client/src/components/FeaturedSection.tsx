import featuredImage from '@assets/image_1763426210090.png';

export default function FeaturedSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" data-testid="text-featured-title">
              Essential Colors for Every Wardrobe
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              From bold statement pieces to versatile basics, our premium collection offers a carefully curated palette designed for effortless style.
            </p>
            <p className="text-muted-foreground mb-8">
              Each shirt is crafted from sustainably sourced materials with meticulous attention to fit, comfort, and longevity. Build your perfect wardrobe with colors that complement your lifestyle.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#DC143C]" />
                <span className="text-sm text-muted-foreground">Classic Red</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-black" />
                <span className="text-sm text-muted-foreground">Timeless Black</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-white border border-border" />
                <span className="text-sm text-muted-foreground">Pure White</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#000080]" />
                <span className="text-sm text-muted-foreground">Deep Navy</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-md overflow-hidden shadow-lg">
              <img 
                src={featuredImage} 
                alt="Collection of premium t-shirts in various colors" 
                className="w-full h-auto"
                data-testid="img-featured-collection"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

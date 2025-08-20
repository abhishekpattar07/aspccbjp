import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted/50"
    >
      <div className="absolute inset-0 bg-[url('/images/college-building.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            A S Patil College of Commerce
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent mt-2">[Autonomous]</span>
            <span className="block text-lg sm:text-xl md:text-2xl text-muted-foreground mt-1">
              Excellence in Education
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering minds, shaping futures. Join us in our journey of academic excellence and holistic development at
            one of Karnataka's premier educational institutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-3">
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
              Virtual Campus Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">5000+</h3>
              <p className="text-muted-foreground">Students</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground">Programs</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">25+</h3>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

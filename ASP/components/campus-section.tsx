import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Wifi, BookOpen, Users, Coffee, Car } from "lucide-react"

export function CampusSection() {
  const facilities = [
    {
      icon: <BookOpen className="w-6 h-6 text-accent" />,
      title: "Modern Library",
      description: "Extensive collection of books, journals, and digital resources",
    },
    {
      icon: <Wifi className="w-6 h-6 text-accent" />,
      title: "Smart Classrooms",
      description: "Technology-enabled learning environments with modern amenities",
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Student Activities",
      description: "Clubs, societies, and extracurricular programs for holistic development",
    },
    {
      icon: <Coffee className="w-6 h-6 text-accent" />,
      title: "Cafeteria",
      description: "Nutritious meals and refreshments in a comfortable setting",
    },
    {
      icon: <Car className="w-6 h-6 text-accent" />,
      title: "Transportation",
      description: "Convenient bus services connecting major areas of the city",
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Prime Location",
      description: "Strategically located with easy access to city amenities",
    },
  ]

  return (
    <section id="campus" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Campus Life & Facilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a vibrant campus environment with state-of-the-art facilities designed to enhance your learning
            and personal growth.
          </p>
        </div>

        {/* Campus Image */}
        <div className="mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/campus-main.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">A S Patil college of Commerce vijayapura(Autonomous) Campus</h3>
              <p className="text-lg opacity-90">A modern learning environment in the heart of Vijayapur</p>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  {facility.icon}
                </div>
                <CardTitle className="text-lg">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{facility.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Schedule Campus Visit
          </Button>
        </div>
      </div>
    </section>
  )
}

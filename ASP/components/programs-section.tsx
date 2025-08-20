import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, TrendingUp } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Undergraduate Programs",
      description:
        "Bachelor's degrees in Commerce, Management, and Computer Applications with industry-relevant curriculum.",
      features: ["B.Com", "BBA", "BCA", "B.Com (Hons)"],
      duration: "3 Years",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Postgraduate Programs",
      description: "Advanced degrees designed to create future leaders and specialists in their chosen fields.",
      features: ["M.Com", "MBA", "MCA", "M.Sc"],
      duration: "2 Years",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Research Programs",
      description: "Doctoral programs fostering innovation and contributing to knowledge advancement.",
      features: ["Ph.D Commerce", "Ph.D Management", "Research Guidance"],
      duration: "3-5 Years",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Professional Courses",
      description: "Industry-oriented certification programs to enhance employability and skills.",
      features: ["Digital Marketing", "Data Analytics", "Financial Planning"],
      duration: "6 Months - 1 Year",
    },
  ]

  return (
    <section id="academics" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Academic Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to prepare you for success in today's dynamic business
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  {program.icon}
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Duration: {program.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

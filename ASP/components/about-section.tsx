import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  const achievements = [
    "NAAC A+ Accredited Institution",
    "ISO 9001:2015 Certified",
    "UGC Recognized University",
    "Industry Partnerships",
    "Research Publications",
    "Alumni Network",
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose ASPCC?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 25 years, ASPCC has been at the forefront of quality education, nurturing thousands of students
              who have gone on to become successful professionals and leaders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Vision/Mission Cards */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be a globally recognized institution of excellence, fostering innovation, critical thinking,
                      and ethical leadership in commerce and management education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide quality education that empowers students with knowledge, skills, and values necessary
                      for personal growth and societal contribution.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Values</h3>
                    <p className="text-muted-foreground">
                      Integrity, Excellence, Innovation, and Inclusivity form the cornerstone of our educational
                      philosophy and institutional culture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

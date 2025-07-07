import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      program: "BSc (Hons) Computer Systems Engineering",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "ISMT provided me with world-class education right here in Nepal. The UK qualification opened doors to amazing career opportunities.",
      rating: 5,
    },
    {
      name: "Rajesh Thapa",
      program: "BA (Hons) Business and Management",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The practical approach to learning and industry connections at ISMT prepared me perfectly for the business world.",
      rating: 5,
    },
    {
      name: "Anita Gurung",
      program: "BSc (Hons) International Tourism and Hospitality Management",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The international perspective and hands-on experience I gained at ISMT helped me secure a position with a leading hotel chain.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from our graduates about their ISMT experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.program}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

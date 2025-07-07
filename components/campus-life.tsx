import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CampusLife() {
  const campusImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Modern Computer Lab",
      title: "State-of-the-Art Labs",
      description: "Equipped with latest technology",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Library and Study Area",
      title: "Comprehensive Library",
      description: "Extensive academic resources",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Student Activities",
      title: "Extracurricular Activities",
      description: "Sports, clubs, and workshops",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Campus Building",
      title: "Modern Campus",
      description: "Located in Tinkune, Kathmandu",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Campus Life</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience ISMT</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our modern facilities and vibrant campus community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-sm">{image.title}</h3>
                  <p className="text-xs opacity-90">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Partnership Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">Our Academic Partners</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg?height=80&width=200"
                alt="University of Sunderland Logo"
                className="h-12 w-auto mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">University of Sunderland, UK</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg?height=80&width=200"
                alt="Pearson Edexcel Logo"
                className="h-12 w-auto mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">Pearson Edexcel, UK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

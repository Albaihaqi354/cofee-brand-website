"use client"

import { useState, useEffect } from "react"
import { ArrowUp, Coffee, Leaf, Star, Users, Award, ChevronDown, Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CoffeeBrandWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = ["home", "about", "products", "stories", "testimonials", "subscription", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const products = [
    {
      id: 1,
      name: "Arabika Premium",
      description: "Kopi arabika pilihan dari dataran tinggi dengan cita rasa fruity dan aroma floral yang menawan.",
      price: "Rp 85.000",
      image: "/image/arabika.jpg?height=300&width=300",
      origin: "Aceh Gayo",
      process: "Honey Process",
      notes: ["Fruity", "Floral", "Sweet"],
    },
    {
      id: 2,
      name: "Robusta Tradisional",
      description: "Robusta asli Indonesia dengan body yang kuat dan rasa pahit yang seimbang, cocok untuk espresso.",
      price: "Rp 65.000",
      image: "/image/robusta.jpg?height=300&width=300",
      origin: "Lampung",
      process: "Natural Process",
      notes: ["Bold", "Earthy", "Chocolate"],
    },
    {
      id: 3,
      name: "Blend Nusantara",
      description: "Perpaduan sempurna arabika dan robusta yang menciptakan harmoni rasa khas Indonesia.",
      price: "Rp 75.000",
      image: "/image/blend.jpg?height=300&width=300",
      origin: "Multi-Origin",
      process: "Mixed Process",
      notes: ["Balanced", "Nutty", "Caramel"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Coffee Enthusiast",
      comment: "Kopi terbaik yang pernah saya coba! Aroma dan rasanya benar-benar autentik Indonesia.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Budi Santoso",
      role: "Barista Professional",
      comment: "Kualitas biji kopinya konsisten dan sangat cocok untuk berbagai metode brewing.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Maya Putri",
      role: "Cafe Owner",
      comment: "Pelanggan saya selalu puas dengan kopi dari brand ini. Highly recommended!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-amber-50/95 backdrop-blur-sm border-b border-amber-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-800" />
              <span className="text-2xl font-bold text-amber-900">KopiKita</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "Tentang Kopi" },
                { id: "products", label: "Produk" },
                { id: "stories", label: "Cerita Kami" },
                { id: "contact", label: "Kontak" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-amber-800 hover:text-amber-600 transition-colors ${
                    activeSection === item.id ? "font-semibold border-b-2 border-amber-600" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection("subscription")} className="bg-amber-800 hover:bg-amber-700">
                Beli Sekarang
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-amber-200">
              <div className="flex flex-col space-y-4 mt-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "Tentang Kopi" },
                  { id: "products", label: "Produk" },
                  { id: "stories", label: "Cerita Kami" },
                  { id: "contact", label: "Kontak" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-amber-800 hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("subscription")}
                  className="bg-amber-800 hover:bg-amber-700 w-full"
                >
                  Beli Sekarang
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-[inset_0_-100px_100px_rgba(0,0,0,0.15)]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/image/coffee-hero.jpg')`,
          }}
        />

        {/* Konten Tengah */}
        <div className="relative z-10 max-w-3xl text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Cita Rasa Autentik
            <span className="block text-amber-300">Kopi Nusantara</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Dari ladang petani lokal hingga cangkir Anda, setiap tegukan adalah cerita tentang kualitas dan tradisi
            Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection("products")}
            >
              Jelajahi Produk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection("about")}
            >
              Cerita Kami
            </Button>
          </div>
        </div>

        {/* Icon Scroll Bawah */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Tentang Kopi Kami</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Perjalanan kami dimulai dari kecintaan terhadap kopi Indonesia dan komitmen untuk mendukung petani lokal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/image/petani-coffee.jpg"
                alt="Coffee plantation"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Keberlanjutan</h3>
                  <p className="text-amber-700">
                    Kami berkomitmen pada praktik pertanian berkelanjutan yang menjaga lingkungan dan meningkatkan
                    kesejahteraan petani.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Komunitas Petani</h3>
                  <p className="text-amber-700">
                    Bekerja langsung dengan petani lokal untuk memastikan kualitas terbaik dan harga yang adil.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Kualitas Premium</h3>
                  <p className="text-amber-700">
                    Setiap biji kopi dipilih dengan teliti dan diproses dengan standar internasional untuk cita rasa
                    terbaik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Produk Kopi Kami</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Koleksi kopi pilihan dari berbagai daerah di Indonesia, masing-masing dengan karakteristik unik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl text-amber-900">{product.name}</CardTitle>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      {product.origin}
                    </Badge>
                  </div>
                  <CardDescription className="text-amber-700 mb-4">{product.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.notes.map((note) => (
                      <Badge key={note} variant="outline" className="text-xs">
                        {note}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-900">{product.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-amber-800 hover:bg-amber-700">Lihat Detail</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>{product.name}</DialogTitle>
                          <DialogDescription>Detail produk kopi pilihan</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold mb-2">Deskripsi:</h4>
                            <p className="text-sm text-gray-600">{product.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Asal:</h4>
                            <p className="text-sm text-gray-600">{product.origin}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Proses:</h4>
                            <p className="text-sm text-gray-600">{product.process}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Tasting Notes:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.notes.map((note) => (
                                <Badge key={note} variant="outline" className="text-xs">
                                  {note}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center pt-4">
                            <span className="text-2xl font-bold text-amber-900">{product.price}</span>
                            <Button className="bg-amber-800 hover:bg-amber-700">Beli Sekarang</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Cerita dari Ladang</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Setiap cangkir kopi memiliki cerita. Mari mengenal lebih dekat perjalanan kopi dari ladang hingga cangkir
              Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden">
              <img
                src="/image/pak-joko.jpg?height=300&width=500"
                alt="Coffee farmer"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl text-amber-900 mb-4">Pak Joko: Petani Kopi Generasi Ketiga</CardTitle>
                <CardDescription className="text-amber-700">
                  Dari kebun kopi di lereng Gunung Sindoro, Pak Joko melanjutkan tradisi keluarga dalam menanam kopi
                  arabika berkualitas tinggi. Dengan teknik tradisional yang dipadukan teknologi modern, setiap panen
                  menghasilkan biji kopi dengan cita rasa yang konsisten.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img
                src="/image/honey.jpg?height=300&width=500"
                alt="Coffee processing"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl text-amber-900 mb-4">Proses Honey: Seni Mengolah Kopi</CardTitle>
                <CardDescription className="text-amber-700">
                  Metode honey process yang kami gunakan memberikan karakteristik manis alami pada kopi. Proses ini
                  membutuhkan ketelitian dan kesabaran, namun menghasilkan profil rasa yang unik dan kompleks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Testimoni Penikmat Kopi</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Dengarkan cerita dari para penikmat kopi yang telah merasakan kualitas produk kami.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-amber-700 mb-4 italic">"{testimonial.comment}"</p>
                  <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                  <p className="text-sm text-amber-600">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA Section */}
      <section id="subscription" className="py-20 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Langganan Kopi Bulanan</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Nikmati kopi segar setiap bulan langsung dari roastery kami. Dapatkan diskon khusus dan akses eksklusif ke
            varian terbaru.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white text-amber-900">
              <CardContent className="p-6 text-center">
                <Coffee className="h-12 w-12 mx-auto mb-4 text-amber-800" />
                <h3 className="text-xl font-semibold mb-2">Paket Basic</h3>
                <p className="text-3xl font-bold mb-4">
                  Rp 200K<span className="text-sm font-normal">/bulan</span>
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li>• 2 pack kopi (500g)</li>
                  <li>• Gratis ongkir</li>
                  <li>• Newsletter bulanan</li>
                </ul>
                <Button className="w-full bg-amber-800 hover:bg-amber-700">Pilih Paket</Button>
              </CardContent>
            </Card>

            <Card className="bg-amber-100 text-amber-900 border-2 border-amber-300">
              <CardContent className="p-6 text-center">
                <Badge className="mb-4 bg-amber-800 text-white">POPULER</Badge>
                <Coffee className="h-12 w-12 mx-auto mb-4 text-amber-800" />
                <h3 className="text-xl font-semibold mb-2">Paket Premium</h3>
                <p className="text-3xl font-bold mb-4">
                  Rp 350K<span className="text-sm font-normal">/bulan</span>
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li>• 4 pack kopi (1kg)</li>
                  <li>• Gratis ongkir</li>
                  <li>• Akses varian eksklusif</li>
                  <li>• Konsultasi barista</li>
                </ul>
                <Button className="w-full bg-amber-800 hover:bg-amber-700">Pilih Paket</Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-amber-900">
              <CardContent className="p-6 text-center">
                <Coffee className="h-12 w-12 mx-auto mb-4 text-amber-800" />
                <h3 className="text-xl font-semibold mb-2">Paket Enterprise</h3>
                <p className="text-3xl font-bold mb-4">
                  Rp 500K<span className="text-sm font-normal">/bulan</span>
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li>• 6 pack kopi (1.5kg)</li>
                  <li>• Gratis ongkir</li>
                  <li>• Custom roasting</li>
                  <li>• Training barista</li>
                </ul>
                <Button className="w-full bg-amber-800 hover:bg-amber-700">Pilih Paket</Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Newsletter Eksklusif</h3>
            <p className="mb-6 opacity-90">
              Dapatkan tips brewing, resep kopi, dan penawaran khusus langsung di inbox Anda.
            </p>
            <div className="flex gap-4">
              <Input type="email" placeholder="Email Anda" className="bg-white text-amber-900" />
              <Button variant="secondary" className="bg-white text-amber-800 hover:bg-amber-100">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Hubungi Kami</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Ada pertanyaan tentang produk kami? Tim kami siap membantu Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Informasi Kontak</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">WhatsApp</h4>
                    <p className="text-amber-700">+62 772-7726-316</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Email</h4>
                    <p className="text-amber-700">bianalbaihaqi190@gmail.com.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Alamat Kedai</h4>
                    <p className="text-amber-700">
                      Jl. Kopi Nusantara No. 123
                      <br />
                      Bandung, Jawa Barat 40123
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-amber-900 mb-4">FAQ</h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Bagaimana cara menyimpan kopi yang baik?</AccordionTrigger>
                    <AccordionContent>
                      Simpan kopi dalam wadah kedap udara, di tempat yang sejuk dan kering, terhindar dari sinar
                      matahari langsung. Hindari menyimpan di kulkas karena dapat merusak aroma.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Berapa lama kopi bisa bertahan?</AccordionTrigger>
                    <AccordionContent>
                      Kopi biji utuh dapat bertahan 2-4 minggu setelah roasting untuk kualitas terbaik. Kopi bubuk
                      sebaiknya dikonsumsi dalam 1-2 minggu setelah digiling.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Apakah ada pengiriman ke seluruh Indonesia?</AccordionTrigger>
                    <AccordionContent>
                      Ya, kami melayani pengiriman ke seluruh Indonesia. Untuk Jabodetabek, pengiriman biasanya 1-2 hari
                      kerja. Luar kota 2-5 hari kerja.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <CardDescription>Isi form di bawah ini dan kami akan merespons dalam 24 jam.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-amber-900">Nama</label>
                      <Input placeholder="Nama Anda" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-amber-900">Email</label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-amber-900">Subjek</label>
                    <Input placeholder="Subjek pesan" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-amber-900">Pesan</label>
                    <Textarea placeholder="Tulis pesan Anda di sini..." rows={5} />
                  </div>
                  <Button className="w-full bg-amber-800 hover:bg-amber-700">Kirim Pesan</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-8 w-8" />
                <span className="text-2xl font-bold">KopiKita</span>
              </div>
              <p className="text-amber-200 mb-4">
                Menghadirkan cita rasa autentik kopi Nusantara dengan kualitas premium dan komitmen pada keberlanjutan.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-amber-200 hover:text-white">
                  Facebook
                </Button>
                <Button size="sm" variant="ghost" className="text-amber-200 hover:text-white">
                  Instagram
                </Button>
                <Button size="sm" variant="ghost" className="text-amber-200 hover:text-white">
                  Twitter
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-amber-200">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    Tentang Kopi
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                    Produk
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("stories")} className="hover:text-white transition-colors">
                    Cerita Kami
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-amber-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Arabika Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Robusta Tradisional
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blend Nusantara
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Langganan Bulanan
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-amber-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Panduan Brewing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2025 Bian Albaihaqi. Semua hak cipta dilindungi. Dibuat dengan ❤️ untuk pecinta kopi Indonesia.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-800 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

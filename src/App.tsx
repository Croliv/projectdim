import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Grid, Instagram, Phone, Mail, MapPin, X, Star, Calendar, Maximize2, Award, PenTool as Tool, Clock } from 'lucide-react';

const featuredImages = [
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    title: "Banheiro Contemporâneo",
    description: "Revestimento completo com porcelanato acetinado"
  },
  {
    url: "https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?w=800&q=80",
    title: "Cozinha Moderna",
    description: "Mosaico geométrico em tons neutros"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1676968003446-f37c64e34cb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mosaico Artístico",
    description: "Composição exclusiva para área gourmet"
  },
  {
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    title: "Design Minimalista",
    description: "Revestimento clean para ambiente corporativo"
  },
  {
    url: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80",
    title: "Padrões Decorativos",
    description: "Azulejos portugueses para área externa"
  }
];

const projectGallery = [
  {
    category: "Banheiros",
    description: "Transformações completas em banheiros residenciais e comerciais",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
        title: "Banheiro Spa",
        details: "Porcelanato 60x120cm | Execução em 5 dias"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1673119370210-1be6dc6e8850?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Suíte Master",
        details: "Revestimento 3D | Execução em 7 dias"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
        title: "Lavabo Moderno",
        details: "Mosaico Hexagonal | Execução em 3 dias"
      }
    ]
  },
  {
    category: "Cozinhas",
    description: "Ambientes funcionais com personalidade única",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
        title: "Cozinha Gourmet",
        details: "Revestimento 30x90cm | Execução em 6 dias"
      },
      {
        url: "https://images.unsplash.com/photo-1556909172-8c2f041fca1e?w=600&q=80",
        title: "Cozinha Industrial",
        details: "Porcelanato Técnico | Execução em 8 dias"
      },
      {
        url: "https://images.unsplash.com/photo-1599083549933-838ea352c1cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXp1bGVpam8lMjBjb3ppbmhhfGVufDB8fDB8fHww",
        title: "Área Gourmet",
        details: "Mosaico Decorativo | Execução em 4 dias"
      }
    ]
  },
  {
    category: "Áreas Externas",
    description: "Revestimentos resistentes e decorativos para áreas abertas",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1663129812059-5eabafd74ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXp1bGVpam8lMjBjYWwlQzMlQTdhZGF8ZW58MHx8MHx8fDA%3D",
        title: "Piscina",
        details: "Pastilhas de Vidro | Execução em 10 dias"
      },
      {
        url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
        title: "Jardim",
        details: "Porcelanato Antiderrapante | Execução em 5 dias"
      },
      {
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
        title: "Varanda",
        details: "Cerâmica Especial | Execução em 4 dias"
      }
    ]
  }
];

const testimonials = [
  {
    name: "Veggeto",
    role: "Proprietário Residencial",
    comment: "Trabalho impecável! Transformou completamente nosso banheiro com atenção aos detalhes.",
    rating: 5,
    date: "Janeiro 2024"
  },
  {
    name: "BlacksSama",
    role: "Gerente Comercial",
    comment: "Profissionalismo e pontualidade. O resultado superou nossas expectativas.",
    rating: 5,
    date: "Fevereiro 2024"
  },
  {
    name: "Felipinho",
    role: "Arquiteto",
    comment: "Execução perfeita do projeto. Recomendo para trabalhos que exigem precisão.",
    rating: 5,
    date: "Março 2024"
  }
];

const professionalBio = {
  name: "Velhote",
  title: "Especialista em Revestimentos",
  photo: "https://plus.unsplash.com/premium_photo-1672297543351-17987c5c9361?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZW0lMjBpZG9zb3xlbnwwfHwwfHx8MA%3D%3D",
  experience: "15 anos",
  specialties: ["Porcelanatos", "Mosaicos", "Revestimentos 3D", "Áreas Externas"],
  certifications: ["SENAI - Técnico em Revestimentos", "ABR - Especialista em Porcelanatos"],
  bio: "Com mais de 15 anos de experiência no mercado, Dim é reconhecido por sua excelência técnica e olhar artístico apurado. Especializado em revestimentos externos, desenvolveu técnicas próprias para garantir durabilidade e beleza em projetos expostos às intempéries. Sua paixão por transformar espaços através de revestimentos únicos o tornou referência no setor, com mais de 500 projetos executados em sua carreira."
};

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumImages, setAlbumImages] = useState(featuredImages);
  const [currentAlbumImage, setCurrentAlbumImage] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % featuredImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (selectedAlbum) {
      setAlbumImages(projectGallery.find(cat => cat.category === selectedAlbum).images);
      setCurrentAlbumImage(0);
    } else {
      setAlbumImages(featuredImages);
      setCurrentAlbumImage(0);
    }
  }, [selectedAlbum]);

  const nextImage = () => {
    if (selectedAlbum) {
      setCurrentAlbumImage((prev) => (prev + 1) % albumImages.length);
    } else {
      setCurrentImage((prev) => (prev + 1) % featuredImages.length);
    }
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    if (selectedAlbum) {
      setCurrentAlbumImage((prev) => (prev - 1 + albumImages.length) % albumImages.length);
    } else {
      setCurrentImage((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
    }
    setIsAutoPlaying(false);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Arte em Azulejos</h1>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfólio</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Depoimentos</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contato</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-6 h-6" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col">
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedAlbum || "Destaques"}
                </h2>
                <div className="hidden md:flex items-center space-x-4">
                  {[null, ...projectGallery.map(cat => cat.category)].map((albumName, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAlbum(albumName)}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        (selectedAlbum === albumName || (!selectedAlbum && albumName === null))
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {albumName === null ? 'Destaques' : albumName}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                {selectedAlbum 
                  ? projectGallery.find(cat => cat.category === selectedAlbum)?.description
                  : "Nossa seleção especial de trabalhos em destaque"}
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-4xl mx-auto">
              <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={selectedAlbum ? albumImages[currentAlbumImage].url : featuredImages[currentImage].url}
                  alt={selectedAlbum ? albumImages[currentAlbumImage].title : featuredImages[currentImage].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedAlbum ? albumImages[currentAlbumImage].title : featuredImages[currentImage].title}
                  </h2>
                  <p className="text-sm opacity-90">
                    {selectedAlbum ? albumImages[currentAlbumImage].details : featuredImages[currentImage].description}
                  </p>
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                <button
                  onClick={() => openImageModal(selectedAlbum ? albumImages[currentAlbumImage] : featuredImages[currentImage])}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <Maximize2 className="w-5 h-5 text-gray-800" />
                </button>
              </div>

              <div className="hidden md:grid grid-cols-5 gap-4">
                {albumImages.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (selectedAlbum) {
                        setCurrentAlbumImage(idx);
                      } else {
                        setCurrentImage(idx);
                      }
                      setIsAutoPlaying(false);
                    }}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                      (selectedAlbum ? currentAlbumImage : currentImage) === idx 
                        ? 'ring-2 ring-gray-900 ring-offset-2' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Preview ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {(selectedAlbum ? currentAlbumImage : currentImage) === idx && (
                      <div className="absolute inset-0 bg-white/10" />
                    )}
                  </button>
                ))}
              </div>

              <div className="md:hidden">
                <select
                  value={selectedAlbum || ""}
                  onChange={(e) => setSelectedAlbum(e.target.value || null)}
                  className="w-full p-2 mb-4 rounded-lg border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                >
                  <option value="">Destaques</option>
                  {projectGallery.map((category, idx) => (
                    <option key={idx} value={category.category}>
                      {category.category}
                    </option>
                  ))}
                </select>

                <div className="flex justify-center space-x-2">
                  {albumImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (selectedAlbum) {
                          setCurrentAlbumImage(idx);
                        } else {
                          setCurrentImage(idx);
                        }
                        setIsAutoPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        (selectedAlbum ? currentAlbumImage : currentImage) === idx 
                          ? 'bg-gray-900 w-4' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "all"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>
          {projectGallery.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {projectGallery
          .filter(category => activeCategory === "all" || activeCategory === category.category)
          .map((category, idx) => (
          <div key={idx} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.category}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.images.map((image, imageIdx) => (
                <div
                  key={imageIdx}
                  className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => openImageModal(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {category.category === "Áreas Externas" && (
              <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-full">
                      <img
                        src={professionalBio.photo}
                        alt={professionalBio.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{professionalBio.name}</h3>
                      <p className="text-gray-600 font-medium">{professionalBio.title}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">{professionalBio.experience} de experiência</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Tool className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">{professionalBio.specialties.length} especialidades</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">{professionalBio.certifications.length} certificações</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {professionalBio.bio}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Especialidades</h4>
                        <div className="flex flex-wrap gap-2">
                          {professionalBio.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Certificações</h4>
                        <div className="flex flex-wrap gap-2">
                          {professionalBio.certifications.map((cert, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div id="testimonials" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-gray-600">Transforme seu ambiente com nossa expertise em revestimentos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="tel:+5511999999999" className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Phone className="w-6 h-6 text-gray-600 mr-3" />
              <span className="text-gray-800">(11) 99999-9999</span>
            </a>
            <a href="mailto:contato@arteazulejos.com" className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-6 h-6 text-gray-600 mr-3" />
              <span className="text-gray-800">contato@arteazulejos.com</span>
            </a>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-6 h-6 text-gray-600 mr-3" />
              <span className="text-gray-800">São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Arte em Azulejos. Todos os direitos reservados.</p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            {selectedImage.title && (
              <div className="mt-4 text-white">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description || selectedImage.details}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
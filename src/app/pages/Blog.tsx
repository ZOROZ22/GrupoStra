import { Link } from "react-router";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { BLOG_POSTS } from "../data/catalog";
import { Button } from "../components/ui/button";

export default function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-stra-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-stra-teal/10 mix-blend-overlay" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Novidades & Stra Academy</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Notícias, eventos, inovações tecnológicas e treinamentos em saúde.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Grid */}
          <div className="lg:col-span-2 space-y-12">
            {BLOG_POSTS.map((post, i) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col sm:flex-row">
                <div className="sm:w-2/5 shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden bg-gray-100">
                  <img src={post.image} alt={post.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="size-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1 text-stra-teal"><Tag className="size-3.5" /> {i % 2 === 0 ? "Notícias" : "Institucional"}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stra-navy mb-4 leading-snug group-hover:text-stra-teal transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    Fique por dentro das atualizações e saiba mais sobre as inovações que o Grupo Stra tem levado para o mercado da saúde em todo o Brasil.
                  </p>
                  <Link to={`/blog/${post.id}`} className="mt-auto">
                    <Button variant="outline" className="border-gray-200 text-stra-navy hover:border-stra-teal hover:text-stra-teal gap-2 rounded-xl">
                      Ler artigo completo <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-stra-navy mb-6">Categorias</h3>
              <ul className="space-y-3">
                {["Lançamentos", "Eventos e Feiras", "Treinamentos", "Artigos Científicos", "Institucional"].map((c) => (
                  <li key={c}>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-stra-teal font-medium">
                      <span>{c}</span>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-md">{(Math.random() * 10 + 2).toFixed(0)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stra-teal rounded-3xl p-8 text-white shadow-lg text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Assine nossa Newsletter</h3>
              <p className="text-white/90 mb-6 relative z-10">Receba atualizações do mercado da saúde e convites para eventos exclusivos.</p>
              <div className="flex flex-col gap-3 relative z-10">
                <input type="email" placeholder="Seu e-mail corporativo" className="h-12 rounded-xl px-4 text-gray-900 outline-none" />
                <Button className="h-12 rounded-xl bg-stra-navy hover:bg-stra-navy/90 text-white font-bold w-full">Assinar</Button>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

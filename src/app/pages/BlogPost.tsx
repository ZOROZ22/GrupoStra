import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { BLOG_POSTS } from "../data/catalog";
import { Button } from "../components/ui/button";

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === Number(id)) || BLOG_POSTS[0];
  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-white pb-24">
      {/* Hero Header */}
      <div className="max-w-[1000px] mx-auto px-4 pt-12 pb-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-stra-teal font-medium mb-8 transition-colors">
          <ArrowLeft className="size-4" /> Voltar para o Blog
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-6">
          <span className="flex items-center gap-1.5"><Calendar className="size-4 text-stra-teal" /> {post.date}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="text-stra-teal">Notícias Grupo Stra</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stra-navy leading-tight mb-8">
          {post.title}
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mb-16">
        <div className="aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
          <img src={post.image} alt={post.title} className="size-full object-cover" />
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 grid lg:grid-cols-[1fr_240px] gap-12">
        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-stra-navy prose-a:text-stra-teal">
          <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
            O Grupo Stra continua inovando e trazendo as melhores tecnologias para o mercado de saúde brasileiro. Acompanhe nossas últimas atualizações e entenda como estamos transformando a rotina de hospitais, clínicas e laboratórios.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Acreditamos que a tecnologia deve ser uma aliada do profissional de saúde, simplificando processos complexos e garantindo precisão nos resultados. Nosso foco é oferecer não apenas equipamentos, mas soluções completas que incluem capacitação, suporte técnico ágil e suprimento contínuo.
          </p>
          <h3 className="text-2xl font-bold text-stra-navy mt-10 mb-4">Inovação a favor da vida</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Investimos em pesquisa e na curadoria das melhores marcas globais para trazer ao Brasil o que há de mais moderno. Desde plataformas moleculares point-of-care até sistemas automatizados de citologia, nosso portfólio é construído pensando na realidade do mercado nacional.
          </p>
          <div className="bg-gray-50 border-l-4 border-stra-teal p-6 rounded-r-xl my-10 italic text-gray-700 font-medium">
            "Nosso compromisso é entregar saúde e bem estar em todo Brasil valorizando o capital humano. Desafio é o que nos move."
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Para conhecer mais sobre as tecnologias apresentadas neste artigo, visite nosso catálogo online ou agende uma demonstração com nossos especialistas. A equipe do Grupo Stra está sempre pronta para entender a sua necessidade e propor a melhor solução.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="sticky top-28">
            <h4 className="font-bold text-stra-navy mb-4 flex items-center gap-2">
              <Share2 className="size-4 text-stra-teal" /> Compartilhar
            </h4>
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="justify-start gap-3 border-gray-200 text-gray-600 hover:text-[#0A66C2]">
                <Linkedin className="size-4" /> LinkedIn
              </Button>
              <Button variant="outline" className="justify-start gap-3 border-gray-200 text-gray-600 hover:text-[#1877F2]">
                <Facebook className="size-4" /> Facebook
              </Button>
              <Button variant="outline" className="justify-start gap-3 border-gray-200 text-gray-600 hover:text-[#1DA1F2]">
                <Twitter className="size-4" /> Twitter
              </Button>
            </div>
          </div>
        </aside>
      </div>

      {/* Read More */}
      <div className="bg-gray-50 py-20 mt-20 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <h3 className="text-3xl font-bold text-stra-navy mb-10 text-center">Leia Também</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.id} to={`/blog/${p.id}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img src={p.image} alt={p.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-stra-teal mb-3">{p.date}</p>
                  <h4 className="text-lg font-bold text-stra-navy leading-snug group-hover:text-stra-teal transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
